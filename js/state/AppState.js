// js/state/AppState.js

class AppState {
    constructor() {
        this.currentCharacters = [];
        this.availablePlayerNames = [];
        this.assignedPlayerMap = new Map();
        this.hostName = "";
        this.honoreeNames = [];
        this.eventDateValue = "";
        // Add other state variables as needed
    }

    initializeFreshSetupState(domElements, addHonoreeInputFn, generatePlayerNameInputsFn) {
        if (!domElements['setup-section'] || !domElements['main-content-area'] ||
            !domElements['player-count'] || !domElements['player-names-grid-container']) {
            console.error("Cannot initialize fresh setup state, core elements missing.");
            return;
        }

        domElements['setup-section'].style.display = 'block';
        domElements['main-content-area'].classList.add('hidden-section');
        domElements['main-content-area'].classList.remove('visible-section');
        if(domElements['player-count-error']) domElements['player-count-error'].style.display = 'none';

        if(domElements['female-characters-grid']) domElements['female-characters-grid'].innerHTML = '';
        if(domElements['male-characters-grid']) domElements['male-characters-grid'].innerHTML = '';
        if (domElements['assignment-table-body']) domElements['assignment-table-body'].innerHTML = '';

        this.currentCharacters = [];
        this.availablePlayerNames = [];
        this.assignedPlayerMap.clear();

        if(domElements['host-name-input']) domElements['host-name-input'].value = this.hostName; else this.hostName = "";

        if(domElements['has-honoree-checkbox']) {
            domElements['has-honoree-checkbox'].checked = this.honoreeNames.length > 0;
            const event = new Event('change');
            domElements['has-honoree-checkbox'].dispatchEvent(event);
             if (this.honoreeNames.length > 0 && domElements['honorees-container']) {
                domElements['honorees-container'].innerHTML = '';
                this.honoreeNames.forEach(name => addHonoreeInputFn(name)); // Call passed-in function
             }
        } else {
            this.honoreeNames = [];
            if(domElements['honorees-container']) domElements['honorees-container'].innerHTML = '';
            if(domElements['add-honoree-btn']) domElements['add-honoree-btn'].style.display = 'none';
        }

        domElements['player-count'].value = domElements['player-count'].value || "8";

        const existingNames = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'))
                                   .map(input => input.value.trim())
                                   .filter(name => name);

        generatePlayerNameInputsFn(parseInt(domElements['player-count'].value), existingNames); // Call passed-in function
    }

    getGenderedInterpretationText(level, gender) {
        const firstLetter = level ? level[0].toUpperCase() : "U";
        let baseWord;

        switch (firstLetter) {
            case "E": baseWord = "Extrovertid"; break;
            case "I": baseWord = "Introvertid"; break;
            case "N": baseWord = "Camaleónic"; break;
            default:  return "Indefinido";
        }
        const suffix = (gender && gender.toUpperCase() === "F") ? "a" : "o";
        return baseWord + suffix;
    }

    getFormattedEventDate(dateStr) {
        if (!dateStr) return '';
        // If dateStr is already this.eventDateValue, use this.eventDateValue directly
        const actualDateStr = dateStr === this.eventDateValue ? this.eventDateValue : dateStr;
        if (!actualDateStr) return '';
        const date = new Date(actualDateStr + 'T00:00:00');
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    isDesktop() {
        return !/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    }

    checkCompletionState(domElements) {
        const banner = domElements['completion-banner'];
        if (!banner) return;

        const totalCharacters = this.currentCharacters.length;
        const assignedCharacters = this.assignedPlayerMap.size;

        this.updateAssignmentProgress(domElements, totalCharacters, assignedCharacters);

        if (totalCharacters > 0 && assignedCharacters === totalCharacters) {
            const alreadyVisible = banner.classList.contains('visible');
            if (!alreadyVisible) {
                this.populateAndShowCompletionBanner(domElements);
                setTimeout(() => {
                    banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 250);
            }
        } else {
            banner.classList.remove('visible');
        }
    }

    updateAssignmentProgress(domElements, totalCharacters, assignedCharacters) {
        const progressEl = domElements['assignment-progress'];
        if (!progressEl) return;

        const textEl = progressEl.querySelector('.progress-text');
        const fillEl = progressEl.querySelector('.progress-bar-fill');

        if (textEl) {
            textEl.textContent = `${assignedCharacters} / ${totalCharacters}`;
        }
        if (fillEl) {
            const percent = totalCharacters > 0 ? (assignedCharacters / totalCharacters) * 100 : 0;
            fillEl.style.width = `${percent}%`;
        }

        if (assignedCharacters === totalCharacters && totalCharacters > 0) {
            progressEl.style.display = 'none';
        } else {
            progressEl.style.display = totalCharacters > 0 ? 'block' : 'none';
        }
    }

   populateAndShowCompletionBanner(domElements) {
       const banner = domElements['completion-banner'];
       if (!banner) return;

        const progressEl = domElements['assignment-progress'];
        if (progressEl) {
            progressEl.style.display = 'none';
        }

        document.getElementById('completion-host-name').textContent = this.hostName || 'No especificado';
        document.getElementById('completion-event-date').textContent = this.getFormattedEventDate(this.eventDateValue) || 'Fecha no especificada';
        document.getElementById('completion-suspect-count').textContent = `${this.currentCharacters.length} individuos`;

        const honoreesRow = document.getElementById('completion-honorees-row');
        if (this.honoreeNames.length > 0) {
            document.getElementById('completion-honoree-names').textContent = this.honoreeNames.join(', ');
            honoreesRow.style.display = 'flex';
        } else {
            honoreesRow.style.display = 'none';
        }

        const evidenceCardsContainer = document.getElementById('completion-evidence-cards');
        evidenceCardsContainer.innerHTML = '';

        this.currentCharacters.forEach(character => {
            const player = this.assignedPlayerMap.get(character.name) || 'Sin asignar';
            const cleanPlayerName = player.replace(/🎩|🌟/g, '').trim();

            const card = document.createElement('div');
            card.className = 'evidence-card assigned';

            const personalityText = this.getGenderedInterpretationText(character.interpretationLevel, character.gender);
            const emojiMap = {'Extrovertido': '🔥', 'Extrovertida': '🔥', 'Introvertido': '🙈', 'Introvertida': '🙈', 'Camaleónico': '🎭', 'Camaleónica': '🎭'};
            const personalityEmoji = emojiMap[personalityText] || '❔';

            card.innerHTML = `
                <div class="evidence-card-content">
                    <h4>${character.name}</h4>
                    <p>Asignado a: ${cleanPlayerName}</p>
                    <p style="font-size: 0.8em; margin-top: 5px;">${personalityEmoji} ${personalityText}</p>
                </div>
            `;
            evidenceCardsContainer.appendChild(card);
        });

        banner.classList.add('visible');

        const typewriterEl = document.getElementById('completion-message');
        if(typewriterEl) {
             typewriterEl.style.animation = 'none';
             void typewriterEl.offsetWidth;
             typewriterEl.style.animation = 'typing 2s steps(40, end) 1.8s both';
        }
    }
}

export default new AppState();

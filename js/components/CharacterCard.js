// js/components/CharacterCard.js
import AppState from '../state/AppState.js';
import { specialIconDetails, comboIconDetails } from '../config.js';

export class CharacterCard {
    constructor(character, availablePlayerNamesGetter, showToastNotificationCallback, openShareMenuCallback, checkCompletionStateCallback, updateAllPlayerSelectsCallback) {
        this.character = character;
        this.availablePlayerNamesGetter = availablePlayerNamesGetter;
        this.showToastNotification = showToastNotificationCallback;
        this.openShareMenu = openShareMenuCallback;
        this.checkCompletionState = checkCompletionStateCallback;
        this.updateAllPlayerSelects = updateAllPlayerSelectsCallback;
        this.domElement = null;
        this.activePopoverElements = null; // Card-specific popover state
    }

    render() {
        const frame = document.createElement('div');
        frame.classList.add('character-frame');
        frame.classList.add('deal-animation');

        frame.dataset.charnameForMandatory = this.character.name;
        const charId = this.character.name.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
        const imageClass = `character-portrait-image ${this.character.preferCenterImage ? 'img-position-center' : ''}`;
        const imageHtml = this.character.imageUrl ? `<img src="${this.character.imageUrl}" alt="${this.character.name}" class="${imageClass}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : '';
        const placeholderHtml = `<div class="character-portrait-image-placeholder" style="${this.character.imageUrl ? 'display:none;' : 'display:flex;' }"><i class="fas fa-user-secret fa-3x"></i><p>Retrato</p></div>`;
        const shareButtonHtml = `
<div class="character-card-actions">
<button class="copy-char-btn-frame">
  <img src="Fotos_Personajes/whatapp-logo.WEBP" alt="WhatsApp" />
  Compartir por WhatsApp
</button>
</div>`;
        const nameHtml = `<h4>${this.character.name}</h4>`;

        frame.innerHTML = `${imageHtml}${placeholderHtml}<div class="character-portrait-content">${nameHtml}<div class="character-details-section"><p id="desc-${charId}" class="character-description">${this.character.description||'Descripción no disponible.'}</p></div><div class="character-details-section">${this._createExtroversionLevelElement(charId)}</div>${this._createPlayerAssignmentElement(charId)}${shareButtonHtml}</div>`;

        this.domElement = frame;
        this._attachEventListeners(charId); // Attach event listeners after DOM is ready
        return frame;
    }

    _getExtroversionPill(level, gender) {
        const map = {"E":"🔥","I":"🙈","N":"🎭","U":"❔"};
        const cls = {"E":"extroversion-Extrovertido","I":"extroversion-Introvertido","N":"extroversion-Neutro","U":"extroversion-Indefinido"};
        const key = (level && map[level[0].toUpperCase()]) ? level[0].toUpperCase() : "U";
        let fullTextDisplay;
        if (key === "U") {
            fullTextDisplay = "N/D";
        } else {
            fullTextDisplay = AppState.getGenderedInterpretationText(level, gender);
        }
        return `<span class='extroversion-pill ${cls[key]}'>${map[key]} <strong>${fullTextDisplay.toUpperCase()}</strong></span>`;
    }

    _createPlayerAssignmentElement(id) {
        const availableNames = this.availablePlayerNamesGetter();
        return availableNames.length > 0 ? `<select class="player-assignment-select" id="player-${id}" data-charname="${this.character.name}"><option value="">-- Seleccionar --</option></select>` : `<input type="text" class="player-assignment-input" id="player-${id}" data-charname="${this.character.name}" placeholder="Nombre jugador/a">`;
    }

    _createExtroversionLevelElement(id) {
        const infoIconActivator = `<i class="fas fa-info-circle special-icon-fa"></i>`;
        let iconsHTML = "";
        let popoverDetails = null;
        let decorativeEmojis = "";
        let popoverDataType = "";

        if (this.character.isBirthdayFriendly && this.character.isSeniorFriendly) {
            popoverDetails = comboIconDetails.birthday_senior;
            decorativeEmojis = `🌟👵🏻`;
            popoverDataType = "combo-birthday-senior";
        } else if (this.character.isKidFriendly && this.character.isSeniorFriendly) {
            popoverDetails = comboIconDetails.kid_senior;
            decorativeEmojis = `🧸👵🏻`;
            popoverDataType = "combo-kid-senior";
        } else if (this.character.isBirthdayFriendly) {
            popoverDetails = specialIconDetails.isBirthdayFriendly;
            decorativeEmojis = `🌟`;
            popoverDataType = "single-birthday";
        } else if (this.character.isKidFriendly) {
            popoverDetails = specialIconDetails.isKidFriendly;
            decorativeEmojis = `🧸`;
            popoverDataType = "single-kid";
        } else if (this.character.isSeniorFriendly) {
            popoverDetails = specialIconDetails.isSeniorFriendly;
            decorativeEmojis = `👵🏻`;
            popoverDataType = "single-senior";
        }

        if (popoverDetails) {
            iconsHTML = `
                <div class="icono-info" data-icon-type="${popoverDataType}">
                    <span class="decorative-emoji">${decorativeEmojis}</span>
                    ${infoIconActivator}
                    <div class="popover-wrapper">
                        <div class="popover">
                            <div class="popover-header">
                                <h4 class="popover-title">${popoverDetails.title}</h4>
                            </div>
                            <div class="popover-body">
                                <p class="popover-text">${popoverDetails.text}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        return `<div class="extroversion-level-wrapper">
                    <div class="extroversion-level-container">${this._getExtroversionPill(this.character.interpretationLevel, this.character.gender)}</div>
                    <div class="card-icons-indicators">${iconsHTML}</div>
                </div>`;
    }

    _attachEventListeners(charId) {
        const playerIO = this.domElement.querySelector(`#player-${charId}`);
        if (playerIO) {
            playerIO.addEventListener(playerIO.tagName === 'SELECT' ? 'change' : 'input', (event) => this._handlePlayerAssignmentChange(event));
        }

        const cB = this.domElement.querySelector('.copy-char-btn-frame');
        if (cB) {
            cB.addEventListener('click', () => this._handleShareButtonClick());
        }

        const iconTriggers = this.domElement.querySelectorAll('.special-icon-fa');
        iconTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                this._togglePopover(trigger);
            });
        });

        // Add a click listener to the document to close THIS card's popover if a click happens outside.
        // This replaces the part of the global click listener in main.js that was responsible for closing popovers.
        // Note: This could lead to multiple document listeners if not managed carefully.
        // A more robust solution might involve a single global manager or event delegation on a common ancestor.
        // For this step, we'll keep it simple.
        document.addEventListener('click', (e) => {
            if (this.activePopoverElements && this.activePopoverElements.popoverEl) {
                const isClickInsidePopover = this.activePopoverElements.popoverEl.contains(e.target);
                const isClickOnTrigger = this.activePopoverElements.triggerEl && this.activePopoverElements.triggerEl.contains(e.target);
                const isClickInsideIconContainer = this.activePopoverElements.iconEl && this.activePopoverElements.iconEl.contains(e.target);

                if (!isClickInsidePopover && !isClickOnTrigger && !isClickInsideIconContainer) {
                    this._closePopover(); // Close only if click is outside this specific popover and its trigger
                }
            }
        });
         // Consider how to handle resize. A single global resize listener is often better.
        // For now, we'll move the adjustment logic and it can be called by a global listener if needed.
    }

    _handlePlayerAssignmentChange(event) {
        const currentSelectedPlayerName = event.target.value.trim();
        const characterName = event.target.dataset.charname; // Should be this.character.name
        const previousPlayerForThisChar = AppState.assignedPlayerMap.get(characterName);

        if (currentSelectedPlayerName) {
            let existingCharForThisPlayer = null;
            for (const [char, player] of AppState.assignedPlayerMap.entries()) {
                if (player === currentSelectedPlayerName && char !== characterName) {
                    existingCharForThisPlayer = char;
                    break;
                }
            }
            if (existingCharForThisPlayer) {
                this.showToastNotification(`"${currentSelectedPlayerName.replace("🎩","").replace("🌟","").trim()}" ya está asignado a "${existingCharForThisPlayer}".`, 'error');
                event.target.value = previousPlayerForThisChar || "";
                event.target.classList.toggle('assigned', !!previousPlayerForThisChar);
            } else {
                AppState.assignedPlayerMap.set(characterName, currentSelectedPlayerName);
                event.target.classList.add('assigned');
            }
        } else {
            AppState.assignedPlayerMap.delete(characterName);
            event.target.classList.remove('assigned');
        }
        this.updateAllPlayerSelects();
        this.checkCompletionState();
    }

    async _handleShareButtonClick() {
        const playerIO = this.domElement.querySelector(`#player-${this.character.name.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase()}`);
        const pA = (playerIO ? (playerIO.value.trim() || "[Nombre del Jugador]") : "[Nombre del Jugador]").replace("🎩","").replace("🌟","").trim();

        const d = this.character; // Simplified: character data is already in this.character
        if (d) {
            const txt = `¡Hola ${pA}!\n\nAquí tienes los detalles de tu sospechoso para el Cluedo en vivo “El Testamento de Mr. Collins”:\n\n🕵️ SOSPECHOSO: ${d.name}\n📜 DESCRIPCIÓN: ${d.description}\n\n🔗 Accede a tu ficha completa aquí: ${d.fichaLink||'N/A'}\n\n¡Recuerda que toda la información de la ficha es confidencial! 🤫`;
            const isiPhone = AppState.isDesktop() ? false : /iPhone/i.test(navigator.userAgent);
            if (isiPhone && navigator.share) {
                try {
                    await navigator.share({ title: `Sospechoso: ${d.name}`, text: txt });
                    this.showToastNotification('¡Detalles compartidos!', 'success');
                } catch (error) { console.error('Error al compartir:', error); }
            } else {
                const shareButton = this.domElement.querySelector('.copy-char-btn-frame');
                this.openShareMenu(shareButton, txt, d.name);
            }
        }
    }

    // Popover Methods
   _adjustPopoverPosition(iconTriggerElement, popoverWrapper, popover) {
        const iconContainer = iconTriggerElement.closest('.icono-info');
        if (!iconContainer || !popoverWrapper || !popover || !this.domElement) return;

        const iconContainerRect = iconContainer.getBoundingClientRect();
        const frameRect = this.domElement.getBoundingClientRect(); // Use this.domElement
        const popoverHeight = popover.offsetHeight;
        const popoverWidth = popover.offsetWidth;
        const arrowAndGapHeight = 12;
        const popoverMarginFromControls = 5;

        if (popoverWidth === 0 || popoverHeight === 0) return;

        const currentPopoverWrapperRect = popoverWrapper.getBoundingClientRect();
        let boundaryCorrectionShiftPx = 0;
        if (currentPopoverWrapperRect.left < frameRect.left) {
            boundaryCorrectionShiftPx = frameRect.left - currentPopoverWrapperRect.left;
        } else if (currentPopoverWrapperRect.right > frameRect.right) {
            boundaryCorrectionShiftPx = frameRect.right - currentPopoverWrapperRect.right;
        }

        const visualNudgePx = -1.5;
        popoverWrapper.style.transform = `translateX(-50%) translateX(${boundaryCorrectionShiftPx + visualNudgePx}px)`;
        popover.classList.remove('popover-above');
        popoverWrapper.style.top = `calc(100% + ${arrowAndGapHeight}px)`;
        popoverWrapper.style.bottom = 'auto';

        const selectElement = this.domElement.querySelector('.player-assignment-select');
        let contentAreaBottomLimit = frameRect.bottom;
        if (selectElement) {
            const selectRect = selectElement.getBoundingClientRect();
            contentAreaBottomLimit = selectRect.top - popoverMarginFromControls;
        }
        contentAreaBottomLimit = Math.max(contentAreaBottomLimit, iconContainerRect.bottom + arrowAndGapHeight + 20);

        const popoverTopEdgeIfBelow = iconContainerRect.bottom + arrowAndGapHeight;
        const popoverBottomIfBelow = popoverTopEdgeIfBelow + popoverHeight;
        const popoverBottomEdgeIfAbove = iconContainerRect.top - arrowAndGapHeight;
        const popoverTopIfAbove = popoverBottomEdgeIfAbove - popoverHeight;

        const fitsNicelyBelow = popoverBottomIfBelow <= contentAreaBottomLimit;
        const fitsWithinFrameAbove = popoverTopIfAbove >= frameRect.top;

        if (!fitsNicelyBelow && fitsWithinFrameAbove) {
            popoverWrapper.style.top = 'auto';
            popoverWrapper.style.bottom = `calc(100% + ${arrowAndGapHeight}px)`;
            popover.classList.add('popover-above');
        }
    }

    _openPopover(iconTriggerElement) {
        const iconContainer = iconTriggerElement.closest('.icono-info');
        if (!iconContainer) return;

        // Close other popovers *on this card* if any (though typically only one per card)
        // Global closing of other cards' popovers needs a different mechanism if desired.
        if (this.activePopoverElements && this.activePopoverElements.iconEl !== iconContainer) {
            this._closePopover();
        }

        iconContainer.classList.add('active');
        this.domElement.classList.add('popover-active-frame');

        const popoverWrapper = iconContainer.querySelector('.popover-wrapper');
        const popover = iconContainer.querySelector('.popover');

        if (popoverWrapper && popover) {
            popover.classList.remove('popover-above');
            popoverWrapper.style.top = `calc(100% + 12px)`;
            popoverWrapper.style.bottom = 'auto';
            popoverWrapper.style.transform = 'translateX(-50%)';

            requestAnimationFrame(() => {
                this._adjustPopoverPosition(iconTriggerElement, popoverWrapper, popover);
                this.activePopoverElements = { iconEl: iconContainer, wrapper: popoverWrapper, popoverEl: popover, frameEl: this.domElement, triggerEl: iconTriggerElement };
            });
        }
    }

    _closePopover() {
        if (!this.activePopoverElements || !this.activePopoverElements.iconEl) return;

        const iconContainer = this.activePopoverElements.iconEl;
        if (!iconContainer.classList.contains('active')) return;

        iconContainer.classList.remove('active');
        this.domElement.classList.remove('popover-active-frame');

        const popoverWrapper = iconContainer.querySelector('.popover-wrapper');
        if (popoverWrapper) {
            popoverWrapper.style.transform = 'translateX(-50%)';
        }
        this.activePopoverElements = null;
    }

    _togglePopover(iconTriggerElement) {
        const iconContainer = iconTriggerElement.closest('.icono-info');
        if (!iconContainer) return;
        if (iconContainer.classList.contains('active')) {
            this._closePopover();
        } else {
            this._openPopover(iconTriggerElement);
        }
    }
}

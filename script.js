// 👉👉 INICIO BLOQUE 1: CONFIGURACIÓN Y DATOS MAESTROS 👈👈

const allCharacters_data = [
    { name: "La Viuda", gender: "F", interpretationLevel: "Extrovertido", isBirthdayFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/the-widow/", description: "Elegante pero dramática, figura central tras la tragedia.", imageUrl: "Fotos_Personajes/VIUDA_WIDOW.webp" },
    { name: "La Sobrina", gender: "F", interpretationLevel: "Neutro", fichaLink: "https://123actionbarcelona.com/englishyes/SOBRINA/", description: "Joven aparentemente dulce y encantadora.", imageUrl: "Fotos_Personajes/LILLY_ROSE.webp" },
    { name: "La Cocinera", gender: "F", interpretationLevel: "Neutro", fichaLink: "https://123actionbarcelona.com/englishyes/coninera/", description: "De carácter fuerte, intenso y alegre", imageUrl: "Fotos_Personajes/COCINERA_COOK.webp" },
    { name: "El Ama de Llaves", gender: "F", interpretationLevel: "Neutro", isBirthdayFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/amadellaves/", description: "Recta y eficiente, jefa del servicio", imageUrl: "Fotos_Personajes/AMA_DE_LLAVES.webp" },
    { name: "La Doncella", gender: "F", interpretationLevel: "Introvertido", isKidFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/ladoncella/", description: "Discreta y atenta, a menudo invisible pero siempre presente.", imageUrl: "Fotos_Personajes/DONCELLA_THE_MAID.webp" },
    { name: "La Hermana", gender: "F", interpretationLevel: "Extrovertido", preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/hermana/", description: "Explosiva, con fuertes opiniones y actitud altiva.", imageUrl: "Fotos_Personajes/LA_HERMANA_THE_SISTER.webp" },
    { name: "La Secretaria", gender: "F", interpretationLevel: "Neutro", fichaLink: "https://123actionbarcelona.com/englishyes/secretaria/", description: "Organizada y comprometida con el sufragio femenino", imageUrl: "Fotos_Personajes/LA_SECRETARIA.webp" },
    { name: "La Vecina 1", gender: "F", interpretationLevel: "Introvertido", isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
    { name: "La Vecina 2", gender: "F", interpretationLevel: "Introvertido", isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
    { name: "La Vecina 3", gender: "F", interpretationLevel: "Introvertido", isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
    { name: "La Vecina 4", gender: "F", interpretationLevel: "Introvertido", isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
    { name: "La Vecina 5", gender: "F", interpretationLevel: "Introvertido", isSeniorFriendly: true, preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/vecinas/", description: "Siempre al tanto de los chismes del vecindario.", imageUrl: "Fotos_Personajes/VECINAS.webp" },
    { name: "El Gestor", gender: "M", interpretationLevel: "Extrovertido", isBirthdayFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/gestoresp/", description: "Maneja la fortuna familiar y conoce sus entresijos.", imageUrl: "Fotos_Personajes/GESTOR_ACCOUNTANT.webp" },
    { name: "El Hijastro", gender: "M", interpretationLevel: "Extrovertido", fichaLink: "https://123actionbarcelona.com/englishyes/jeremy/", description: "Un joven militar de honor muy masculino.", imageUrl: "Fotos_Personajes/HIJASTRO_STEPSON.webp" },
    { name: "El Hermano", gender: "M", interpretationLevel: "Extrovertido", preferCenterImage: true, fichaLink: "https://123actionbarcelona.com/englishyes/henry/", description: "Carismático director de cine que solo piensa en el arte", imageUrl: "Fotos_Personajes/HERMANO_BROTHER.webp" },
    { name: "El Doctor", gender: "M", interpretationLevel: "Neutro", isBirthdayFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/doctoresp/", description: "Muy profesional aunque va de enterado", imageUrl: "Fotos_Personajes/DOCTOR.webp" },
    { name: "El Socio", gender: "M", interpretationLevel: "Introvertido", isKidFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/petersocio/", description: "Hombre de negocios con alta autoestima", imageUrl: "Fotos_Personajes/SOCIO.webp" },
    { name: "El Cuñado", gender: "M", interpretationLevel: "Neutro", fichaLink: "https://123actionbarcelona.com/englishyes/cunadoroy/", description: "Excéntrico, divertido y derrochador", imageUrl: "Fotos_Personajes/BROTHER_IN_LAW.webp" },
    { name: "El Gemelo 1", gender: "M", interpretationLevel: "Introvertido", isKidFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/losgemelos/", description: "Pequeño genio de carácter algo particular", imageUrl: "Fotos_Personajes/GEMELOS_TWINS.webp" },
    { name: "El Gemelo 2", gender: "M", interpretationLevel: "Introvertido", isKidFriendly: true, isSeniorFriendly: true, fichaLink: "https://123actionbarcelona.com/englishyes/losgemelos/", description: "Pequeño genio de carácter algo particular", imageUrl: "Fotos_Personajes/GEMELOS_TWINS.webp" }
];

const packs_data = {
    8:  ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor"],
    9:  ["La Viuda", "El Gestor", "La Sobrina", "El Hermano", "La Cocinera", "El Hijastro", "El Ama de Llaves", "El Doctor", "La Doncella"],
    10: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio"],
    11: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana"],
    12: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado"],
    13: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1"],
    14: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2"],
    15: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria"],
    16: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Vecina 1", "La Vecina 2"],
    17: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2"],
    18: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3"],
    19: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3", "La Vecina 4"],
    20: ["La Viuda", "El Gestor", "La Sobrina", "El Hijastro", "La Cocinera", "El Hermano", "El Ama de Llaves", "El Doctor", "La Doncella", "El Socio", "La Hermana", "El Cuñado", "El Gemelo 1", "El Gemelo 2", "La Secretaria", "La Vecina 1", "La Vecina 2", "La Vecina 3", "La Vecina 4", "La Vecina 5"]
};

const specialIconDetails = {
    isBirthdayFriendly: {
        title: '🌟 <strong>Rol principal</strong>',
        text: 'Permite que el homenajeado se luzca.'
    },
    isKidFriendly: {
        title: '🧸 <strong>Apto para menores</strong>',
        text: 'Fácil de entender y sin contenido +18.'
    },
    isSeniorFriendly: {
        title: '👵🏻 <strong>Personaje versátil</strong>',
        text: 'Compatible con personas mayores: trama clara y fácil de interpretar.'
    }
};

const comboIconDetails = {
    birthday_senior: {
        title: '🌟👵🏻 <strong>Personaje versátil</strong>',
        text: '<strong>Compatible con personas mayores:</strong> trama clara y fácil de interpretar, ideal para un papel destacado sin complicaciones.'
    },
    kid_senior: {
        title: '🧸👵🏻 <strong>Personaje versátil</strong>',
        text: 'Compatible tanto con <strong>jugadores jóvenes</strong> como con <strong>personas mayores</strong>.<br><br>Trama accesible, sin contenido +18 y fácil de interpretar para cualquier tipo de jugador.'
    }
};

// 👉👉 FIN BLOQUE 1: CONFIGURACIÓN Y DATOS MAESTROS 👈👈


// 👉👉 A PARTIR DE AQUÍ PEGAR EL BLOQUE 2: INICIALIZACIÓN Y GESTIÓN DEL ESTADO GLOBAL 👈👈
// �👉 INICIO BLOQUE 2: INICIALIZACIÓN Y GESTIÓN DEL ESTADO GLOBAL 👈👈

function getGenderedInterpretationText(level, gender) {
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

function triggerGoldenGlow(element) {
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log("Movimiento reducido preferido, omitiendo animación de brillo.");
        return;
    }

    element.classList.add('highlight-glow');
    setTimeout(() => {
        element.classList.remove('highlight-glow');
    }, 2000);
}

function getFormattedEventDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function isDesktop() {
    return !/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function initializeApp(initialChars, initialPacks) {
    const packs = initialPacks;

    try {
        const domElementIds = [
            'player-count', 'player-names-grid-container', 'start-assignment',
            'player-count-error', 'setup-section', 'main-content-area',
            'female-characters-grid', 'male-characters-grid',
            'back-to-setup-btn',
            'darkModeToggleBtn', 'darkModeToggleBtnSetup',
            'print-dashboard-btn-new', // <-- CAMBIO: Apuntamos al nuevo botón
            'detective-guide-section', 'guide-header-tab',
            'completion-banner',
            'toast-notification', 'toast-message',
            'host-name-input',
            'event-date-input',
            'has-honoree-checkbox', 'honorees-container', 'add-honoree-btn',
            'decrement-player-count', 'increment-player-count',
            'initial-report-target',
            'intro-line-1-heading',
            'assignment-progress'
        ];
        const domElements = {};
        let allElementsFound = true;
        domElementIds.forEach(id => {
            const element = document.getElementById(id);
            if (!element && id !== 'guide-header-tab' && id !== 'load-config-btn' && id !== 'print-dashboard-btn') {
                console.error(`ERROR DOM: ID '${id}' NO encontrado.`);
                allElementsFound = false;
            }
            else { domElements[id] = element; }
        });
        if (!allElementsFound) { console.error("ERROR FATAL: Elementos DOM esenciales no encontrados."); return; }

        const darkModeButtons = [
            domElements['darkModeToggleBtn'],
            domElements['darkModeToggleBtnSetup']
        ].filter(Boolean);

        function updateDarkModeVisuals() {
            const isDarkMode = document.documentElement.classList.contains('dark-mode');
            darkModeButtons.forEach(btn => {
                const toggleTextSpan = btn.querySelector('.toggle-text');
                const moonIcon = btn.querySelector('.fa-moon');
                const sunIcon = btn.querySelector('.fa-sun');
                if (toggleTextSpan) toggleTextSpan.textContent = isDarkMode ? 'Modo Día' : 'Modo Noche';
                if (moonIcon) moonIcon.style.display = isDarkMode ? 'none' : 'inline-block';
                if (sunIcon) sunIcon.style.display = isDarkMode ? 'inline-block' : 'none';
            });
        }

        darkModeButtons.forEach(btn => {
            btn.onclick = null;
            btn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark-mode');
                updateDarkModeVisuals();
            });
        });
        updateDarkModeVisuals();

        let currentCharacters = [];
        let availablePlayerNames = [];
        let assignedPlayerMap = new Map();
        let hostName = "";
        let honoreeNames = [];
        let eventDateValue = "";

        // La función addHonoreeInput se definirá en el Bloque 3, pero se llama desde aquí.
        if (domElements['has-honoree-checkbox']) {
            domElements['has-honoree-checkbox'].addEventListener('change', function() {
                const honoreesContainer = domElements['honorees-container'];
                const addBtn = domElements['add-honoree-btn'];
                if (this.checked) {
                    addBtn.style.display = 'inline-block';
                    if (honoreesContainer.children.length === 0) {
                        addHonoreeInput();
                    }
                } else {
                    addBtn.style.display = 'none';
                    honoreesContainer.innerHTML = '';
                }
                generatePlayerNameInputs(
                    parseInt(domElements['player-count'].value),
                    Array.from(domElements['player-names-grid-container']
                        .querySelectorAll('input.player-name-box:not([readonly])'))
                        .map(ip => ip.value),
                    false
                );
            });
        }
        if (domElements['add-honoree-btn']) {
            domElements['add-honoree-btn'].addEventListener('click', () => {
                addHonoreeInput();
            });
        }

         if (domElements['host-name-input']) {
            domElements['host-name-input'].addEventListener('blur', () => {
                 hostName = domElements['host-name-input'].value.trim();
                 generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                    Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                 );
            });
            domElements['host-name-input'].addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (domElements['has-honoree-checkbox']) {
                        domElements['has-honoree-checkbox'].focus();
                    } else if (domElements['event-date-input']) {
                        domElements['event-date-input'].focus();
                    } else {
                         const firstPlayerInput = domElements['player-names-grid-container'].querySelector('input.player-name-box:not([readonly])');
                        if (firstPlayerInput) {
                            firstPlayerInput.focus();
                        } else if (domElements['player-count']) {
                            domElements['player-count'].focus();
                        }
                    }
                }
            });
        }
        if (domElements['event-date-input']) {
            domElements['event-date-input'].addEventListener('change', () => {
                eventDateValue = domElements['event-date-input'].value;
            });
             domElements['event-date-input'].addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                     const hasHonoreeChecked = domElements['has-honoree-checkbox'] ? domElements['has-honoree-checkbox'].checked : false;
                    let nextFocusElement = null;

                    if (hasHonoreeChecked) {
                        nextFocusElement = domElements['honorees-container'].querySelector('.honoree-name-input');
                         if (!nextFocusElement && domElements['add-honoree-btn'] && domElements['add-honoree-btn'].style.display !== 'none') {
                            nextFocusElement = domElements['add-honoree-btn'];
                        }
                    }

                    if (!nextFocusElement) {
                        nextFocusElement = domElements['player-count'];
                    }


                    if (nextFocusElement) {
                        nextFocusElement.focus();
                    }
                }
            });
        }

        let toastTimeout; // La definición de showToastNotification estará en el bloque 3

        function initializeFreshSetupState() {
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

            currentCharacters = [];
            availablePlayerNames = [];
            assignedPlayerMap.clear();

            if(domElements['host-name-input']) domElements['host-name-input'].value = hostName; else hostName = "";

            if(domElements['has-honoree-checkbox']) {
                domElements['has-honoree-checkbox'].checked = honoreeNames.length > 0;
                const event = new Event('change');
                domElements['has-honoree-checkbox'].dispatchEvent(event);
                 if (honoreeNames.length > 0 && domElements['honorees-container']) {
                    domElements['honorees-container'].innerHTML = '';
                    honoreeNames.forEach(name => addHonoreeInput(name));
                 }
            } else {
                honoreeNames = [];
                if(domElements['honorees-container']) domElements['honorees-container'].innerHTML = '';
                if(domElements['add-honoree-btn']) domElements['add-honoree-btn'].style.display = 'none';
            }

            domElements['player-count'].value = domElements['player-count'].value || "8";

            const existingNames = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'))
                                       .map(input => input.value.trim())
                                       .filter(name => name);

            generatePlayerNameInputs(parseInt(domElements['player-count'].value), existingNames);
        }

        if(domElements['decrement-player-count'] && domElements['increment-player-count'] && domElements['player-count']) {
            domElements['decrement-player-count'].addEventListener('click', () => {
                let currentValue = parseInt(domElements['player-count'].value);
                const minValue = parseInt(domElements['player-count'].min);
                if (currentValue > minValue) {
                    domElements['player-count'].value = currentValue - 1;
                    domElements['player-count'].dispatchEvent(new Event('input', { bubbles: true }));
                }
            });

            domElements['increment-player-count'].addEventListener('click', () => {
                let currentValue = parseInt(domElements['player-count'].value);
                const maxValue = parseInt(domElements['player-count'].max);
                if (currentValue < maxValue) {
                    domElements['player-count'].value = currentValue + 1;
                    domElements['player-count'].dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
        }

        if(domElements['player-count']){domElements['player-count'].addEventListener('input',()=>{const c=parseInt(domElements['player-count'].value);const mn=parseInt(domElements['player-count'].min);const mx=parseInt(domElements['player-count'].max);if(c>=mn&&c<=mx){generatePlayerNameInputs(c, Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value));}else if(domElements['player-names-grid-container']&&domElements['player-names-grid-container'].innerHTML!==""&&(c<mn||c>mx)){if(c<mn&&c>=1)generatePlayerNameInputs(mn);else if(c>mx)generatePlayerNameInputs(mx);}});}

        // Las funciones de renderizado y acciones principales se definen en los siguientes bloques.
        // A continuación, se asocian los eventos a las funciones que se definirán más adelante.

        if(domElements['start-assignment'])domElements['start-assignment'].addEventListener('click',handleStartAssignment);
        if(domElements['back-to-setup-btn']) domElements['back-to-setup-btn'].addEventListener('click', handleBackToSetup);
        if (domElements['print-dashboard-btn-new']) { // <-- CAMBIO: Apuntamos al nuevo botón
            domElements['print-dashboard-btn-new'].addEventListener('click', async () => {
                // ... La lógica de esta función es extensa y se moverá al Bloque 4
            });
        }

// 👉👉 FIN BLOQUE 2: INICIALIZACIÓN Y GESTIÓN DEL ESTADO GLOBAL 👈👈


// 👉👉 A PARTIR DE AQUÍ PEGAR EL BLOQUE 3: RENDERIZADO DE UI Y COMPONENTES VISUALES 👈👈
// 👉👉 INICIO BLOQUE 3: RENDERIZADO DE UI Y COMPONENTES VISUALES 👈👈

        function addHonoreeInput(name = "") {
            const container = domElements['honorees-container'];
            const inputGroup = document.createElement('div');
            inputGroup.className = 'honoree-input-group';

            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.placeholder = `Nombre Homenajeado/a ${container.children.length + 1}`;
            newInput.className = 'player-name-box honoree-name-input';
            newInput.value = name;
            newInput.addEventListener('blur', () => {
                generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                    Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                );
            });
            newInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const allHonoreeInputs = Array.from(container.querySelectorAll('.honoree-name-input'));
                    const currentIndex = allHonoreeInputs.indexOf(this);
                    if (currentIndex > -1 && currentIndex < allHonoreeInputs.length - 1) {
                        allHonoreeInputs[currentIndex + 1].focus();
                    } else {
                        if (domElements['add-honoree-btn'] && domElements['add-honoree-btn'].style.display !== 'none') {
                            domElements['add-honoree-btn'].focus();
                        } else {
                            const firstPlayerInput = domElements['player-names-grid-container'].querySelector('input.player-name-box:not([readonly])');
                            if (firstPlayerInput) {
                                firstPlayerInput.focus();
                            }
                        }
                    }
                }
            });

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.className = 'remove-honoree-btn';
            removeBtn.onclick = function() {
                inputGroup.remove();
                generatePlayerNameInputs(parseInt(domElements['player-count'].value),
                    Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])')).map(ip => ip.value)
                );
            };

            inputGroup.appendChild(newInput);
            inputGroup.appendChild(removeBtn);
            container.appendChild(inputGroup);
        }

        function showToastNotification(message, type = 'info', duration = 3000) {
            const toast = domElements['toast-notification'];
            const messageSpan = domElements['toast-message'];
            const iconElement = toast.querySelector('.fas');

            if (!toast || !messageSpan || !iconElement) {
                console.warn("Toast elements not found, falling back to alert.");
                alert(`${type.toUpperCase()}: ${message}`);
                return;
            }
            messageSpan.textContent = message;
            toast.className = 'show';
            iconElement.className = 'fas';

            if (type === 'success') {
                toast.classList.add('success');
                iconElement.classList.add('fa-check-circle');
            } else if (type === 'error') {
                toast.classList.add('error');
                iconElement.classList.add('fa-times-circle');
            } else {
                toast.classList.add('info');
                iconElement.classList.add('fa-info-circle');
            }
            toast.classList.add('show');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }

        function generatePlayerNameInputs(count, existingPlayerNamesFromGrid = [], shouldFocus = true) {
            if (!domElements['player-names-grid-container']) { return; }

            const currentHostNameVal = domElements['host-name-input'] ? domElements['host-name-input'].value.trim() : "";
            const currentHonoreeInputs = domElements['honorees-container'] ? Array.from(domElements['honorees-container'].querySelectorAll('.honoree-name-input')) : [];
            const currentHonoreeCleanNamesArr = currentHonoreeInputs.map(input => input.value.trim()).filter(name => name);

            let preservedEditableNames = [];
            if (existingPlayerNamesFromGrid.length > 0) {
                let tempPreserved = [...existingPlayerNamesFromGrid];
                if (currentHostNameVal) tempPreserved = tempPreserved.filter(name => name !== (currentHostNameVal + " 🎩"));
                currentHonoreeCleanNamesArr.forEach(hName => {
                    tempPreserved = tempPreserved.filter(name => name !== (hName + " 🌟"));
                });
                preservedEditableNames = tempPreserved;
            } else if (domElements['player-names-grid-container'].children.length > 0) {
                preservedEditableNames = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'))
                                              .map(input => input.value.trim());
            }


            domElements['player-names-grid-container'].innerHTML = '';
            let playerBoxIndex = 0;
            let editableNamesIndex = 0;

            if (currentHostNameVal) {
                if (playerBoxIndex < count) {
                    const input = document.createElement('input');
                    input.type = 'text'; input.classList.add('player-name-box');
                    input.value = currentHostNameVal + " 🎩"; input.readOnly = true;
                    input.title = "Anfitrión/Host (configurado arriba)";
                    domElements['player-names-grid-container'].appendChild(input);
                    playerBoxIndex++;
                }
            }

            currentHonoreeCleanNamesArr.forEach(honoreeCleanName => {
                if (playerBoxIndex < count) {
                    const input = document.createElement('input');
                    input.type = 'text'; input.classList.add('player-name-box');
                    input.value = honoreeCleanName + " 🌟"; input.readOnly = true;
                    input.title = "Homenajeado/a (configurado arriba)";
                    domElements['player-names-grid-container'].appendChild(input);
                    playerBoxIndex++;
                }
            });

            for (let i = playerBoxIndex; i < count; i++) {
                const input = document.createElement('input');
                input.type = 'text'; input.classList.add('player-name-box');

                if (editableNamesIndex < preservedEditableNames.length) {
                    input.value = preservedEditableNames[editableNamesIndex];
                    editableNamesIndex++;
                } else {
                    input.value = '';
                }

                input.placeholder = `Jugador ${i + 1 - playerBoxIndex + (currentHostNameVal ? 1 : 0) + currentHonoreeCleanNamesArr.length}`;
                if (i === playerBoxIndex && !currentHostNameVal && currentHonoreeCleanNamesArr.length === 0) {
                     input.placeholder = "(Tu nombre como jugador)";
                }
                input.setAttribute('aria-label', input.placeholder);
                input.style.animationDelay = `${(i - playerBoxIndex) * 0.05}s`;
                domElements['player-names-grid-container'].appendChild(input);

                input.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        const allPlayerInputs = Array.from(domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])'));
                        const currentIndex = allPlayerInputs.indexOf(this);
                        if (currentIndex > -1 && currentIndex < allPlayerInputs.length - 1) {
                            allPlayerInputs[currentIndex + 1].focus();
                        } else if (currentIndex === allPlayerInputs.length - 1) {
                            if(domElements['start-assignment']) domElements['start-assignment'].focus();
                        }
                    }
                });
                 input.addEventListener('blur', () => {}); // Se deja el listener vacío por si se reintroduce lógica
                if (shouldFocus && i === playerBoxIndex && !input.value) {
                     setTimeout(() => input.focus(), 50);
                }
            }
        }

        function setupCharacterSelection(playerCount) {
            if (!domElements['female-characters-grid'] || !domElements['male-characters-grid'] || !domElements['player-count-error'] || !domElements['main-content-area']) { return; }
            domElements['female-characters-grid'].innerHTML = ''; domElements['male-characters-grid'].innerHTML = '';
            const charNames = packs[playerCount];
            if (!charNames) {
                showToastNotification(`Error interno cargando pack para ${playerCount}.`, 'error');
                domElements['main-content-area'].classList.remove('visible-section'); domElements['main-content-area'].classList.add('hidden-section'); return;
            }
            currentCharacters = charNames.map(name => {
                const oCharData = allCharacters_data.find(char => char.name === name);
                if (!oCharData) { console.warn(`Advertencia: No se encontraron datos para el personaje ${name} en allCharacters_data.`); return null; }
                return JSON.parse(JSON.stringify(oCharData));
            }).filter(Boolean);

            currentCharacters.forEach((char, i) => {
                const grid = char.gender === 'F' ? domElements['female-characters-grid'] : domElements['male-characters-grid'];
                if (grid) { renderCharacterCard(char, grid, i * 0.07); }
            });
        }

        function getExtroversionPill(level, gender) {
            const map = {"E":"🔥","I":"🙈","N":"🎭","U":"❔"};
            const cls = {"E":"extroversion-Extrovertido","I":"extroversion-Introvertido","N":"extroversion-Neutro","U":"extroversion-Indefinido"};
            const key = (level && map[level[0].toUpperCase()]) ? level[0].toUpperCase() : "U";
            let fullTextDisplay;
            if (key === "U") {
                fullTextDisplay = "N/D";
            } else {
                fullTextDisplay = getGenderedInterpretationText(level, gender);
            }
            return `<span class='extroversion-pill ${cls[key]}'>${map[key]} <strong>${fullTextDisplay.toUpperCase()}</strong></span>`;
        }

        function createPlayerAssignmentElement(char, id) {
            return availablePlayerNames.length > 0 ? `<select class="player-assignment-select" id="player-${id}" data-charname="${char.name}"><option value="">-- Seleccionar --</option></select>` : `<input type="text" class="player-assignment-input" id="player-${id}" data-charname="${char.name}" placeholder="Nombre jugador/a">`;
        }

        function createExtroversionLevelElement(char, id) {
            const infoIconActivator = `<i class="fas fa-info-circle special-icon-fa"></i>`;
            let iconsHTML = "";
            let popoverDetails = null;
            let decorativeEmojis = "";
            let popoverDataType = "";

            if (char.isBirthdayFriendly && char.isSeniorFriendly) {
                popoverDetails = comboIconDetails.birthday_senior;
                decorativeEmojis = `🌟👵🏻`;
                popoverDataType = "combo-birthday-senior";
            } else if (char.isKidFriendly && char.isSeniorFriendly) {
                popoverDetails = comboIconDetails.kid_senior;
                decorativeEmojis = `🧸👵🏻`;
                popoverDataType = "combo-kid-senior";
            } else if (char.isBirthdayFriendly) {
                popoverDetails = specialIconDetails.isBirthdayFriendly;
                decorativeEmojis = `🌟`;
                popoverDataType = "single-birthday";
            } else if (char.isKidFriendly) {
                popoverDetails = specialIconDetails.isKidFriendly;
                decorativeEmojis = `🧸`;
                popoverDataType = "single-kid";
            } else if (char.isSeniorFriendly) {
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
                        <div class="extroversion-level-container">${getExtroversionPill(char.interpretationLevel, char.gender)}</div>
                        <div class="card-icons-indicators">${iconsHTML}</div>
                    </div>`;
        }

        function renderCharacterCard(character, gridDiv, animationDelayValue) {
            const frame = document.createElement('div');
            frame.classList.add('character-frame');
            frame.classList.add('deal-animation');
            frame.style.animationDelay = `${animationDelayValue}s`;

            frame.dataset.charnameForMandatory = character.name;
            const charId = character.name.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
            const imageClass = `character-portrait-image ${character.preferCenterImage ? 'img-position-center' : ''}`;
            const imageHtml = character.imageUrl ? `<img src="${character.imageUrl}" alt="${character.name}" class="${imageClass}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : '';
            const placeholderHtml = `<div class="character-portrait-image-placeholder" style="${character.imageUrl ? 'display:none;' : 'display:flex;' }"><i class="fas fa-user-secret fa-3x"></i><p>Retrato</p></div>`;
            const shareButtonHtml = `
<div class="character-card-actions">
  <button class="copy-char-btn-frame">
    <img src="Fotos_Personajes/whatapp-logo.WEBP" alt="WhatsApp" />
    Compartir por WhatsApp
  </button>
</div>`;
            const nameHtml = `<h4>${character.name}</h4>`;
            frame.innerHTML = `${imageHtml}${placeholderHtml}<div class="character-portrait-content">${nameHtml}<div class="character-details-section"><p id="desc-${charId}" class="character-description">${character.description||'Descripción no disponible.'}</p></div><div class="character-details-section">${createExtroversionLevelElement(character, charId)}</div>${createPlayerAssignmentElement(character, charId)}${shareButtonHtml}</div>`;
            gridDiv.appendChild(frame);
            attachCardEventListeners(frame, character, charId);
        }

        function attachCardEventListeners(frame, character, charId) {
            const playerIO = frame.querySelector(`#player-${charId}`);
            if(playerIO){
                playerIO.addEventListener(playerIO.tagName==='SELECT'?'change':'input',function(){
                    const currentSelectedPlayerName=this.value.trim();
                    const characterName=this.dataset.charname;
                    const previousPlayerForThisChar=assignedPlayerMap.get(characterName);
                    
                    if(currentSelectedPlayerName){
                        let existingCharForThisPlayer=null;
                        for(const[char,player]of assignedPlayerMap.entries()){
                            if(player===currentSelectedPlayerName&&char!==characterName){
                                existingCharForThisPlayer=char;
                                break;
                            }
                        }
                        if(existingCharForThisPlayer){
                            showToastNotification(`"${currentSelectedPlayerName.replace("🎩","").replace("🌟","").trim()}" ya está asignado a "${existingCharForThisPlayer}".`, 'error');
                            this.value=previousPlayerForThisChar||"";
                            this.classList.toggle('assigned',!!previousPlayerForThisChar);
                        } else {
                            assignedPlayerMap.set(characterName,currentSelectedPlayerName);
                            this.classList.add('assigned');
                        }
                    } else {
                        assignedPlayerMap.delete(characterName);
                        this.classList.remove('assigned');
                    }
                    updateAllPlayerSelects();
                    checkCompletionState(); // <--- LLAMADA A LA NUEVA LÓGICA
                });
            }
            const cB=frame.querySelector('.copy-char-btn-frame');
            if(cB){cB.addEventListener('click', async ()=>{
                const d=currentCharacters.find(c=>c.name===character.name);
                const pA=(playerIO?(playerIO.value.trim()||"[Nombre del Jugador]"):"[Nombre del Jugador]").replace("🎩","").replace("🌟","").trim();
                if(d){
                    const txt = `¡Hola ${pA}!\n\nAquí tienes los detalles de tu sospechoso para el Cluedo en vivo “El Testamento de Mr. Collins”:\n\n🕵️ SOSPECHOSO: ${d.name}\n📜 DESCRIPCIÓN: ${d.description}\n\n🔗 Accede a tu ficha completa aquí: ${d.fichaLink||'N/A'}\n\n¡Recuerda que toda la información de la ficha es confidencial! 🤫`;
                    const isiPhone = /iPhone/i.test(navigator.userAgent);
                    if (isiPhone && navigator.share) {
                        try {
                            await navigator.share({ title: `Sospechoso: ${d.name}`, text: txt });
                            showToastNotification('¡Detalles compartidos!', 'success');
                        } catch (error) { console.error('Error al compartir:', error); }
                    } else {
                        openShareMenu(cB, txt, d.name);
                    }
                }
            });}
        }

        function updateAllPlayerSelects() {
             if(availablePlayerNames.length===0)return;
            document.querySelectorAll('.character-portrait-content select.player-assignment-select').forEach(sel=>{
                const charNameForThisSelect=sel.dataset.charname;

                let optionsHtml='<option value="">-- Seleccionar --</option>';
                availablePlayerNames.forEach(playerName=>{
                    let isPlayerAssignedElsewhereFlag=false;
                    for(const[assignedChar,assignedPlayer]of assignedPlayerMap.entries()){
                        if(assignedPlayer===playerName && assignedChar!==charNameForThisSelect){
                            isPlayerAssignedElsewhereFlag=true;
                            break;
                        }
                    }

                    let displayText = playerName;
                    if (playerName.includes("🎩")) {
                        displayText = playerName + " (Anfitrión)";
                    } else if (playerName.includes("🌟")) {
                        displayText = playerName + " (Homenajeado)";
                    }
                    optionsHtml += `<option value="${playerName}" ${isPlayerAssignedElsewhereFlag ? 'disabled' : ''}>${displayText}</option>`;
                });
                sel.innerHTML=optionsHtml;

                const playerActuallyAssignedToThisChar = assignedPlayerMap.get(charNameForThisSelect);
                if(playerActuallyAssignedToThisChar){
                    sel.value=playerActuallyAssignedToThisChar;
                    sel.classList.add('assigned');
                } else {
                    sel.value="";
                    sel.classList.remove('assigned');
                }
            });
        }


        // =========================================================
        // === CAMBIO: NUEVAS FUNCIONES PARA EL BANNER DE ÉXITO ===
        // =========================================================
        function checkCompletionState() {
            const banner = domElements['completion-banner'];
            if (!banner) return;

            const totalCharacters = currentCharacters.length;
            const assignedCharacters = assignedPlayerMap.size;

            updateAssignmentProgress(totalCharacters, assignedCharacters);
    
            if (totalCharacters > 0 && assignedCharacters === totalCharacters) {
                const alreadyVisible = banner.classList.contains('visible');
                if (!alreadyVisible) {
                    // Solo ejecutar si no estaba ya visible
                    populateAndShowCompletionBanner();
                    setTimeout(() => {
                        banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 250);
                }
            } else {
                banner.classList.remove('visible');
            }
        }

        function updateAssignmentProgress(totalCharacters, assignedCharacters) {
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

       function populateAndShowCompletionBanner() {
           const banner = domElements['completion-banner'];
           if (!banner) return;

            const progressEl = domElements['assignment-progress'];
            if (progressEl) {
                progressEl.style.display = 'none';
            }

            // Poblar detalles del informe
            document.getElementById('completion-host-name').textContent = hostName || 'No especificado';
            document.getElementById('completion-event-date').textContent = getFormattedEventDate(eventDateValue) || 'Fecha no especificada';
            document.getElementById('completion-suspect-count').textContent = `${currentCharacters.length} individuos`;
    
            const honoreesRow = document.getElementById('completion-honorees-row');
            if (honoreeNames.length > 0) {
                document.getElementById('completion-honoree-names').textContent = honoreeNames.join(', ');
                honoreesRow.style.display = 'flex';
            } else {
                honoreesRow.style.display = 'none';
            }
    
            // Generar tarjetas de evidencia
            const evidenceCardsContainer = document.getElementById('completion-evidence-cards');
            evidenceCardsContainer.innerHTML = ''; // Limpiar tarjetas anteriores
    
            currentCharacters.forEach(character => {
                const player = assignedPlayerMap.get(character.name) || 'Sin asignar';
                const cleanPlayerName = player.replace(/🎩|🌟/g, '').trim();
    
                const card = document.createElement('div');
                card.className = 'evidence-card assigned'; // 'assigned' activa la cinta en CSS
    
                const personalityText = getGenderedInterpretationText(character.interpretationLevel, character.gender);
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
    
            // Activar la animación del banner
            banner.classList.add('visible');
            
            // Reiniciar la animación del texto de máquina de escribir si existe
            const typewriterEl = document.getElementById('completion-message');
            if(typewriterEl) {
                 typewriterEl.style.animation = 'none';
                 void typewriterEl.offsetWidth; // Force reflow
                 typewriterEl.style.animation = 'typing 2s steps(40, end) 1.8s both';
            }
        }
        // =========================================================
        // === FIN DE CAMBIO =======================================
        // =========================================================

        // --- INICIO: Lógica de Popovers ---
        let activePopoverElements = null;
        let activeShareMenu = null;

        function adjustPopoverPosition(iconTriggerElement, popoverWrapper, popover, frame) {
            const iconContainer = iconTriggerElement.closest('.icono-info');
            if (!iconContainer || !popoverWrapper || !popover || !frame) return;

            const iconContainerRect = iconContainer.getBoundingClientRect();
            const frameRect = frame.getBoundingClientRect();
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

            const selectElement = frame.querySelector('.player-assignment-select');
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

        function openPopover(iconTriggerElement) {
            const iconContainer = iconTriggerElement.closest('.icono-info');
            if (!iconContainer) return;

            document.querySelectorAll('.icono-info.active').forEach(activeIconContainer => {
                if (activeIconContainer !== iconContainer) closePopover(activeIconContainer);
            });

            iconContainer.classList.add('active');
            iconContainer.closest('.character-frame')?.classList.add('popover-active-frame');

            const popoverWrapper = iconContainer.querySelector('.popover-wrapper');
            const popover = iconContainer.querySelector('.popover');
            const frame = iconContainer.closest('.character-frame');

            if (popoverWrapper && popover && frame) {
                popover.classList.remove('popover-above');
                popoverWrapper.style.top = `calc(100% + 12px)`;
                popoverWrapper.style.bottom = 'auto';
                popoverWrapper.style.transform = 'translateX(-50%)';

                requestAnimationFrame(() => {
                    adjustPopoverPosition(iconTriggerElement, popoverWrapper, popover, frame);
                    activePopoverElements = { iconEl: iconContainer, wrapper: popoverWrapper, popoverEl: popover, frameEl: frame, triggerEl: iconTriggerElement };
                });
            }
        }

        function closePopover(iconContainer) {
            if (!iconContainer || !iconContainer.classList.contains('active')) return;
            iconContainer.classList.remove('active');
            iconContainer.closest('.character-frame')?.classList.remove('popover-active-frame');

            const popoverWrapper = iconContainer.querySelector('.popover-wrapper');
            if (popoverWrapper) {
                popoverWrapper.style.transform = 'translateX(-50%)';
            }
            if (activePopoverElements && activePopoverElements.iconEl === iconContainer) {
                activePopoverElements = null;
            }
        }

        function togglePopover(iconTriggerElement) {
            const iconContainer = iconTriggerElement.closest('.icono-info');
            if (!iconContainer) return;
            if (iconContainer.classList.contains('active')) {
                closePopover(iconContainer);
            } else {
                openPopover(iconTriggerElement);
            }
        }

        document.addEventListener('click', function(e) {
            const clickedIconTrigger = e.target.closest('.special-icon-fa');
            const clickedIconContainer = e.target.closest('.icono-info');

            if (e.target.closest('.popover')) return;

            if (clickedIconTrigger) {
                e.stopPropagation();
                togglePopover(clickedIconTrigger);
            } else {
                if (!clickedIconContainer) {
                        document.querySelectorAll('.icono-info.active').forEach(activeIconEl => {
                            closePopover(activeIconEl);
                        });
                }
            }
        });

        window.addEventListener('resize', () => {
            if (activePopoverElements && activePopoverElements.iconEl.classList.contains('active')) {
                activePopoverElements.wrapper.style.transform = 'translateX(-50%)';
                activePopoverElements.popoverEl.classList.remove('popover-above');
                activePopoverElements.wrapper.style.top = `calc(100% + 12px)`;
                activePopoverElements.wrapper.style.bottom = 'auto';

                requestAnimationFrame(() => {
                    const originalIconTrigger = activePopoverElements.triggerEl;
                    if (originalIconTrigger) {
                            adjustPopoverPosition(
                            originalIconTrigger,
                            activePopoverElements.wrapper,
                            activePopoverElements.popoverEl,
                            activePopoverElements.frameEl
                        );
                    }
                });
            }
        });

        function closeActiveShareMenu() {
            if (activeShareMenu) {
                activeShareMenu.remove();
                document.removeEventListener('click', handleShareMenuOutside);
                activeShareMenu = null;
            }
        }

        function handleShareMenuOutside(e) {
            if (activeShareMenu && !activeShareMenu.contains(e.target) && e.target !== activeShareMenu.trigger) {
                closeActiveShareMenu();
            }
        }

        function openShareMenu(trigger, txt, name) {
            closeActiveShareMenu();

            const menu = document.createElement('div');
            menu.className = 'share-menu';
            menu.innerHTML = `
                <a href="https://wa.me/?text=${encodeURIComponent(txt)}" target="_blank">🟢 WhatsApp</a>
                <button type="button" class="share-copy-option">📋 Copiar al portapapeles</button>
                <a href="mailto:?subject=${encodeURIComponent('Tu personaje en el Cluedo: ' + name)}&body=${encodeURIComponent(txt)}">✉️ Enviar por email</a>
            `;
            document.body.appendChild(menu);
            const rect = trigger.getBoundingClientRect();
            menu.style.left = rect.left + window.scrollX + 'px';
            menu.style.top = rect.bottom + window.scrollY + 'px';

            menu.querySelector('.share-copy-option').addEventListener('click', () => {
                navigator.clipboard.writeText(txt)
                    .then(() => showToastNotification('Texto copiado al portapapeles', 'success'))
                    .catch(() => showToastNotification('Error al copiar texto', 'error'));
                closeActiveShareMenu();
            });

            activeShareMenu = menu;
            activeShareMenu.trigger = trigger;
            setTimeout(() => document.addEventListener('click', handleShareMenuOutside));
        }
        // --- FIN: Lógica de Popovers ---

// 👉👉 FIN BLOQUE 3: RENDERIZADO DE UI Y COMPONENTES VISUALES 👈👈


// 👉👉 A PARTIR DE AQUÍ PEGAR EL BLOQUE 4: ACCIONES PRINCIPALES Y EXPORTACIÓN 👈👈
// 👉👉 INICIO BLOQUE 4: ACCIONES PRINCIPALES Y EXPORTACIÓN 👈👈

        function handleBackToSetup() {
            if (!domElements['setup-section'] || !domElements['main-content-area']) return;

            domElements['main-content-area'].classList.add('hidden-section');
            domElements['main-content-area'].classList.remove('visible-section');
            domElements['setup-section'].style.display = 'block';

            // Cancel any smooth scroll still in progress from the assignment view
            window.scrollTo({ top: 0, behavior: 'auto' });

            // Delay slightly so the layout settles before revealing fields again
            setTimeout(() => {
                // Ensure previously revealed blocks remain visible when returning
                document.querySelectorAll('#setup-section .bloque').forEach(b => {
                    if (b.classList.contains('hidden-section')) {
                        b.classList.remove('hidden-section');
                        b.classList.add('visible-section');
                    }
                });

                // Restore previously entered host and date values
                if (domElements['host-name-input']) {
                    domElements['host-name-input'].value = hostName;
                }

                const existingNames = Array.from(domElements['player-names-grid-container']?.querySelectorAll('input.player-name-box'))
                                            .map(input => input.value);
                if (existingNames.length > 0) {
                    generatePlayerNameInputs(parseInt(domElements['player-count'].value), existingNames);
                }

                domElements['setup-section'].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

            if(domElements['assignment-progress']){
                domElements['assignment-progress'].style.display = 'none';
            }

            showToastNotification('Has vuelto a la configuración. Los datos se conservan.', 'info');
        }

        function handleStartAssignment() {
            if (!domElements['player-count'] || !domElements['player-count-error'] || !domElements['main-content-area'] ||
                !domElements['player-names-grid-container'] || !domElements['setup-section']) { return; }

            hostName = domElements['host-name-input'] ? domElements['host-name-input'].value.trim() : "";
            eventDateValue = domElements['event-date-input'] ? domElements['event-date-input'].value : "";

            if (!eventDateValue) {
                showToastNotification('Por favor, selecciona la fecha del evento para continuar.', 'error');
                if (domElements['event-date-input']) domElements['event-date-input'].focus();
                return;
            }

            const honoreeNameInputs = domElements['honorees-container'] ? Array.from(domElements['honorees-container'].querySelectorAll('.honoree-name-input')) : [];
            honoreeNames = honoreeNameInputs.map(input => input.value.trim()).filter(name => name);


            const playerCount = parseInt(domElements['player-count'].value);
            if (!packs[playerCount]) {
                showToastNotification(`No hay pack para ${playerCount} jugadores. Packs: ${Object.keys(packs).join(', ')}.`, 'error');
                domElements['main-content-area'].classList.remove('visible-section'); domElements['main-content-area'].classList.add('hidden-section'); return;
            }

            availablePlayerNames = [];
            if (hostName) {
                availablePlayerNames.push(hostName + " 🎩");
            }
            honoreeNames.forEach(hNameClean => {
                if (hNameClean) {
                   availablePlayerNames.push(hNameClean + " 🌟");
                }
            });
            const nameInputs = domElements['player-names-grid-container'].querySelectorAll('input.player-name-box:not([readonly])');
            nameInputs.forEach(input => {
                const cleanName = input.value.trim();
                if (cleanName) {
                    availablePlayerNames.push(cleanName);
                }
            });

            const totalPreFilledNames = (hostName ? 1 : 0) + honoreeNames.length;
            const expectedEditableNames = playerCount - totalPreFilledNames;
            const actualEditableNamesEntered = nameInputs.length > 0 ? Array.from(nameInputs).filter(input => input.value.trim()).length : 0;

            if (availablePlayerNames.length !== playerCount) {
                 showToastNotification(`El número de jugadores (${playerCount}) no coincide con los nombres proporcionados (${availablePlayerNames.length}, incluyendo anfitrión/homenajeados). Revisa los campos. Asegúrate de que todos los jugadores tengan nombre.`, 'error', 6000);
                 return;
            }
            if (expectedEditableNames > 0 && actualEditableNamesEntered < expectedEditableNames) {
                showToastNotification(`Faltan nombres de jugadores. Se esperan ${expectedEditableNames} nombres adicionales.`, 'error', 5000);
                return;
            }


            const cleanPlayerNamesForCheck = availablePlayerNames.map(nameWithEmoji =>
                nameWithEmoji.replace("🎩","").replace("🌟","").trim().toLowerCase()
            );
            const uniqueNames = new Set(cleanPlayerNamesForCheck);

            if (uniqueNames.size !== cleanPlayerNamesForCheck.length) {
                const nameCounts = {};
                let duplicateNameFoundForMessage = "";
                for (const originalName of availablePlayerNames) {
                    const cleanName = originalName.replace("🎩","").replace("🌟","").trim().toLowerCase();
                    nameCounts[cleanName] = (nameCounts[cleanName] || 0) + 1;
                    if (nameCounts[cleanName] > 1) {
                        duplicateNameFoundForMessage = originalName.replace("🎩","").replace("🌟","").trim();
                        break;
                    }
                }
                showToastNotification(`Error: El nombre "${duplicateNameFoundForMessage}" está duplicado. Por favor, usa nombres únicos o añade un distintivo (ej: Ana S.).`, 'error', 6000);
                return;
            }


            const charNames = packs[playerCount];
            const isSameCharacters = currentCharacters.length === charNames.length &&
                                    currentCharacters.every((c, idx) => c.name === charNames[idx]);

            if (!isSameCharacters) {
                const previousAssignments = new Map(assignedPlayerMap);
                assignedPlayerMap.clear();
                setupCharacterSelection(playerCount);
                charNames.forEach(name => {
                    if (previousAssignments.has(name)) {
                        assignedPlayerMap.set(name, previousAssignments.get(name));
                    }
                });
            }

            domElements['player-count-error'].style.display = 'none';
            domElements['setup-section'].style.display = 'none';
            domElements['main-content-area'].classList.remove('hidden-section');
            domElements['main-content-area'].classList.add('visible-section');
            if(domElements['assignment-progress']){
                domElements['assignment-progress'].style.display = 'block';
            }
            if (domElements['action-buttons-section']) {
                 domElements['action-buttons-section'].scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (domElements['guide-header-tab']) {
                domElements['guide-header-tab'].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            updateAllPlayerSelects();
            checkCompletionState();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        // Se sobreescribe el listener del botón de imprimir para añadir la lógica completa
        if (domElements['print-dashboard-btn-new']) {
            domElements['print-dashboard-btn-new'].addEventListener('click', async () => {
                showToastNotification('Generando PDF artístico...', 'info', 6000);

                if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
                    showToastNotification("Error: La librería jsPDF no está cargada.", 'error');
                    return;
                }

                // Campo de email eliminado: usar dirección predeterminada
                const hostEmail = '123actionbcn@gmail.com';

                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

                // === CÓDIGO DE GENERACIÓN DEL PDF (se mantiene igual) ===
                const page = { width: doc.internal.pageSize.getWidth(), height: doc.internal.pageSize.getHeight() };
                const margin = 10;
                const columnMargin = 5;
                const cardMarginY = 4;
                const numColumns = 3;

                const card = {
                    width: (page.width - (margin * 2) - (columnMargin * (numColumns - 1))) / numColumns,
                    height: 25
                };
                const colors = { dark: '#2c1f1b', gold: '#8c703c', light_gold: '#c0a062', bg: '#faf3e0' };

                const hostPlayerName = hostName ? hostName + " 🎩" : null;
                const honoreePlayerNames = honoreeNames.map(name => name + " 🌟");

                const sortedCharacters = [...currentCharacters].sort((a, b) => {
                    const playerA = assignedPlayerMap.get(a.name);
                    const playerB = assignedPlayerMap.get(b.name);
                    const isAHonoree = honoreePlayerNames.includes(playerA);
                    const isBHonoree = honoreePlayerNames.includes(playerB);
                    const isAHost = playerA === hostPlayerName;
                    const isBHost = playerB === hostPlayerName;
                    if (isAHonoree && !isBHonoree) return -1;
                    if (!isAHonoree && isBHonoree) return 1;
                    if (isAHost && !isBHost && !isAHonoree && !isBHonoree) return -1;
                    if (!isAHost && isBHost && !isAHonoree && !isBHonoree) return 1;
                    if (isAHonoree && isBHost) return -1;
                    if (isAHost && isBHonoree) return 1;
                    return 0;
                });

                const totalCards = sortedCharacters.length;

                doc.setDrawColor(colors.gold);
                doc.setLineWidth(1);
                doc.rect(margin / 2, margin / 2, page.width - margin, page.height - margin);
                doc.setDrawColor(colors.dark);
                doc.setLineWidth(0.2);
                doc.rect((margin / 2) + 1.5, (margin / 2) + 1.5, page.width - margin - 3, page.height - margin - 3);

                try { doc.setFont('PlayfairDisplay-Bold', 'bold'); } catch (e) { doc.setFont('Helvetica', 'bold'); }
                doc.setFontSize(20);
                doc.setTextColor(colors.dark);
                doc.text("Panel Detectivesco", page.width / 2, margin + 8, { align: 'center' });

                doc.setFont('Helvetica', 'italic');
                doc.setFontSize(8);
                doc.setTextColor(colors.gold);
                doc.text(`El Testamento de Mr. Collins`, page.width - margin, page.height - (margin / 2) - 3, { align: 'right' });

                const drawInfoLine = (y, label, value) => {
                    const valueX = eventInfoX + 55;
                    try { doc.setFont('Lora', 'bold'); } catch (e) { doc.setFont('Helvetica', 'bold'); }
                    doc.setFontSize(12);
                    doc.text(label, eventInfoX, y);
                    doc.text(value, valueX, y, { charSpace: 0.1 });
                    return y + 8;
                };

                let yPos = margin + 22;
                const eventInfoX = margin + 5;

                doc.setTextColor(colors.dark);

                if (eventDateValue) {
                    const formattedDate = getFormattedEventDate(eventDateValue);
                    yPos = drawInfoLine(yPos, "Fecha:", formattedDate);
                }

                yPos = drawInfoLine(yPos, "Nº de Sospechosos:", String(totalCards));
                if (hostName) yPos = drawInfoLine(yPos, "Anfitrión:", hostName);
                if (hostEmail) yPos = drawInfoLine(yPos, "Email Anfitrión:", hostEmail);
                if (honoreeNames && honoreeNames.length > 0) yPos = drawInfoLine(yPos, "Homenajeado/a(s):", honoreeNames.join(', '));

                yPos += 3;
                doc.setDrawColor(colors.light_gold);
                doc.setLineWidth(0.5);
                doc.line(margin, yPos, page.width - margin, yPos);
                yPos += 8;

                for (let i = 0; i < totalCards; i++) {
                    const char = sortedCharacters[i];
                    const col = i % numColumns;
                    const row = Math.floor(i / numColumns);
                    const cardX = margin + (col * (card.width + columnMargin));
                    const cardY = yPos + (row * (card.height + cardMarginY));
                    doc.setFillColor(colors.bg);
                    doc.setDrawColor(colors.light_gold);
                    doc.setLineWidth(0.4);
                    doc.roundedRect(cardX, cardY, card.width, card.height, 2, 2, 'FD');
                    const textX = cardX + card.width / 2;
                    try { doc.setFont('Special Elite', 'normal'); } catch(e) { doc.setFont('Courier', 'normal'); }
                    doc.setFontSize(11);
                    doc.setTextColor(colors.dark);
                    doc.text(char.name.toUpperCase(), textX, cardY + 8, { align: 'center' });
                    doc.setDrawColor(colors.light_gold);
                    doc.setLineWidth(0.2);
                    doc.line(cardX + 4, cardY + 10.5, cardX + card.width - 4, cardY + 10.5);
                    const playerName = assignedPlayerMap.get(char.name) || 'S/A';
                    const cleanPlayerName = playerName.replace(/🎩|🌟/g, '').trim();
                    try { doc.setFont('Lora', 'bold'); } catch(e) { doc.setFont('Helvetica', 'bold'); }
                    doc.setFontSize(12);
                    doc.setTextColor(colors.gold);
                    doc.text(cleanPlayerName, textX, cardY + 18, { align: 'center' });
                }
                // === FIN CÓDIGO GENERACIÓN PDF ===

                const pdfBlob = doc.output('blob');
                const formattedDateForFilename = getFormattedEventDate(eventDateValue) || "evento";
                const pdfName = `Panel de sospechosos - ${formattedDateForFilename}.pdf`;
                const pdfFile = new File([pdfBlob], pdfName, { type: "application/pdf" });

                // === ENVIAR A N8N VIA WEBHOOK ===
                try {
                        showToastNotification('Enviando panel por email...', 'info');
                        const beautifulHTML = generateBeautifulEmailHTML(sortedCharacters, formattedDateForFilename, hostName, honoreeNames, totalCards, assignedPlayerMap);

                        // Preparamos los datos para el webhook
                        const webhookData = {
                            to: hostEmail,
                            subject: `Panel Detectivesco - ${formattedDateForFilename}`,
                            data: {
                                event: {
                                    date: formattedDateForFilename,
                                    host: hostName || 'Organizador',
                                    hostEmail: hostEmail,
                                    honorees: honoreeNames,
                                    totalPlayers: totalCards
                                },
                                assignments: sortedCharacters.map(char => ({
                                    character: char.name,
                                    player: assignedPlayerMap.get(char.name) || 'Sin asignar',
                                    personality: getGenderedInterpretationText(char.interpretationLevel, char.gender).toUpperCase()
                                })),
                                emailHTML: beautifulHTML
                            },
                            timestamp: new Date().toISOString()
                        };

                        // Enviar al webhook de n8n
                        const response = await fetch('https://n8n.srv815746.hstgr.cloud/webhook/panel-detectivesco', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(webhookData)
                        });

                        if (response.ok) {
                            showToastNotification('✅ Panel enviado a tu email exitosamente', 'success', 4000);
                        } else {
                            throw new Error(`Error del servidor: ${response.status}`);
                        }
                } catch (error) {
                    console.error('Error enviando webhook:', error);
                    showToastNotification('Error al enviar por email, pero puedes descargar el PDF', 'error', 5000);
                }

                showToastNotification('PDF generado correctamente', 'success', 3000);

                if (!isDesktop() && navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
                    try {
                        await navigator.share({ files: [pdfFile], title: 'Panel Detectivesco - Intriga', text: 'Aquí está el panel de asignaciones del juego de intriga.' });
                    } catch (error) {
                        if (error.name !== 'AbortError') {
                            showToastNotification('Error al compartir. Iniciando descarga...', 'error');
                            doc.save(pdfName);
                        }
                    }
                } else {
                    doc.save(pdfName);
                }
            });
        }
        initializeFreshSetupState();

        const initialReportTargetElement = domElements['initial-report-target'];
        const coffinIconContainer = domElements['intro-line-1-heading'];

        if (coffinIconContainer && initialReportTargetElement) {
            const coffinIconSpan = coffinIconContainer.querySelector('.coffin-icon');
            if (coffinIconSpan) {
                coffinIconSpan.style.cursor = 'pointer';
                coffinIconSpan.setAttribute('title', 'Ver detalles del informe');

                coffinIconSpan.addEventListener('click', () => {
                    if (initialReportTargetElement) {
                        initialReportTargetElement.scrollIntoView({ behavior: 'instant', block: 'start' });
                        requestAnimationFrame(() => {
                            triggerGoldenGlow(initialReportTargetElement);
                        });
                    }
                });
            }
        }

        // --- CAMBIO: Lógica para el nuevo banner de finalización ---
        const magnifier = document.getElementById('magnifier');
        if (magnifier) {
            document.addEventListener('mousemove', (e) => {
                magnifier.style.left = e.clientX - 50 + 'px';
                magnifier.style.top = e.clientY - 50 + 'px';
            });

            // Usamos delegación de eventos en un contenedor superior que exista siempre
            const mainContent = document.getElementById('main-content-area');
            if (mainContent) {
                 mainContent.addEventListener('mouseover', (e) => {
                    if (e.target.closest('.evidence-cards, .case-details')) {
                        magnifier.classList.add('active');
                    }
                });
                mainContent.addEventListener('mouseout', (e) => {
                    if (e.target.closest('.evidence-cards, .case-details')) {
                        magnifier.classList.remove('active');
                    }
                });
            }
        }


    }catch(e){console.error("ASIGNADOR ERROR GRAL:",e,e.stack);const b=document.body;if(b){let d=document.getElementById('critical-error');if(!d){d=document.createElement('div');d.id='critical-error';d.style.cssText='display:block;position:fixed;bottom:5px;left:50%;transform:translateX(-50%);z-index:10000;padding:15px;width:90%;max-width:700px;text-align:center;background-color:maroon;color:white;font-size:12px;border-radius:8px;';b.appendChild(d);}d.innerHTML=`Error: ${e.message}. Revisa consola (F12).`;}}
} // Fin de la función initializeApp


// Código que se ejecuta fuera de initializeApp

document.addEventListener('DOMContentLoaded', () => {
    initializeApp(allCharacters_data, packs_data)
    setupProgressiveFlow();
});

function runTypewriterOnElement(el, speed = 75) {
  if (!el) return;
  const fullText = el.textContent.trim();
  el.textContent = '';

  const textSpan = document.createElement('span');
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  el.appendChild(textSpan);
  el.appendChild(cursor);

  let index = 0;
  (function typeNext() {
    textSpan.textContent = fullText.slice(0, index + 1);
    index++;
    if (index < fullText.length) {
      setTimeout(typeNext, speed);
    } else {
      cursor.classList.add('hide-typewriter-cursor');
    }
  })();
}

function applyTypewriterEffects() {
  const elements = [
    document.getElementById('typewriter-title'),
    document.querySelector('label[for="clave"]')
  ];
  elements.forEach(el => runTypewriterOnElement(el));
}

function setupProgressiveFlow() {
  const bloques = Array.from(document.querySelectorAll('#setup-section .bloque'));
  if (bloques.length === 0) return;
  bloques.forEach((bloq, idx) => {
    bloq.classList.add('hidden-section');
    bloq.classList.remove('visible-section');
  });
  const showBloque = num => {
    const b = document.querySelector('.bloque-' + num);
    if (b && b.classList.contains('hidden-section')) {
      b.classList.remove('hidden-section');
      b.classList.add('visible-section');
      triggerGoldenGlow(b);
      b.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  showBloque(2);

  const dateInput = document.getElementById('event-date-input');
  const hostInput = document.getElementById('host-name-input');
  const honYes = document.getElementById('honoree-yes');
  const honNo = document.getElementById('honoree-no');
  const honChk = document.getElementById('has-honoree-checkbox');
  const playerCountInput = document.getElementById('player-count');
  const namesContainer = document.getElementById('player-names-grid-container');

  if (dateInput) {
    dateInput.addEventListener('change', () => {
      if (!isDesktop() || !dateInput.value) return;
      showBloque(3);
      if (hostInput) hostInput.focus();
    });
    dateInput.addEventListener('blur', () => {
      if (isDesktop() || !dateInput.value) return;
      showBloque(3);
    });
  }
  if (hostInput) {
    hostInput.addEventListener('blur', () => {
      if (hostInput.value.trim().length > 0) showBloque(4);
    });
    hostInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hostInput.blur();
        if (hostInput.value.trim().length > 0) showBloque(4);
      }
    });
  }

  const handleHonoreeChoice = (hasHonoree, buttonClicked) => {
    [honYes, honNo].forEach(btn => btn.classList.remove('active'));
    if(buttonClicked) buttonClicked.classList.add('active');

    if (honChk) {
      honChk.checked = hasHonoree;
      honChk.dispatchEvent(new Event('change'));
    }

    showBloque(5);
    showBloque(6);

    if (hasHonoree) {
      const honBlock = document.querySelector('.bloque-4');
      const firstHonInput = document.querySelector('#honorees-container .honoree-name-input');
      if (honBlock) {
        honBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (firstHonInput) {
        firstHonInput.focus();
      }
    }
  };

  if (honYes && honNo) {
    honYes.addEventListener('click', () => handleHonoreeChoice(true, honYes));
    honNo.addEventListener('click', () => handleHonoreeChoice(false, honNo));
  } else if (honChk) {
    honChk.addEventListener('change', () => {
        showBloque(5);
        showBloque(6);
        if (honChk.checked) {
          const honBlock = document.querySelector('.bloque-4');
          const firstHonInput = document.querySelector('#honorees-container .honoree-name-input');
          if (honBlock) {
            honBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (firstHonInput) {
            firstHonInput.focus();
          }
        }
    });
  }

  if (playerCountInput) {
    playerCountInput.addEventListener('input', () => {
      const val = parseInt(playerCountInput.value);
      const min = parseInt(playerCountInput.min);
      const max = parseInt(playerCountInput.max);
      if (!isNaN(val) && val >= min && val <= max) showBloque(6);
    });
  }

  if (namesContainer) {
    namesContainer.addEventListener('input', () => {
      const total = parseInt(playerCountInput?.value || '0');
      const filled = Array.from(namesContainer.querySelectorAll('input.player-name-box')).filter(el => el.value.trim()).length;
      if (filled === total) showBloque(7);
    });
  }
}

window.addEventListener("load", applyTypewriterEffects);

function validarClave() {
  const clave = document.getElementById('clave')?.value?.trim().toLowerCase();
  const intro = document.getElementById('intro-detective');
  const error = document.getElementById('mensaje-error');
  const reportTarget = document.getElementById('initial-report-target');

  if (clave === 'cluedo') {
    if(intro) {
        intro.style.transition = "opacity 0.5s ease";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = 'none';

            if (reportTarget) {
                reportTarget.scrollIntoView({ behavior: 'instant', block: 'start' });
                requestAnimationFrame(() => {
                    triggerGoldenGlow(reportTarget);
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }, 500);
    }
  } else {
    if(error) error.style.display = 'block';
  }
}

// 👉👉 FIN BLOQUE 4: ACCIONES PRINCIPALES Y EXPORTACIÓN �👈
function generateBeautifulEmailHTML(sortedCharacters, formattedDate, hostName, honoreeNames, totalCards, assignedPlayerMap) {

    // Helper para obtener el texto de interpretación de la personalidad
    function getGenderedInterpretationText(level, gender) {
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

    const generationDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Europe/Madrid'
    };
    const formattedGenerationDateTime = generationDate.toLocaleDateString('es-ES', options);

    let deviceType = "un ordenador";
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(userAgent)) {
        deviceType = "un iPhone/iPad";
    } else if (/Android/.test(userAgent)) {
        deviceType = "un dispositivo Android";
    } else if (/Mobile/.test(userAgent)) {
        deviceType = "un dispositivo móvil";
    }
    const generationInfoLine = `Este panel fue generado el ${formattedGenerationDateTime} desde ${deviceType}.`;

    let characterCardsHtml = '';
    for (let i = 0; i < sortedCharacters.length; i += 2) {
        const char1 = sortedCharacters[i];
        const char2 = sortedCharacters[i + 1];

        characterCardsHtml += '<tr>';

        // Tarjeta del personaje 1
        characterCardsHtml += `<td class="character-cell" width="50%" style="padding: 10px; vertical-align: top;">
            <div class="character-card" style="
                background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                border: 2px solid #c0a062;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                position: relative;
                overflow: hidden;
            ">
                <div>
                    <h3 style="
                        color: #e8d8b0;
                        font-size: 20px;
                        margin: 0 0 10px 0;
                        font-family: Georgia, serif;
                        border-bottom: 1px solid #c0a062;
                        padding-bottom: 10px;
                    "><span style="color: #c0a062; margin-right: 8px; font-size: 18px; font-weight: bold;">${i + 1}.</span>${char1.name}</h3>
                    
                    <div style="color: #f5e8d5; font-size: 15px; line-height: 1.5;">
                        <p style="margin: 5px 0;">
                            <strong style="color: #c0a062;">👤 Jugador:</strong> 
                            <span style="font-size: 16px;">${(assignedPlayerMap.get(char1.name) || 'Sin asignar').replace(/🎩|🌟/g, '').trim()}${assignedPlayerMap.get(char1.name)?.includes('🎩') ? ' (Anfitrión)' : assignedPlayerMap.get(char1.name)?.includes('🌟') ? ' (Homenajeado)' : ''}</span>
                        </p>
                        <p style="margin: 5px 0;">
                            <strong style="color: #c0a062;">🎭 Personalidad:</strong> 
                            <span class="personality-pill" style="
                                background: #c0a062;
                                color: #1a1a1a;
                                padding: 2px 6px;
                                border-radius: 4px;
                                font-weight: bold;
                                display: inline-block;
                                margin-left: 5px;
                                font-size: 13px;
                            ">${(() => {
                                const interpretationText = getGenderedInterpretationText(char1.interpretationLevel, char1.gender);
                                const emojiMap = {'Extrovertido': '🔥', 'Extrovertida': '🔥', 'Introvertido': '🙈', 'Introvertida': '🙈', 'Camaleónico': '🎭', 'Camaleónica': '🎭'};
                                return (emojiMap[interpretationText] || '🎭') + ' ' + interpretationText.toUpperCase();
                            })()}</span>
                        </p>
                    </div>
                </div>
            </div>
        </td>`;

        // Tarjeta del personaje 2 (si existe)
        if (char2) {
            characterCardsHtml += `<td class="character-cell" width="50%" style="padding: 10px; vertical-align: top;">
                <div class="character-card" style="
                    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                    border: 2px solid #c0a062;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                    position: relative;
                    overflow: hidden;
                ">
                    <div>
                        <h3 style="
                            color: #e8d8b0;
                            font-size: 20px;
                            margin: 0 0 10px 0;
                            font-family: Georgia, serif;
                            border-bottom: 1px solid #c0a062;
                            padding-bottom: 10px;
                        "><span style="color: #c0a062; margin-right: 8px; font-size: 18px; font-weight: bold;">${i + 2}.</span>${char2.name}</h3>
                        
                        <div style="color: #f5e8d5; font-size: 15px; line-height: 1.5;">
                            <p style="margin: 5px 0;">
                                <strong style="color: #c0a062;">👤 Jugador:</strong> 
                                <span style="font-size: 16px;">${(assignedPlayerMap.get(char2.name) || 'Sin asignar').replace(/🎩|🌟/g, '').trim()}${assignedPlayerMap.get(char2.name)?.includes('🎩') ? ' (Anfitrión)' : assignedPlayerMap.get(char2.name)?.includes('🌟') ? ' (Homenajeado)' : ''}</span>
                            </p>
                            <p style="margin: 5px 0;">
                                <strong style="color: #c0a062;">🎭 Personalidad:</strong> 
                                <span class="personality-pill" style="
                                    background: #c0a062;
                                    color: #1a1a1a;
                                    padding: 2px 6px;
                                    border-radius: 4px;
                                    font-weight: bold;
                                    display: inline-block;
                                    margin-left: 5px;
                                    font-size: 13px;
                                ">${(() => {
                                    const interpretationText = getGenderedInterpretationText(char2.interpretationLevel, char2.gender);
                                    const emojiMap = {'Extrovertido': '🔥', 'Extrovertida': '🔥', 'Introvertido': '🙈', 'Introvertida': '🙈', 'Camaleónico': '🎭', 'Camaleónica': '🎭'};
                                    return (emojiMap[interpretationText] || '🎭') + ' ' + interpretationText.toUpperCase();
                                })()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </td>`;
        } else {
            characterCardsHtml += `<td class="character-cell" width="50%" style="padding: 10px; vertical-align: top;"></td>`;
        }

        characterCardsHtml += '</tr>';
    }

    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Detectivesco - El Testamento de Mr. Collins</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <style>
        body, div, p, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
        body { font-family: 'Lora', Georgia, serif; background-color: #0a0a0a; color: #f5e8d5; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; width: 100%; display: block; }
        table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        a { text-decoration: none; color: #c0a062; }
        :root { --color-dark-bg: #0a0a0a; --color-medium-bg: #1a1a1a; --color-card-bg: #2a2a2a; --color-gold: #c0a062; --color-dark-gold: #8c703c; --color-text-light: #f5e8d5; --color-text-highlight: #e8d8b0; --color-dark-text: #1a1a1a; }
        .header-bg { background: linear-gradient(135deg, var(--color-dark-gold) 0%, var(--color-gold) 50%, var(--color-dark-gold) 100%); }
        .title-text { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; }
        .section-box { background-color: var(--color-card-bg); border: 1px solid var(--color-gold); border-radius: 10px; }
        .character-card { background: linear-gradient(135deg, var(--color-card-bg) 0%, var(--color-medium-bg) 100%); border: 2px solid var(--color-gold); border-radius: 10px; }
        .personality-pill { background: var(--color-gold); color: var(--color-dark-text); font-weight: bold; border-radius: 4px; }
        .character-cell { padding: 10px; vertical-align: top; }
        @media only screen and (max-width: 600px) {
            table[class="main-table"] { width: 100% !important; }
            td[class="header-bg"], td[class="section-box"], td[class="character-cell"] { padding-left: 15px !important; padding-right: 15px !important; }
            table[class="character-cards-table"] { width: 100% !important; }
            td[class="character-cell"] { width: 100% !important; display: block !important; margin-bottom: 10px; }
            .character-card { margin-bottom: 0px !important; }
            h1.title-text { font-size: 28px !important; }
            h2.title-text { font-size: 20px !important; }
            h3 { font-size: 18px !important; }
            .personality-pill { font-size: 12px !important; }
            p span { font-size: 15px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Lora', Georgia, serif; background-color: #0a0a0a; color: #f5e8d5; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; width: 100%; display: block;">
    <center>
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a;">
            <tr>
                <td align="center" style="padding: 0;">
                    <table width="650" border="0" cellpadding="0" cellspacing="0" class="main-table" style="max-width: 650px; background: linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 100%); border-left: 1px solid #c0a062; border-right: 1px solid #c0a062;">
                        <tr>
                            <td class="header-bg" style="background: linear-gradient(135deg, #8c703c 0%, #c0a062 50%, #8c703c 100%); padding: 40px 20px; text-align: center; position: relative; overflow: hidden;">
                                <h1 class="title-text" style="font-family: 'Playfair Display', Georgia, serif; font-weight: 700; color: #1a1a1a; font-size: 36px; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 1;">🕵️ PANEL DETECTIVESCO 🕵️</h1>
                                <div style="background: #1a1a1a; color: #c0a062; padding: 10px 30px; display: inline-block; margin-top: 15px; border-radius: 20px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.3); position: relative; z-index: 1;">El Testamento de Mr. Collins</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="section-box" style="background-color: #2a2a2a; margin: 0; padding: 25px; border-radius: 10px; border: 1px solid #c0a062; text-align: center;">
                                    <tr>
                                        <td style="text-align: center;">
                                            <h2 class="title-text" style="font-family: 'Playfair Display', Georgia, serif; font-weight: 700; color: #e8d8b0; font-size: 24px; margin: 0 0 20px 0;">⚰️ Detalles del Caso ⚰️</h2>
                                            <div style="display: inline-block; text-align: left; font-size: 16px; line-height: 1.8;">
                                                <p style="margin: 8px 0;"><strong style="color: #c0a062;">📅 Fecha del evento:</strong> <span style="color: #f5e8d5; font-size: 18px;">${formattedDate}</span></p>
                                                ${hostName ? `<p style="margin: 8px 0;"><strong style="color: #c0a062;">🎩 Anfitrión:</strong> <span style="color: #f5e8d5; font-size: 18px;">${hostName}</span></p>` : ''}
                                                ${honoreeNames.length > 0 ? `<p style="margin: 8px 0;"><strong style="color: #c0a062;">🌟 Homenajeado(s):</strong> <span style="color: #f5e8d5; font-size: 18px;">${honoreeNames.join(', ')}</span></p>` : ''}
                                                <p style="margin: 8px 0;"><strong style="color: #c0a062;">👥 Total de sospechosos:</strong> <span style="color: #f5e8d5; font-size: 18px;">${totalCards}</span></p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 30px 20px 20px 20px; text-align: center;">
                                <h2 class="title-text" style="font-family: 'Playfair Display', Georgia, serif; font-weight: 700; color: #e8d8b0; font-size: 28px; margin: 0; position: relative; display: inline-block;">
                                    <span style="display: inline-block; padding: 0 40px;">📋 Asignaciones Secretas 📋</span>
                                    <div style="position: absolute; left: 0; right: 0; bottom: -10px; height: 2px; background: linear-gradient(to right, transparent, #c0a062, transparent);"></div>
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 20px 20px 20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="character-cards-table">
                                    ${characterCardsHtml}
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="header-bg" style="background: linear-gradient(135deg, #8c703c 0%, #c0a062 50%, #8c703c 100%); padding: 20px 20px 30px 20px; text-align: center; margin-top: 0px; border-top: 1px solid #8c703c;">
                                <p style="color: #1a1a1a; font-size: 14px; margin: 0 0 10px 0; font-weight: bold;">🔍 CONFIDENCIAL - NO COMPARTIR 🔍</p>
                                <p style="color: #1a1a1a; font-size: 12px; margin: 0; opacity: 0.8;">© 2024 123 Action Barcelona - Experiencias teatrales únicas<br>
                                Sistema de Asignación de Sospechosos v1.0<br>
                                <span style="font-size: 10px; color: #333333; display: block; margin-top: 5px;">${generationInfoLine}</span>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
    `;

    return emailHTML;
}
// Fix para wallpaper en iOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.documentElement.style.backgroundAttachment = 'scroll';
    document.documentElement.style.backgroundBlendMode = 'normal';
}

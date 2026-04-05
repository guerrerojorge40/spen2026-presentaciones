/* ============================================================
   SPEN 2026 — Motor de Presentaciones Interactivas
   Renderiza slides desde archivos de contenido dia_XX.js
   ============================================================ */

let currentSlide = 0;
let slides = [];
let currentDayMeta = {};

// ── Registro de presentaciones disponibles ──
const PRESENTACIONES = [];

function registerPresentation(day, modulo, titulo, data) {
    PRESENTACIONES.push({ day, modulo, titulo, data });
}

// ── Inicialización ──
document.addEventListener('DOMContentLoaded', () => {
    // Si la URL tiene ?dia=X, abrir directamente esa presentación
    const params = new URLSearchParams(window.location.search);
    const diaParam = params.get('dia');

    renderStartScreen();
    document.addEventListener('keydown', handleKeyboard);

    if (diaParam) {
        const pres = PRESENTACIONES.find(p => p.day === parseInt(diaParam));
        if (pres) startPresentation(pres);
    }
});

// ── Pantalla de Inicio ──
function renderStartScreen() {
    const startScreen = document.getElementById('start-screen');
    const presContainer = document.getElementById('pres-container');
    presContainer.classList.remove('active');
    startScreen.style.display = 'flex';

    const grid = document.getElementById('day-grid');
    grid.innerHTML = '';

    if (PRESENTACIONES.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted); grid-column:1/-1; text-align:center;">No hay presentaciones cargadas. Agrega archivos contenido/dia_XX.js</p>';
        return;
    }

    PRESENTACIONES.sort((a, b) => a.day - b.day);

    PRESENTACIONES.forEach(pres => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.dataset.modulo = pres.modulo;
        card.innerHTML = `
            <div class="day-num">${pres.day}</div>
            <div class="day-info">
                <div class="day-title">${pres.titulo}</div>
                <div class="day-module">Modulo ${pres.modulo} | ${pres.data.length} diapositivas</div>
            </div>
        `;
        card.addEventListener('click', () => startPresentation(pres));
        grid.appendChild(card);
    });
}

// ── Iniciar Presentación ──
function startPresentation(pres) {
    slides = pres.data;
    currentDayMeta = { day: pres.day, modulo: pres.modulo, titulo: pres.titulo };
    currentSlide = 0;

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('pres-container').classList.add('active');

    renderSlide();
    updateProgress();
    renderDots();
}

// ── Renderizar Slide ──
function renderSlide() {
    const area = document.getElementById('slide-area');
    const s = slides[currentSlide];

    area.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'slide';

    switch (s.tipo) {
        case 'titulo':
            div.innerHTML = renderTitulo(s);
            div.querySelector('.slide').classList.add('slide-titulo');
            break;
        case 'contenido':
            div.innerHTML = renderContenido(s);
            break;
        case 'concepto':
            div.innerHTML = renderConcepto(s);
            break;
        case 'ejemplo':
            div.innerHTML = renderEjemplo(s);
            break;
        case 'formula':
            div.innerHTML = renderFormula(s);
            break;
        case 'quiz':
            div.innerHTML = renderQuiz(s);
            break;
        case 'resumen':
            div.innerHTML = renderResumen(s);
            break;
        default:
            div.innerHTML = renderContenido(s);
    }

    area.appendChild(div);

    // Bind quiz events
    if (s.tipo === 'quiz') bindQuizEvents(s);
    // Bind flip events
    if (s.tipo === 'concepto') bindFlipEvents();

    // Update navigation
    document.getElementById('btn-prev').disabled = currentSlide === 0;
    document.getElementById('btn-next').disabled = currentSlide === slides.length - 1;
    updateProgress();
    updateDots();
    updateHeader();
}

// ── Renderers por tipo ──

function renderTitulo(s) {
    const badgeClass = `module-badge-${s.modulo || currentDayMeta.modulo}`;
    return `<div class="slide slide-titulo">
        <span class="module-badge ${badgeClass}">Modulo ${s.modulo || currentDayMeta.modulo}</span>
        <h1>${s.titulo}</h1>
        <div class="subtitulo">${s.subtitulo || ''}</div>
    </div>`;
}

function renderContenido(s) {
    return `<div class="slide slide-contenido">
        <h2>${s.titulo || ''}</h2>
        <div class="body">${s.contenido || ''}</div>
    </div>`;
}

function renderConcepto(s) {
    return `<div class="slide slide-concepto">
        <h2>${s.titulo || ''}</h2>
        <div class="flip-container" id="flip-container">
            <div class="flip-card">
                <div class="flip-front">
                    <div class="flip-label">Concepto clave</div>
                    <div class="flip-question">${s.frente || ''}</div>
                    <div class="flip-hint">Haz clic para ver la respuesta</div>
                </div>
                <div class="flip-back">
                    <div class="flip-answer">${s.reverso || ''}</div>
                </div>
            </div>
        </div>
    </div>`;
}

function renderEjemplo(s) {
    return `<div class="slide slide-ejemplo">
        <h2>${s.titulo || ''}</h2>
        <div class="ejemplo-block">
            <span class="ejemplo-label">Ejemplo electoral</span>
            ${s.contenido || ''}
        </div>
    </div>`;
}

function renderFormula(s) {
    return `<div class="slide slide-formula">
        <h2>${s.titulo || ''}</h2>
        <div class="formula-box">
            <div class="formula-text">${s.formula || ''}</div>
            <div class="formula-explain">${s.explicacion || ''}</div>
        </div>
    </div>`;
}

function renderQuiz(s) {
    const opcionesHTML = s.opciones.map((op, i) =>
        `<div class="quiz-opcion" data-idx="${i}">${op}</div>`
    ).join('');

    return `<div class="slide slide-quiz">
        <span class="quiz-label">Mini-Quiz</span>
        <h2>${s.titulo || 'Comprueba tu comprension'}</h2>
        <div class="quiz-pregunta">${s.pregunta || ''}</div>
        <div class="quiz-opciones">${opcionesHTML}</div>
        <div class="quiz-feedback" id="quiz-feedback"></div>
    </div>`;
}

function renderResumen(s) {
    const items = (s.puntos || []).map(p =>
        `<div class="resumen-item"><span class="check">&#10003;</span><span>${p}</span></div>`
    ).join('');

    return `<div class="slide slide-resumen">
        <h2>${s.titulo || 'Resumen del tema'}</h2>
        <div class="resumen-grid">${items}</div>
    </div>`;
}

// ── Interactividad ──

function bindFlipEvents() {
    const container = document.getElementById('flip-container');
    if (container) {
        container.addEventListener('click', () => {
            container.classList.toggle('flipped');
        });
    }
}

function bindQuizEvents(slideData) {
    const opciones = document.querySelectorAll('.quiz-opcion');
    const feedback = document.getElementById('quiz-feedback');
    let answered = false;

    opciones.forEach(op => {
        op.addEventListener('click', () => {
            if (answered) return;
            answered = true;

            const idx = parseInt(op.dataset.idx);
            const correct = idx === slideData.respuesta;

            op.classList.add(correct ? 'correct' : 'incorrect');

            if (!correct) {
                opciones[slideData.respuesta].classList.add('correct');
            }

            feedback.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'incorrect-fb');
            feedback.textContent = correct
                ? (slideData.feedbackOk || 'Correcto!')
                : (slideData.feedbackError || 'Incorrecto. La respuesta correcta esta resaltada.');

            // Disable all options
            opciones.forEach(o => o.style.pointerEvents = 'none');
        });
    });
}

// ── Navegación ──

function navigate(delta) {
    const newIdx = currentSlide + delta;
    if (newIdx < 0 || newIdx >= slides.length) return;
    currentSlide = newIdx;
    renderSlide();
}

function goToSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    currentSlide = idx;
    renderSlide();
}

function goHome() {
    document.getElementById('pres-container').classList.remove('active');
    renderStartScreen();
}

function handleKeyboard(e) {
    if (!document.getElementById('pres-container').classList.contains('active')) return;

    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            navigate(1);
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            navigate(-1);
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(slides.length - 1);
            break;
        case 'Escape':
            e.preventDefault();
            goHome();
            break;
    }
}

// ── UI Helpers ──

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    if (fill && slides.length > 0) {
        const pct = ((currentSlide + 1) / slides.length) * 100;
        fill.style.width = pct + '%';
    }
}

function updateHeader() {
    const title = document.getElementById('pres-title-text');
    const counter = document.getElementById('pres-counter');
    if (title) {
        const badgeClass = `module-badge-${currentDayMeta.modulo}`;
        title.innerHTML = `<span class="module-badge ${badgeClass}">Modulo ${currentDayMeta.modulo}</span> Dia ${currentDayMeta.day}: ${currentDayMeta.titulo}`;
    }
    if (counter) {
        counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    }
}

function renderDots() {
    const dotsContainer = document.getElementById('nav-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot' + (i === currentSlide ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ── Touch/Swipe Support ──
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
    if (!document.getElementById('pres-container').classList.contains('active')) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
        navigate(diff > 0 ? 1 : -1);
    }
});

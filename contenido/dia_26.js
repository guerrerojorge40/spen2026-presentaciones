registerPresentation(26, 'C', 'El Proceso Electoral: Etapas y Plazos Legales (LGIPE)', [

    {
        tipo: "titulo",
        modulo: "C",
        titulo: "El Proceso Electoral Federal",
        subtitulo: "Día 26 — Etapas, Plazos y LGIPE"
    },

    {
        tipo: "contenido",
        titulo: "¿Qué es el Proceso Electoral?",
        contenido: `<p>El <strong>proceso electoral</strong> es el conjunto de actos ordenados por la Constitución y la LGIPE que realizan las autoridades electorales, los partidos políticos y los ciudadanos para renovar los cargos de elección popular.</p>
        <ul>
            <li><strong>Base legal:</strong> Artículo 41 constitucional + LGIPE (Ley General de Instituciones y Procedimientos Electorales)</li>
            <li><strong>Inicia:</strong> Primera semana de septiembre del año previo a la elección federal ordinaria</li>
            <li><strong>Concluye:</strong> Con la calificación o validez de las elecciones y el dictamen del Tribunal Electoral</li>
            <li><strong>Principios rectores:</strong> Certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad</li>
        </ul>`
    },

    {
        tipo: "contenido",
        titulo: "Las 4 Etapas del Proceso Electoral",
        contenido: `<ol>
            <li><strong>Preparación de la elección</strong> — Desde el inicio del proceso hasta el día de la jornada electoral</li>
            <li><strong>Jornada electoral</strong> — El día de la votación (primer domingo de junio del año de la elección)</li>
            <li><strong>Resultados y declaraciones de validez</strong> — PREP, cómputos distritales y declaraciones de validez</li>
            <li><strong>Dictamen y declaraciones de validez por el Tribunal Electoral</strong> — TEPJF valida o anula</li>
        </ol>
        <p><em>Importante: la LGIPE regula cada etapa con plazos específicos contados en días naturales o hábiles.</em></p>`
    },

    {
        tipo: "concepto",
        titulo: "Etapa 1: Preparación de la Elección",
        frente: "¿Cuándo inicia la Etapa de Preparación y qué actos comprende?",
        reverso: "Inicia la primera semana de septiembre del año previo. Comprende: convocatoria, registro de candidatos, campaña electoral, actos de preparación de casillas (aprobación de listas nominales, integración de mesas directivas de casilla, etc.) hasta el día antes de la jornada."
    },

    {
        tipo: "contenido",
        titulo: "Plazos Clave — Preparación",
        contenido: `<table style="width:100%; border-collapse:collapse;">
            <tr style="background:#1565c0; color:white;"><th style="padding:6px;">Acto</th><th style="padding:6px;">Plazo</th></tr>
            <tr style="background:#e3f2fd;"><td style="padding:6px;">Inicio del proceso electoral</td><td style="padding:6px;">Primera semana de septiembre del año previo</td></tr>
            <tr><td style="padding:6px;">Registro de candidatos (MR)</td><td style="padding:6px;">Del 15 al 30 de marzo del año de la elección</td></tr>
            <tr style="background:#e3f2fd;"><td style="padding:6px;">Inicio de campañas (Presidente)</td><td style="padding:6px;">90 días antes de la jornada</td></tr>
            <tr><td style="padding:6px;">Inicio de campañas (Diputados MR)</td><td style="padding:6px;">60 días antes de la jornada</td></tr>
            <tr style="background:#e3f2fd;"><td style="padding:6px;">Inicio de campañas (Senadores)</td><td style="padding:6px;">60 días antes de la jornada</td></tr>
            <tr><td style="padding:6px;">Cierre de campañas</td><td style="padding:6px;">3 días antes de la jornada</td></tr>
        </table>`
    },

    {
        tipo: "formula",
        titulo: "Fórmula de Duración de Campañas",
        formula: "Duración campaña = Fecha jornada − Fecha inicio campaña",
        explicacion: "Presidente: 90 días. Senadores y Diputados MR: 60 días. El día de silencio es el inmediato anterior a la jornada. Las campañas no pueden interrumpirse salvo resolución judicial."
    },

    {
        tipo: "concepto",
        titulo: "Mesas Directivas de Casilla",
        frente: "¿Cómo se integra una Mesa Directiva de Casilla y cuál es su plazo de instalación?",
        reverso: "Se integra por un Presidente, dos Secretarios y dos Escrutadores (propietarios y suplentes), elegidos por sorteo de la lista nominal. Deben instalarse a las 8:00 AM el día de la jornada. Si a las 8:15 AM no hay quórum, se instala con los funcionarios presentes. Si no hay ninguno, se designan ciudadanos del lugar."
    },

    {
        tipo: "contenido",
        titulo: "Etapa 2: Jornada Electoral",
        contenido: `<p>La jornada electoral es el acto central del proceso. Se realiza el <strong>primer domingo de junio</strong> del año de la elección.</p>
        <ul>
            <li><strong>Apertura de casilla:</strong> 8:00 AM</li>
            <li><strong>Cierre de votación:</strong> 6:00 PM (puede ampliarse si hay ciudadanos en fila)</li>
            <li><strong>Escrutinio y cómputo en casilla:</strong> Inmediatamente después del cierre</li>
            <li><strong>Transmisión de resultados:</strong> Los presidentes de casilla envían los paquetes electorales al Consejo Distrital</li>
            <li><strong>PREP (Programa de Resultados Electorales Preliminares):</strong> Inicia captura de actas tan pronto como se reciben</li>
        </ul>`
    },

    {
        tipo: "quiz",
        titulo: "Quiz 1 — Jornada Electoral",
        pregunta: "¿A qué hora deben instalarse las Mesas Directivas de Casilla el día de la jornada electoral?",
        opciones: [
            "A) A las 7:00 AM",
            "B) A las 8:00 AM",
            "C) A las 9:00 AM",
            "D) A las 6:00 AM"
        ],
        respuesta: 1,
        feedbackOk: "¡Correcto! Las mesas directivas deben instalarse a las 8:00 AM. Si a las 8:15 AM no hay quórum completo, se instalan con los funcionarios presentes.",
        feedbackError: "Incorrecto. La LGIPE establece que la instalación debe ser a las 8:00 AM. Hay un margen de 15 minutos (hasta 8:15 AM) para completar el quórum."
    },

    {
        tipo: "contenido",
        titulo: "Etapa 3: Resultados y Declaraciones de Validez",
        contenido: `<p>Una vez cerrada la jornada, el proceso sigue con los cómputos oficiales:</p>
        <ul>
            <li><strong>Cómputo distrital:</strong> Se realiza el miércoles siguiente a la jornada electoral (o el siguiente día hábil si hay impugnaciones)</li>
            <li><strong>¿Qué se computa?</strong> Se suman los votos de todas las actas de casilla del distrito; se revisan paquetes con inconsistencias</li>
            <li><strong>Cómputo de Senadores:</strong> A cargo de los Consejos Locales</li>
            <li><strong>Cómputo de Presidente:</strong> A cargo del Consejo General del INE</li>
            <li><strong>Declaración de validez:</strong> El Consejo Distrital declara válida la elección de Diputados MR una vez concluido el cómputo (si no hay impugnaciones pendientes)</li>
        </ul>`
    },

    {
        tipo: "concepto",
        titulo: "PREP vs. Cómputo Distrital",
        frente: "¿Cuál es la diferencia entre el PREP y el cómputo distrital?",
        reverso: "El PREP es un sistema informático de captura rápida de resultados de las actas de casilla con fines informativos — NO tiene efectos jurídicos. El cómputo distrital es el acto oficial y jurídicamente vinculante, realizado por el Consejo Distrital el miércoles post-jornada, que determina el resultado legal de la elección."
    },

    {
        tipo: "formula",
        titulo: "Plazos Post-Jornada",
        formula: "Cómputo distrital = miércoles siguiente a la jornada | Declaración de validez = mismo día del cómputo (si sin impugnaciones)",
        explicacion: "Si hay recursos de inconformidad ante el TEPJF, la declaración de validez se suspende hasta resolución. El TEPJF tiene hasta el 6 de agosto para resolver (elección presidencial) o antes de la primera semana de agosto (para Congreso)."
    },

    {
        tipo: "contenido",
        titulo: "Etapa 4: Dictamen y Validez (TEPJF)",
        contenido: `<p>La última etapa corresponde al <strong>Tribunal Electoral del Poder Judicial de la Federación (TEPJF)</strong>:</p>
        <ul>
            <li>Resuelve los recursos de impugnación presentados contra los cómputos distritales</li>
            <li><strong>Sala Superior:</strong> Valida la elección de Presidente de la República (Declaración de Presidente Electo)</li>
            <li>Emite el <strong>Dictamen de Validez</strong> de la elección presidencial a más tardar el <strong>6 de agosto</strong> del año de la elección</li>
            <li>Con el dictamen de validez concluye formalmente el proceso electoral federal</li>
        </ul>`
    },

    {
        tipo: "quiz",
        titulo: "Quiz 2 — Etapas del Proceso",
        pregunta: "¿Cuántas etapas tiene el proceso electoral federal según la LGIPE?",
        opciones: [
            "A) 3 etapas",
            "B) 4 etapas",
            "C) 5 etapas",
            "D) 6 etapas"
        ],
        respuesta: 1,
        feedbackOk: "¡Exacto! Son 4 etapas: 1) Preparación, 2) Jornada electoral, 3) Resultados y declaraciones de validez, 4) Dictamen y declaraciones de validez por el TEPJF.",
        feedbackError: "No es correcto. La LGIPE establece 4 etapas. Muchos confunden el PREP o los cómputos como etapas separadas, pero son parte de la Etapa 3."
    },

    {
        tipo: "ejemplo",
        titulo: "Ejemplo: Cronograma Elección 2024",
        contenido: `<p>En el proceso electoral 2023-2024 (elecciones del 2 de junio de 2024):</p>
        <ul>
            <li><strong>Inicio del proceso:</strong> Primera semana de septiembre 2023</li>
            <li><strong>Registro de candidatos:</strong> 15-30 de marzo 2024</li>
            <li><strong>Inicio campañas presidenciales:</strong> 1 de marzo 2024 (90 días antes)</li>
            <li><strong>Cierre de campañas:</strong> 29 de mayo 2024 (3 días antes)</li>
            <li><strong>Jornada electoral:</strong> Domingo 2 de junio 2024</li>
            <li><strong>Cómputos distritales:</strong> Miércoles 5 de junio 2024</li>
            <li><strong>Dictamen TEPJF:</strong> A más tardar 6 de agosto 2024</li>
        </ul>
        <p><em>Este esquema aplica igual para el SPEN: conocer los plazos permite responder preguntas sobre cuándo ocurre cada acto.</em></p>`
    },

    {
        tipo: "concepto",
        titulo: "Actos Dentro de la Preparación: Listas Nominales",
        frente: "¿Qué son las listas nominales y quién las aprueba antes de la jornada?",
        reverso: "Las listas nominales son los registros de ciudadanos con credencial para votar vigente, organizados por sección electoral. El Consejo General del INE aprueba el corte definitivo de listas nominales. Se usan en casilla para verificar el derecho al voto de cada ciudadano."
    },

    {
        tipo: "quiz",
        titulo: "Quiz 3 — Plazos de Campaña",
        pregunta: "¿Cuántos días antes de la jornada electoral inicia la campaña de candidatos a Diputados de Mayoría Relativa?",
        opciones: [
            "A) 90 días",
            "B) 45 días",
            "C) 60 días",
            "D) 30 días"
        ],
        respuesta: 2,
        feedbackOk: "¡Correcto! Las campañas de Diputados de MR y Senadores duran 60 días. La campaña presidencial es la más larga: 90 días.",
        feedbackError: "Incorrecto. Las campañas de Diputados MR inician 60 días antes de la jornada. Solo la campaña presidencial tiene duración de 90 días."
    },

    {
        tipo: "contenido",
        titulo: "Actos Relevantes de la Preparación: Debate y Difusión",
        contenido: `<ul>
            <li><strong>Debates obligatorios:</strong> El INE organiza debates entre candidatos a Presidente; los medios de comunicación están obligados a transmitirlos</li>
            <li><strong>Veda de encuestas:</strong> Está prohibido publicar encuestas electorales durante los últimos 3 días antes de la jornada</li>
            <li><strong>Día de silencio:</strong> El día inmediato anterior a la jornada no se puede hacer campaña ni proselitismo</li>
            <li><strong>Propaganda gubernamental:</strong> Suspendida 3 días antes de la jornada y durante el día de la jornada</li>
        </ul>`
    },

    {
        tipo: "resumen",
        titulo: "Puntos Clave del Día 26",
        puntos: [
            "El proceso electoral tiene 4 etapas: Preparación, Jornada, Resultados/Validez y Dictamen TEPJF",
            "Inicia la primera semana de septiembre del año previo a la elección federal",
            "Campañas: Presidencial = 90 días | Senadores y Diputados MR = 60 días",
            "Cierre de campaña: 3 días antes de la jornada | Día de silencio: día inmediato anterior",
            "Jornada: primer domingo de junio | Casillas: apertura 8:00 AM, cierre 6:00 PM",
            "Cómputo distrital: miércoles siguiente a la jornada (jurídicamente vinculante)",
            "PREP: informativo, sin efectos jurídicos",
            "Veda de encuestas: 3 días antes | Propaganda gubernamental: suspendida 3 días antes",
            "TEPJF valida la elección presidencial a más tardar el 6 de agosto",
            "Mañana (Día 27): Sistemas de Representación — Mayoría Relativa y Representación Proporcional"
        ]
    }

]);

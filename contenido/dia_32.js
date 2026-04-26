registerPresentation(32, 'D', 'Medios de Impugnación: JIN, RRV, RAP y Juicio Laboral', [

    {
        tipo: "titulo",
        modulo: "D",
        titulo: "Medios de Impugnación en Materia Electoral",
        subtitulo: "Día 32 — JIN, RRV, RAP y Juicio Laboral · LGSMIME"
    },

    {
        tipo: "contenido",
        titulo: "¿Qué son los medios de impugnación electorales?",
        contenido: `
            <p>Los <strong>medios de impugnación</strong> son los instrumentos jurídicos previstos en la <strong>Ley General del Sistema de Medios de Impugnación en Materia Electoral (LGSMIME)</strong> para garantizar que todos los actos y resoluciones de las autoridades electorales se sujeten al principio de legalidad y a la Constitución.</p>
            <p><strong>Finalidad doble (Art. 41 y 99 CPEUM):</strong></p>
            <ul>
                <li>Dar <strong>definitividad</strong> a las distintas etapas del proceso electoral.</li>
                <li>Garantizar la <strong>protección de los derechos político-electorales</strong> del ciudadano y de los partidos.</li>
            </ul>
            <p>El sistema combina recursos administrativos (resueltos por el INE) y juicios jurisdiccionales (resueltos por el TEPJF).</p>
        `
    },

    {
        tipo: "contenido",
        titulo: "Mapa general — ¿Quién resuelve cada uno?",
        contenido: `
            <p><strong>Recursos administrativos (los resuelve el propio INE):</strong></p>
            <ul>
                <li><strong>RRV</strong> — Recurso de Revisión → Junta o Consejo del INE jerárquicamente superior.</li>
            </ul>
            <p><strong>Juicios jurisdiccionales (los resuelve el TEPJF):</strong></p>
            <ul>
                <li><strong>RAP</strong> — Recurso de Apelación → Sala Superior o Sala Regional del TEPJF.</li>
                <li><strong>JIN</strong> — Juicio de Inconformidad → Sala Regional (diputados y senadores) o Sala Superior (Presidencia).</li>
                <li><strong>Juicio Laboral</strong> — Conflictos laborales INE/servidores → Sala Superior del TEPJF.</li>
            </ul>
            <p><strong>Regla mnemotécnica:</strong> «RRV se queda en casa (INE); los demás suben al TEPJF».</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "Recurso de Revisión (RRV)",
        frente: "¿Qué es el RRV y ante quién se interpone?",
        reverso: "Es un recurso ADMINISTRATIVO que procede contra actos o resoluciones de los órganos del INE que causen perjuicio (excepto del Consejo General). Se interpone ante el órgano que dictó el acto, pero lo resuelve la Junta o Consejo del INE jerárquicamente SUPERIOR. Plazo: 4 días naturales (Art. 35 LGSMIME)."
    },

    {
        tipo: "ejemplo",
        titulo: "Ejemplo práctico — RRV en sede distrital",
        contenido: `
            <p><strong>Situación:</strong> La Junta Distrital Ejecutiva 04 emite un acuerdo que afecta a un partido político en la integración de mesas directivas de casilla.</p>
            <p><strong>Vía correcta:</strong> El partido presenta <strong>Recurso de Revisión (RRV)</strong> ante la propia Junta Distrital, dentro de los 4 días naturales.</p>
            <p><strong>Resuelve:</strong> La Junta Local Ejecutiva (órgano jerárquicamente superior). Si la afectación fuera de un Consejo Local, resolvería el Consejo General del INE.</p>
            <p><strong>Clave SPEN:</strong> El RRV NO procede contra actos del Consejo General del INE — esos van por RAP al TEPJF.</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "Recurso de Apelación (RAP)",
        frente: "¿Cuándo procede el Recurso de Apelación?",
        reverso: "Procede para impugnar: (1) las resoluciones recaídas a un RRV; (2) los actos o resoluciones del Consejo General, del Secretario Ejecutivo o de la Junta General Ejecutiva del INE; (3) el informe del Secretario Ejecutivo sobre los resultados del cómputo de Presidente. Lo resuelve la Sala Superior o Salas Regionales del TEPJF. Plazo: 4 días (Art. 40 LGSMIME)."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 1 — Plazo general de impugnación",
        pregunta: "Conforme al Art. 8 de la LGSMIME, ¿cuál es el plazo genérico para interponer los medios de impugnación electorales?",
        opciones: [
            "A) 3 días hábiles a partir de la notificación",
            "B) 4 días contados a partir del día siguiente a aquel en que se tenga conocimiento del acto impugnado",
            "C) 5 días naturales contados desde la publicación oficial",
            "D) 10 días hábiles a partir del acuerdo"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El plazo genérico es de 4 días contados a partir del día siguiente al en que se tenga conocimiento o se hubiese notificado el acto impugnado (Art. 8 LGSMIME).",
        feedbackError: "Incorrecto. La regla general es de CUATRO DÍAS contados a partir del día siguiente a la notificación o conocimiento del acto (Art. 8 LGSMIME)."
    },

    {
        tipo: "concepto",
        titulo: "Juicio de Inconformidad (JIN)",
        frente: "¿Qué resultados se impugnan vía JIN y quién lo resuelve?",
        reverso: "Procede exclusivamente para impugnar las elecciones federales de: (1) Presidente de los Estados Unidos Mexicanos — resuelve la Sala Superior; (2) Diputados y Senadores por Mayoría Relativa o Representación Proporcional — resuelven las Salas Regionales del TEPJF. Plazo: 4 días contados a partir del día siguiente al término del cómputo correspondiente (Art. 55 LGSMIME)."
    },

    {
        tipo: "formula",
        titulo: "Causales de nulidad en el JIN",
        formula: "Nulidad = Irregularidad GRAVE + DETERMINANTE + No reparable + Acreditada plenamente",
        explicacion: "El JIN puede declarar la nulidad de la votación recibida en una casilla o de toda una elección. Las irregularidades deben ser graves, plenamente acreditadas, no reparables durante la jornada o en etapas posteriores, y determinantes para el resultado. La determinancia puede ser cuantitativa (cambia al ganador) o cualitativa (afecta principios constitucionales como el voto libre y secreto)."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 2 — Procedencia del JIN",
        pregunta: "¿Cuál de las siguientes elecciones NO se puede impugnar mediante el Juicio de Inconformidad federal?",
        opciones: [
            "A) Presidente de los Estados Unidos Mexicanos",
            "B) Diputados federales por Representación Proporcional",
            "C) Senadores de la República por Mayoría Relativa",
            "D) Gobernador de una entidad federativa"
        ],
        respuesta: 3,
        feedbackOk: "Correcto. El JIN federal solo procede contra elecciones FEDERALES (Presidente, diputados y senadores). Las elecciones locales se impugnan vía Juicio de Revisión Constitucional Electoral (JRC) o el medio local correspondiente.",
        feedbackError: "Incorrecto. El JIN federal NO procede contra elecciones locales (gobernador, diputados locales, ayuntamientos); esas se impugnan por JRC o por la vía local."
    },

    {
        tipo: "concepto",
        titulo: "Juicio Laboral",
        frente: "¿Qué controversias resuelve el Juicio Laboral en materia electoral?",
        reverso: "Resuelve los conflictos o diferencias laborales entre el INE y sus servidores públicos (de carrera, de confianza o eventuales), así como entre el TEPJF y sus servidores. Lo conoce y resuelve la SALA SUPERIOR del TEPJF. Procede después de agotar las instancias internas establecidas en el Estatuto del Servicio Profesional Electoral Nacional o en el Estatuto del personal del Tribunal."
    },

    {
        tipo: "ejemplo",
        titulo: "Ejemplo — Juicio Laboral del Vocal Secretario",
        contenido: `
            <p><strong>Situación:</strong> Un Vocal Secretario Distrital es removido de su cargo y considera que la separación violó el Estatuto del SPEN.</p>
            <p><strong>Ruta procesal:</strong></p>
            <ul>
                <li>1. Agota el <strong>recurso de inconformidad</strong> ante la instancia interna del INE prevista en el Estatuto.</li>
                <li>2. Si la resolución le es adversa, promueve <strong>Juicio Laboral</strong> directamente ante la <strong>Sala Superior del TEPJF</strong>.</li>
                <li>3. Plazo: 15 días hábiles contados a partir del día siguiente a la notificación de la resolución que agote la instancia administrativa (Art. 96 LGSMIME).</li>
            </ul>
            <p><strong>Importante:</strong> El Juicio Laboral NO se promueve ante juntas de conciliación ni juzgados laborales ordinarios; es competencia exclusiva del TEPJF.</p>
        `
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 3 — RRV vs. RAP",
        pregunta: "Un partido político desea impugnar un acuerdo del Consejo General del INE que aprobó los lineamientos de fiscalización. ¿Qué medio de impugnación procede?",
        opciones: [
            "A) Recurso de Revisión (RRV) ante la Junta General Ejecutiva",
            "B) Recurso de Apelación (RAP) ante la Sala Superior del TEPJF",
            "C) Juicio de Inconformidad (JIN) ante la Sala Regional",
            "D) Juicio para la Protección de Derechos Político-Electorales (JDC)"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. Los actos del Consejo General del INE se impugnan vía RAP, que resuelve la Sala Superior del TEPJF (Art. 40 LGSMIME).",
        feedbackError: "Incorrecto. El RRV no procede contra actos del Consejo General. La vía correcta es el RECURSO DE APELACIÓN (RAP) ante la Sala Superior del TEPJF."
    },

    {
        tipo: "contenido",
        titulo: "Requisitos comunes de procedencia",
        contenido: `
            <p>Todo medio de impugnación debe cumplir, conforme a los Arts. 9 y 10 de la LGSMIME:</p>
            <ul>
                <li><strong>Forma:</strong> presentarse por escrito ante la autoridad responsable; identificar al actor y su domicilio; firma autógrafa.</li>
                <li><strong>Personalidad y legitimación:</strong> el promovente debe acreditar interés jurídico y representación.</li>
                <li><strong>Definitividad:</strong> haber agotado las instancias previas (no se admite per saltum salvo excepciones).</li>
                <li><strong>Acto reclamado:</strong> debe identificarse con precisión y no estar consentido.</li>
                <li><strong>Agravios:</strong> expresar los hechos, preceptos violados y perjuicios.</li>
                <li><strong>Pruebas:</strong> ofrecerse y aportarse en el escrito inicial.</li>
            </ul>
            <p>El incumplimiento de estos requisitos puede generar el <strong>desechamiento</strong> de plano del medio impugnativo.</p>
        `
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 4 — Competencia del Juicio Laboral",
        pregunta: "Un servidor público del INE inicia un conflicto laboral contra el Instituto. ¿Qué órgano es competente para conocer del Juicio Laboral?",
        opciones: [
            "A) La Junta Federal de Conciliación y Arbitraje",
            "B) La Comisión del SPEN del INE",
            "C) La Sala Superior del Tribunal Electoral del Poder Judicial de la Federación",
            "D) Los tribunales colegiados de Circuito"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. El Juicio Laboral en materia electoral lo resuelve exclusivamente la SALA SUPERIOR del TEPJF (Arts. 94-96 LGSMIME).",
        feedbackError: "Incorrecto. La competencia es exclusiva de la SALA SUPERIOR del TEPJF, no de juntas de conciliación ni de tribunales laborales ordinarios."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 5 — Plazo del Juicio Laboral",
        pregunta: "¿Cuál es el plazo para promover el Juicio Laboral ante la Sala Superior del TEPJF, una vez agotada la instancia interna del INE?",
        opciones: [
            "A) 4 días naturales",
            "B) 10 días hábiles",
            "C) 15 días hábiles",
            "D) 30 días naturales"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. El plazo es de 15 días hábiles contados a partir del día siguiente a la notificación de la resolución que agote la instancia administrativa (Art. 96 LGSMIME).",
        feedbackError: "Incorrecto. El plazo es de QUINCE DÍAS HÁBILES, no aplica el plazo genérico de 4 días por la naturaleza laboral del juicio (Art. 96 LGSMIME)."
    },

    {
        tipo: "ejemplo",
        titulo: "Caso integrado — Cadena impugnativa",
        contenido: `
            <p><strong>Situación:</strong> El Consejo Distrital 12 emite un acuerdo sobre ubicación de casillas. Un partido se inconforma.</p>
            <p><strong>Cadena impugnativa correcta:</strong></p>
            <ul>
                <li>1. <strong>RRV</strong> ante el Consejo Distrital → resuelve el Consejo Local (4 días).</li>
                <li>2. Si el Consejo Local confirma y persiste el agravio: <strong>RAP</strong> ante la Sala Regional del TEPJF (4 días).</li>
                <li>3. Tras la jornada, si afecta resultados: <strong>JIN</strong> contra el cómputo (4 días desde el cómputo).</li>
                <li>4. Recursos extraordinarios contra resoluciones del TEPJF: <strong>Recurso de Reconsideración</strong> ante la Sala Superior (3 días).</li>
            </ul>
            <p><strong>Principio rector:</strong> definitividad y firmeza de etapas. No se puede saltar instancias salvo casos excepcionales reconocidos por el TEPJF (per saltum).</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "Per saltum",
        frente: "¿Qué es el per saltum y cuándo lo admite el TEPJF?",
        reverso: "Es la posibilidad excepcional de saltar una instancia previa cuando agotarla pondría en riesgo la reparación del derecho (por ejemplo, por inminencia de plazos electorales). El TEPJF lo admite caso por caso, exigiendo que el promovente demuestre por qué la vía ordinaria sería materialmente ineficaz para reparar la violación alegada."
    },

    {
        tipo: "resumen",
        titulo: "Puntos clave del Día 32 — Módulo D",
        puntos: [
            "Los medios de impugnación se rigen por la LGSMIME y persiguen legalidad + protección de derechos.",
            "RRV: recurso administrativo, contra actos del INE (excepto Consejo General); resuelve órgano superior del INE; plazo 4 días.",
            "RAP: recurso jurisdiccional contra actos del Consejo General o resolución del RRV; resuelve TEPJF; plazo 4 días.",
            "JIN: impugna resultados de elecciones federales (Presidente, diputados, senadores); plazo 4 días desde el cómputo.",
            "Salas Regionales del TEPJF: diputados y senadores. Sala Superior: Presidencia.",
            "Causales de nulidad (JIN): irregularidades graves, determinantes, no reparables y acreditadas plenamente.",
            "Juicio Laboral: conflictos entre el INE y sus servidores; resuelve la Sala Superior del TEPJF; plazo 15 días hábiles.",
            "Requisitos comunes: forma escrita, legitimación, definitividad, agravios y pruebas.",
            "Per saltum: excepción a la definitividad cuando agotar la instancia ordinaria sería materialmente ineficaz.",
            "Regla mnemotécnica: RRV se queda en el INE; RAP, JIN y Juicio Laboral suben al TEPJF."
        ]
    }

]);

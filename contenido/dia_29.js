registerPresentation(29, 'C', 'Delitos Electorales y Faltas Administrativas', [

    {
        tipo: "titulo",
        modulo: "C",
        titulo: "Delitos Electorales y Faltas Administrativas",
        subtitulo: "Día 29 — 23 de abril de 2026"
    },

    {
        tipo: "contenido",
        titulo: "Marco Normativo",
        contenido: `
            <p>Las conductas ilícitas en materia electoral se regulan en dos vías distintas:</p>
            <ul>
                <li><strong>Ley General en Materia de Delitos Electorales (LGMDE, 2014):</strong> tipifica los <em>delitos</em> que se persiguen ante el Ministerio Público.</li>
                <li><strong>LGIPE (Libro Octavo):</strong> regula las <em>infracciones administrativas</em> que sanciona el INE o el TEPJF.</li>
                <li><strong>Reglamento de Quejas y Denuncias del INE:</strong> detalla el procedimiento sancionador.</li>
            </ul>
            <p>Ambas vías son <strong>independientes y compatibles</strong>: una misma conducta puede dar lugar a sanción penal Y administrativa.</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "La FEDE",
        frente: "¿Qué es la FEDE y quién la integra?",
        reverso: "La Fiscalía Especializada en Delitos Electorales (FEDE) es una unidad de la Fiscalía General de la República (FGR). Investiga y persigue los delitos electorales previstos en la LGMDE. Actúa de oficio o por denuncia ciudadana."
    },

    {
        tipo: "contenido",
        titulo: "Delitos Electorales: Conductas de Ciudadanos",
        contenido: `
            <p>La LGMDE tipifica delitos que pueden cometer los ciudadanos:</p>
            <ul>
                <li>Comprar o vender el voto (coacción directa o indirecta).</li>
                <li>Votar más de una vez o suplantar a otro elector.</li>
                <li>Destruir, alterar o robar material electoral (urnas, boletas, actas).</li>
                <li>Impedir por la fuerza el ejercicio del voto o el desarrollo de la jornada.</li>
                <li>Transportar electores de manera organizada para orientar su voto (<em>acarreo</em>).</li>
                <li>Exhibir la boleta o fotografiarla después de emitir el voto (<em>violación al secreto del voto</em>).</li>
            </ul>
            <p><strong>Pena general:</strong> 1 a 9 años de prisión + multa, según el tipo de delito.</p>
        `
    },

    {
        tipo: "contenido",
        titulo: "Delitos Electorales: Conductas de Servidores Públicos",
        contenido: `
            <p>Las sanciones se agravan cuando el delito lo comete un servidor público:</p>
            <ul>
                <li>Destinar recursos, bienes o personal del erario para apoyar campañas.</li>
                <li>Condicionar programas sociales al voto a favor de un candidato o partido.</li>
                <li>Presionar o amenazar a subordinados para votar en determinado sentido.</li>
                <li>Falsificar documentos o actas electorales.</li>
                <li>Acceder ilegalmente al Registro Federal de Electores (RELE).</li>
            </ul>
            <p><strong>Agravante:</strong> Además de la pena de prisión, se aplica la <strong>inhabilitación definitiva</strong> para ejercer cargos públicos.</p>
        `
    },

    {
        tipo: "formula",
        titulo: "Regla de Acción Penal",
        formula: "Denuncia → FEDE → Averiguación previa → Juicio penal",
        explicacion: "El proceso penal electoral inicia con una denuncia ante la FEDE o el Ministerio Público. La FEDE investiga, integra el expediente y, si hay elementos, ejercita acción penal ante el juez federal competente. Los delitos electorales son federales, de persecución pública."
    },

    {
        tipo: "quiz",
        titulo: "Quiz 1: Delitos Electorales",
        pregunta: "Un servidor público utiliza vehículos oficiales del municipio para trasladar a votantes hacia la casilla y orientarlos a favor de un partido. ¿Qué tipo de ilícito comete?",
        opciones: [
            "A) Solo una infracción administrativa, porque el INE es el único que puede sancionar.",
            "B) Un delito electoral (acarreo + uso indebido de recursos), perseguible penalmente ante la FEDE.",
            "C) Una falta laboral interna que resuelve la contraloría municipal."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El acarreo organizado y el uso de recursos públicos son delitos electorales previstos en la LGMDE, perseguibles ante la FEDE con independencia de la sanción administrativa que el INE imponga.",
        feedbackError: "Incorrecto. Esta conducta configura delito electoral (LGMDE): el acarreo y el uso indebido de recursos del erario son ilícitos penales, no solo administrativos. La FEDE debe investigar."
    },

    {
        tipo: "contenido",
        titulo: "Faltas Administrativas: Concepto y Sujetos",
        contenido: `
            <p>Las <strong>infracciones administrativas</strong> (art. 440 LGIPE) las cometen:</p>
            <ul>
                <li><strong>Partidos políticos</strong> y sus dirigentes.</li>
                <li><strong>Candidatos</strong> (independientes o postulados).</li>
                <li><strong>Precandidatos</strong> durante el período de precampaña.</li>
                <li><strong>Ciudadanos, organizaciones o personas morales</strong> que realicen actos de financiamiento ilegal.</li>
                <li><strong>Concesionarios de radio y televisión</strong> que incumplan pautas del INE.</li>
                <li><strong>Servidores públicos</strong> del INE y órganos desconcentrados.</li>
            </ul>
            <p>El INE tramita el procedimiento, pero <strong>el TEPJF puede revocar o modificar</strong> las resoluciones.</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "PSO vs PES",
        frente: "¿Cuándo aplica el Procedimiento Especial Sancionador (PES) en lugar del Ordinario (PSO)?",
        reverso: "El PES aplica cuando la infracción se difunde en radio, televisión o internet y puede influir en el electorado de manera inmediata (vulneración urgente). Es más rápido (horas/días) y puede ordenar la suspensión de la transmisión. El PSO es para infracciones que no requieren acción inmediata; sigue un proceso más largo con plazos ordinarios."
    },

    {
        tipo: "contenido",
        titulo: "Procedimiento Sancionador Ordinario (PSO)",
        contenido: `
            <p>Etapas del PSO ante el INE:</p>
            <ol>
                <li><strong>Queja o denuncia</strong> ante la Unidad Técnica de lo Contencioso Electoral (UTCE) del INE.</li>
                <li><strong>Admisión</strong> y notificación al presunto infractor.</li>
                <li><strong>Instrucción:</strong> el infractor ofrece pruebas y alegatos.</li>
                <li><strong>Proyecto de resolución</strong> elaborado por la Comisión de Quejas y Denuncias.</li>
                <li><strong>Resolución del Consejo General</strong> del INE (puede absolver o sancionar).</li>
                <li><strong>Impugnación</strong> ante el TEPJF si alguna parte está inconforme.</li>
            </ol>
            <p><strong>Sanciones posibles:</strong> amonestación pública, multa, reducción de financiamiento público, cancelación o suspensión del registro.</p>
        `
    },

    {
        tipo: "ejemplo",
        titulo: "Ejemplo Práctico: Rebase de Tope de Gastos",
        contenido: `
            <p><strong>Situación:</strong> Un partido político supera en un 20% el tope de gastos de campaña fijado por el INE para la elección de diputados federales.</p>
            <p><strong>Tipo de ilícito:</strong> Infracción administrativa (art. 456 LGIPE).</p>
            <p><strong>Procedimiento:</strong> PSO ante el INE. La Comisión de Quejas investiga los informes de gastos.</p>
            <p><strong>Sanción probable:</strong> Multa equivalente al doble del exceso + reducción proporcional del financiamiento público del siguiente año.</p>
            <p><strong>Dato clave:</strong> Si se prueba que el financiamiento excedente provino de fuentes prohibidas (empresas, extranjeros), puede llegar hasta la cancelación de registro.</p>
        `
    },

    {
        tipo: "formula",
        titulo: "Tipos de Sanciones Administrativas",
        formula: "Amonestación → Multa → Reducción de prerrogativas → Suspensión/Cancelación de registro",
        explicacion: "Las sanciones son progresivas según la gravedad de la infracción. La amonestación es para infracciones leves; la cancelación de registro es la máxima sanción y solo aplica para partidos políticos en casos extremos (art. 459 LGIPE). Las multas para partidos se calculan sobre el financiamiento público que reciben."
    },

    {
        tipo: "concepto",
        titulo: "INE vs. TEPJF en Sanciones",
        frente: "¿Qué resuelve el INE y qué resuelve el TEPJF en materia sancionadora?",
        reverso: "El INE (a través del Consejo General) impone las sanciones administrativas en primera instancia. El TEPJF actúa como segunda instancia: revisa y puede confirmar, modificar o revocar las resoluciones del INE cuando se impugnan. En delitos electorales, ninguno de los dos interviene: eso es competencia de la FEDE y los jueces federales."
    },

    {
        tipo: "contenido",
        titulo: "Violencia Política y Delitos Conexos",
        contenido: `
            <p>Conductas que combinan lo penal con lo administrativo:</p>
            <ul>
                <li><strong>Violencia política contra las mujeres en razón de género:</strong> puede ser infracción administrativa (INE) y/o delito (reforma 2020 al Código Penal Federal y leyes generales).</li>
                <li><strong>Propaganda gubernamental en período electoral:</strong> infracción al art. 41 constitucional; el INE la sanciona administrativamente.</li>
                <li><strong>Financiamiento ilegal:</strong> si proviene de recursos de procedencia ilícita, puede sumarse el delito de lavado de dinero (FGR).</li>
                <li><strong>Acceso indebido al Padrón Electoral:</strong> delito LGMDE + violación a datos personales (INAI).</li>
            </ul>
        `
    },

    {
        tipo: "quiz",
        titulo: "Quiz 2: Faltas Administrativas",
        pregunta: "Un concesionario de televisión transmite spots de un partido fuera de los horarios y pautas asignados por el INE durante el periodo de campañas. ¿Qué procedimiento aplica?",
        opciones: [
            "A) Procedimiento Especial Sancionador (PES), porque involucra radio y televisión y requiere acción inmediata.",
            "B) Procedimiento Sancionador Ordinario (PSO), porque la infracción no es urgente.",
            "C) Acción penal ante la FEDE, porque el concesionario cometió un delito electoral."
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Las infracciones en radio y televisión durante campañas se tramitan por PES ante el INE, que puede ordenar la suspensión inmediata de la transmisión irregular.",
        feedbackError: "Incorrecto. La transmisión fuera de pauta en radio/TV durante campañas es una infracción que requiere acción inmediata, por lo que corresponde al PES, no al PSO. No es delito penal, sino infracción administrativa."
    },

    {
        tipo: "contenido",
        titulo: "Diferencias Clave: Delito vs. Infracción Administrativa",
        contenido: `
            <table style="width:100%; border-collapse: collapse; font-size: 0.9em;">
                <tr style="background:#1a237e; color:white;">
                    <th style="padding:6px; border:1px solid #ccc;">Criterio</th>
                    <th style="padding:6px; border:1px solid #ccc;">Delito Electoral</th>
                    <th style="padding:6px; border:1px solid #ccc;">Infracción Administrativa</th>
                </tr>
                <tr>
                    <td style="padding:6px; border:1px solid #ccc;"><strong>Ley base</strong></td>
                    <td style="padding:6px; border:1px solid #ccc;">LGMDE</td>
                    <td style="padding:6px; border:1px solid #ccc;">LGIPE (Libro Octavo)</td>
                </tr>
                <tr style="background:#f5f5f5;">
                    <td style="padding:6px; border:1px solid #ccc;"><strong>Autoridad</strong></td>
                    <td style="padding:6px; border:1px solid #ccc;">FEDE + Juez Federal</td>
                    <td style="padding:6px; border:1px solid #ccc;">INE (1ª inst.) / TEPJF (2ª)</td>
                </tr>
                <tr>
                    <td style="padding:6px; border:1px solid #ccc;"><strong>Sanción</strong></td>
                    <td style="padding:6px; border:1px solid #ccc;">Prisión + multa penal</td>
                    <td style="padding:6px; border:1px solid #ccc;">Multa, reducción prerrogativas, cancel. registro</td>
                </tr>
                <tr style="background:#f5f5f5;">
                    <td style="padding:6px; border:1px solid #ccc;"><strong>Compatibilidad</strong></td>
                    <td style="padding:6px; border:1px solid #ccc;" colspan="2">Ambas vías son independientes; una conducta puede generar ambas sanciones.</td>
                </tr>
            </table>
        `
    },

    {
        tipo: "resumen",
        titulo: "Puntos clave del día",
        puntos: [
            "Los delitos electorales se rigen por la LGMDE (2014) y los investiga la FEDE (FGR).",
            "Las infracciones administrativas las sanciona el INE en primera instancia y el TEPJF en segunda.",
            "El PES aplica cuando la infracción involucra radio, televisión o internet y requiere acción urgente.",
            "El PSO es el procedimiento ordinario para infracciones que no requieren respuesta inmediata.",
            "Los sujetos de infracciones administrativas incluyen partidos, candidatos, ciudadanos, empresas y concesionarios.",
            "Ambas vías (penal y administrativa) son independientes y compatibles: una misma conducta puede generar prisión Y multa/sanción.",
            "Las sanciones administrativas van desde amonestación hasta cancelación de registro de partido."
        ]
    }

]);

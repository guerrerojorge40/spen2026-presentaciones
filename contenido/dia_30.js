registerPresentation(30, 'C', 'Simulacro Parcial Módulo C — Sistema Político y Electoral', [

    {
        tipo: "titulo",
        modulo: "C",
        titulo: "Simulacro Parcial Módulo C",
        subtitulo: "Día 30 — Sistema Político y Electoral · 40 Reactivos de Repaso"
    },

    {
        tipo: "contenido",
        titulo: "Instrucciones del simulacro",
        contenido: `
            <p><strong>Temas cubiertos (Días 21–29):</strong></p>
            <ul>
                <li>Constitución: Arts. 39-41, 99 y 116 (soberanía y forma de gobierno)</li>
                <li>Ciudadanía y derechos político-electorales (Arts. 34-35)</li>
                <li>Estructura orgánica del INE: Consejo General y JGE</li>
                <li>Órganos desconcentrados: Juntas y Consejos Locales/Distritales</li>
                <li>Partidos políticos: registro, prerrogativas y financiamiento</li>
                <li>Proceso electoral federal: etapas y plazos (LGIPE)</li>
                <li>Sistemas de representación: Mayoría Relativa y Representación Proporcional</li>
                <li>Medios de impugnación (LGSMIME): RCU, RAP, JIN, JRC, JDC</li>
                <li>Delitos electorales y faltas administrativas (LGMDE)</li>
            </ul>
            <p><strong>Estrategia:</strong> Lee con cuidado; muchas respuestas incorrectas son plausibles. Confía en el artículo o la norma exacta.</p>
        `
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 1 — Artículo 39 Constitucional",
        pregunta: "Según el artículo 39 de la Constitución, ¿en quién reside esencial y originariamente la soberanía nacional?",
        opciones: [
            "A) En el Congreso de la Unión",
            "B) En el pueblo",
            "C) En los tres Poderes de la Unión",
            "D) En el Presidente de la República"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El Art. 39 establece que la soberanía nacional reside esencial y originariamente en el pueblo.",
        feedbackError: "Incorrecto. El Art. 39 CPEUM: 'La soberanía nacional reside esencial y originariamente en el pueblo.'"
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 2 — Artículo 40 Constitucional",
        pregunta: "El artículo 40 constitucional establece que México se constituye en una República…",
        opciones: [
            "A) Representativa, democrática, laica y federal",
            "B) Representativa, democrática y unitaria",
            "C) Presidencialista, federal y plurinacional",
            "D) Parlamentaria, democrática y federal"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Art. 40: República representativa, democrática, laica y federal.",
        feedbackError: "Incorrecto. Art. 40 CPEUM: 'República representativa, democrática, laica y federal.'"
    },

    {
        tipo: "concepto",
        titulo: "Artículo 41 — Función de los partidos y del INE",
        frente: "¿Qué naturaleza jurídica tienen los partidos políticos según el Art. 41 Constitucional?",
        reverso: "Son entidades de interés público. La ley determina sus normas de registro, derechos, obligaciones y formas de intervención en el proceso electoral. El INE es la autoridad en la materia."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 3 — Artículo 41 Constitucional",
        pregunta: "Según el artículo 41 constitucional, ¿cuál institución tiene a su cargo la organización de las elecciones federales?",
        opciones: [
            "A) La Secretaría de Gobernación",
            "B) El Tribunal Electoral del Poder Judicial de la Federación",
            "C) El Instituto Nacional Electoral",
            "D) La Cámara de Diputados"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. El INE es el organismo público autónomo encargado de organizar las elecciones federales (Art. 41 CPEUM).",
        feedbackError: "Incorrecto. El Art. 41 CPEUM atribuye al INE la organización de elecciones federales."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 4 — Artículo 99 Constitucional",
        pregunta: "El artículo 99 constitucional establece que el Tribunal Electoral será, con la excepción prevista en el Art. 105-II, la máxima autoridad…",
        opciones: [
            "A) Administrativa en materia electoral",
            "B) Jurisdiccional en materia electoral",
            "C) Fiscalizadora de los partidos políticos",
            "D) Normativa del proceso electoral"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El TEPJF es la máxima autoridad jurisdiccional electoral del Poder Judicial de la Federación (Art. 99 CPEUM).",
        feedbackError: "Incorrecto. Art. 99 CPEUM: el TEPJF es la máxima autoridad JURISDICCIONAL en la materia."
    },

    {
        tipo: "concepto",
        titulo: "Ciudadanía — Artículos 34 y 35",
        frente: "¿Cuáles son los dos requisitos del Art. 34 para ser ciudadano mexicano?",
        reverso: "1) Tener la calidad de mexicano. 2) Haber cumplido 18 años. 3) Tener un modo honesto de vivir. (Son tres; los derechos de ciudadanía se ejercen a partir de los 18 años sin importar el estado civil.)"
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 5 — Derechos del ciudadano (Art. 35)",
        pregunta: "¿Cuál de los siguientes NO es un derecho del ciudadano reconocido en el artículo 35 constitucional?",
        opciones: [
            "A) Votar en las elecciones populares",
            "B) Poder ser votado para todos los cargos de elección popular",
            "C) Ejercer el derecho de petición colectiva ante cualquier autoridad",
            "D) Designar a los ministros de la Suprema Corte"
        ],
        respuesta: 3,
        feedbackOk: "Correcto. Designar ministros de la SCJN no es un derecho ciudadano del Art. 35; corresponde al Senado.",
        feedbackError: "Incorrecto. El Art. 35 no otorga a los ciudadanos el poder de designar ministros; eso compete al Senado."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 6 — Artículo 116 Constitucional",
        pregunta: "El artículo 116 constitucional, fracción IV, exige que las elecciones locales se realicen mediante sufragio…",
        opciones: [
            "A) Universal, libre, secreto y directo",
            "B) Universal, libre y público",
            "C) Calificado, libre y secreto",
            "D) Restringido, secreto y directo"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Art. 116-IV: sufragio universal, libre, secreto y directo.",
        feedbackError: "Incorrecto. Art. 116, fr. IV CPEUM: sufragio universal, LIBRE, SECRETO y DIRECTO."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 7 — Consejo General del INE",
        pregunta: "¿Cuántos consejeros electorales con derecho a voto integran el Consejo General del INE (incluyendo al consejero presidente)?",
        opciones: [
            "A) 9",
            "B) 11",
            "C) 13",
            "D) 7"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El Consejo General se integra por 11 consejeros electorales con voto: 1 presidente y 10 consejeros.",
        feedbackError: "Incorrecto. Son 11 consejeros electorales con voto: 1 consejero presidente + 10 consejeros electorales."
    },

    {
        tipo: "concepto",
        titulo: "JGE vs. Consejo General del INE",
        frente: "¿Cuál es la diferencia funcional entre la Junta General Ejecutiva (JGE) y el Consejo General del INE?",
        reverso: "El Consejo General es el órgano SUPERIOR DE DIRECCIÓN (normativo, vota, emite acuerdos). La JGE es el órgano EJECUTIVO: implementa los acuerdos del Consejo. La preside el Consejero Presidente e integra al Secretario Ejecutivo y a los Directores Ejecutivos."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 8 — Secretario Ejecutivo del INE",
        pregunta: "El Secretario Ejecutivo del INE participa en las sesiones del Consejo General con…",
        opciones: [
            "A) Voz y voto",
            "B) Voz pero sin voto",
            "C) Voto pero sin voz",
            "D) Ninguna participación"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El Secretario Ejecutivo y los representantes de partidos participan con voz pero sin voto.",
        feedbackError: "Incorrecto. El Secretario Ejecutivo tiene voz pero NO voto en el Consejo General."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 9 — Órganos desconcentrados del INE",
        pregunta: "¿Cuántos Consejos Distritales tiene el INE en todo el territorio nacional?",
        opciones: [
            "A) 32",
            "B) 200",
            "C) 300",
            "D) 500"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. Hay 300 Consejos Distritales, uno por cada distrito electoral federal uninominal.",
        feedbackError: "Incorrecto. Son 300 Consejos Distritales, correspondientes a los 300 distritos electorales federales uninominales."
    },

    {
        tipo: "concepto",
        titulo: "Financiamiento público de partidos políticos",
        frente: "¿Cómo se distribuye el financiamiento público ordinario entre los partidos políticos con registro?",
        reverso: "30% de forma igualitaria entre todos los partidos con representación en alguna Cámara. 70% en proporción a la votación obtenida en la última elección de diputados de MR. (LGIPE Art. 51)"
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 10 — Financiamiento de partidos",
        pregunta: "Según la LGIPE, ¿qué tipo de financiamiento debe prevalecer sobre los demás en el sostenimiento de los partidos políticos?",
        opciones: [
            "A) El financiamiento privado de militantes",
            "B) El autofinanciamiento",
            "C) El financiamiento público",
            "D) Las aportaciones de candidatos"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. La LGIPE establece que el financiamiento público prevalece sobre el privado.",
        feedbackError: "Incorrecto. La ley ordena que el financiamiento PÚBLICO prevalezca sobre cualquier otro tipo."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 11 — Inicio del proceso electoral",
        pregunta: "¿En qué mes inicia formalmente el proceso electoral federal ordinario según la LGIPE?",
        opciones: [
            "A) Enero del año de la elección",
            "B) Septiembre del año previo a la elección",
            "C) Marzo del año de la elección",
            "D) Octubre del año previo a la elección"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El proceso electoral ordinario inicia en septiembre del año previo al de la elección (LGIPE Art. 225).",
        feedbackError: "Incorrecto. El proceso electoral ordinario comienza en SEPTIEMBRE del año ANTERIOR al de la elección."
    },

    {
        tipo: "ejemplo",
        titulo: "Caso práctico — Etapas del proceso electoral",
        contenido: `
            <p><strong>Situación:</strong> Un ciudadano quiere saber en qué etapa del proceso electoral se registran los candidatos.</p>
            <p><strong>Respuesta correcta:</strong> Los candidatos se registran en la etapa de <strong>preparación de la elección</strong>, durante el periodo de precampaña y campaña electoral, previo al día de la jornada electoral.</p>
            <p><strong>Etapas del proceso electoral federal (LGIPE):</strong></p>
            <ul>
                <li>1. <strong>Preparación de la elección:</strong> registro de candidatos, campañas, logística.</li>
                <li>2. <strong>Jornada electoral:</strong> instalación de casillas, votación, cómputo en casilla.</li>
                <li>3. <strong>Resultados y declaración de validez:</strong> cómputos distritales, declaratorias.</li>
                <li>4. <strong>Dictamen y declaración de validez</strong> por el Consejo General o el TEPJF.</li>
            </ul>
        `
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 12 — Mayoría Relativa",
        pregunta: "¿Cuántos diputados federales se eligen por el principio de Mayoría Relativa?",
        opciones: [
            "A) 200",
            "B) 300",
            "C) 128",
            "D) 500"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. 300 diputados se eligen por Mayoría Relativa, uno por cada distrito electoral federal uninominal.",
        feedbackError: "Incorrecto. Son 300 diputados de MR (uno por cada uno de los 300 distritos uninominales)."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 13 — Representación Proporcional",
        pregunta: "Los 200 diputados de Representación Proporcional se eligen mediante listas regionales distribuidas en…",
        opciones: [
            "A) 5 circunscripciones plurinominales",
            "B) 32 entidades federativas",
            "C) 10 regiones electorales",
            "D) 3 circunscripciones nacionales"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Los 200 diputados de RP se eligen en 5 circunscripciones plurinominales (Art. 53 CPEUM).",
        feedbackError: "Incorrecto. Son 5 CIRCUNSCRIPCIONES PLURINOMINALES para los 200 diputados de RP (Art. 53 CPEUM)."
    },

    {
        tipo: "formula",
        titulo: "Regla de asignación RP — Cociente natural y resto mayor",
        formula: "Cociente Natural = Total de votos válidos ÷ Diputados por asignar",
        explicacion: "Cada partido recibe tantos diputados de RP como veces cabe el cociente natural en su votación. Los escaños restantes se asignan por resto mayor (mayor fracción sobrante). Para acceder a RP el partido debe obtener al menos el 3% de la votación total válida emitida."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 14 — Medios de impugnación (JIN)",
        pregunta: "El Juicio de Inconformidad (JIN) procede para impugnar los resultados de las elecciones de…",
        opciones: [
            "A) Presidente de la República y Senadores",
            "B) Diputados y Senadores electos por Mayoría Relativa",
            "C) Gobernadores y presidentes municipales",
            "D) Consejeros electorales del INE"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El JIN impugna resultados de diputados y senadores por Mayoría Relativa (LGSMIME Art. 53).",
        feedbackError: "Incorrecto. El JIN procede contra resultados de elecciones de DIPUTADOS y SENADORES por MR (LGSMIME)."
    },

    {
        tipo: "concepto",
        titulo: "JDC — Juicio para la Protección de Derechos",
        frente: "¿Qué protege el Juicio para la Protección de los Derechos Político-Electorales del Ciudadano (JDC)?",
        reverso: "Protege el derecho del ciudadano a votar, ser votado, afiliarse libremente a partidos y ejercer cualquier derecho político-electoral. Lo resuelve el TEPJF (Salas Regionales o Sala Superior según el caso)."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 15 — Recurso de Revisión (RCU)",
        pregunta: "El Recurso de Revisión (RCU) en materia electoral federal se interpone ante…",
        opciones: [
            "A) El TEPJF, Sala Superior",
            "B) La Sala Regional del TEPJF más cercana",
            "C) El Consejo General del INE o el órgano superior de dirección del OPL",
            "D) La Suprema Corte de Justicia de la Nación"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. El RCU se interpone ante el Consejo General del INE para impugnar actos de órganos inferiores del Instituto.",
        feedbackError: "Incorrecto. El RCU se interpone ante el Consejo General del INE (órgano superior de dirección), no ante el TEPJF."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 16 — Delitos electorales (LGMDE)",
        pregunta: "¿Cuál de los siguientes actos constituye un delito electoral conforme a la Ley General en Materia de Delitos Electorales?",
        opciones: [
            "A) Votar por un candidato de otro partido diferente al de afiliación",
            "B) Entregar dádivas, dinero o bienes para inducir el sentido del voto",
            "C) Negarse a colaborar como funcionario de casilla una segunda vez",
            "D) Expresar preferencia electoral en redes sociales"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. La compra o coacción del voto mediante dádivas es un delito electoral tipificado en la LGMDE.",
        feedbackError: "Incorrecto. Entregar dádivas para inducir el voto es compra de voto, delito electoral tipificado en la LGMDE."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 17 — Faltas administrativas vs. delitos electorales",
        pregunta: "¿Qué distingue a una falta administrativa electoral de un delito electoral?",
        opciones: [
            "A) Las faltas solo las cometen ciudadanos; los delitos, los funcionarios",
            "B) Las faltas se sancionan en sede administrativa (INE/OPL); los delitos en sede penal (FGR)",
            "C) Las faltas se resuelven en el TEPJF; los delitos en el INE",
            "D) No existe diferencia, ambos se procesan ante el mismo órgano"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. Las faltas se sancionan administrativamente por el INE o los OPL; los delitos los persigue la FGR ante tribunales penales.",
        feedbackError: "Incorrecto. La distinción es la sede: faltas → procedimiento administrativo sancionador (INE); delitos → sede penal (FGR)."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 18 — Procedimiento Sancionador Ordinario",
        pregunta: "¿Quién es competente para sustanciar el Procedimiento Sancionador Ordinario (PSO) ante el INE?",
        opciones: [
            "A) La Unidad Técnica de lo Contencioso Electoral (UTCE)",
            "B) La Comisión de Quejas y Denuncias",
            "C) La Contraloría General del INE",
            "D) El Vocal Secretario del distrito"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. La Comisión de Quejas y Denuncias del INE sustancia el PSO y puede dictar medidas cautelares.",
        feedbackError: "Incorrecto. La Comisión de Quejas y Denuncias del INE es el órgano que sustancia el PSO."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 19 — Causales de nulidad de elección",
        pregunta: "Una elección puede ser declarada nula cuando se acredite que irregularidades reunidas producen un efecto…",
        opciones: [
            "A) Determinante en el resultado y sean generalizadas",
            "B) Menor o parcial en más de 10 casillas",
            "C) Grave únicamente en la jornada electoral",
            "D) Puntual en el escrutinio y cómputo distrital"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. El TEPJF exige que las violaciones sean DETERMINANTES para el resultado y GENERALIZADAS para declarar nulidad.",
        feedbackError: "Incorrecto. Las causales de nulidad requieren irregularidades DETERMINANTES para el resultado y GENERALIZADAS."
    },

    {
        tipo: "quiz",
        titulo: "Reactivo 20 — Principios rectores del INE",
        pregunta: "¿Cuáles son los principios rectores que debe observar el INE en el ejercicio de su función estatal?",
        opciones: [
            "A) Certeza, legalidad, independencia, imparcialidad, máxima publicidad y objetividad",
            "B) Certeza, legalidad, independencia, imparcialidad y objetividad",
            "C) Legalidad, imparcialidad, transparencia, autonomía y equidad",
            "D) Universalidad, legalidad, certeza y autonomía"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. Los cinco principios rectores del INE son: certeza, legalidad, independencia, imparcialidad y objetividad (Art. 41 CPEUM).",
        feedbackError: "Incorrecto. Art. 41 CPEUM: certeza, legalidad, independencia, imparcialidad y objetividad (son CINCO principios)."
    },

    {
        tipo: "resumen",
        titulo: "Puntos clave del Día 30 — Módulo C",
        puntos: [
            "Art. 39: soberanía reside en el pueblo. Art. 40: República representativa, democrática, laica y federal.",
            "Art. 41: partidos son entidades de interés público; el INE organiza las elecciones federales.",
            "Art. 99: el TEPJF es la máxima autoridad jurisdiccional electoral.",
            "Art. 34: ciudadanía desde los 18 años con modo honesto de vivir.",
            "Consejo General: 11 consejeros con voto (1 presidente + 10). Partidos y SE: voz sin voto.",
            "JGE: órgano ejecutivo del INE; implementa acuerdos del Consejo General.",
            "300 Consejos Distritales (MR) + 32 Consejos Locales (1 por entidad).",
            "Financiamiento público prevalece: 30% igualitario + 70% proporcional a votación.",
            "300 diputados por MR + 200 por RP en 5 circunscripciones plurinominales.",
            "Medios de impugnación: JIN (resultados MR), JDC (derechos ciudadanos), RAP (apelación ante TEPJF).",
            "Delito electoral: sede penal (FGR). Falta administrativa: sede administrativa (INE/OPL).",
            "Nulidad de elección: irregularidades DETERMINANTES y GENERALIZADAS."
        ]
    }

]);

// Dia 5 — Vicios de Diccion (Modulo A)
registerPresentation(5, 'A', 'Vicios de Diccion', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Vicios de Diccion",
        subtitulo: "Dia 5 — Modulo A: Lenguaje y Comunicacion | Dequeismo, queismo, pleonasmos, barbarismos y coherencia textual"
    },

    // --- SLIDE 2: Introduccion ---
    {
        tipo: "contenido",
        titulo: "Que son los vicios de diccion?",
        contenido: `<p>Los vicios de diccion son <strong>errores en la construccion o uso del lenguaje</strong> que afectan la claridad, correccion o elegancia de la expresion. El CENEVAL los evalua de forma intensiva en el Modulo A.</p>
        <ul>
            <li><strong>Dequeismo y queismo:</strong> los mas frecuentes en el examen</li>
            <li><strong>Pleonasmos:</strong> redundancias innecesarias</li>
            <li><strong>Barbarismos:</strong> errores en la forma de las palabras</li>
            <li><strong>Solecismos:</strong> errores en la sintaxis</li>
            <li><strong>Coherencia textual:</strong> logica interna del texto</li>
        </ul>
        <p>En el derecho procesal electoral, una preposicion mal colocada puede <strong>cambiar la titularidad o el objeto material de un reclamo</strong>.</p>`
    },

    // --- SLIDE 3: Dequeismo definicion ---
    {
        tipo: "formula",
        titulo: "El Dequeismo: definicion y regla",
        formula: "DEQUEISMO = usar 'de que' cuando el verbo NO exige la preposicion 'de'.",
        explicacion: "Los verbos dicendi (decir, afirmar), cognitivos (pensar, creer, suponer) y volitivos/perceptivos (ver, oir, pedir, solicitar) NO exigen la preposicion 'de'. Decir 'pienso de que' o 'afirmo de que' es siempre incorrecto."
    },

    // --- SLIDE 4: Ejemplos de dequeismo ---
    {
        tipo: "ejemplo",
        titulo: "Dequeismo en contexto electoral",
        contenido: `<p><strong>Errores clasicos penalizables en el CENEVAL:</strong></p>
        <table>
            <tr><th>Incorrecto (Dequeismo)</th><th>Correcto</th></tr>
            <tr><td>"El representante afirmo <strong>de que</strong> no habia condiciones de equidad"</td><td>"El representante afirmo <strong>que</strong> no habia condiciones"</td></tr>
            <tr><td>"Pienso <strong>de que</strong> deben recontarse los votos"</td><td>"Pienso <strong>que</strong> deben recontarse los votos"</td></tr>
            <tr><td>"El capacitador me solicito <strong>de que</strong> firmara la bitacora"</td><td>"Me solicito <strong>que</strong> firmara la bitacora"</td></tr>
            <tr><td>"El tribunal considero <strong>de que</strong> las pruebas eran licitas"</td><td>"El tribunal considero <strong>que</strong> las pruebas eran licitas"</td></tr>
        </table>
        <p><strong>Regla rapida:</strong> Si el verbo responde a la pregunta "que cosa?", no lleva 'de'. Afirmar algo, pensar algo, considerar algo.</p>`
    },

    // --- SLIDE 5: Queismo definicion ---
    {
        tipo: "formula",
        titulo: "El Queismo: definicion y regla",
        formula: "QUEISMO = omitir la preposicion 'de' cuando el verbo SI la exige.",
        explicacion: "Es el error contrario al dequeismo. Verbos como 'alegrarse', 'enterarse', 'convencerse' y sustantivos como 'seguridad', 'esperanza', 'certeza' exigen la preposicion 'de' antes de 'que'. Omitirla es un error gramatical grave."
    },

    // --- SLIDE 6: Ejemplos de queismo ---
    {
        tipo: "ejemplo",
        titulo: "Queismo en contexto electoral",
        contenido: `<p><strong>Errores clasicos de queismo penalizables:</strong></p>
        <table>
            <tr><th>Incorrecto (Queismo)</th><th>Correcto</th></tr>
            <tr><td>"Me alegro <strong>que</strong> hayan finalizado el acta"</td><td>"Me alegro <strong>de que</strong> hayan finalizado el acta"</td></tr>
            <tr><td>"Tengo la seguridad <strong>que</strong> el computo cuadrara"</td><td>"Tengo la seguridad <strong>de que</strong> el computo cuadrara"</td></tr>
            <tr><td>"Estoy convencido <strong>que</strong> el vocal falto a la norma"</td><td>"Estoy convencido <strong>de que</strong> el vocal falto a la norma"</td></tr>
        </table>
        <p><strong>Nota:</strong> El queismo es mas dificil de detectar que el dequeismo porque el hablante intenta sonar "correcto" omitiendo el 'de'.</p>`
    },

    // --- SLIDE 7: El truco de ESO ---
    {
        tipo: "concepto",
        titulo: "El Truco CENEVAL: sustitucion por 'ESO'",
        frente: "Como puedes determinar rapidamente si una oracion necesita 'de que' o solo 'que'?",
        reverso: "Sustituye toda la clausula subordinada (desde el 'que') por el pronombre <strong>'ESO'</strong>. Si la oracion suena logica sin 'de', no lo lleva: 'Pienso eso' (correcto, no lleva 'de'). Si exige la preposicion: 'Me alegro de eso' (correcto, lleva 'de que'). Ejemplo: 'Me entere (de que/que) revocaron la casilla' -> 'Me entere de eso' -> Necesita 'de que'."
    },

    // --- SLIDE 8: Quiz 1 - Dequeismo y queismo ---
    {
        tipo: "quiz",
        titulo: "Deteccion de dequeismo y queismo",
        pregunta: "Cual de las siguientes oraciones NO presenta un vicio gramatical de dequeismo o queismo?",
        opciones: [
            "A) El Vocal Ejecutivo me informo de que la sentencia habia sido publicada ayer.",
            "B) La candidata tiene la firme esperanza que el recuento administrativo le favorezca.",
            "C) Los integrantes del pleno coincidieron en que debia ratificarse el acuerdo emitido el mes pasado por la junta."
        ],
        respuesta: 2,
        feedbackOk: "Correcto. 'Coincidir' exige la preposicion 'en' (coincidieron en eso). La opcion A es dequeismo: se informa algo, no de algo. La opcion B es queismo: se tiene esperanza de algo, no esperanza algo.",
        feedbackError: "La respuesta es C. El verbo 'coincidir' exige 'en' (se coincide en eso). A es dequeismo (informar algo, no de algo). B es queismo (esperanza de algo, no esperanza algo)."
    },

    // --- SLIDE 9: Pleonasmos ---
    {
        tipo: "contenido",
        titulo: "Pleonasmos: la redundancia innecesaria",
        contenido: `<p>El pleonasmo es la <strong>repeticion innecesaria de un concepto</strong> que ya esta contenido en otra palabra de la oracion.</p>
        <table>
            <tr><th>Pleonasmo (incorrecto)</th><th>Forma correcta</th></tr>
            <tr><td>Subir arriba / bajar abajo</td><td>Subir / bajar</td></tr>
            <tr><td>Volver a repetir</td><td>Repetir</td></tr>
            <tr><td>Lapso de tiempo</td><td>Lapso</td></tr>
            <tr><td>Prever con anticipacion</td><td>Prever</td></tr>
            <tr><td>Resultado final total</td><td>Resultado final</td></tr>
            <tr><td>Hechos reales</td><td>Hechos</td></tr>
        </table>
        <p><strong>En contexto electoral:</strong> "El resultado arrojado y emitido por el computo final total de las casillas escrutadas" contiene redundancia excesiva que viola las normas de claridad del SPEN.</p>`
    },

    // --- SLIDE 10: Barbarismos ---
    {
        tipo: "contenido",
        titulo: "Barbarismos: errores en la forma de las palabras",
        contenido: `<p>Un barbarismo es un <strong>error en la escritura, pronunciacion o conjugacion</strong> de una palabra.</p>
        <table>
            <tr><th>Barbarismo</th><th>Forma correcta</th></tr>
            <tr><td>Haiga</td><td>Haya</td></tr>
            <tr><td>Dijistes</td><td>Dijiste</td></tr>
            <tr><td>Nadien</td><td>Nadie</td></tr>
            <tr><td>Preveer</td><td>Prever</td></tr>
            <tr><td>Satisfació</td><td>Satisfizo</td></tr>
            <tr><td>Hubieron problemas</td><td>Hubo problemas</td></tr>
        </table>
        <p><strong>Trampa CENEVAL:</strong> El verbo 'haber' usado como impersonal siempre va en singular: "Hubo irregularidades" (nunca "hubieron irregularidades"). Esta forma aparece frecuentemente en el examen.</p>`
    },

    // --- SLIDE 11: Solecismos ---
    {
        tipo: "concepto",
        titulo: "Solecismos",
        frente: "Que es un solecismo y como se diferencia del barbarismo?",
        reverso: "El <strong>solecismo</strong> es un error en la <strong>sintaxis</strong> (estructura de la oracion), mientras que el barbarismo es un error en la <strong>forma de la palabra</strong>. Ejemplos de solecismo: falta de concordancia ('hubieron problemas' en lugar de 'hubo problemas'), uso incorrecto de preposiciones, o alteracion del orden logico que produce ambiguedad. El dequeismo y el queismo son tipos especificos de solecismo."
    },

    // --- SLIDE 12: Anacoluto ---
    {
        tipo: "ejemplo",
        titulo: "Anacoluto: la oracion que se pierde",
        contenido: `<p>El anacoluto ocurre cuando se <strong>abandona la construccion de una oracion</strong> para iniciar otra, dejando al sujeto original sin verbo principal.</p>
        <p><strong>Error:</strong> "En cuanto a los paquetes no entregados, las multas a los funcionarios deben emitirse."</p>
        <p>Se empieza hablando de los paquetes (tema) pero se los deja "colgados" sintacticamente: nunca se dice que paso con ellos.</p>
        <p><strong>Correccion:</strong> "Con respecto a los paquetes no entregados, se determino multar a los responsables de su custodia."</p>
        <p><strong>Clave CENEVAL:</strong> Cuando leas una oracion larga, verifica que el sujeto inicial tenga un verbo que le corresponda. Si el verbo cambia de sujeto a mitad de la oracion, hay anacoluto.</p>`
    },

    // --- SLIDE 13: Coherencia textual ---
    {
        tipo: "contenido",
        titulo: "Coherencia textual: la logica del texto",
        contenido: `<p>La coherencia evalua que un texto tenga un <strong>esquema logico completo</strong>. Los vicios de coherencia incluyen:</p>
        <ul>
            <li><strong>Redundancia:</strong> repetir la misma idea con diferentes palabras</li>
            <li><strong>Contradiccion:</strong> afirmar algo y luego negarlo sin justificacion</li>
            <li><strong>Cambio abrupto de perspectiva:</strong> pasar de primera a tercera persona sin razon</li>
            <li><strong>Anacoluto:</strong> perdida de la ilacion sintactica (sujeto sin verbo correspondiente)</li>
            <li><strong>Falta de progresion tematica:</strong> el texto no avanza, repite la misma idea</li>
        </ul>
        <p><strong>En el examen:</strong> Las preguntas de coherencia suelen presentar un parrafo con un error logico oculto y pedir que identifiques la oracion problematica.</p>`
    },

    // --- SLIDE 14: Quiz 2 - Vicios diversos ---
    {
        tipo: "quiz",
        titulo: "Identificacion de vicios de diccion",
        pregunta: "Cual de las siguientes oraciones contiene un pleonasmo?",
        opciones: [
            "A) El tribunal determino que la sentencia era firme e inapelable.",
            "B) Los funcionarios de casilla deben prever con anticipacion los problemas logisticos.",
            "C) El representante de partido solicito que se abriera el paquete electoral."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. 'Prever con anticipacion' es un pleonasmo porque 'prever' ya significa 'ver con anticipacion'. La palabra 'anticipacion' es redundante.",
        feedbackError: "La respuesta es B. 'Prever' ya significa 'ver con anticipacion', por lo que anadir 'con anticipacion' es redundante (pleonasmo). Las opciones A y C son oraciones correctas."
    },

    // --- SLIDE 15: Quiz 3 - Truco de ESO ---
    {
        tipo: "quiz",
        titulo: "Aplicacion del truco de sustitucion",
        pregunta: "Aplica el truco de 'ESO' a la oracion: 'El presidente del consejo se aseguro ___ los paquetes estuvieran sellados.' Que forma es correcta?",
        opciones: [
            "A) 'que' (sin preposicion: se aseguro que...)",
            "B) 'de que' (con preposicion: se aseguro de que...)",
            "C) Ambas formas son aceptables"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. Aplicando el truco: 'El presidente se aseguro de eso' suena correcto. 'El presidente se aseguro eso' no suena natural. Por lo tanto, el verbo 'asegurarse' exige la preposicion 'de' y la forma correcta es 'de que'.",
        feedbackError: "La respuesta es B. Prueba con ESO: 'Se aseguro de eso' (correcto) vs 'Se aseguro eso' (incorrecto). El verbo 'asegurarse' rige la preposicion 'de', por lo que la forma correcta es 'se aseguro de que'."
    },

    // --- SLIDE 16: Estrategia CENEVAL ---
    {
        tipo: "contenido",
        titulo: "Como evalua el CENEVAL estos vicios?",
        contenido: `<p>El CENEVAL presenta estos vicios de tres maneras principales:</p>
        <ol>
            <li><strong>Identificacion directa:</strong> "Cual de las siguientes oraciones contiene un error de dequeismo?" — Debes detectar el error entre 3-4 opciones</li>
            <li><strong>Correccion:</strong> "Cual es la forma correcta de la siguiente oracion?" — Te dan la oracion con error y debes elegir la version corregida</li>
            <li><strong>Seleccion negativa:</strong> "Cual de las siguientes oraciones NO presenta un vicio gramatical?" — Todas tienen errores excepto una</li>
        </ol>
        <p><strong>Estrategia clave:</strong> En preguntas de seleccion negativa, descarta primero las opciones con errores evidentes. La opcion correcta suele ser la que tiene la estructura mas "natural" y completa.</p>`
    },

    // --- SLIDE 17: Concepto - Haber impersonal ---
    {
        tipo: "concepto",
        titulo: "El verbo 'haber' impersonal",
        frente: "Por que es incorrecto decir 'hubieron muchos votos nulos' y cual es la forma correcta?",
        reverso: "El verbo <strong>'haber'</strong> usado como impersonal (para indicar existencia) siempre va en <strong>singular</strong>, sin importar que el complemento sea plural. Lo correcto es: 'Hubo muchos votos nulos.' El error de pluralizar el verbo impersonal ('hubieron', 'habemos', 'habian muchos') es un <strong>solecismo</strong> frecuente en el habla cotidiana y una trampa clasica del CENEVAL."
    },

    // --- SLIDE 18: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "DEQUEISMO: usar 'de que' cuando el verbo no lo exige (pienso de que = ERROR)",
            "QUEISMO: omitir 'de' cuando el verbo lo exige (me alegro que = ERROR)",
            "Truco de ESO: sustituye la clausula por 'eso' para saber si necesitas 'de' o no",
            "PLEONASMO: redundancia innecesaria (subir arriba, prever con anticipacion)",
            "BARBARISMO: error en la forma de la palabra (haiga, dijistes, preveer)",
            "SOLECISMO: error en la sintaxis (hubieron problemas, falta de concordancia)",
            "ANACOLUTO: oracion que pierde su ilacion (sujeto sin verbo correspondiente)",
            "El verbo 'haber' impersonal SIEMPRE va en singular: hubo, habia, habra",
            "En el examen, usa el truco de ESO bajo presion para resolver dequeismo/queismo en segundos"
        ]
    }
]);

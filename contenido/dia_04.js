// Dia 4 — Ortografia y Acentuacion RAE 2010 (Modulo A)
registerPresentation(4, 'A', 'Ortografia y Acentuacion RAE 2010', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Ortografia y Acentuacion RAE 2010",
        subtitulo: "Dia 4 — Modulo A: Lenguaje y Comunicacion | Reglas RAE 2010, tilde diacritica, diptongos e hiatos"
    },

    // --- SLIDE 2: Introduccion ---
    {
        tipo: "contenido",
        titulo: "Por que es critico este tema?",
        contenido: `<p>El CENEVAL <strong>no evalua reglas basicas</strong> de acentuacion (agudas, graves, esdrujulas). Su enfoque esta en las <strong>excepciones y los cambios de la RAE 2010</strong>.</p>
        <ul>
            <li>Un error de acentuacion en un Acta Circunstanciada puede <strong>alterar el sentido juridico</strong> del documento</li>
            <li>La normativa vigente es la <strong>Ortografia de la lengua espanola (2010)</strong></li>
            <li>Las preguntas del examen se centran en <strong>trampas clasicas</strong>: solo/este sin tilde, guion sin tilde, aun/aun</li>
        </ul>
        <p>Dominar estos cambios te separa del 80% de aspirantes que siguen usando reglas obsoletas.</p>`
    },

    // --- SLIDE 3: Regla RAE 2010 - solo y demostrativos ---
    {
        tipo: "formula",
        titulo: "Regla de Oro RAE 2010: 'solo' y demostrativos",
        formula: "Las palabras 'solo', 'este', 'ese' y 'aquel' (con femeninos y plurales) NO llevan tilde.",
        explicacion: "Desde la Ortografia de 2010, ni el adverbio 'solo' (= solamente) ni los pronombres demostrativos llevan tilde, incluso si hay ambiguedad. En examenes de opcion multiple, la forma sin tilde es siempre la respuesta correcta."
    },

    // --- SLIDE 4: Ejemplo - solo y demostrativos ---
    {
        tipo: "ejemplo",
        titulo: "Aplicacion electoral: 'solo' y demostrativos",
        contenido: `<p><strong>Contexto:</strong> Redaccion de actas electorales.</p>
        <p><strong>Correcto:</strong> "El candidato entrego <strong>este</strong> expediente <strong>solo</strong> al presidente del Consejo."</p>
        <p><strong>Incorrecto:</strong> "El candidato entrego <strong>este</strong> expediente <strong>solo</strong> al presidente del Consejo." (con tildes en 'este' y 'solo')</p>
        <p><strong>Trampa CENEVAL:</strong> Presentan ambas versiones y el aspirante elige la forma con tilde por costumbre. Recuerda: la RAE 2010 elimino esa tilde de forma categorica.</p>`
    },

    // --- SLIDE 5: Concepto - solo ---
    {
        tipo: "concepto",
        titulo: "Solo: adverbio vs adjetivo",
        frente: "Segun la RAE 2010, cuando 'solo' significa 'solamente', se debe escribir con tilde?",
        reverso: "<strong>No.</strong> Desde 2010, la palabra 'solo' no lleva tilde en ningun caso, ni como adverbio ('solamente') ni como adjetivo ('sin compania'). La rectificacion de 2023 permite la tilde unicamente si hay ambiguedad insalvable y el autor lo justifica, pero en examenes de opcion multiple la forma sin tilde es la respuesta normativa."
    },

    // --- SLIDE 6: Tilde diacritica ---
    {
        tipo: "contenido",
        titulo: "Tilde diacritica: los pares que debes memorizar",
        contenido: `<table>
            <tr><th>Con tilde</th><th>Funcion</th><th>Sin tilde</th><th>Funcion</th></tr>
            <tr><td><strong>el</strong> (con tilde)</td><td>Pronombre personal</td><td><strong>el</strong></td><td>Articulo</td></tr>
            <tr><td><strong>tu</strong> (con tilde)</td><td>Pronombre personal</td><td><strong>tu</strong></td><td>Posesivo</td></tr>
            <tr><td><strong>mi</strong> (con tilde)</td><td>Pronombre personal</td><td><strong>mi</strong></td><td>Posesivo / nota musical</td></tr>
            <tr><td><strong>si</strong> (con tilde)</td><td>Afirmacion / pronombre</td><td><strong>si</strong></td><td>Condicional</td></tr>
            <tr><td><strong>de</strong> (con tilde)</td><td>Verbo dar</td><td><strong>de</strong></td><td>Preposicion</td></tr>
            <tr><td><strong>te</strong> (con tilde)</td><td>Sustantivo (infusion)</td><td><strong>te</strong></td><td>Pronombre</td></tr>
            <tr><td><strong>se</strong> (con tilde)</td><td>Verbo saber/ser</td><td><strong>se</strong></td><td>Pronombre reflexivo</td></tr>
            <tr><td><strong>mas</strong> (con tilde)</td><td>Adverbio de cantidad</td><td><strong>mas</strong></td><td>Conjuncion adversativa</td></tr>
        </table>`
    },

    // --- SLIDE 7: Aun / Aun ---
    {
        tipo: "formula",
        titulo: "Regla critica: aun vs aun (con y sin tilde)",
        formula: "AUN (con tilde) = todavia. AUN (sin tilde) = incluso, hasta, siquiera.",
        explicacion: "Ejemplo con tilde: 'El PREP aun no arroja resultados definitivos' (= todavia). Ejemplo sin tilde: 'Aun cuando llovio, la casilla se instalo' (= incluso cuando). Esta distincion es una de las trampas mas frecuentes del CENEVAL."
    },

    // --- SLIDE 8: Quiz 1 - Tilde diacritica ---
    {
        tipo: "quiz",
        titulo: "Tilde diacritica en contexto electoral",
        pregunta: "Cual de las siguientes oraciones tiene un uso CORRECTO de la tilde diacritica?",
        opciones: [
            "A) 'Espero que el tribunal de su fallo a tiempo' (de sin tilde)",
            "B) 'A mi no me notificaron del cambio de casilla' (mi con tilde)",
            "C) 'El capacitador dijo que el acta seria valida aun con errores menores' (aun sin tilde, significando 'todavia')"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. 'A mi' con tilde es pronombre personal ('a mi persona'). La A es incorrecta porque 'de' (verbo dar) necesita tilde. La C es incorrecta porque si significa 'todavia', debe llevar tilde: 'aun'.",
        feedbackError: "La respuesta es B. 'Mi' con tilde es pronombre personal. En A, 'de' como verbo dar necesita tilde. En C, si 'aun' significa 'todavia', lleva tilde obligatoria."
    },

    // --- SLIDE 9: Monosilabos ortograficos ---
    {
        tipo: "contenido",
        titulo: "Monosilabos ortograficos: la trampa de 'guion'",
        contenido: `<p>La RAE 2010 declaro que ciertas palabras son <strong>monosilabos ortograficos</strong> y, por tanto, <strong>nunca llevan tilde</strong>:</p>
        <ul>
            <li><strong>guion</strong> (no "guion" con tilde) — se considera monosilabo</li>
            <li><strong>truhan</strong> — diptongo ortografico</li>
            <li><strong>fie, hui, riais</strong> — monosilabos con diptongo o triptongo</li>
            <li><strong>fue, dio, vio</strong> — monosilabos clasicos sin tilde</li>
        </ul>
        <p><strong>Alerta CENEVAL:</strong> Quien escriba "guion" con tilde comete un error segun la norma vigente. Esta es una pregunta recurrente.</p>`
    },

    // --- SLIDE 10: Concepto - hiato vs diptongo ---
    {
        tipo: "concepto",
        titulo: "Hiato vs Diptongo",
        frente: "Cual es la diferencia entre hiato y diptongo, y como afecta la acentuacion?",
        reverso: "<strong>Diptongo:</strong> union de una vocal abierta (a, e, o) con una cerrada atona (i, u), o dos cerradas distintas, en la misma silaba (ej: 'cau-sa', 'pei-ne'). <strong>Hiato:</strong> dos vocales contiguas que se separan en silabas distintas (ej: 'ma-iz', 'ba-ul'). El hiato formado por vocal abierta + cerrada tonica siempre lleva tilde en la cerrada, sin importar las reglas generales."
    },

    // --- SLIDE 11: Hiato con tilde ---
    {
        tipo: "ejemplo",
        titulo: "Hiato con tilde en contexto electoral",
        contenido: `<p>Cuando una vocal cerrada tonica (i, u) aparece junto a una vocal abierta (a, e, o), se produce un <strong>hiato</strong> y la vocal cerrada lleva tilde obligatoria:</p>
        <ul>
            <li><strong>pais</strong> (pa-is) — vocal abierta + cerrada tonica</li>
            <li><strong>baul</strong> (ba-ul) — vocal abierta + cerrada tonica</li>
            <li><strong>raiz</strong> (ra-iz) — vocal abierta + cerrada tonica</li>
            <li><strong>oia</strong> (o-i-a) — vocal abierta + cerrada tonica + abierta</li>
        </ul>
        <p><strong>Contexto electoral:</strong> "El pais celebro elecciones." La tilde en 'pais' no obedece a reglas de agudas/graves, sino a la <strong>regla de hiato</strong>.</p>`
    },

    // --- SLIDE 12: Palabras compuestas ---
    {
        tipo: "contenido",
        titulo: "Acentuacion en palabras compuestas",
        contenido: `<p>Tres reglas fundamentales:</p>
        <ol>
            <li><strong>Adverbios en -mente:</strong> conservan la tilde del adjetivo base.
                <ul>
                    <li>Rapida + mente = <strong>rapidamente</strong> (conserva tilde)</li>
                    <li>Legal + mente = <strong>legalmente</strong> (no tenia tilde, no la lleva)</li>
                </ul>
            </li>
            <li><strong>Compuestas sin guion:</strong> solo el segundo elemento conserva su tilde.
                <ul>
                    <li>Decimo + septimo = <strong>decimoseptimo</strong></li>
                </ul>
            </li>
            <li><strong>Compuestas con guion:</strong> ambos elementos conservan su acentuacion.
                <ul>
                    <li><strong>Teorico-practico</strong> (ambos conservan tilde)</li>
                </ul>
            </li>
        </ol>`
    },

    // --- SLIDE 13: Coma criminal ---
    {
        tipo: "formula",
        titulo: "La coma criminal: sujeto y predicado",
        formula: "NUNCA se separa el sujeto del predicado con coma, sin importar la longitud del sujeto.",
        explicacion: "Error clasico: 'Los representantes de los partidos acreditados ante este organo, firmaron bajo protesta.' La coma antes de 'firmaron' es incorrecta porque separa sujeto de predicado. Correccion: eliminar esa coma."
    },

    // --- SLIDE 14: Tipos de coma ---
    {
        tipo: "contenido",
        titulo: "Usos correctos de la coma en el examen",
        contenido: `<ul>
            <li><strong>Coma de inciso:</strong> aisla una aclaracion. Siempre van DOS comas (apertura y cierre).
                <br>"El escrutinio, <strong>que inicio a las seis</strong>, se prolongo cuatro horas."</li>
            <li><strong>Coma vocativa:</strong> aisla el nombre del interlocutor.
                <br>"Proceda con el computo, <strong>senor presidente</strong>."</li>
            <li><strong>Coma ante conjuncion adversativa:</strong> obligatoria antes de pero, mas, sino, aunque.
                <br>"Se avalo el conteo rapido, <strong>pero</strong> los representantes firmaron con reserva."</li>
        </ul>
        <p><strong>Trampa CENEVAL:</strong> Si falta una de las dos comas del inciso, la oracion es incorrecta.</p>`
    },

    // --- SLIDE 15: Grafias - sino vs si no ---
    {
        tipo: "concepto",
        titulo: "Sino vs Si no",
        frente: "Cuando se escribe 'sino' (junto) y cuando 'si no' (separado)?",
        reverso: "<strong>Sino</strong> (junto): conjuncion adversativa que contrapone. 'No gano el partido rojo, sino el azul.' Tambien puede ser sustantivo (destino). <strong>Si no</strong> (separado): conjuncion condicional 'si' + adverbio 'no'. 'Se suspendera la sesion si no hay quorum.' Truco: si puedes insertar una palabra entre 'si' y 'no' (si acaso no...), va separado."
    },

    // --- SLIDE 16: Grafias - porque / por que ---
    {
        tipo: "contenido",
        titulo: "Las cuatro formas de 'porque'",
        contenido: `<table>
            <tr><th>Forma</th><th>Funcion</th><th>Ejemplo electoral</th></tr>
            <tr><td><strong>Por que</strong> (separado, con tilde)</td><td>Pregunta directa o indirecta</td><td>"Por que impugnaron?" / "No explicaron por que impugnaron"</td></tr>
            <tr><td><strong>Porque</strong> (junto, sin tilde)</td><td>Conjuncion causal (respuesta)</td><td>"Impugnaron porque faltaban boletas"</td></tr>
            <tr><td><strong>Porque</strong> (junto, con tilde)</td><td>Sustantivo (= motivo, causa)</td><td>"Comprendo el porque de su inconformidad"</td></tr>
            <tr><td><strong>Por que</strong> (separado, sin tilde)</td><td>Preposicion + relativo (= por el cual)</td><td>"El motivo por que lucharon fue justo"</td></tr>
        </table>
        <p><strong>Truco rapido:</strong> Si puedes sustituir por "la razon", es el sustantivo "porque" con tilde. Si responde a una pregunta, es "porque" causal sin tilde.</p>`
    },

    // --- SLIDE 17: Quiz 2 - Puntuacion ---
    {
        tipo: "quiz",
        titulo: "Puntuacion estilo CENEVAL",
        pregunta: "Seleccione la opcion donde el uso de signos de puntuacion sea CORRECTO en toda la oracion:",
        opciones: [
            "A) Aun cuando los representantes de la coalicion llegaron tarde exigieron que se abriera, el paquete electoral retenido.",
            "B) Aun cuando los representantes de la coalicion llegaron tarde, exigieron que se abriera el paquete electoral retenido.",
            "C) Aun cuando, los representantes de la coalicion llegaron tarde exigieron que se abriera el paquete electoral retenido."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. 'Aun' sin tilde (= incluso). La coma separa la subordinada concesiva del verbo principal. En A hay coma criminal antes del objeto directo. En C la coma esta mal colocada tras el conector.",
        feedbackError: "La respuesta es B. 'Aun' no lleva tilde porque significa 'incluso'. La coma antes de 'exigieron' separa correctamente la clausula subordinada concesiva de la oracion principal."
    },

    // --- SLIDE 18: Quiz 3 - Acentuacion ---
    {
        tipo: "quiz",
        titulo: "Errores de acentuacion RAE 2010",
        pregunta: "Cual de las siguientes palabras esta MAL acentuada segun la RAE 2010?",
        opciones: [
            "A) guion (con tilde)",
            "B) decimoseptimo (tilde solo en la segunda parte)",
            "C) rapidamente (con tilde en la 'a')"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. 'Guion' se considera monosilabo ortografico desde 2010 y NUNCA lleva tilde. Escribir 'guion' con tilde es un error. Las otras dos opciones siguen correctamente sus respectivas reglas.",
        feedbackError: "La respuesta es A. La RAE 2010 declaro que 'guion' es monosilabo ortografico y no lleva tilde. B es correcto (en compuestas sin guion solo el segundo elemento conserva tilde). C es correcto (adverbios en -mente conservan la tilde del adjetivo base)."
    },

    // --- SLIDE 19: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "'Solo', 'este', 'ese', 'aquel' NO llevan tilde segun la RAE 2010, ni siquiera por ambiguedad",
            "'Guion', 'truhan', 'fie', 'hui' son monosilabos ortograficos y nunca se tildan",
            "'Aun' con tilde = todavia. Sin tilde = incluso, hasta, siquiera",
            "El hiato (vocal abierta + cerrada tonica) siempre lleva tilde en la cerrada: pais, raiz, baul",
            "Adverbios en -mente conservan la tilde del adjetivo base: rapidamente, legalmente",
            "La coma criminal (sujeto-predicado) NUNCA es correcta, sin importar la longitud del sujeto",
            "La coma de inciso siempre va en pares: si falta una, hay error",
            "'Sino' junto = adversativa. 'Si no' separado = condicional + negacion",
            "Las cuatro formas de 'porque' tienen funciones distintas: pregunta, causa, sustantivo y relativo"
        ]
    }
]);

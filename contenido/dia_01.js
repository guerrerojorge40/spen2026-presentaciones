// Dia 01 — Introduccion al Modulo A: Comprension Lectora
registerPresentation(1, 'A', 'Introduccion al Modulo A: Comprension Lectora', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Introduccion al Modulo A: Comprension Lectora",
        subtitulo: "Dia 1 — Modulo A: Habilidades de Comunicacion | Niveles de lectura, estructura CENEVAL y diagnostico inicial"
    },

    // --- SLIDE 2: Que es el Modulo A ---
    {
        tipo: "contenido",
        titulo: "El Modulo A: La base de tu examen",
        contenido: `<p>El Modulo A (<strong>Habilidades Transversales de Lenguaje y Comunicacion</strong>) representa el <strong>40% de tu calificacion final</strong>: 60 preguntas de 150 totales.</p>
        <p>Se divide en dos grandes areas:</p>
        <table>
            <tr><th>Area</th><th>Reactivos</th><th>Que evalua</th></tr>
            <tr><td><strong>Comprension Lectora</strong></td><td>30</td><td>Identificar, interpretar y evaluar textos</td></tr>
            <tr><td><strong>Redaccion Indirecta</strong></td><td>30</td><td>Detectar errores gramaticales, ortograficos y de coherencia</td></tr>
        </table>
        <p>Dominar este modulo no solo asegura la mayor cantidad de puntos, sino que afila tus herramientas para leer la LGIPE y los casos practicos de la Vocalia Secretarial.</p>`
    },

    // --- SLIDE 3: El enfoque del examen ---
    {
        tipo: "contenido",
        titulo: "Como evalua CENEVAL este modulo?",
        contenido: `<p>El examen <strong>NO busca evaluar conocimientos memoristicos</strong>. No te preguntaran la definicion de un diptongo o las reglas de un esdrujulo.</p>
        <p>Su enfoque es 100% <strong>transversal</strong>:</p>
        <ul>
            <li>Te presentan un texto (juridico, normativo, argumentativo o literario)</li>
            <li>Te hacen preguntas de opcion multiple con <strong>tres opciones</strong> (A, B, C)</li>
            <li>Debes aplicar razonamiento, no recitar reglas</li>
        </ul>
        <p>Las preguntas estan disenadas para medir tu capacidad de <strong>analisis critico</strong>, no tu memoria.</p>`
    },

    // --- SLIDE 4: Concepto - Comprension Lectora ---
    {
        tipo: "concepto",
        titulo: "Que es la Comprension Lectora?",
        frente: "Que mide exactamente la seccion de Comprension Lectora del examen CENEVAL?",
        reverso: "Mide tu capacidad para <strong>identificar, interpretar y evaluar</strong> la forma y el contenido de textos diversos (literarios, de estudio o de participacion social). No se trata de leer rapido, sino de <strong>diseccionar textos complejos</strong> y extraer informacion precisa en tres niveles: literal, inferencial y critico."
    },

    // --- SLIDE 5: Tres niveles de lectura ---
    {
        tipo: "contenido",
        titulo: "Los tres niveles de Comprension Lectora",
        contenido: `<table>
            <tr><th>Nivel</th><th>Que busca</th><th>Verbos clave CENEVAL</th></tr>
            <tr><td><strong>1. Literal (Identificacion)</strong></td><td>Extraer un dato explicito del texto</td><td>Identificar, senalar, reconocer, enumerar, ubicar</td></tr>
            <tr><td><strong>2. Inferencial (Interpretacion)</strong></td><td>Leer entre lineas, deducir conclusiones logicas</td><td>Deducir, colegir, inferir, concluir, derivar</td></tr>
            <tr><td><strong>3. Critico (Evaluacion)</strong></td><td>Juzgar la tesis, postura y estructura del autor</td><td>Evaluar, determinar el proposito, identificar la postura</td></tr>
        </table>
        <p><strong>Tip estrategico:</strong> Identificar que nivel te estan pidiendo es el <strong>50% de la respuesta correcta</strong>.</p>`
    },

    // --- SLIDE 6: Nivel Literal ---
    {
        tipo: "ejemplo",
        titulo: "Nivel Literal: Lo que el texto DICE",
        contenido: `<p>En el nivel literal, la respuesta esta <strong>explicita</strong> en el texto. No necesitas deducir nada.</p>
        <p><strong>Ejemplo con contexto electoral:</strong></p>
        <p><em>"Las cuotas indigenas aplican en distritos electorales con mas del 40% de poblacion indigena."</em></p>
        <p><strong>Pregunta:</strong> En que tipo de distritos aplica la exigencia de cuotas indigenas?</p>
        <ul>
            <li>A) En cualquier distrito federal del pais</li>
            <li>B) En distritos con mas del 40% de poblacion indigena</li>
            <li>C) En circunscripciones plurinominales</li>
        </ul>
        <p><strong>Respuesta: B.</strong> El dato aparece textualmente. No requiere interpretacion.</p>`
    },

    // --- SLIDE 7: Nivel Inferencial ---
    {
        tipo: "ejemplo",
        titulo: "Nivel Inferencial: Lo que el texto SUGIERE",
        contenido: `<p>Aqui el texto no lo dice directamente, pero te da las <strong>premisas</strong> para llegar a la conclusion.</p>
        <p><strong>Ejemplo con contexto electoral:</strong></p>
        <p><em>"Las acciones afirmativas compensatorias se aplican frente a la marginacion historica de los pueblos originarios."</em></p>
        <p><strong>Pregunta:</strong> Se puede deducir que las acciones afirmativas tienen como proposito ultimo...</p>
        <ul>
            <li>A) Limitar las candidaturas partidistas</li>
            <li>B) Revertir o mitigar condiciones de desigualdad historica</li>
            <li>C) Eliminar la libertad de asociacion politica</li>
        </ul>
        <p><strong>Respuesta: B.</strong> Si la medida es "compensatoria" frente a "marginacion historica", se colige que busca mitigar esa desigualdad.</p>
        <p><strong>Regla de oro:</strong> Una verdadera inferencia CENEVAL no es una suposicion libre. Es una conclusion logica basada estrictamente en el texto. Si necesitas conocimientos externos, <strong>no es la respuesta correcta</strong>.</p>`
    },

    // --- SLIDE 8: Formula del metodo ---
    {
        tipo: "formula",
        titulo: "Regla para resolver reactivos inferenciales",
        formula: "Premisa A (del texto) + Premisa B (del texto) = Conclusion logica (respuesta correcta)",
        explicacion: "La respuesta de inferencia siempre se construye conectando dos o mas premisas que el texto proporciona. Nunca debes agregar informacion externa. Si la conclusion requiere un dato que no esta en el texto, es un <strong>distractor</strong>, no la respuesta."
    },

    // --- SLIDE 9: Nivel Critico ---
    {
        tipo: "contenido",
        titulo: "Nivel Critico: Lo que el autor PRETENDE",
        contenido: `<p>Es el nivel mas alto. Implica evaluar el texto como un todo:</p>
        <ul>
            <li><strong>Proposito:</strong> Para que escribio el autor este texto?</li>
            <li><strong>Tesis central:</strong> Cual es su postura o argumento principal?</li>
            <li><strong>Tono:</strong> Es objetivo, persuasivo, critico?</li>
            <li><strong>Estructura logica:</strong> Sus argumentos se sostienen o tienen falacias?</li>
        </ul>
        <p><strong>Tip para el examen:</strong> La tesis del autor generalmente se encuentra en el <strong>primer o ultimo parrafo</strong> del texto. Los parrafos intermedios contienen los argumentos de soporte.</p>`
    },

    // --- SLIDE 10: Concepto - Redaccion Indirecta ---
    {
        tipo: "concepto",
        titulo: "Que es la Redaccion Indirecta?",
        frente: "A que se refiere CENEVAL con Redaccion Indirecta? Vas a escribir un ensayo en el examen?",
        reverso: "No. En Redaccion Indirecta <strong>no escribes nada desde cero</strong>. Tu rol es ser el <strong>editor</strong> del texto: lees oraciones ya escritas y detectas errores de concordancia, ortografia, coherencia o vicios del lenguaje. Luego seleccionas la opcion que corrige el problema. Se evaluan tres dimensiones: <strong>semantica-gramatical</strong>, <strong>ortografica</strong> y <strong>comunicativa</strong>."
    },

    // --- SLIDE 11: Areas de Redaccion Indirecta ---
    {
        tipo: "contenido",
        titulo: "Las tres dimensiones de la Redaccion Indirecta",
        contenido: `<table>
            <tr><th>Dimension</th><th>Que evalua</th><th>Ejemplo de error</th></tr>
            <tr><td><strong>Semantica y Gramatical</strong></td><td>Concordancia sujeto-verbo, tiempos verbales, conectores logicos</td><td>"El padron de beneficiarios <em>contenian</em> errores" (debe ser <em>contenia</em>)</td></tr>
            <tr><td><strong>Ortografica</strong></td><td>Acentuacion, puntuacion, grafemas conflictivos (v/b, c/s/z)</td><td>"Aquél candidato" (aquel no lleva tilde)</td></tr>
            <tr><td><strong>Comunicativa</strong></td><td>Tono adecuado, vicios del lenguaje (dequeismo, pleonasmo)</td><td>"Resulta evidente <em>de que</em>..." (dequeismo)</td></tr>
        </table>`
    },

    // --- SLIDE 12: Quiz - Nivel de lectura ---
    {
        tipo: "quiz",
        titulo: "Identifica el nivel de comprension",
        pregunta: "La pregunta dice: 'Cual es la postura central del autor respecto a las cuotas indigenas?' A que nivel de comprension lectora corresponde?",
        opciones: [
            "A) Nivel Literal (Identificacion)",
            "B) Nivel Inferencial (Interpretacion)",
            "C) Nivel Critico (Evaluacion)"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. Preguntar por la 'postura central del autor' corresponde al nivel Critico. Los verbos clave son: evaluar, determinar el proposito, identificar la postura.",
        feedbackError: "La respuesta es C. Cuando te preguntan por la postura, tesis o proposito del autor, siempre es nivel Critico (Evaluacion). El nivel Literal busca datos explicitos y el Inferencial busca deducciones logicas."
    },

    // --- SLIDE 13: Quiz - Redaccion Indirecta ---
    {
        tipo: "quiz",
        titulo: "Redaccion Indirecta: Concordancia",
        pregunta: "Cual de las siguientes oraciones tiene concordancia CORRECTA?",
        opciones: [
            "A) La mayoria de los consejeros votaron en contra del proyecto de resolucion.",
            "B) El enjambre de quejas infundadas saturaron la oficialia de partes ayer.",
            "C) Se comprobo que el padron de beneficiarios contenian nombres de personas fallecidas."
        ],
        respuesta: 0,
        feedbackOk: "Correcto. La opcion A aplica la silepsis de numero: un colectivo con complemento en plural admite verbo en plural. Las opciones B y C son incorrectas: 'enjambre saturo' y 'padron contenia' son las formas correctas.",
        feedbackError: "La respuesta es A. 'La mayoria de los consejeros votaron' es correcta por silepsis de numero (concordancia por el sentido). En B, 'enjambre' debe concordar con 'saturo'. En C, 'padron' debe concordar con 'contenia'."
    },

    // --- SLIDE 14: Calendario de estudio ---
    {
        tipo: "contenido",
        titulo: "Calendario integral de los 50 dias",
        contenido: `<p>Esta es la hoja de ruta de preparacion del 26 de marzo al 16 de mayo de 2026:</p>
        <table>
            <tr><th>Fase</th><th>Dias</th><th>Periodo</th><th>Modulo</th><th>Peso</th></tr>
            <tr><td><strong>Fase 1</strong></td><td>1-14</td><td>26 mar - 8 abr</td><td>Lengua Espanola (A)</td><td>40%</td></tr>
            <tr><td><strong>Fase 2</strong></td><td>15-25</td><td>9 abr - 19 abr</td><td>Matematica (B)</td><td>20%</td></tr>
            <tr><td><strong>Fase 3</strong></td><td>26-35</td><td>20 abr - 29 abr</td><td>Sistema Politico (C)</td><td>20%</td></tr>
            <tr><td><strong>Fase 4</strong></td><td>36-45</td><td>30 abr - 9 may</td><td>Vocalia Secretarial (D)</td><td>20%</td></tr>
            <tr><td><strong>Fase 5</strong></td><td>46-50</td><td>10 may - 14 may</td><td>Repaso y Simulacion</td><td>--</td></tr>
        </table>
        <p><strong>Descanso obligatorio:</strong> 15 de mayo | <strong>Examen:</strong> 16 de mayo de 2026</p>`
    },

    // --- SLIDE 15: Concepto - Conectores ---
    {
        tipo: "concepto",
        titulo: "Conectores logicos en el examen",
        frente: "En la oracion: 'El partido no presento la demanda a tiempo; __________, la Sala desecho el medio de impugnacion.' Que tipo de conector necesitas?",
        reverso: "Necesitas un conector de <strong>consecuencia</strong> porque el segundo hecho es resultado directo del primero. La respuesta correcta es <strong>'en consecuencia'</strong>. Los conectores 'sin embargo' y 'a pesar de ello' son de <strong>oposicion o contraste</strong>, lo cual contradice la relacion causa-efecto del enunciado."
    },

    // --- SLIDE 16: Ejemplo - Dequeismo ---
    {
        tipo: "ejemplo",
        titulo: "Detectar el dequeismo: un vicio frecuente",
        contenido: `<p>El <strong>dequeismo</strong> consiste en anadir la preposicion "de" antes de "que" cuando el verbo no la rige.</p>
        <p><strong>Truco para detectarlo:</strong> Sustituye la oracion subordinada por "eso/algo":</p>
        <ul>
            <li>"Resulta evidente <strong>de que</strong> el financiamiento fue ilicito" --> "Resulta evidente <strong>de algo</strong>"? No suena bien. Es dequeismo.</li>
            <li>"Se acordo <strong>de que</strong> era necesario un receso" --> "Se acordo <strong>de algo</strong>"? Si suena bien. NO es dequeismo (acordarse rige "de").</li>
        </ul>
        <p><strong>Correccion del primer caso:</strong> "Resulta evidente <strong>que</strong> el financiamiento fue ilicito."</p>`
    },

    // --- SLIDE 17: Formula - Acentuacion ---
    {
        tipo: "formula",
        titulo: "Regla moderna de acentuacion (RAE 2010)",
        formula: "'solo' (adverbio) ya NO lleva tilde. 'aquel/este/ese' (determinantes) tampoco llevan tilde.",
        explicacion: "Segun la RAE modernizada: <strong>'solo'</strong> no se acentua ni siquiera en casos de ambiguedad. Los demostrativos <strong>'este', 'ese', 'aquel'</strong> como pronombres ya no llevan tilde. Estas reglas aparecen frecuentemente como trampas en el CENEVAL: te presentan opciones con tildes obsoletas para confundirte."
    },

    // --- SLIDE 18: Quiz - Ortografia ---
    {
        tipo: "quiz",
        titulo: "Ortografia y acentuacion",
        pregunta: "Cual de las siguientes oraciones esta escrita de forma ortograficamente correcta?",
        opciones: [
            "A) Hubo un sinfin de errores en el computo del distrito veintitres.",
            "B) El Tribunal fallo a favor de aquel candidato independiente.",
            "C) Solo si se acredita fehacientemente la infraccion, habra lugar a la sancion."
        ],
        respuesta: 2,
        feedbackOk: "Correcto. La opcion C es impecable. En la opcion A, 'sinfin' lleva tilde (aguda) y 'veintitres' tambien. En la opcion B, 'aquel' como determinante ya no lleva tilde segun la RAE.",
        feedbackError: "La respuesta es C. La opcion A tiene errores: 'sinfin' y 'veintitres' llevan tilde. La opcion B usa incorrectamente la tilde en 'aquel' (la RAE ya no lo permite como determinante)."
    },

    // --- SLIDE 19: Bibliografia ---
    {
        tipo: "contenido",
        titulo: "Bibliografia oficial de respaldo",
        contenido: `<p>Para profundizar en los temas del Modulo A, consulta:</p>
        <ol>
            <li><strong>CENEVAL (2022).</strong> Guia para el sustentante EXANI-III</li>
            <li><strong>Real Academia Espanola (2010).</strong> Ortografia de la lengua espanola. Madrid: Espasa</li>
            <li><strong>Real Academia Espanola (2009).</strong> Nueva gramatica de la lengua espanola. Madrid: Espasa</li>
            <li><strong>Diccionario Panamericano de Dudas (RAE).</strong> Consulta de leismo, dequeismo y regimen preposicional</li>
            <li><strong>Guias CENEVAL (Acredita-Bach y Domina-Bach).</strong> Estructura psicometrica de las preguntas de opcion multiple</li>
        </ol>`
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "El Modulo A vale el 40% del examen: 60 reactivos divididos en Comprension Lectora (30) y Redaccion Indirecta (30)",
            "Comprension Lectora tiene tres niveles: Literal (dato explicito), Inferencial (deduccion logica) y Critico (postura del autor)",
            "Identificar que nivel te piden es el 50% de acertar la respuesta",
            "Una inferencia CENEVAL nunca requiere conocimientos externos al texto",
            "Redaccion Indirecta evalua tres dimensiones: semantica-gramatical, ortografica y comunicativa",
            "El dequeismo se detecta sustituyendo la subordinada por 'eso': si no suena bien con 'de', es dequeismo",
            "La RAE 2010 elimino la tilde de 'solo' y de los demostrativos como determinantes",
            "Los conectores logicos se clasifican en: consecuencia, oposicion, adicion y causa"
        ]
    }
]);

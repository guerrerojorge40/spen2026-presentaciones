// Día 01 — Introducción al Módulo A: Comprensión Lectora
registerPresentation(1, 'A', 'Introducción al Módulo A: Comprensión Lectora', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Introducción al Módulo A: Comprensión Lectora",
        subtitulo: "Día 1 — Módulo A: Habilidades de Comunicación | Niveles de lectura, estructura CENEVAL y diagnostico inicial"
    },

    // --- SLIDE 2: Qué es el Módulo A ---
    {
        tipo: "contenido",
        titulo: "El Módulo A: La base de tu examen",
        contenido: `<p>El Módulo A (<strong>Habilidades Transversales de Lenguaje y Comunicación</strong>) representa el <strong>40% de tu calificación final</strong>: 60 preguntas de 150 totales.</p>
        <p>Se divide en dos grandes areas:</p>
        <table>
            <tr><th>Area</th><th>Reactivos</th><th>Que evalua</th></tr>
            <tr><td><strong>Comprensión Lectora</strong></td><td>30</td><td>Identificar, interpretar y evaluar textos</td></tr>
            <tr><td><strong>Redacción Indirecta</strong></td><td>30</td><td>Detectar errores gramaticales, ortograficos y de coherencia</td></tr>
        </table>
        <p>Dominar este módulo no solo asegura la mayor cantidad de puntos, sino que afila tus herramientas para leer la LGIPE y los casos practicos de la Vocalía Secretarial.</p>`
    },

    // --- SLIDE 3: El enfoque del examen ---
    {
        tipo: "contenido",
        titulo: "Como evalua CENEVAL este modulo?",
        contenido: `<p>El examen <strong>NO busca evaluar conocimientos memoristicos</strong>. No te preguntaran la definición de un diptongo o las reglas de un esdrujulo.</p>
        <p>Su enfoque es 100% <strong>transversal</strong>:</p>
        <ul>
            <li>Te presentan un texto (jurídico, normativo, argumentativo o literario)</li>
            <li>Te hacen preguntas de opción multiple con <strong>tres opciones</strong> (A, B, C)</li>
            <li>Debes aplicar razonamiento, no recitar reglas</li>
        </ul>
        <p>Las preguntas están disenadas para medir tu capacidad de <strong>análisis crítico</strong>, no tu memoria.</p>`
    },

    // --- SLIDE 4: Concepto - Comprensión Lectora ---
    {
        tipo: "concepto",
        titulo: "Qué es la Comprensión Lectora?",
        frente: "Que mide exactamente la sección de Comprensión Lectora del examen CENEVAL?",
        reverso: "Mide tu capacidad para <strong>identificar, interpretar y evaluar</strong> la forma y el contenido de textos diversos (literarios, de estudio o de participación social). No se trata de leer rapido, sino de <strong>disecciónar textos complejos</strong> y extraer información precisa en tres niveles: literal, inferencial y crítico."
    },

    // --- SLIDE 5: Tres niveles de lectura ---
    {
        tipo: "contenido",
        titulo: "Los tres niveles de Comprensión Lectora",
        contenido: `<table>
            <tr><th>Nivel</th><th>Que busca</th><th>Verbos clave CENEVAL</th></tr>
            <tr><td><strong>1. Literal (Identificacion)</strong></td><td>Extraer un dato explicito del texto</td><td>Identificar, senalar, reconocer, enumerar, ubicar</td></tr>
            <tr><td><strong>2. Inferencial (Interpretación)</strong></td><td>Leer entre lineas, deducir conclusiones lógicas</td><td>Deducir, colegir, inferir, concluir, derivar</td></tr>
            <tr><td><strong>3. Crítico (Evaluación)</strong></td><td>Juzgar la tesis, postura y estructura del autor</td><td>Evaluar, determinar el proposito, identificar la postura</td></tr>
        </table>
        <p><strong>Tip estrategico:</strong> Identificar que nivel te están pidiendo es el <strong>50% de la respuesta correcta</strong>.</p>`
    },

    // --- SLIDE 6: Nivel Literal ---
    {
        tipo: "ejemplo",
        titulo: "Nivel Literal: Lo que el texto DICE",
        contenido: `<p>En el nivel literal, la respuesta esta <strong>explicita</strong> en el texto. No necesitas deducir nada.</p>
        <p><strong>Ejemplo con contexto electoral:</strong></p>
        <p><em>"Las cuotas indigenas aplican en distritos electorales con más del 40% de población indigena."</em></p>
        <p><strong>Pregunta:</strong> En que tipo de distritos aplica la exigencia de cuotas indigenas?</p>
        <ul>
            <li>A) En cualquier distrito federal del pais</li>
            <li>B) En distritos con más del 40% de población indigena</li>
            <li>C) En circunscripciones plurinominales</li>
        </ul>
        <p><strong>Respuesta: B.</strong> El dato aparece textualmente. No requiere interpretación.</p>`
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
            <li>C) Eliminar la libertad de asociacion política</li>
        </ul>
        <p><strong>Respuesta: B.</strong> Si la medida es "compensatoria" frente a "marginacion historica", se colige que busca mitigar esa desigualdad.</p>
        <p><strong>Regla de oro:</strong> Una verdadera inferencia CENEVAL no es una suposicion libre. Es una conclusion lógica basada estrictamente en el texto. Si necesitas conocimientos externos, <strong>no es la respuesta correcta</strong>.</p>`
    },

    // --- SLIDE 8: Fórmula del método ---
    {
        tipo: "formula",
        titulo: "Regla para resolver reactivos inferenciales",
        formula: "Premisa A (del texto) + Premisa B (del texto) = Conclusion lógica (respuesta correcta)",
        explicacion: "La respuesta de inferencia siempre se construye conectando dos o más premisas que el texto proporcióna. Nunca debes agregar información externa. Si la conclusion requiere un dato que no esta en el texto, es un <strong>distractor</strong>, no la respuesta."
    },

    // --- SLIDE 9: Nivel Crítico ---
    {
        tipo: "contenido",
        titulo: "Nivel Crítico: Lo que el autor PRETENDE",
        contenido: `<p>Es el nivel más alto. Implica evaluar el texto como un todo:</p>
        <ul>
            <li><strong>Proposito:</strong> Para que escribio el autor este texto?</li>
            <li><strong>Tesis central:</strong> Cuál es su postura o argumento principal?</li>
            <li><strong>Tono:</strong> Es objetivo, persuasivo, crítico?</li>
            <li><strong>Estructura lógica:</strong> Sus argumentos se sostienen o tienen falacias?</li>
        </ul>
        <p><strong>Tip para el examen:</strong> La tesis del autor generalmente se encuentra en el <strong>primer o ultimo párrafo</strong> del texto. Los párrafos intermedios contienen los argumentos de soporte.</p>`
    },

    // --- SLIDE 10: Concepto - Redacción Indirecta ---
    {
        tipo: "concepto",
        titulo: "Qué es la Redacción Indirecta?",
        frente: "A que se refiere CENEVAL con Redacción Indirecta? Vas a escribir un ensayo en el examen?",
        reverso: "No. En Redacción Indirecta <strong>no escribes nada desde cero</strong>. Tu rol es ser el <strong>editor</strong> del texto: lees oraciones ya escritas y detectas errores de concordancia, ortografía, coherencia o vicios del lenguaje. Luego selecciónas la opción que corrige el problema. Se evaluan tres dimensiones: <strong>semantica-gramatical</strong>, <strong>ortografica</strong> y <strong>comunicativa</strong>."
    },

    // --- SLIDE 11: Areas de Redacción Indirecta ---
    {
        tipo: "contenido",
        titulo: "Las tres dimensiones de la Redacción Indirecta",
        contenido: `<table>
            <tr><th>Dimension</th><th>Que evalua</th><th>Ejemplo de error</th></tr>
            <tr><td><strong>Semantica y Gramatical</strong></td><td>Concordancia sujeto-verbo, tiempos verbales, conectores lógicos</td><td>"El padron de beneficiarios <em>contenian</em> errores" (debe ser <em>contenia</em>)</td></tr>
            <tr><td><strong>Ortografica</strong></td><td>Acentuación, puntuación, grafemás conflictivos (v/b, c/s/z)</td><td>"Aquél candidato" (aquel no lleva tilde)</td></tr>
            <tr><td><strong>Comunicativa</strong></td><td>Tono adecuado, vicios del lenguaje (dequeismo, pleonasmo)</td><td>"Resulta evidente <em>de que</em>..." (dequeismo)</td></tr>
        </table>`
    },

    // --- SLIDE 12: Quiz - Nivel de lectura ---
    {
        tipo: "quiz",
        titulo: "Identifica el nivel de comprensión",
        pregunta: "La pregunta dice: 'Cuál es la postura central del autor respecto a las cuotas indigenas?' A que nivel de comprensión lectora corresponde?",
        opciones: [
            "A) Nivel Literal (Identificacion)",
            "B) Nivel Inferencial (Interpretación)",
            "C) Nivel Crítico (Evaluación)"
        ],
        respuesta: 2,
        feedbackOk: "Correcto. Preguntar por la 'postura central del autor' corresponde al nivel Crítico. Los verbos clave son: evaluar, determinar el proposito, identificar la postura.",
        feedbackError: "La respuesta es C. Cuando te preguntan por la postura, tesis o proposito del autor, siempre es nivel Crítico (Evaluación). El nivel Literal busca datos explicitos y el Inferencial busca deducciones lógicas."
    },

    // --- SLIDE 13: Quiz - Redacción Indirecta ---
    {
        tipo: "quiz",
        titulo: "Redacción Indirecta: Concordancia",
        pregunta: "Cual de las siguientes oraciones tiene concordancia CORRECTA?",
        opciones: [
            "A) La mayoría de los consejeros votaron en contra del proyecto de resolución.",
            "B) El enjambre de quejas infundadas saturaron la oficialía de partes ayer.",
            "C) Se comprobo que el padron de beneficiarios contenian nombres de personas fallecidas."
        ],
        respuesta: 0,
        feedbackOk: "Correcto. La opción A aplica la silépsis de número: un colectivo con complemento en plural admite verbo en plural. Las opciones B y C son incorrectas: 'enjambre saturo' y 'padron contenia' son las formás correctas.",
        feedbackError: "La respuesta es A. 'La mayoría de los consejeros votaron' es correcta por silépsis de número (concordancia por el sentido). En B, 'enjambre' debe concordar con 'saturo'. En C, 'padron' debe concordar con 'contenia'."
    },

    // --- SLIDE 14: Calendario de estudio ---
    {
        tipo: "contenido",
        titulo: "Calendario integral de los 50 dias",
        contenido: `<p>Esta es la hoja de ruta de preparacion del 26 de marzo al 16 de mayo de 2026:</p>
        <table>
            <tr><th>Fase</th><th>Dias</th><th>Período</th><th>Modulo</th><th>Peso</th></tr>
            <tr><td><strong>Fase 1</strong></td><td>1-14</td><td>26 mar - 8 abr</td><td>Lengua Espanola (A)</td><td>40%</td></tr>
            <tr><td><strong>Fase 2</strong></td><td>15-25</td><td>9 abr - 19 abr</td><td>Matemática (B)</td><td>20%</td></tr>
            <tr><td><strong>Fase 3</strong></td><td>26-35</td><td>20 abr - 29 abr</td><td>Sistema Político (C)</td><td>20%</td></tr>
            <tr><td><strong>Fase 4</strong></td><td>36-45</td><td>30 abr - 9 may</td><td>Vocalía Secretarial (D)</td><td>20%</td></tr>
            <tr><td><strong>Fase 5</strong></td><td>46-50</td><td>10 may - 14 may</td><td>Repaso y Simulacion</td><td>--</td></tr>
        </table>
        <p><strong>Descanso obligatorio:</strong> 15 de mayo | <strong>Examen:</strong> 16 de mayo de 2026</p>`
    },

    // --- SLIDE 15: Concepto - Conectores ---
    {
        tipo: "concepto",
        titulo: "Conectores lógicos en el examen",
        frente: "En la oracion: 'El partido no presento la demanda a tiempo; __________, la Sala desecho el medio de impugnación.' Qué tipo de conector necesitas?",
        reverso: "Necesitas un conector de <strong>consecuencia</strong> porque el segundo hecho es resultado directo del primero. La respuesta correcta es <strong>'en consecuencia'</strong>. Los conectores 'sin embargo' y 'a pesar de ello' son de <strong>oposicion o contraste</strong>, lo cual contradice la relación causa-efecto del enunciado."
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

    // --- SLIDE 17: Fórmula - Acentuación ---
    {
        tipo: "formula",
        titulo: "Regla moderna de acentuación (RAE 2010)",
        formula: "'solo' (adverbio) ya NO lleva tilde. 'aquel/este/ese' (determinantes) tampoco llevan tilde.",
        explicacion: "Según la RAE modernizada: <strong>'solo'</strong> no se acentua ni siquiera en casos de ambiguedad. Los demostrativos <strong>'este', 'ese', 'aquel'</strong> como pronombres ya no llevan tilde. Estas reglas aparecen frecuentemente como trampas en el CENEVAL: te presentan opciones con tildes obsoletas para confundirte."
    },

    // --- SLIDE 18: Quiz - Ortografía ---
    {
        tipo: "quiz",
        titulo: "Ortografía y acentuación",
        pregunta: "Cual de las siguientes oraciones esta escrita de forma ortograficamente correcta?",
        opciones: [
            "A) Hubo un sinfin de errores en el computo del distrito veintitres.",
            "B) El Tribunal fallo a favor de aquel candidato independiente.",
            "C) Solo si se acredita fehacientemente la infracción, habra lugar a la sancion."
        ],
        respuesta: 2,
        feedbackOk: "Correcto. La opción C es impecable. En la opción A, 'sinfin' lleva tilde (aguda) y 'veintitres' también. En la opción B, 'aquel' como determinante ya no lleva tilde según la RAE.",
        feedbackError: "La respuesta es C. La opción A tiene errores: 'sinfin' y 'veintitres' llevan tilde. La opción B usa incorrectamente la tilde en 'aquel' (la RAE ya no lo permite como determinante)."
    },

    // --- SLIDE 19: Bibliografia ---
    {
        tipo: "contenido",
        titulo: "Bibliografia oficial de respaldo",
        contenido: `<p>Para profundizar en los temás del Módulo A, consulta:</p>
        <ol>
            <li><strong>CENEVAL (2022).</strong> Guia para el sustentante EXANI-III</li>
            <li><strong>Real Academia Espanola (2010).</strong> Ortografía de la lengua espanola. Madrid: Espasa</li>
            <li><strong>Real Academia Espanola (2009).</strong> Nueva gramatica de la lengua espanola. Madrid: Espasa</li>
            <li><strong>Dicciónario Panamericano de Dudas (RAE).</strong> Consulta de leismo, dequeismo y régimen preposicional</li>
            <li><strong>Guias CENEVAL (Acredita-Bach y Domina-Bach).</strong> Estructura psicometrica de las preguntas de opción multiple</li>
        </ol>`
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "El Módulo A vale el 40% del examen: 60 reactivos divididos en Comprensión Lectora (30) y Redacción Indirecta (30)",
            "Comprensión Lectora tiene tres niveles: Literal (dato explicito), Inferencial (deduccion lógica) y Crítico (postura del autor)",
            "Identificar que nivel te piden es el 50% de acertar la respuesta",
            "Una inferencia CENEVAL nunca requiere conocimientos externos al texto",
            "Redacción Indirecta evalua tres dimensiones: semantica-gramatical, ortografica y comunicativa",
            "El dequeismo se detecta sustituyendo la subordinada por 'eso': si no suena bien con 'de', es dequeismo",
            "La RAE 2010 elimino la tilde de 'solo' y de los demostrativos como determinantes",
            "Los conectores lógicos se clasifican en: consecuencia, oposicion, adicion y causa"
        ]
    }
]);

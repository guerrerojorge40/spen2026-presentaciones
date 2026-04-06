// Día 02 — Comprensión Lectora Avanzada
registerPresentation(2, 'A', 'Comprensión Lectora Avanzada', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Comprensión Lectora Avanzada",
        subtitulo: "Día 2 — Módulo A: Habilidades de Comunicación | Textos argumentativos, inferencias lógicas y lectura critica"
    },

    // --- SLIDE 2: Introducción estrategica ---
    {
        tipo: "contenido",
        titulo: "Por que profundizar en Comprensión Lectora?",
        contenido: `<p>La Comprensión Lectora constituye la <strong>mitad del Módulo A</strong>: 30 preguntas del examen oficial.</p>
        <p>Como aspirante a Vocal Secretario, tu trabajo diario implica:</p>
        <ul>
            <li>Desentranar acuerdos del Consejo General</li>
            <li>Interpretar jurisprudencia del TEPJF</li>
            <li>Aplicar la LGIPE con precision juridica</li>
        </ul>
        <p>El CENEVAL sabe esto. Por eso no evalua si sabes leer "bien", evalua tu <strong>capacidad para disecciónar textos complejos</strong>.</p>
        <p>Hoy dominaremos las <strong>estrategias de lectura por tipo de texto</strong> y aplicaremos los tres niveles de comprensión a ejercicios avanzados.</p>`
    },

    // --- SLIDE 3: Repaso de los tres niveles ---
    {
        tipo: "contenido",
        titulo: "Repaso rapido: Los tres niveles CENEVAL",
        contenido: `<table>
            <tr><th>Nivel</th><th>Pregunta clave</th><th>Donde buscar la respuesta</th></tr>
            <tr><td><strong>Literal</strong></td><td>Que dice el texto?</td><td>Directamente en una oracion especifica del texto</td></tr>
            <tr><td><strong>Inferencial</strong></td><td>Que sugiere el texto?</td><td>Conectando premisa A + premisa B del texto</td></tr>
            <tr><td><strong>Crítico</strong></td><td>Que pretende el autor?</td><td>En la tesis (primer o ultimo párrafo) y la estructura argumentativa</td></tr>
        </table>
        <p><strong>Principio fundamental:</strong> Si la respuesta requiere conocimientos que no están en el texto, <strong>es un distractor</strong>, no la respuesta correcta.</p>`
    },

    // --- SLIDE 4: Texto argumentativo ---
    {
        tipo: "contenido",
        titulo: "Estrategia: El texto argumentativo (favorito del examen)",
        contenido: `<p>El texto argumentativo busca <strong>convencer, persuadir o demostrar una tesis</strong>. Ejemplos: sentencias, editoriales, dictamenes.</p>
        <p><strong>Como leerlo para el examen:</strong></p>
        <ol>
            <li><strong>Ubica la tesis:</strong> generalmente en el primer o ultimo párrafo</li>
            <li><strong>Identifica los conectores lógico-argumentativos:</strong> "por tanto", "en consecuencia", "sin embargo", "no obstante"</li>
            <li><strong>Aisla las premisas:</strong> separa los argumentos reales de los ejemplos retoricos o datos decorativos</li>
        </ol>
        <p><strong>Tip:</strong> Los conectores son la "columna vertebral" del texto argumentativo. Te dicen la relación entre las ideas: causa, consecuencia, oposicion o adicion.</p>`
    },

    // --- SLIDE 5: Texto expositivo ---
    {
        tipo: "contenido",
        titulo: "Estrategia: El texto expositivo (normativo e informativo)",
        contenido: `<p>El texto expositivo busca <strong>informar de manera objetiva, clasificar o explicar</strong>. Ejemplos: extractos de la LGIPE, manuales, acuerdos del INE.</p>
        <p><strong>Como leerlo para el examen:</strong></p>
        <ol>
            <li><strong>Presta atencion a las clasificaciónes, excepciones y plazos</strong></li>
            <li><strong>Atiende a los verbos modales:</strong> "podrá" (facultativo) vs "deberá" (obligatorio)</li>
            <li><strong>Busca las distinciónes:</strong> órgaños permanentes vs temporales, obligatorio vs discrecional</li>
        </ol>
        <p><strong>Trampa frecuente:</strong> CENEVAL pone como distractor una afirmacion que es parcialmente correcta pero omite una excepcion explicita del texto.</p>`
    },

    // --- SLIDE 6: Concepto - Inferencia verdadera ---
    {
        tipo: "concepto",
        titulo: "Qué es una inferencia verdadera?",
        frente: "Un reactivo dice: 'A partir del texto, se infiere que...' Como distingues una inferencia valida de una suposicion libre?",
        reverso: "Una <strong>inferencia valida CENEVAL</strong> es una conclusion lógica y necesaria basada <strong>estrictamente</strong> en lo expresado en el texto. Es como una operación matemática: Premisa A + Premisa B = Conclusion inevitable. Si necesitas agregar información externa o hacer suposiciones que el texto no respalda, <strong>no es la respuesta correcta</strong>. Es un distractor disfrazado de inferencia."
    },

    // --- SLIDE 7: Ejemplo - Voto electronico ---
    {
        tipo: "ejemplo",
        titulo: "Ejercicio avanzado: El voto electronico",
        contenido: `<p><strong>Fragmento:</strong> <em>"Quienes promueven el voto electronico aseguran que erradicaria los errores humaños en el escrutinio y abatiria los costos de impresion de boletas. El sector crítico advierte que la brecha digital y el riesgo de vulneraciones ciberneticas podrian minar la certeza electoral. Sin transparencia absoluta en el código fuente, el electorado jamás legitimara los resultados."</em></p>
        <p><strong>Reactivo (Nivel Literal):</strong> Cuál es un beneficio economico argueido por los promotores?</p>
        <ul>
            <li>A) La disminucion de la brecha digital</li>
            <li>B) La erradicacion de vulnerabilidades ciberneticas</li>
            <li>C) El abaratamiento de costos de impresion de boletas</li>
        </ul>
        <p><strong>Respuesta: C.</strong> El texto menciona explicitamente "abatiria los costos de impresion". Las opciones A y B son argumentos del sector crítico, no beneficios.</p>`
    },

    // --- SLIDE 8: Quiz - Inferencial ---
    {
        tipo: "quiz",
        titulo: "Inferencia sobre transparencia electoral",
        pregunta: "Del fragmento: 'Sin transparencia absoluta en el código fuente del software, el electorado mexicano jamás legitimara los resultados, por más eficientes que parezcan.' Se deduce que el autor considera que:",
        opciones: [
            "A) El código fuente de las urnas electronicas mexicanas ya fue hackeado",
            "B) La transparencia tecnológica es condicion indispensable para generar confianza publica en el voto digital",
            "C) Los ciudadaños prefieren equivocarse contando a mano antes que confiar en una maquina"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El texto vincula transparencia con legitimacion: sin la primera, no hay la segunda. Es una inferencia lógica directa, no una suposicion.",
        feedbackError: "La respuesta es B. El texto establece una relación directa: sin transparencia no hay legitimacion. Las opciones A y C son suposiciones que el texto no respalda."
    },

    // --- SLIDE 9: Quiz - Nivel crítico ---
    {
        tipo: "quiz",
        titulo: "Postura del autor sobre el voto electronico",
        pregunta: "Del mismo fragmento, la oracion final dice: 'La velocidad tecnológica no puede ni debe atropellar la certeza juridica.' Cuál es la tesis del autor?",
        opciones: [
            "A) Es imperativo acelerar la implementacion para eliminar errores humaños",
            "B) La modernizacion tecnológica no debe implementarse si compromete la certeza electoral",
            "C) El sistema político mexicano jamás aceptara el voto digital por la desconfianza historica"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. La oracion final sintetiza la primacia de la certeza sobre la velocidad tecnológica. Es la tesis del autor.",
        feedbackError: "La respuesta es B. La oracion 'la velocidad tecnológica no puede ni debe atropellar la certeza juridica' es la tesis central: la certeza electoral es más importante que la modernizacion."
    },

    // --- SLIDE 10: Distinguir hechos de opiniones ---
    {
        tipo: "contenido",
        titulo: "Distinguir hechos de opiniones",
        contenido: `<p>En textos argumentativos, es fundamental separar lo que es <strong>dato verificable</strong> de lo que es <strong>juicio del autor</strong>.</p>
        <table>
            <tr><th>Hecho (verificable)</th><th>Opinion (juicio de valor)</th></tr>
            <tr><td>"El PREP reporto 45% de participación"</td><td>"La participación fue decepcionantemente baja"</td></tr>
            <tr><td>"El Tribunal anulo 3 casillas"</td><td>"La anulacion fue una decision desproporciónada"</td></tr>
            <tr><td>"La ley exige 3% de votos para conservar el registro"</td><td>"El umbral del 3% es excesivamente alto"</td></tr>
        </table>
        <p><strong>Tip CENEVAL:</strong> Cuando la pregunta dice "Cual de las siguientes es un hecho?", busca la opción que se pueda comprobar con datos. Las opiniones contienen adjetivos valorativos como "excesivo", "desproporcionado" o "decepcionante".</p>`
    },

    // --- SLIDE 11: Concepto - Falacias ---
    {
        tipo: "concepto",
        titulo: "Falacias argumentativas",
        frente: "Qué es una falacia argumentativa y por que aparece en el examen CENEVAL?",
        reverso: "Una <strong>falacia</strong> es un razonamiento que parece lógico pero es inválido. CENEVAL puede presentarte un texto con falacias y preguntarte cuál es el error lógico. Las más comunes en contexto electoral: <strong>ad hominem</strong> (atacar al oponente, no su argumento), <strong>falsa dicotomia</strong> (presentar solo dos opciones cuando hay mas), <strong>apelacion a la autoridad</strong> (algo es cierto solo porque lo dijo alguien importante) y <strong>generalizacion apresurada</strong> (concluir desde un solo caso)."
    },

    // --- SLIDE 12: Fórmula - Estructura argumentativa ---
    {
        tipo: "formula",
        titulo: "Estructura de un texto argumentativo",
        formula: "Tesis (postura) + Premisas (argumentos de soporte) + Conectores (relación lógica) = Conclusion",
        explicacion: "La <strong>tesis</strong> es la idea central que el autor defiende. Las <strong>premisas</strong> son los argumentos que la sostienen. Los <strong>conectores</strong> establecen la relación entre las ideas (causa, consecuencia, oposicion). La <strong>conclusion</strong> cierra el argumento. Si te preguntan por la tesis, buscala en el primer o ultimo párrafo."
    },

    // --- SLIDE 13: Oficialía Electoral ---
    {
        tipo: "ejemplo",
        titulo: "Ejercicio: Texto normativo (Oficialía Electoral)",
        contenido: `<p><strong>Fragmento:</strong> <em>"La función de Oficialía Electoral se ejerce para dar fe de actos y hechos en materia electoral. Su ejercicio es obligatorio para los Vocales Secretarios, quienes deberán actuar con inmediatez. La fe publica electoral no podrá ser utilizada para dirimir conflictos de indole estrictamente laboral o civil entre el personal del Instituto."</em></p>
        <p><strong>Reactivo (Nivel Literal):</strong> Que ámbito queda expresamente excluido de la Oficialía Electoral?</p>
        <ul>
            <li>A) La propaganda en medios digitales</li>
            <li>B) Los conflictos laborales o civiles entre personal del Instituto</li>
            <li>C) Los actos realizados por partidos durante la jornada electoral</li>
        </ul>
        <p><strong>Respuesta: B.</strong> El texto lo senala explicitamente: "no podrá ser utilizada para dirimir conflictos de indole estrictamente laboral o civil".</p>`
    },

    // --- SLIDE 14: Quiz - Inferencia normativa ---
    {
        tipo: "quiz",
        titulo: "Inferencia sobre Oficialía Electoral",
        pregunta: "Si un Vocal Secretario se niega a dar fe de la colocacion de propaganda ilegal alegando carga de trabajo, se puede concluir que:",
        opciones: [
            "A) Esta actuando correctamente pues tiene discrecionalidad administrativa",
            "B) Esta contraviniendo el caracter obligatorio y el principio de inmediatez de la función",
            "C) Debe ser removido inmediatamente de su cargo por el Consejo General"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El texto califica la función como 'obligatoria' y exige 'inmediatez'. Negarse por carga de trabajo contraviene ambos principios.",
        feedbackError: "La respuesta es B. El texto establece que el ejercicio de la Oficialía es 'obligatorio' y debe hacerse con 'inmediatez'. La opción A es incorrecta (no hay discrecionalidad) y la C va más alla de lo que dice el texto."
    },

    // --- SLIDE 15: Conectores clasificados ---
    {
        tipo: "contenido",
        titulo: "Clasificación de conectores lógicos",
        contenido: `<p>Dominar los conectores es esencial para la Comprensión Lectora y la Redacción Indirecta.</p>
        <table>
            <tr><th>Tipo</th><th>Función</th><th>Conectores</th></tr>
            <tr><td><strong>Consecuencia</strong></td><td>El segundo hecho es resultado del primero</td><td>por tanto, en consecuencia, por lo tanto, de ahi que</td></tr>
            <tr><td><strong>Oposicion</strong></td><td>El segundo hecho contrasta con el primero</td><td>sin embargo, no obstante, a pesar de ello, en cambio</td></tr>
            <tr><td><strong>Causa</strong></td><td>Explica la razon de un hecho</td><td>porque, dado que, puesto que, ya que</td></tr>
            <tr><td><strong>Adicion</strong></td><td>Agrega información al primer hecho</td><td>además, asimismo, también, igualmente</td></tr>
            <tr><td><strong>Condicion</strong></td><td>Establece un requisito</td><td>si, siempre que, a condicion de que, en caso de que</td></tr>
        </table>`
    },

    // --- SLIDE 16: Concepto - Verbos modales ---
    {
        tipo: "concepto",
        titulo: "Verbos modales en textos normativos",
        frente: "En un texto legal, cuál es la diferencia entre 'podrá' y 'deberá'? Por que es crítico para el examen?",
        reverso: "<strong>'Debera'</strong> indica una obligacion: el sujeto esta forzado a realizar la accion. <strong>'Podra'</strong> indica una facultad: el sujeto tiene la opción pero no la obligacion. CENEVAL frecuentemente pone distractores que convierten una facultad en obligacion o viceversa. Si el texto dice 'podrá solicitar' y una opción dice 'esta obligado a solicitar', esa opción es <strong>incorrecta</strong>."
    },

    // --- SLIDE 17: Estrategia de descarte ---
    {
        tipo: "contenido",
        titulo: "Tecnica de descarte: 3 filtros rapidos",
        contenido: `<p>Cuando no identificas la respuesta correcta de inmediato, aplica estos tres filtros:</p>
        <ol>
            <li><strong>Filtro de textualidad:</strong> La opción tiene sustento directo en el texto? Si no, descartala</li>
            <li><strong>Filtro de extremismo:</strong> La opción usa absolutos como "siempre", "jamas", "todos", "ningun"? Generalmente es distractor</li>
            <li><strong>Filtro de alcance:</strong> La opción va más alla de lo que el texto dice? Si agrega información que no esta en el texto, descartala</li>
        </ol>
        <p><strong>Resultado:</strong> Al aplicar los tres filtros, generalmente eliminas dos opciones y quedas con la respuesta correcta.</p>`
    },

    // --- SLIDE 18: Concepto - Tipos de textos literarios ---
    {
        tipo: "concepto",
        titulo: "Textos literarios en el examen",
        frente: "Aparecen textos literarios (poesia, narrativa) en un examen para Vocal Secretario? Que se evalua con ellos?",
        reverso: "Si, CENEVAL puede incluir fragmentos literarios breves. No evaluan tu conocimiento de literatura sino tu capacidad de <strong>interpretación</strong>: identificar el tema central, reconocer figuras retoricas básicas (metáfora, ironia), determinar el tono del autor y distinguir el significado literal del figurado. Es el mismo proceso analitico que aplicas a un texto jurídico, pero con lenguaje poetico."
    },

    // --- SLIDE 19: Fórmula - Método de lectura ---
    {
        tipo: "formula",
        titulo: "Protocolo de lectura para el examen",
        formula: "1) Lee la pregunta PRIMERO --> 2) Lee el texto con la pregunta en mente --> 3) Elimina distractores --> 4) Verifica con el texto",
        explicacion: "Leer la pregunta antes del texto te permite <strong>buscar información dirigida</strong> en lugar de leer a ciegas. Al terminar el texto, elimina opciones que no tienen sustento textual. Finalmente, regresa al texto para verificar que tu respuesta tiene respaldo directo en una oracion o párrafo específico."
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "Comprensión Lectora = 30 reactivos. Identifica siempre que nivel te piden (literal, inferencial o crítico)",
            "Texto argumentativo: ubica la tesis (primer/ultimo párrafo) y los conectores lógicos",
            "Texto expositivo-normativo: atiende a verbos modales ('podrá' vs 'deberá') y excepciones",
            "Una inferencia valida CENEVAL es una conclusion lógica basada solo en el texto, sin información externa",
            "Distingue hechos (datos verificables) de opiniones (juicios de valor con adjetivos valorativos)",
            "Falacias comunes: ad hominem, falsa dicotomia, apelacion a la autoridad, generalizacion apresurada",
            "Conectores: consecuencia (por tanto), oposicion (sin embargo), causa (porque), adicion (además)",
            "Tecnica de descarte: filtra por textualidad, extremismo y alcance para eliminar distractores"
        ]
    }
]);

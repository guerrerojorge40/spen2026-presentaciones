// Dia 03 — Redaccion Indirecta: Concordancia y Silepsis
registerPresentation(3, 'A', 'Redaccion Indirecta: Concordancia y Silepsis', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Redaccion Indirecta: Concordancia y Silepsis",
        subtitulo: "Dia 3 — Modulo A: Habilidades de Comunicacion | Concordancia nominal y verbal, silepsis, errores frecuentes en redaccion oficial"
    },

    // --- SLIDE 2: Que es la Redaccion Indirecta ---
    {
        tipo: "contenido",
        titulo: "Introduccion a la Redaccion Indirecta",
        contenido: `<p>La Redaccion Indirecta evalua tu capacidad para <strong>identificar errores gramaticales o de redaccion</strong> en textos escritos por terceros.</p>
        <p><strong>No vas a escribir un texto desde cero.</strong> Vas a <strong>editar y corregir</strong> oraciones.</p>
        <p>Entre los temas mas evaluados por CENEVAL en esta area estan:</p>
        <ul>
            <li><strong>Concordancia gramatical</strong> (sujeto-verbo, sustantivo-adjetivo)</li>
            <li>Uso correcto de <strong>conectores logicos</strong></li>
            <li><strong>Ortografia y acentuacion</strong></li>
            <li><strong>Vicios del lenguaje</strong> (dequeismo, pleonasmo, solecismo)</li>
        </ul>
        <p>Hoy nos enfocamos en el tema donde mas errores se cometen: la <strong>Concordancia</strong> y su alteracion permitida, la <strong>Silepsis</strong>.</p>`
    },

    // --- SLIDE 3: Que es la concordancia ---
    {
        tipo: "concepto",
        titulo: "Que es la Concordancia?",
        frente: "Que significa concordancia gramatical y por que es tan evaluada en el CENEVAL?",
        reverso: "La <strong>concordancia</strong> es la igualdad de accidentes gramaticales (genero, numero y persona) entre los elementos funcionalmente conectados en una oracion. Es decir, el verbo debe coincidir con el sujeto en numero y persona, y el adjetivo debe coincidir con el sustantivo en genero y numero. Es el tema mas evaluado porque los errores de concordancia son los mas frecuentes en la redaccion administrativa y juridica."
    },

    // --- SLIDE 4: Concordancia nominal ---
    {
        tipo: "contenido",
        titulo: "Concordancia Nominal: sustantivo + adjetivo",
        contenido: `<p>La concordancia nominal exige coincidencia de <strong>genero y numero</strong> entre el sustantivo y sus modificadores.</p>
        <p><strong>Regla general:</strong> El adjetivo pospuesto a varios sustantivos coordinados va en <strong>plural</strong>. Si los sustantivos son de distinto genero, el adjetivo va en <strong>masculino</strong>.</p>
        <table>
            <tr><th>Oracion</th><th>Correcto?</th><th>Por que?</th></tr>
            <tr><td>"La credencial y el formato <strong>nuevos</strong> fueron entregados"</td><td>Si</td><td>Adjetivo plural masculino (genero mixto)</td></tr>
            <tr><td>"La credencial y el formato <strong>nuevas</strong> fueron entregadas"</td><td>No</td><td>El adjetivo asume solo el genero femenino</td></tr>
            <tr><td>"Las actas y las boletas <strong>nuevas</strong> fueron revisadas"</td><td>Si</td><td>Ambos sustantivos son femeninos: adjetivo femenino plural</td></tr>
        </table>`
    },

    // --- SLIDE 5: Concordancia verbal ---
    {
        tipo: "contenido",
        titulo: "Concordancia Verbal: sujeto + verbo",
        contenido: `<p>La concordancia verbal exige coincidencia de <strong>numero y persona</strong> entre el nucleo del sujeto y el verbo.</p>
        <p><strong>Regla fundamental:</strong> El verbo debe concordar con el <strong>nucleo del sintagma nominal sujeto</strong>, no con las palabras que lo acompanan.</p>
        <p><strong>Ejemplo con contexto electoral:</strong></p>
        <ul>
            <li><strong>Correcto:</strong> "El paquete electoral de las cincuenta casillas urbanas <strong>llego</strong> a destiempo." (Concuerda con 'paquete')</li>
            <li><strong>Incorrecto:</strong> "El paquete electoral de las cincuenta casillas urbanas <strong>llegaron</strong> a destiempo." (Error de proximidad con 'casillas')</li>
        </ul>
        <p><strong>Trampa CENEVAL:</strong> El error de concordancia "de oido" ocurre cuando el verbo se acerca al sustantivo mas proximo en lugar del nucleo del sujeto. Es el distractor mas frecuente.</p>`
    },

    // --- SLIDE 6: Formula - Identificar el nucleo ---
    {
        tipo: "formula",
        titulo: "Como identificar el nucleo del sujeto",
        formula: "Sujeto completo = Nucleo (sustantivo principal) + Modificadores (complementos preposicionales, adjetivos)",
        explicacion: "El verbo concuerda SOLO con el <strong>nucleo</strong>. Para identificarlo, preguntate: <strong>Quien realiza la accion?</strong> Elimina mentalmente los complementos preposicionales ('de las casillas', 'del material electoral') y lo que queda es el nucleo. Ejemplo: 'El paquete [de las cincuenta casillas urbanas]' --> nucleo = paquete (singular) --> verbo en singular."
    },

    // --- SLIDE 7: Sujeto compuesto con 'y' ---
    {
        tipo: "ejemplo",
        titulo: "Caso especial: Sujeto compuesto con 'y'",
        contenido: `<p>Cuando dos sustantivos se unen con la conjuncion <strong>'y'</strong>, hay dos posibilidades:</p>
        <p><strong>1. Si se refieren a entes distintos:</strong> el verbo va en <strong>plural</strong>.</p>
        <ul>
            <li>"El Consejero Presidente <strong>y</strong> el Secretario Ejecutivo <strong>presentaran</strong> el informe."</li>
        </ul>
        <p><strong>2. Si se refieren a la misma persona</strong> (un solo ente con dos cargos):</p>
        <ul>
            <li>"El Secretario Tecnico <strong>y</strong> titular del area juridica <strong>fue</strong> recusado."</li>
        </ul>
        <p><strong>Tip para el examen:</strong> Si ves "y" entre dos sustantivos, preguntate: son dos personas o una sola con dos titulos? La respuesta determina si el verbo va en plural o singular.</p>`
    },

    // --- SLIDE 8: Sujeto con disyuntiva 'o' ---
    {
        tipo: "contenido",
        titulo: "Caso especial: Sujeto con conjuncion 'o'",
        contenido: `<p>La conjuncion 'o' tiene tres usos diferentes que afectan la concordancia:</p>
        <table>
            <tr><th>Uso de 'o'</th><th>Verbo</th><th>Ejemplo</th></tr>
            <tr><td><strong>Excluyente</strong> (solo uno actua)</td><td>Singular</td><td>"Fungira como presidente temporal el Vocal A <strong>o</strong> el Vocal B."</td></tr>
            <tr><td><strong>Explicativa</strong> (aclara el termino anterior)</td><td>Singular</td><td>"El Vocal Ejecutivo, <strong>o</strong> representante maximo de la Junta, <strong>dirigira</strong> la sesion."</td></tr>
            <tr><td><strong>Incluyente</strong> (ambos pueden actuar)</td><td>Plural</td><td>"El partido quejoso <strong>o</strong> la coalicion denunciante <strong>deberan</strong> aportar los indicios."</td></tr>
        </table>`
    },

    // --- SLIDE 9: Estructuras partitivas ---
    {
        tipo: "ejemplo",
        titulo: "Estructuras partitivas: la trampa clasica",
        contenido: `<p>Sustantivos colectivos como <strong>la mayoria, una minoria, el resto, la mitad, un grupo, el 20%</strong>, seguidos de <strong>"de + sustantivo en plural"</strong>, admiten concordancia <strong>en singular o en plural</strong>.</p>
        <p><strong>Ambas formas son correctas:</strong></p>
        <ul>
            <li>"Una mayoria de los representantes <strong>decidio</strong> impugnar." (Concordancia gramatical con 'mayoria')</li>
            <li>"Una mayoria de los representantes <strong>decidieron</strong> impugnar." (Concordancia por el sentido con 'representantes')</li>
        </ul>
        <p><strong>Atencion en el examen:</strong> Si CENEVAL te pide identificar un error y ambas opciones (singular y plural) aparecen con estructuras partitivas, <strong>ninguna de las dos es el error</strong>. El error real esta escondido en otra parte de la oracion.</p>`
    },

    // --- SLIDE 10: Que es la silepsis ---
    {
        tipo: "concepto",
        titulo: "Que es la Silepsis?",
        frente: "Que es la silepsis y cuando es una licencia valida vs. un error gramatical?",
        reverso: "La <strong>silepsis</strong> (concordancia <em>ad sensum</em>) es una alteracion de las reglas de concordancia estrictas para atender al <strong>sentido conceptual</strong> en lugar de la forma gramatical. Es valida con estructuras partitivas ('la mayoria de los consejeros votaron') y con el nosotros inclusivo ('los servidores publicos tenemos un deber'). Es un <strong>error</strong> cuando se usa en textos administrativos formales sin justificacion semantica, como 'La persona titular resulto designado' (debe ser 'designada')."
    },

    // --- SLIDE 11: Silepsis de genero ---
    {
        tipo: "contenido",
        titulo: "Silepsis de genero",
        contenido: `<p>Se atribuye a una palabra de cierto genero un adjetivo de genero distinto porque el ente real lo exige.</p>
        <p><strong>Ejemplo retorico clasico:</strong></p>
        <ul>
            <li>"Su Majestad (femenino) esta muy <strong>enfermo</strong> (masculino, porque se refiere al Rey)."</li>
        </ul>
        <p><strong>En el examen CENEVAL (contexto administrativo):</strong></p>
        <table>
            <tr><th>Oracion</th><th>Correcto?</th></tr>
            <tr><td>"La persona titular de la Vocalia resulto <strong>designado</strong>."</td><td><strong>Error.</strong> En redaccion administrativa formal debe concordar con 'persona titular': <strong>designada</strong>.</td></tr>
            <tr><td>"La persona titular de la Vocalia resulto <strong>designada</strong>."</td><td><strong>Correcto.</strong> Concordancia formal con el nucleo 'persona'.</td></tr>
        </table>
        <p><strong>Regla:</strong> En textos formales y administrativos, la silepsis de genero se considera error de redaccion.</p>`
    },

    // --- SLIDE 12: Silepsis de numero ---
    {
        tipo: "contenido",
        titulo: "Silepsis de numero (la mas evaluada)",
        contenido: `<p>Ocurre cuando un sustantivo colectivo singular rige un verbo plural:</p>
        <ul>
            <li>"La multitud de observadores <strong>acordonaron</strong> la entrada." ('Multitud' es singular, 'acordonaron' es plural)</li>
        </ul>
        <p><strong>Silepsis de persona (nosotros inclusivo):</strong></p>
        <ul>
            <li>"Los servidores publicos electorales <strong>tenemos</strong> un deber etico."</li>
            <li>Gramaticalmente: 'Los servidores publicos' = 3ra persona plural = <strong>tienen</strong></li>
            <li>Pero el hablante se incluye: 1ra persona plural = <strong>tenemos</strong></li>
        </ul>
        <p><strong>Esta silepsis es correcta en espanol.</strong> Es importante no marcarla como error en el examen.</p>`
    },

    // --- SLIDE 13: Quiz - Concordancia ---
    {
        tipo: "quiz",
        titulo: "Identifica el error de concordancia",
        pregunta: "Cual de estas oraciones contiene un error de concordancia gramatical?",
        opciones: [
            "A) La Vocalia de Organizacion o el auxiliar electoral designado coordinara el armado de los canceles.",
            "B) La totalidad del material electoral sobrante en las veinticinco casillas supervisadas seran resguardados en las bodegas.",
            "C) El Secretario del Consejo y representante de la oficialia dara fe de la clausura de los trabajos."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. En la opcion B, el nucleo del sujeto es 'totalidad' (femenino singular). El verbo debe ser 'sera resguardada', no 'seran resguardados'. El error ocurre por proximidad con 'casillas supervisadas'.",
        feedbackError: "La respuesta es B. 'La totalidad del material' tiene como nucleo 'totalidad' (femenino singular). El verbo deberia ser 'sera resguardada'. La opcion A es correcta (disyuntiva excluyente = singular) y la C es correcta (misma persona con dos cargos = singular)."
    },

    // --- SLIDE 14: Quiz - Silepsis ---
    {
        tipo: "quiz",
        titulo: "Corregir la silepsis en redaccion formal",
        pregunta: "Cual opcion corrige adecuadamente el siguiente enunciado para un informe oficial: 'Una manada de ciudadanos inconformes ingresaron violentamente por la puerta perimetral y exigieron hablar con el titular.'",
        opciones: [
            "A) Un grupo considerable de ciudadanos inconformes ingreso violentamente por la puerta perimetral y exigio hablar con el titular.",
            "B) Una manada de ciudadanos inconformes ingreso violentamente por la puerta perimetral y exigieron hablar con el titular.",
            "C) Un grupo considerable de ciudadanos inconformes ingresaron violentamente por la puerta perimetral y exigieron hablar con el titular."
        ],
        respuesta: 0,
        feedbackOk: "Correcto. La opcion A corrige dos problemas: 1) sustituye 'manada' (impropio para personas en lenguaje formal) por 'grupo considerable', y 2) mantiene concordancia gramatical rigurosa en singular para sobriedad documental.",
        feedbackError: "La respuesta es A. En redaccion formal administrativa se debe: 1) sustituir 'manada' (termino para ganado) por 'grupo considerable', y 2) mantener la concordancia gramatical estricta (grupo... ingreso... exigio) en lugar de la silepsis."
    },

    // --- SLIDE 15: Errores frecuentes ---
    {
        tipo: "contenido",
        titulo: "Los 5 errores de concordancia mas frecuentes en el CENEVAL",
        contenido: `<ol>
            <li><strong>Error de proximidad:</strong> El verbo concuerda con el sustantivo mas cercano en lugar del nucleo del sujeto. <em>"El informe de las casillas <strong>fueron</strong> entregados"</em> (debe ser: fue entregado)</li>
            <li><strong>Sujeto compuesto con una sola persona:</strong> Poner verbo plural cuando los dos sustantivos se refieren al mismo ente. <em>"El director y responsable <strong>presentaron</strong>"</em> (debe ser: presento)</li>
            <li><strong>Colectivo + complemento plural:</strong> Marcar como error una concordancia por silepsis que en realidad es valida</li>
            <li><strong>Adjetivo con genero mixto:</strong> Usar femenino cuando hay sustantivos de genero distinto. <em>"La boleta y el formato <strong>nuevas</strong>"</em> (debe ser: nuevos)</li>
            <li><strong>Participio en voz pasiva:</strong> No concordar el participio con el sujeto paciente. <em>"Las actas fue revisada"</em> (debe ser: fueron revisadas)</li>
        </ol>`
    },

    // --- SLIDE 16: Concepto - Registro linguistico ---
    {
        tipo: "concepto",
        titulo: "Nivel linguistico culto vs. coloquial",
        frente: "Por que importa el registro linguistico (formal vs. coloquial) en la Redaccion Indirecta del examen?",
        reverso: "CENEVAL evalua tu capacidad de detectar cuando un texto <strong>rompe el registro formal</strong> que exige la redaccion oficial. En documentos del SPEN (actas, informes, sentencias) se debe usar el <strong>nivel linguistico culto administrativo</strong>. Esto significa: evitar coloquialismos ('manada' en lugar de 'grupo'), preferir la concordancia gramatical estricta sobre la silepsis, y usar vocabulario tecnico-juridico apropiado. Si el examen presenta un texto formal con un termino coloquial, ese es el error."
    },

    // --- SLIDE 17: Formula - Prueba de concordancia ---
    {
        tipo: "formula",
        titulo: "Prueba rapida para verificar concordancia",
        formula: "Paso 1: Identifica el nucleo del sujeto --> Paso 2: Elimina complementos --> Paso 3: Verifica que el verbo concuerde en numero y persona con el nucleo",
        explicacion: "Ejemplo practico: 'El paquete [de las cincuenta casillas urbanas] llego a destiempo.' <strong>Paso 1:</strong> Nucleo = 'paquete'. <strong>Paso 2:</strong> Elimina 'de las cincuenta casillas urbanas'. <strong>Paso 3:</strong> 'El paquete llego' = singular con singular. <strong>Concordancia correcta.</strong>"
    },

    // --- SLIDE 18: Ejemplo - Conectores en actas ---
    {
        tipo: "ejemplo",
        titulo: "Conectores en redaccion de actas electorales",
        contenido: `<p>Los conectores logicos son fundamentales en la redaccion de documentos electorales. Seleccionar el incorrecto rompe la coherencia del texto.</p>
        <p><strong>Caso practico:</strong></p>
        <p><em>"El partido politico argumento que se le vulnero su derecho de audiencia durante el desahogo de pruebas; __________, el Vocal Secretario demostro, con el acuse de recibo firmado, que la notificacion se entrego en tiempo y forma."</em></p>
        <table>
            <tr><th>Opcion</th><th>Tipo</th><th>Es correcta?</th></tr>
            <tr><td>A) en consecuencia</td><td>Consecuencia</td><td><strong>No.</strong> El segundo hecho contradice al primero, no es su consecuencia.</td></tr>
            <tr><td>B) por lo tanto</td><td>Consecuencia</td><td><strong>No.</strong> Mismo error: relacion de consecuencia donde hay oposicion.</td></tr>
            <tr><td>C) sin embargo</td><td>Oposicion</td><td><strong>Si.</strong> El primer hecho es una acusacion; el segundo la refuta con evidencia.</td></tr>
        </table>`
    },

    // --- SLIDE 19: Quiz - Conectores ---
    {
        tipo: "quiz",
        titulo: "Selecciona el conector correcto",
        pregunta: "Completa la oracion: 'El computo distrital arrojo una diferencia menor al 1% entre los dos primeros lugares; __________, se ordeno el recuento total de votos conforme al articulo 311 de la LGIPE.'",
        opciones: [
            "A) sin embargo",
            "B) por consiguiente",
            "C) a pesar de ello"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. La relacion es de causa-consecuencia: la diferencia menor al 1% CAUSA que se ordene el recuento. 'Por consiguiente' es un conector de consecuencia.",
        feedbackError: "La respuesta es B. El recuento es una consecuencia directa de la diferencia menor al 1%. Se necesita un conector de consecuencia ('por consiguiente'), no de oposicion ('sin embargo', 'a pesar de ello')."
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "La concordancia exige igualdad de genero, numero y persona entre elementos conectados en la oracion",
            "Concordancia nominal: adjetivo con sustantivos de genero mixto va en masculino plural",
            "Concordancia verbal: el verbo concuerda con el NUCLEO del sujeto, no con el sustantivo mas cercano",
            "Sujeto compuesto con 'y': verbo plural si son entes distintos, singular si es la misma persona con dos cargos",
            "Estructuras partitivas (la mayoria de...) admiten verbo singular O plural: ambas formas son correctas",
            "La silepsis (concordancia ad sensum) es valida en ciertos contextos pero se considera error en redaccion administrativa formal",
            "En textos formales del SPEN: preferir concordancia estricta, evitar coloquialismos, usar vocabulario tecnico",
            "Para verificar concordancia: identifica el nucleo, elimina complementos y verifica que el verbo concuerde"
        ]
    }
]);

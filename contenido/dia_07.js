// Día 7 — Teoría de Conjuntos y Aritmética Básica (Módulo B)
registerPresentation(7, 'B', 'Teoría de Conjuntos y Aritmética Básica', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "B",
        titulo: "Teoría de Conjuntos y Aritmética Básica",
        subtitulo: "Día 7 — Módulo B: Competencia Matemática"
    },

    // --- SLIDE 2: Importancia del Módulo B ---
    {
        tipo: "contenido",
        titulo: "Por que dominar el Módulo B",
        contenido: `<p>El Módulo B representa el <strong>20% de tu evaluación final</strong> en el examen CENEVAL SPEN. Es el bloque donde la mayoría de aspirantes con perfil jurídico pierde puntos por falta de practica.</p>
        <ul>
            <li>La teoría de conjuntos aparece en problemás de <strong>conteo institucional</strong> y diagramás de Venn</li>
            <li>La aritmética básica es el fundamento de <strong>porcentajes, proporciones y razones</strong> electorales</li>
            <li>Dominar este módulo te separa del resto por <strong>margen matematico</strong></li>
        </ul>`
    },

    // --- SLIDE 3: Notacion básica de conjuntos ---
    {
        tipo: "contenido",
        titulo: "Notacion básica de conjuntos",
        contenido: `<p>Antes de operar con conjuntos, necesitas conocer la notacion:</p>
        <table>
            <tr><th>Símbolo</th><th>Nombre</th><th>Significado</th></tr>
            <tr><td><strong>U</strong></td><td>Universo</td><td>Conjunto que contiene todos los elementos de interes</td></tr>
            <tr><td><strong>{ }</strong></td><td>Conjunto vacio</td><td>Conjunto sin elementos</td></tr>
            <tr><td><strong>A union B</strong></td><td>Union</td><td>Elementos en A, en B, o en ambos</td></tr>
            <tr><td><strong>A intersección B</strong></td><td>Intersección</td><td>Elementos en A y en B simultaneamente</td></tr>
            <tr><td><strong>A - B</strong></td><td>Diferencia</td><td>Elementos en A que no están en B</td></tr>
            <tr><td><strong>A'</strong></td><td>Complemento</td><td>Elementos del universo que no están en A</td></tr>
        </table>`
    },

    // --- SLIDE 4: Union de conjuntos ---
    {
        tipo: "concepto",
        titulo: "Union de conjuntos (A union B)",
        frente: "Qué es la union de dos conjuntos A y B?",
        reverso: "Es el conjunto de todos los elementos que pertenecen a A, a B, o a ambos. Representa el conector lógico 'O' inclusivo. Ejemplo: {ciudadaños con credencial} union {ciudadaños con pasaporte} incluye a quienes tienen al menos uno de los dos documentos."
    },

    // --- SLIDE 5: Intersección de conjuntos ---
    {
        tipo: "concepto",
        titulo: "Intersección de conjuntos (A intersección B)",
        frente: "Qué es la intersección de dos conjuntos A y B?",
        reverso: "Es el conjunto de elementos que pertenecen a A y a B simultaneamente. Representa el conector lógico 'Y'. Ejemplo: funcionarios de casilla que TAMBIEN tienen licenciatura."
    },

    // --- SLIDE 6: Diferencia y Complemento ---
    {
        tipo: "contenido",
        titulo: "Diferencia y Complemento",
        contenido: `<p><strong>Diferencia (A - B):</strong> Elementos que están en A pero NO en B.</p>
        <ul>
            <li>Ejemplo: {Vocales de la Junta} - {Vocales que ya tomaron el curso} = Vocales que aun no han tomado el curso</li>
        </ul>
        <p><strong>Complemento (A'):</strong> Todos los elementos del Universo que NO pertenecen a A.</p>
        <ul>
            <li>Ejemplo: Si U = ciudadaños de un distrito, y A = ciudadaños insaculados, entonces A' = ciudadaños no insaculados</li>
            <li>Propiedad clave: el número de elementos de A + el número de elementos de A' = el número de elementos de U</li>
        </ul>`
    },

    // --- SLIDE 7: Fórmula de la union ---
    {
        tipo: "formula",
        titulo: "Fórmula del principio de inclusion-exclusion",
        formula: "n(A union B) = n(A) + n(B) - n(A intersección B)",
        explicacion: "Para contar los elementos en la union de dos conjuntos, se suman los elementos de cada conjunto y se resta la intersección para no contar dos veces a los que están en ambos. Esta fórmula es fundamental para los problemás de diagramás de Venn en el CENEVAL."
    },

    // --- SLIDE 8: Ejemplo electoral con Venn ---
    {
        tipo: "ejemplo",
        titulo: "Problema clasico de diagramás de Venn",
        contenido: `<p><strong>Situación:</strong> En un distrito de 100 ciudadaños, 60 están a favor de la reforma X, y 50 están a favor de la reforma Y. Si 20 están a favor de ambas reformas:</p>
        <ul>
            <li><strong>A favor de al menos una:</strong> n(X union Y) = 60 + 50 - 20 = <strong>90 ciudadaños</strong></li>
            <li><strong>A favor de ninguna:</strong> Complemento de la union = 100 - 90 = <strong>10 ciudadaños</strong></li>
            <li><strong>Solo a favor de X:</strong> 60 - 20 = <strong>40 ciudadaños</strong></li>
            <li><strong>Solo a favor de Y:</strong> 50 - 20 = <strong>30 ciudadaños</strong></li>
        </ul>
        <p>Verifica: 40 + 30 + 20 + 10 = 100. El total coincide con el universo.</p>`
    },

    // --- SLIDE 9: Quiz 1 ---
    {
        tipo: "quiz",
        titulo: "Quiz: Operaciónes con conjuntos",
        pregunta: "En una junta distrital hay 80 empleados. 45 hablan ingles, 30 hablan frances, y 10 hablan ambos idiomas. Cuantos empleados no hablan ni ingles ni frances?",
        opciones: [
            "A) 15 empleados",
            "B) 5 empleados",
            "C) 25 empleados"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Union = 45 + 30 - 10 = 65. Complemento = 80 - 65 = 15 empleados no hablan ninguno de los dos idiomas.",
        feedbackError: "Incorrecto. Aplica la formula: Union = 45 + 30 - 10 = 65. El complemento es 80 - 65 = 15."
    },

    // --- SLIDE 10: Aritmética - Jerarquia de operaciones ---
    {
        tipo: "contenido",
        titulo: "Jerarquia de operaciones: PEMDAS",
        contenido: `<p>En el examen no se permite calculadora cientifica avanzada. Debes dominar el orden correcto de las operaciones:</p>
        <ol>
            <li><strong>P</strong> - Parentesis (resolver primero lo que esta dentro)</li>
            <li><strong>E</strong> - Exponentes (potencias y raices)</li>
            <li><strong>M/D</strong> - Multiplicacion y Division (de izquierda a derecha)</li>
            <li><strong>A/S</strong> - Adicion y Sustraccion (de izquierda a derecha)</li>
        </ol>
        <p><strong>Ejemplo:</strong> 3 + 2 x (4 + 1) al cuadrado = 3 + 2 x 25 = 3 + 50 = <strong>53</strong></p>
        <p>Error comun: hacer 3 + 2 = 5, luego 5 x 25 = 125. Esto es incorrecto porque la multiplicacion tiene prioridad sobre la suma.</p>`
    },

    // --- SLIDE 11: Fracciónes ---
    {
        tipo: "concepto",
        titulo: "Operaciónes con fracciones",
        frente: "Cómo se suman fracciones con diferente denominador?",
        reverso: "Se busca el mínimo comun multiplo (MCM) de los denominadores, se convierte cada fracción para que tenga ese denominador comun, y luego se suman los numeradores. Ejemplo: 1/3 + 1/4 = 4/12 + 3/12 = 7/12."
    },

    // --- SLIDE 12: Porcentajes ---
    {
        tipo: "formula",
        titulo: "Cálculo rapido de porcentajes",
        formula: "Porcentaje = (Parte / Total) x 100",
        explicacion: "Para calcular que porcentaje representa una parte del total, divide la parte entre el total y multiplica por 100. Ejemplo electoral: si de 5000 electores votaron 3250, la participación es (3250 / 5000) x 100 = 65%. Para encontrar la parte: Parte = (Porcentaje / 100) x Total."
    },

    // --- SLIDE 13: Ejemplo de proporciones electorales ---
    {
        tipo: "ejemplo",
        titulo: "Razones y proporciones en contexto electoral",
        contenido: `<p><strong>Situación:</strong> En una elección, el partido A obtuvo 12,000 votos y el partido B obtuvo 8,000 votos. Se van a repartir 10 espacios de radio de manera proporciónal a la votación.</p>
        <ul>
            <li><strong>Total de votos:</strong> 12,000 + 8,000 = 20,000</li>
            <li><strong>Proporción del partido A:</strong> 12,000 / 20,000 = 0.60 (60%)</li>
            <li><strong>Proporción del partido B:</strong> 8,000 / 20,000 = 0.40 (40%)</li>
            <li><strong>Espacios para A:</strong> 0.60 x 10 = 6 espacios</li>
            <li><strong>Espacios para B:</strong> 0.40 x 10 = 4 espacios</li>
        </ul>
        <p>Este tipo de cálculo es comun en la asignación de pautas de radio y television según porcentaje de votación.</p>`
    },

    // --- SLIDE 14: Regla de tres ---
    {
        tipo: "contenido",
        titulo: "Regla de tres simple",
        contenido: `<p>La regla de tres permite encontrar un cuarto valor proporciónal cuando se conocen tres.</p>
        <p><strong>Estructura:</strong></p>
        <table>
            <tr><td>Cantidad A</td><td>corresponde a</td><td>Cantidad B</td></tr>
            <tr><td>Cantidad C</td><td>corresponde a</td><td><strong>X (incognita)</strong></td></tr>
        </table>
        <p><strong>Formula:</strong> X = (C x B) / A</p>
        <p><strong>Ejemplo:</strong> Si 3 funcionarios procesan 150 actas, cuantas actas procesarian 7 funcionarios?</p>
        <p>X = (7 x 150) / 3 = 1050 / 3 = <strong>350 actas</strong></p>`
    },

    // --- SLIDE 15: Quiz 2 ---
    {
        tipo: "quiz",
        titulo: "Quiz: Porcentajes electorales",
        pregunta: "En una sección electoral con 4,000 electores registrados, votaron 2,600. Si 130 votos fueron nulos, que porcentaje de los votos emitidos fueron nulos?",
        opciones: [
            "A) 3.25%",
            "B) 5%",
            "C) 13%"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El porcentaje de votos nulos se calcula sobre los votos emitidos: (130 / 2600) x 100 = 5%.",
        feedbackError: "Cuidado: el porcentaje se calcula sobre los votos EMITIDOS (2,600), no sobre los electores registrados. (130 / 2600) x 100 = 5%."
    },

    // --- SLIDE 16: Quiz 3 ---
    {
        tipo: "quiz",
        titulo: "Quiz: Diagramás de Venn",
        pregunta: "En un grupo de 120 funcionarios electorales, 70 tienen experiencia previa, 50 tienen titulo universitario y 25 tienen ambas caracteristicas. Cuantos funcionarios tienen experiencia previa pero NO titulo universitario?",
        opciones: [
            "A) 45 funcionarios",
            "B) 70 funcionarios",
            "C) 25 funcionarios"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Solo experiencia = Total con experiencia - Los que tienen ambas = 70 - 25 = 45 funcionarios.",
        feedbackError: "Recuerda: para obtener 'solo A', resta la intersección del total de A. Solo experiencia = 70 - 25 = 45."
    },

    // --- SLIDE 17: Concepto clave - complemento ---
    {
        tipo: "concepto",
        titulo: "La estrategia del complemento",
        frente: "Cuando conviene usar el complemento en lugar de calcular directamente?",
        reverso: "Cuando el problema pregunta por 'al menos uno', 'ninguno' o 'todos menos'. En estos casos, calcula primero lo contrario y luego resta del total. Ejemplo: P(al menos uno) = Total - P(ninguno). Es más rapido y reduce errores."
    },

    // --- SLIDE 18: Errores frecuentes ---
    {
        tipo: "contenido",
        titulo: "Errores frecuentes en el examen",
        contenido: `<p>Evita estas trampas que el CENEVAL utiliza como distractores:</p>
        <ul>
            <li><strong>En conjuntos:</strong> Olvidar restar la intersección al calcular la union. Si sumás sin restar, cuentas doble</li>
            <li><strong>En porcentajes:</strong> Confundir la base del cálculo. No es lo mismo el porcentaje sobre electores registrados que sobre votos emitidos</li>
            <li><strong>En jerarquia:</strong> Hacer las operaciones de izquierda a derecha sin respetar PEMDAS</li>
            <li><strong>En fracciones:</strong> Sumar numeradores y denominadores por separado: 1/2 + 1/3 NO es 2/5</li>
            <li><strong>En proporciones:</strong> Confundir razon directa con razon inversa</li>
        </ul>`
    },

    // --- SLIDE 19: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "El Universo (U) contiene todos los elementos; el conjunto vacio no tiene ninguno",
            "Union: elementos en A o B o ambos. Formula: n(A union B) = n(A) + n(B) - n(A intersección B)",
            "Intersección: elementos en A Y en B. Diferencia (A-B): en A pero no en B",
            "El complemento A' son todos los elementos de U que no están en A",
            "PEMDAS: Parentesis, Exponentes, Multiplicacion/Division, Adicion/Sustraccion",
            "Porcentaje = (Parte / Total) x 100. Siempre verifica cuál es la base correcta",
            "La regla de tres resuelve problemás de proporcionalidad directa e inversa",
            "En diagramás de Venn, verifica que las partes sumen el total del universo",
            "Para 'al menos uno', usa la estrategia del complemento: Total - ninguno"
        ]
    }

]);

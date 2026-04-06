// Día 8 — Álgebra: Expresiónes, Factorización y Ecuaciónes (Módulo B)
registerPresentation(8, 'B', 'Álgebra: Expresiónes, Factorización y Ecuaciónes', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "B",
        titulo: "Álgebra: Expresiónes, Factorización y Ecuaciónes",
        subtitulo: "Día 8 — Módulo B: Competencia Matemática"
    },

    // --- SLIDE 2: Importancia del algebra ---
    {
        tipo: "contenido",
        titulo: "Por que importa el algebra en el SPEN",
        contenido: `<p>De los 30 reactivos del Módulo B, aproximadamente <strong>7 corresponden a algebra</strong> (23% del módulo matematico).</p>
        <ul>
            <li><strong>Expresiónes algebraicas:</strong> modelar situaciones con variables</li>
            <li><strong>Factorización:</strong> descomponer expresiones en factores simples</li>
            <li><strong>Ecuaciónes de primer grado:</strong> despejar una incognita</li>
            <li><strong>Ecuaciónes cuadraticas:</strong> fórmula general y factorización</li>
            <li><strong>Sistemás 2x2:</strong> resolver dos ecuaciones simultaneas</li>
        </ul>
        <p>Cada reactivo algebraico no debe tomarte más de <strong>2-3 minutos</strong>. La clave es identificar el tipo de problema rapidamente.</p>`
    },

    // --- SLIDE 3: Expresiónes algebraicas ---
    {
        tipo: "contenido",
        titulo: "Clasificación de expresiones algebraicas",
        contenido: `<table>
            <tr><th>Tipo</th><th>Términos</th><th>Ejemplo</th></tr>
            <tr><td><strong>Monomio</strong></td><td>1 término</td><td>5x, -3a al cuadrado por b, 7</td></tr>
            <tr><td><strong>Binomio</strong></td><td>2 términos</td><td>2x + 3, a al cuadrado - b al cuadrado</td></tr>
            <tr><td><strong>Trinomio</strong></td><td>3 términos</td><td>x al cuadrado + 5x + 6</td></tr>
            <tr><td><strong>Polinomio</strong></td><td>2 o más términos</td><td>Cualquier binomio o trinomio</td></tr>
        </table>
        <p><strong>Partes de un monomio:</strong></p>
        <ul>
            <li><strong>Coeficiente:</strong> el factor numerico (en 5x al cuadrado, es 5)</li>
            <li><strong>Variable:</strong> la letra (en 5x al cuadrado, es x)</li>
            <li><strong>Grado:</strong> el exponente (en 5x al cuadrado, es 2)</li>
        </ul>`
    },

    // --- SLIDE 4: Términos semejantes ---
    {
        tipo: "concepto",
        titulo: "Términos semejantes",
        frente: "Cuando dos términos algebraicos son semejantes y pueden sumarse o restarse?",
        reverso: "Dos términos son semejantes cuando tienen la misma parte literal (mismás variables con los mismos exponentes). Solo los términos semejantes pueden combinarse. Ejemplo: 3x al cuadrado y -7x al cuadrado son semejantes (resultado: -4x al cuadrado). Pero 3x al cuadrado y 3x al cubo NO son semejantes."
    },

    // --- SLIDE 5: Ejemplo contextualizado ---
    {
        tipo: "ejemplo",
        titulo: "Expresiónes algebraicas en contexto electoral",
        contenido: `<p><strong>Situación:</strong> En una junta distrital del INE, cada casilla urbana recibe x materiales y cada casilla rural recibe el doble (2x). Si hay 15 casillas urbanas y 8 rurales:</p>
        <ul>
            <li>Total = 15x + 8(2x) = 15x + 16x = <strong>31x materiales</strong></li>
        </ul>
        <p><strong>Otro ejemplo:</strong> El presupuesto del primer trimestre fue (2x al cuadrado + 4x + 1000) y el del segundo (x al cuadrado - x + 1500). Gasto acumulado:</p>
        <ul>
            <li>(2x al cuadrado + 4x + 1000) + (x al cuadrado - x + 1500) = <strong>3x al cuadrado + 3x + 2500</strong></li>
        </ul>`
    },

    // --- SLIDE 6: Productos notables ---
    {
        tipo: "contenido",
        titulo: "Productos notables: formulas esenciales",
        contenido: `<table>
            <tr><th>Producto notable</th><th>Formula</th></tr>
            <tr><td>(a + b) al cuadrado</td><td>a al cuadrado + 2ab + b al cuadrado</td></tr>
            <tr><td>(a - b) al cuadrado</td><td>a al cuadrado - 2ab + b al cuadrado</td></tr>
            <tr><td>(a + b)(a - b)</td><td>a al cuadrado - b al cuadrado</td></tr>
            <tr><td>(x + a)(x + b)</td><td>x al cuadrado + (a + b)x + ab</td></tr>
        </table>
        <p><strong>Error clasico del examen:</strong> Creer que (a + b) al cuadrado = a al cuadrado + b al cuadrado. SIEMPRE hay un término central: 2ab. Este error aparece frecuentemente como distractor.</p>`
    },

    // --- SLIDE 7: Fórmula del cuadrado del binomio ---
    {
        tipo: "formula",
        titulo: "Cuadrado de un binomio",
        formula: "(a + b) al cuadrado = a al cuadrado + 2ab + b al cuadrado",
        explicacion: "Es el cuadrado del primer término, más el doble producto del primero por el segundo, más el cuadrado del segundo. Ejemplo: (x + 5) al cuadrado = x al cuadrado + 10x + 25. Verificación: si x = 3, entonces (3+5) al cuadrado = 64, y 9 + 30 + 25 = 64."
    },

    // --- SLIDE 8: Quiz 1 - Productos notables ---
    {
        tipo: "quiz",
        titulo: "Quiz: Productos notables",
        pregunta: "Cuál es el resultado de (x + 4) al cuadrado?",
        opciones: [
            "A) x al cuadrado + 16",
            "B) x al cuadrado + 8x + 16",
            "C) x al cuadrado + 4x + 16"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. (x + 4) al cuadrado = x al cuadrado + 2(x)(4) + 16 = x al cuadrado + 8x + 16. El término central 2ab nunca debe omitirse.",
        feedbackError: "Recuerda: (a + b) al cuadrado = a al cuadrado + 2ab + b al cuadrado. Aqui, 2ab = 2(x)(4) = 8x. El resultado es x al cuadrado + 8x + 16."
    },

    // --- SLIDE 9: Factorización ---
    {
        tipo: "contenido",
        titulo: "Cuatro métodos de factorización",
        contenido: `<p>Factorizar es el proceso <strong>inverso de multiplicar</strong>: expresar un polinomio como producto de factores simples.</p>
        <ol>
            <li><strong>Factor comun:</strong> Extraer el factor presente en TODOS los términos. Ejemplo: 6x al cubo + 9x al cuadrado - 3x = 3x(2x al cuadrado + 3x - 1)</li>
            <li><strong>Diferencia de cuadrados:</strong> a al cuadrado - b al cuadrado = (a + b)(a - b). Ejemplo: x al cuadrado - 36 = (x + 6)(x - 6)</li>
            <li><strong>Trinomio cuadrado perfecto:</strong> a al cuadrado + 2ab + b al cuadrado = (a + b) al cuadrado. Ejemplo: x al cuadrado + 14x + 49 = (x + 7) al cuadrado</li>
            <li><strong>Trinomio x al cuadrado + bx + c:</strong> Buscar dos números con producto c y suma b. Ejemplo: x al cuadrado + 7x + 12 = (x + 3)(x + 4)</li>
        </ol>
        <p><strong>Atencion:</strong> La suma de cuadrados (a al cuadrado + b al cuadrado) NO se factoriza con números reales.</p>`
    },

    // --- SLIDE 10: Concepto clave de factorización ---
    {
        tipo: "concepto",
        titulo: "Diferencia de cuadrados vs suma de cuadrados",
        frente: "Se puede factorizar x al cuadrado + 9?",
        reverso: "NO. La suma de cuadrados (a al cuadrado + b al cuadrado) no se factoriza con números reales. Solo la DIFERENCIA de cuadrados se factoriza: a al cuadrado - b al cuadrado = (a + b)(a - b). Este error aparece frecuentemente como trampa en el CENEVAL."
    },

    // --- SLIDE 11: Ecuaciónes de primer grado ---
    {
        tipo: "contenido",
        titulo: "Ecuaciónes de primer grado: despeje",
        contenido: `<p>El objetivo es aislar la variable. Se usan dos principios:</p>
        <ul>
            <li><strong>Lo que suma pasa restando</strong> (y viceversa)</li>
            <li><strong>Lo que multiplica pasa dividiendo</strong> (y viceversa)</li>
        </ul>
        <p><strong>Ejemplo:</strong> Resolver 5x - 12 = 2x + 9</p>
        <ol>
            <li>Variables a un lado: 5x - 2x = 9 + 12</li>
            <li>Simplificar: 3x = 21</li>
            <li>Despejar: x = 7</li>
            <li>Comprobar: 5(7) - 12 = 23, y 2(7) + 9 = 23. Correcto.</li>
        </ol>
        <p><strong>Con fracciones:</strong> Multiplica ambos lados por el MCM de los denominadores para eliminarlas.</p>`
    },

    // --- SLIDE 12: Ejemplo electoral ecuaciones ---
    {
        tipo: "ejemplo",
        titulo: "Ecuación de primer grado en contexto electoral",
        contenido: `<p><strong>Situación:</strong> En una elección, el candidato A tiene 2x + 500 votos y el candidato B tiene x + 1200 votos. Si obtienen el mismo número de votos, encontrar x.</p>
        <ul>
            <li>Ecuación: 2x + 500 = x + 1200</li>
            <li>Despeje: 2x - x = 1200 - 500</li>
            <li>Resultado: x = 700</li>
        </ul>
        <p><strong>Verificación:</strong> Candidato A: 2(700) + 500 = 1,900 votos. Candidato B: 700 + 1,200 = 1,900 votos. Los votos coinciden.</p>`
    },

    // --- SLIDE 13: Fórmula general cuadratica ---
    {
        tipo: "formula",
        titulo: "Fórmula general para ecuaciones cuadraticas",
        formula: "x = [-b +/- raiz cuadrada de (b al cuadrado - 4ac)] / (2a)",
        explicacion: "Se aplica a ecuaciones de la forma ax al cuadrado + bx + c = 0. El discriminante D = b al cuadrado - 4ac determina las soluciones: si D > 0 hay dos soluciones, si D = 0 una solucion, si D < 0 no hay soluciones reales. Siempre iguala la ecuación a cero antes de aplicarla."
    },

    // --- SLIDE 14: Quiz 2 - Ecuación cuadratica ---
    {
        tipo: "quiz",
        titulo: "Quiz: Ecuaciónes cuadraticas",
        pregunta: "Cuáles son las soluciones de x al cuadrado - 5x + 6 = 0?",
        opciones: [
            "A) x = 2 y x = 3",
            "B) x = -2 y x = -3",
            "C) x = 1 y x = 6"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Se buscan dos números cuyo producto sea 6 y cuya suma sea 5: son 2 y 3. Factorizando: (x - 2)(x - 3) = 0, entonces x = 2 o x = 3.",
        feedbackError: "Factoriza el trinomio: busca dos números cuyo producto sea 6 y cuya suma sea 5. Son 2 y 3. Asi: (x - 2)(x - 3) = 0, dando x = 2 y x = 3."
    },

    // --- SLIDE 15: Sistemás 2x2 ---
    {
        tipo: "contenido",
        titulo: "Sistemás de ecuaciones 2x2: tres métodos",
        contenido: `<table>
            <tr><th>Método</th><th>Procedimiento</th><th>Mejor cuando...</th></tr>
            <tr><td><strong>Sustitución</strong></td><td>Despejar una variable y sustituir en la otra ecuación</td><td>Una variable ya esta despejada o es facil despejarla</td></tr>
            <tr><td><strong>Igualación</strong></td><td>Despejar la misma variable en ambas y comparar</td><td>Ambas ecuaciones permiten despejar facilmente</td></tr>
            <tr><td><strong>Reducción</strong></td><td>Multiplicar y sumar ecuaciones para eliminar una variable</td><td>Los coeficientes permiten eliminación rapida</td></tr>
        </table>
        <p>En el examen CENEVAL, el método de <strong>reducción</strong> suele ser el más eficiente porque evita fracciones intermedias.</p>`
    },

    // --- SLIDE 16: Ejemplo sistema electoral ---
    {
        tipo: "ejemplo",
        titulo: "Sistema 2x2 en contexto electoral",
        contenido: `<p><strong>Situación:</strong> En una jornada electoral se usan boletas tipo A (diputados) y tipo B (senadores). El Distrito 1 uso 3 paquetes A y 2 paquetes B, con un total de 1,600 boletas. El Distrito 2 uso 2 paquetes A y 3 paquetes B, con un total de 1,400 boletas.</p>
        <ul>
            <li>Sistema: 3A + 2B = 1600 y 2A + 3B = 1400</li>
            <li>Multiplicar la primera por 3 y la segunda por -2: 9A + 6B = 4800 y -4A - 6B = -2800</li>
            <li>Sumar: 5A = 2000, entonces A = 400</li>
            <li>Sustituir: 3(400) + 2B = 1600, entonces B = 200</li>
        </ul>
        <p><strong>Resultado:</strong> Cada paquete tipo A tiene 400 boletas y cada paquete tipo B tiene 200 boletas.</p>`
    },

    // --- SLIDE 17: Quiz 3 - Sistemás ---
    {
        tipo: "quiz",
        titulo: "Quiz: Sistemás de ecuaciones",
        pregunta: "Resolver el sistema: x + y = 15 y x - y = 3. Cuáles son los valores de x e y?",
        opciones: [
            "A) x = 9, y = 6",
            "B) x = 10, y = 5",
            "C) x = 12, y = 3"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. Sumando ambas ecuaciones: 2x = 18, entonces x = 9. Sustituyendo: 9 + y = 15, entonces y = 6. Comprobacion: 9 - 6 = 3.",
        feedbackError: "Suma ambas ecuaciones para eliminar y: (x + y) + (x - y) = 15 + 3, es decir 2x = 18, x = 9. Luego y = 15 - 9 = 6."
    },

    // --- SLIDE 18: Errores frecuentes ---
    {
        tipo: "contenido",
        titulo: "Errores frecuentes en algebra",
        contenido: `<ul>
            <li><strong>Sumar términos no semejantes:</strong> 3x + 2x al cuadrado NO es 5x al cuadrado</li>
            <li><strong>Olvidar el término central:</strong> (a + b) al cuadrado NO es a al cuadrado + b al cuadrado</li>
            <li><strong>Signos al restar polinomios:</strong> (3x + 2) - (x - 5) = 3x + 2 - x + 5 = 2x + 7, no 2x - 3</li>
            <li><strong>No igualar a cero:</strong> Antes de usar la fórmula general, la ecuación debe estar como ax al cuadrado + bx + c = 0</li>
            <li><strong>Tomar b sin signo:</strong> En x al cuadrado - 5x + 6 = 0, b = -5 (no 5)</li>
            <li><strong>Olvidar las dos soluciones:</strong> La fórmula general da dos valores (con + y con -)</li>
            <li><strong>No comprobar:</strong> Siempre sustituye la solucion en la ecuación original</li>
        </ul>`
    },

    // --- SLIDE 19: Reglas de exponentes ---
    {
        tipo: "formula",
        titulo: "Reglas de exponentes esenciales",
        formula: "x^a por x^b = x^(a+b) | x^a / x^b = x^(a-b) | (x^a)^b = x^(ab) | x^0 = 1",
        explicacion: "Al multiplicar potencias de la misma base, se suman los exponentes. Al dividir, se restan. Al elevar una potencia a otra potencia, se multiplican los exponentes. Cualquier número (distinto de cero) elevado a la potencia cero es igual a 1."
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "Solo se suman o restán términos semejantes (misma variable y exponente)",
            "(a + b) al cuadrado = a al cuadrado + 2ab + b al cuadrado. Nunca omitas el término central",
            "(a + b)(a - b) = a al cuadrado - b al cuadrado (diferencia de cuadrados)",
            "La suma de cuadrados NO se factoriza con números reales",
            "Factorización: busca primero el factor comun, luego aplica otros métodos",
            "Ecuaciónes de primer grado: despejar con transposicion y siempre comprobar",
            "Fórmula cuadratica: x = [-b +/- raiz(b al cuadrado - 4ac)] / (2a). El discriminante indica cuantas soluciones hay",
            "Sistemás 2x2: sustitución, igualación o reducción. Verificar en AMBAS ecuaciones",
            "En el examen, identifica el tipo de problema antes de operar y administra tu tiempo (2-3 min por reactivo)"
        ]
    }

]);

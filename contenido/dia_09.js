// Día 9 — Estadística Descriptiva y Probabilidad (Módulo B)
registerPresentation(9, 'B', 'Estadística Descriptiva y Probabilidad', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "B",
        titulo: "Estadística Descriptiva y Probabilidad",
        subtitulo: "Día 9 — Módulo B: Competencia Matemática"
    },

    // --- SLIDE 2: Importancia ---
    {
        tipo: "contenido",
        titulo: "Por que este tema es crítico",
        contenido: `<p>Entre el <strong>25% y 35%</strong> de los reactivos del Módulo B están directamente relacionados con estadística y probabilidad. No es opciónal: es una necesidad estrategica.</p>
        <ul>
            <li><strong>Estadística descriptiva:</strong> medidas de tendencia central, dispersion y tablas de frecuencia</li>
            <li><strong>Probabilidad:</strong> regla de Laplace, eventos, union, intersección, probabilidad condicional</li>
            <li><strong>Aplicación practica:</strong> análisis de resultados electorales, interpretación de encuestas, evaluación de participación ciudadana</li>
        </ul>`
    },

    // --- SLIDE 3: Tipos de datos ---
    {
        tipo: "contenido",
        titulo: "Clasificación de datos",
        contenido: `<table>
            <tr><th>Tipo</th><th>Subtipo</th><th>Ejemplo electoral</th></tr>
            <tr><td rowspan="2"><strong>Cualitativos</strong></td><td>Nominales (sin orden)</td><td>Partido que gano una casilla (PAN, PRI, MORENA)</td></tr>
            <tr><td>Ordinales (con orden)</td><td>Nivel de satisfaccion con el proceso electoral</td></tr>
            <tr><td rowspan="2"><strong>Cuantitativos</strong></td><td>Discretos (enteros)</td><td>Número de votos emitidos en una casilla</td></tr>
            <tr><td>Continuos (decimales)</td><td>Porcentaje de participación ciudadana (62.34%)</td></tr>
        </table>
        <p><strong>Trampa CENEVAL:</strong> Los códigos postales, números de sección electoral o claves de credencial son números, pero son datos <strong>cualitativos nominales</strong> porque no tiene sentido promediarlos.</p>`
    },

    // --- SLIDE 4: Medía aritmética ---
    {
        tipo: "formula",
        titulo: "Medía aritmética (promedio)",
        formula: "Medía = Suma de todos los valores / Número total de valores",
        explicacion: "Se usa cuando los datos son simetricos y no hay valores atípicos. Ejemplo: votos en 5 casillas: 320, 285, 410, 305, 330. Medía = 1650 / 5 = 330 votos por casilla."
    },

    // --- SLIDE 5: Mediana ---
    {
        tipo: "concepto",
        titulo: "Mediana: el valor central",
        frente: "Cuando es preferible usar la mediana en lugar de la media?",
        reverso: "Cuando existen valores atípicos (outliers) o la distribución es asimetrica. La mediana no se distorsiona con valores extremos. Ejemplo: participación de 45, 47, 48, 50, 52, 53, 91. Medía = 55.14% (inflada por el 91), pero Mediana = 50% (refleja mejor el centro real)."
    },

    // --- SLIDE 6: Moda ---
    {
        tipo: "contenido",
        titulo: "Moda: el valor más frecuente",
        contenido: `<p>La moda es el valor que se repite con <strong>mayor frecuencia</strong> en un conjunto de datos.</p>
        <ul>
            <li><strong>Unimodal:</strong> una sola moda</li>
            <li><strong>Bimodal:</strong> dos modas</li>
            <li><strong>Multimodal:</strong> tres o más modas</li>
            <li><strong>Amodal:</strong> todos los valores tienen la misma frecuencia (no hay moda)</li>
        </ul>
        <p><strong>Dato clave:</strong> La moda es la <strong>unica</strong> medida de tendencia central aplicable a datos cualitativos. Ejemplo: el tipo de incidencia más frecuente en casillas (falta de boletas, urna danada, etc.).</p>
        <p><strong>Trampa CENEVAL:</strong> Si te presentan datos con un valor extremo y preguntan cual medida es más adecuada, la respuesta casí siempre es la <strong>mediana</strong>.</p>`
    },

    // --- SLIDE 7: Quiz 1 - Tendencia central ---
    {
        tipo: "quiz",
        titulo: "Quiz: Medida de tendencia central adecuada",
        pregunta: "Los tiempos de espera (en minutos) de 7 votantes fueron: 5, 8, 12, 7, 45, 6, 9. Cual medida de tendencia central es más adecuada?",
        opciones: [
            "A) Medía aritmética",
            "B) Mediana",
            "C) Moda"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. El valor 45 es un dato atípico que distorsiona la medía (13.14 min). La mediana (ordenando: 5,6,7,8,9,12,45 = 8 min) refleja mejor el comportamiento típico.",
        feedbackError: "Cuando hay valores atípicos (como el 45), la medía se distorsiona. La mediana es más robusta: ordenando los datos, el valor central es 8 minutos."
    },

    // --- SLIDE 8: Medidas de dispersion ---
    {
        tipo: "contenido",
        titulo: "Medidas de dispersion",
        contenido: `<p>Indican que tan <strong>separados o agrupados</strong> están los datos respecto al centro.</p>
        <table>
            <tr><th>Medida</th><th>Formula</th><th>Caracteristica</th></tr>
            <tr><td><strong>Rango</strong></td><td>Valor máximo - Valor mínimo</td><td>Facil de calcular, pero sensible a valores extremos</td></tr>
            <tr><td><strong>Varianza</strong></td><td>Suma de (cada valor - media) al cuadrado, dividido entre n</td><td>Mide la dispersion promedio al cuadrado</td></tr>
            <tr><td><strong>Desviacion estandar</strong></td><td>Raiz cuadrada de la varianza</td><td>Regresa a las unidades originales de los datos</td></tr>
        </table>
        <p><strong>Trampa CENEVAL:</strong> Si la varianza es 400, la desviacion estandar es 20 (raiz cuadrada de 400), NO 200.</p>`
    },

    // --- SLIDE 9: Varianza paso a paso ---
    {
        tipo: "ejemplo",
        titulo: "Cálculo de varianza: ejemplo electoral",
        contenido: `<p><strong>Datos:</strong> Votos en 4 casillas: 100, 120, 130, 150</p>
        <ol>
            <li><strong>Media:</strong> (100 + 120 + 130 + 150) / 4 = 125</li>
            <li><strong>Desviaciones al cuadrado:</strong>
                <ul>
                    <li>(100 - 125) al cuadrado = 625</li>
                    <li>(120 - 125) al cuadrado = 25</li>
                    <li>(130 - 125) al cuadrado = 25</li>
                    <li>(150 - 125) al cuadrado = 625</li>
                </ul>
            </li>
            <li><strong>Suma:</strong> 625 + 25 + 25 + 625 = 1300</li>
            <li><strong>Varianza poblaciónal:</strong> 1300 / 4 = 325</li>
            <li><strong>Desviacion estandar:</strong> raiz cuadrada de 325 = 18.03 votos</li>
        </ol>
        <p>Interpretación: los votos se desvian en promedio 18 votos respecto a la medía de 125.</p>`
    },

    // --- SLIDE 10: Tablas de frecuencia ---
    {
        tipo: "contenido",
        titulo: "Tablas de frecuencia",
        contenido: `<table>
            <tr><th>Tipo</th><th>Formula</th><th>Que indica</th></tr>
            <tr><td><strong>Frecuencia absoluta (fi)</strong></td><td>Contar ocurrencias</td><td>Cuantas veces aparece un valor</td></tr>
            <tr><td><strong>Frecuencia relativa (fri)</strong></td><td>fi / n</td><td>Proporción respecto al total</td></tr>
            <tr><td><strong>Frecuencia porcentual</strong></td><td>fri x 100</td><td>Frecuencia relativa en porcentaje</td></tr>
            <tr><td><strong>Frecuencia acumulada (Fi)</strong></td><td>f1 + f2 + ... + fi</td><td>Suma de frecuencias hasta esa clase</td></tr>
        </table>
        <p><strong>Regla:</strong> La suma de todas las frecuencias relativas siempre es 1 (o 100%).</p>
        <p><strong>Trampa CENEVAL:</strong> Confundir frecuencia acumulada con frecuencia absoluta. Acumulada = suma de esa clase y todas las anteriores.</p>`
    },

    // --- SLIDE 11: Probabilidad de Laplace ---
    {
        tipo: "formula",
        titulo: "Probabilidad clasica de Laplace",
        formula: "P(A) = Casos favorables / Casos posibles",
        explicacion: "Se aplica cuando el espacio muestral es finito y todos los resultados son igualmente probables. Ejemplo: en una urna con 500 boletas (200 partido A, 180 partido B, 120 partido C), P(partido A) = 200/500 = 0.40 = 40%. Propiedades: P siempre esta entre 0 y 1. P(evento seguro) = 1. P(complemento) = 1 - P(A)."
    },

    // --- SLIDE 12: Eventos y complemento ---
    {
        tipo: "concepto",
        titulo: "Tipos de eventos en probabilidad",
        frente: "Cuál es la diferencia entre eventos mutuamente excluyentes y eventos independientes?",
        reverso: "Mutuamente excluyentes: no pueden ocurrir al mismo tiempo (si ocurre A, no ocurre B). P(A intersección B) = 0. Independientes: la ocurrencia de uno no afecta al otro. P(A intersección B) = P(A) x P(B). Clave: dos eventos mutuamente excluyentes con probabilidades positivas NUNCA son independientes."
    },

    // --- SLIDE 13: Fórmula de la union ---
    {
        tipo: "formula",
        titulo: "Probabilidad de la union de eventos",
        formula: "P(A union B) = P(A) + P(B) - P(A intersección B)",
        explicacion: "Se restán los elementos de la intersección para no contarlos dos veces. Si A y B son mutuamente excluyentes, P(A intersección B) = 0, y la fórmula se simplifica a P(A) + P(B). Ejemplo: de 10,000 electores, 3,500 jovenes, 4,200 mujeres, 1,600 jovenes y mujeres. P(joven o mujer) = 0.35 + 0.42 - 0.16 = 0.61."
    },

    // --- SLIDE 14: Probabilidad condicional ---
    {
        tipo: "ejemplo",
        titulo: "Probabilidad condicional en contexto electoral",
        contenido: `<p><strong>Formula:</strong> P(A dado B) = P(A intersección B) / P(B)</p>
        <p><strong>Situación:</strong> De 500 funcionarios de casilla capacitados:</p>
        <ul>
            <li>300 aprobaron el examen de capacitacion</li>
            <li>200 son funcionarios de primera vez</li>
            <li>140 son de primera vez Y aprobaron</li>
        </ul>
        <p><strong>Pregunta:</strong> Probabilidad de aprobar dado que es de primera vez:</p>
        <ul>
            <li>P(Aprobo dado Primera vez) = (140/500) / (200/500) = 140/200 = <strong>0.70 = 70%</strong></li>
        </ul>
        <p>Nota: P(Aprobo) general = 300/500 = 60%, pero dado que es de primera vez, sube a 70%.</p>`
    },

    // --- SLIDE 15: Con y sin reemplazo ---
    {
        tipo: "contenido",
        titulo: "Con reemplazo vs sin reemplazo",
        contenido: `<p><strong>Con reemplazo:</strong> el elemento se devuelve. Las probabilidades <strong>no cambian</strong>. Eventos independientes.</p>
        <p><strong>Sin reemplazo:</strong> el elemento no se devuelve. Las probabilidades <strong>si cambian</strong>. Eventos dependientes.</p>
        <p><strong>Ejemplo:</strong> Caja con 6 actas correctas y 4 con errores. Se selecciónan 2:</p>
        <table>
            <tr><th></th><th>Con reemplazo</th><th>Sin reemplazo</th></tr>
            <tr><td>P(1a correcta)</td><td>6/10</td><td>6/10</td></tr>
            <tr><td>P(2a correcta)</td><td>6/10</td><td>5/9</td></tr>
            <tr><td>P(ambas correctas)</td><td>36/100 = 0.36</td><td>30/90 = 0.333</td></tr>
        </table>
        <p><strong>Clave:</strong> Si dice "se extrae y se devuelve" es con reemplazo. Si dice "se selecciónan dos" generalmente es sin reemplazo.</p>`
    },

    // --- SLIDE 16: Quiz 2 - Probabilidad ---
    {
        tipo: "quiz",
        titulo: "Quiz: Probabilidad del complemento",
        pregunta: "En una urna hay 30 boletas: 12 del partido X, 10 del partido Y y 8 del partido Z. Cuál es la probabilidad de extraer una boleta que NO sea del partido X?",
        opciones: [
            "A) 0.40",
            "B) 0.60",
            "C) 0.50"
        ],
        respuesta: 1,
        feedbackOk: "Correcto. P(no X) = 1 - P(X) = 1 - 12/30 = 1 - 0.40 = 0.60. Usar el complemento es la forma más rapida.",
        feedbackError: "Usa el complemento: P(no X) = 1 - P(X). P(X) = 12/30 = 0.40. Entonces P(no X) = 1 - 0.40 = 0.60."
    },

    // --- SLIDE 17: Diagramás de arbol ---
    {
        tipo: "ejemplo",
        titulo: "Diagramás de arbol para eventos secuenciales",
        contenido: `<p><strong>Situación:</strong> Un supervisor visita 2 casillas. En cada una, la probabilidad de encontrar irregularidad es 0.30.</p>
        <table>
            <tr><th>Casilla 1</th><th>Casilla 2</th><th>Resultado</th><th>Probabilidad</th></tr>
            <tr><td>Irregularidad (0.30)</td><td>Irregularidad (0.30)</td><td>(I, I)</td><td>0.09</td></tr>
            <tr><td>Irregularidad (0.30)</td><td>Sin irreg. (0.70)</td><td>(I, S)</td><td>0.21</td></tr>
            <tr><td>Sin irreg. (0.70)</td><td>Irregularidad (0.30)</td><td>(S, I)</td><td>0.21</td></tr>
            <tr><td>Sin irreg. (0.70)</td><td>Sin irreg. (0.70)</td><td>(S, S)</td><td>0.49</td></tr>
        </table>
        <p><strong>Respuestas:</strong> P(al menos una irregularidad) = 1 - 0.49 = <strong>0.51</strong>. P(exactamente una) = 0.21 + 0.21 = <strong>0.42</strong>.</p>`
    },

    // --- SLIDE 18: Combinaciónes y permutaciones ---
    {
        tipo: "concepto",
        titulo: "Permutaciónes vs Combinaciónes",
        frente: "Como distinguir si un problema requiere permutaciones o combinaciones?",
        reverso: "Permutaciónes: el ORDEN importa (organizar una fila, asignar puestos distintos). Formula: P(n,r) = n! / (n-r)!. Combinaciónes: el orden NO importa (elegir un comite, selecciónar un grupo). Formula: C(n,r) = n! / [r!(n-r)!]. Regla: si el problema dice 'ordenar' o 'asignar puestos', usa permutaciones. Si dice 'elegir' o 'selecciónar un grupo', usa combinaciones."
    },

    // --- SLIDE 19: Quiz 3 - Eventos independientes ---
    {
        tipo: "quiz",
        titulo: "Quiz: Eventos independientes",
        pregunta: "P(A) = 0.5, P(B) = 0.3, P(A intersección B) = 0.15. Son A y B independientes?",
        opciones: [
            "A) Si, porque P(A intersección B) = P(A) x P(B)",
            "B) No, porque P(A intersección B) es diferente de P(A) x P(B)",
            "C) No se puede determinar"
        ],
        respuesta: 0,
        feedbackOk: "Correcto. P(A) x P(B) = 0.5 x 0.3 = 0.15, que es igual a P(A intersección B). Se cumple la condicion de independencia.",
        feedbackError: "Verifica: P(A) x P(B) = 0.5 x 0.3 = 0.15. Como esto es igual a P(A intersección B) = 0.15, los eventos SI son independientes."
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "Medía = Suma / n. Usar solo cuando no hay valores atípicos",
            "Si hay valores extremos, la mediana es la medida más adecuada",
            "La moda es la unica medida de tendencia central para datos cualitativos",
            "Desviacion estandar = raiz cuadrada de la varianza (no dividir entre 2)",
            "La suma de todas las frecuencias relativas siempre es 1",
            "Probabilidad de Laplace: P(A) = casos favorables / casos posibles (resultados equiprobables)",
            "P(A union B) = P(A) + P(B) - P(A intersección B). Siempre resta la intersección",
            "Sin reemplazo las probabilidades cambian; con reemplazo se mantienen iguales",
            "Para 'al menos uno' usa el complemento: 1 - P(ninguno)",
            "Permutaciónes = orden importa. Combinaciónes = orden no importa"
        ]
    }

]);

// Día 11 — Simulacro Parcial Módulo B: Competencia Matemática
registerPresentation(11, 'B', 'Simulacro Parcial Módulo B', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "B",
        titulo: "Simulacro Parcial Módulo B",
        subtitulo: "Día 11 — Competencia Matemática | Enfoque cuantitativo aplicado al contexto electoral"
    },

    // --- SLIDE 2: Por que el simulacro importa ---
    {
        tipo: "contenido",
        titulo: "Para que sirve este simulacro?",
        contenido: `<p>Un simulacro no mide si eres inteligente. Mide si estas <strong>preparado para demostrar lo que sabes bajo presion</strong>.</p>
        <ul>
            <li><strong>Diagnostica</strong> cuanto retuviste de los Dias 7 al 10</li>
            <li><strong>Identifica</strong> tus bloques de debilidad antes de la fase de repaso</li>
            <li><strong>Entrena</strong> tu mente para trabajar en condiciones de examen real</li>
        </ul>
        <p>El Módulo B tiene <strong>30 reactivos</strong> en el examen CENEVAL. Tiempo aproximado: <strong>45 minutos</strong>.</p>
        <p>Regla de oro: si en 90 segundos no encuentras la solucion, <strong>marca la mejor opción y sigue adelante</strong>.</p>`
    },

    // --- SLIDE 3: Los 4 bloques del Módulo B ---
    {
        tipo: "contenido",
        titulo: "Los 4 bloques que se evaluan hoy",
        contenido: `<table>
            <tr><th>Bloque</th><th>Tema</th><th>Reactivos</th></tr>
            <tr><td><strong>1</strong></td><td>Teoría de Conjuntos y Aritmética</td><td>8</td></tr>
            <tr><td><strong>2</strong></td><td>Álgebra y Ecuaciónes</td><td>7</td></tr>
            <tr><td><strong>3</strong></td><td>Estadística y Probabilidad</td><td>8</td></tr>
            <tr><td><strong>4</strong></td><td>Graficos y Tablas</td><td>7</td></tr>
            <tr><td colspan="2"><strong>TOTAL</strong></td><td><strong>30</strong></td></tr>
        </table>
        <p>Cada bloque tiene el mismo valor. <strong>No dejes preguntas sin responder</strong>: en el examen CENEVAL no hay penalizacion por respuesta incorrecta.</p>`
    },

    // --- SLIDE 4: Fórmula de inclusion-exclusion (flip card) ---
    {
        tipo: "concepto",
        titulo: "Fórmula esencial: Inclusion-Exclusion",
        frente: "En una capacitacion, 55 funcionarios estudian Casillas y 48 estudian Computo. 25 estudian ambos. De 90 en total, cuantos no estudian ninguno?",
        reverso: "<strong>Paso 1:</strong> |A union B| = 55 + 48 - 25 = 78<br><strong>Paso 2:</strong> Ninguno = 90 - 78 = <strong>12 funcionarios</strong><br><br>Formula: |A union B| = |A| + |B| - |A intersección B|<br>Ninguno = Total - |A union B|"
    },

    // --- SLIDE 5: Medidas de tendencia central ---
    {
        tipo: "formula",
        titulo: "Las 3 medidas de tendencia central",
        formula: "MEDIA = suma de datos / cantidad de datos | MEDIANA = valor central (datos ordenados) | MODA = valor que más se repite",
        explicacion: "Para la MEDIANA: si hay número par de datos, promedía los dos centrales. Para la MODA: puede haber más de una moda. Para la MEDIA: es la más sensible a valores extremos (atípicos)."
    },

    // --- SLIDE 6: Probabilidad (flip card) ---
    {
        tipo: "concepto",
        titulo: "Regla de Laplace y eventos compuestos",
        frente: "Una urna tiene 18 sobres: 7 de Módulo A, 6 de Módulo B y 5 de Módulo C. Cuál es la probabilidad de sacar B o C al azar?",
        reverso: "Eventos mutuamente excluyentes (un sobre no puede ser de dos modulos):<br>P(B o C) = P(B) + P(C) = 6/18 + 5/18 = <strong>11/18</strong><br><br>Si NO son mutuamente excluyentes:<br>P(A o B) = P(A) + P(B) - P(A y B)"
    },

    // --- SLIDE 7: Estrategia de identificacion ---
    {
        tipo: "contenido",
        titulo: "Identifica el tipo de problema en 10 segundos",
        contenido: `<table>
            <tr><th>Si la pregunta dice...</th><th>Es...</th><th>Aplica...</th></tr>
            <tr><td>cuantos en total, cuantos hay</td><td>Aritmética</td><td>Suma / Resta / Division</td></tr>
            <tr><td>el doble de, la quinta parte de</td><td>Álgebra</td><td>Ecuación de primer grado</td></tr>
            <tr><td>promedio, mediana, moda</td><td>Estadística</td><td>Formulas de tendencia central</td></tr>
            <tr><td>probabilidad de, al azar</td><td>Probabilidad</td><td>Regla de Laplace</td></tr>
            <tr><td>según la grafica / tabla</td><td>Datos</td><td>Leer ejes primero</td></tr>
        </table>`
    },

    // --- SLIDE 8: Ejemplo aritmética ---
    {
        tipo: "ejemplo",
        titulo: "Ejemplo: Casillas con redondeo hacia arriba",
        contenido: `<p><strong>Situación:</strong> Un distrito tiene 3 secciones. Sección Alfa: 1,500 electores. Sección Beta: 900. Sección Gamma: 1,200. Se instala 1 casilla por cada 600 electores o fracción.</p>
        <p><strong>Solucion:</strong></p>
        <ul>
            <li>Alfa: ceil(1,500 / 600) = ceil(2.5) = <strong>3 casillas</strong></li>
            <li>Beta: ceil(900 / 600) = ceil(1.5) = <strong>2 casillas</strong></li>
            <li>Gamma: ceil(1,200 / 600) = ceil(2.0) = <strong>2 casillas</strong></li>
            <li><strong>Total: 7 casillas</strong></li>
        </ul>
        <p>Regla clave: cuando divides electores entre capacidad y obtienes decimal, SIEMPRE redondeas hacia arriba. No hay 0.5 casillas.</p>`
    },

    // --- SLIDE 9: Quiz 1 ---
    {
        tipo: "quiz",
        titulo: "Practica: Promedio y Rango",
        pregunta: "En 5 dias de capacitacion, una sede recibio: 45, 52, 48, 61 y 44 asistentes. Cuál es el promedio diario?",
        opciones: ["A) 48 asistentes", "B) 50 asistentes", "C) 52 asistentes"],
        respuesta: 1,
        feedbackOk: "Correcto. Suma: 45+52+48+61+44 = 250. Promedio: 250/5 = 50 asistentes por dia.",
        feedbackError: "Revisa el cálculo. Suma todos los valores: 45+52+48+61+44 = 250. Divide entre 5 dias: 250/5 = 50."
    },

    // --- SLIDE 10: Histograma y frecuencia relativa ---
    {
        tipo: "contenido",
        titulo: "Como leer un histograma correctamente",
        contenido: `<p>Un histograma muestra la <strong>distribución de frecuencias</strong> de datos continuos agrupados en intervalos.</p>
        <ul>
            <li><strong>Eje X (horizontal):</strong> intervalos de datos (rangos numericos). Las barras van <em>pegadas</em></li>
            <li><strong>Eje Y (vertical):</strong> puede ser frecuencia absoluta (número de casos) o frecuencia relativa (proporción)</li>
            <li><strong>Clase modal:</strong> el intervalo con la barra más alta (mayor frecuencia)</li>
        </ul>
        <p><strong>Frecuencia relativa</strong> = frecuencia absoluta / total de datos</p>
        <p>La suma de todas las frecuencias relativas = <strong>1.00 (100%)</strong></p>`
    },

    // --- SLIDE 11: Probabilidad sin reemplazo (flip card) ---
    {
        tipo: "concepto",
        titulo: "Probabilidad sin reemplazo",
        frente: "Una bolsa tiene 20 credenciales: 12 vigentes y 8 vencidas. Se toman 2 sin reemplazo. Cuál es la probabilidad de que ambas estén vigentes?",
        reverso: "Primera extraccion: P(vigente) = 12/20<br>Segúnda extraccion (ya no hay reemplazo, quedan 11 vigentes de 19): P(vigente) = 11/19<br><br>P(ambas vigentes) = (12/20) x (11/19) = 132/380 = <strong>33/95</strong>"
    },

    // --- SLIDE 12: Álgebra aplicada ---
    {
        tipo: "ejemplo",
        titulo: "Ejemplo: Ecuación de primer grado",
        contenido: `<p><strong>Situación:</strong> El presupuesto de servicios generales de una Junta Distrital (25% de 3,600,000 pesos) se reparte en partes iguales entre 5 programas. Cuanto le toca a cada programa?</p>
        <p><strong>Paso 1:</strong> Calcular el monto de servicios generales:<br>25% de 3,600,000 = 0.25 x 3,600,000 = <strong>900,000 pesos</strong></p>
        <p><strong>Paso 2:</strong> Dividir entre los 5 programas:<br>900,000 / 5 = <strong>180,000 pesos por programa</strong></p>
        <p>Estrategia: convierte porcentajes a decimales antes de multiplicar para reducir errores.</p>`
    },

    // --- SLIDE 13: Errores típicos ---
    {
        tipo: "contenido",
        titulo: "Los 7 errores que más cuestán en Módulo B",
        contenido: `<ol>
            <li>Confundir <strong>mediana con media</strong> (son conceptos distintos)</li>
            <li>No ordenar los datos antes de buscar la mediana</li>
            <li>Calcular porcentajes sobre el <strong>total incorrecto</strong> (leer bien el denominador)</li>
            <li>Confundir frecuencia <strong>absoluta</strong> con frecuencia <strong>relativa</strong> en graficos</li>
            <li>No aplicar el <strong>techo</strong> (ceil) en problemás de casillas o grupos</li>
            <li>Calcular probabilidades que <strong>no suman uno</strong> (verificar siempre)</li>
            <li>Leer mal los <strong>ejes</strong> en graficas: ver el incremento, no solo el valor absoluto</li>
        </ol>`
    },

    // --- SLIDE 14: Quiz 2 ---
    {
        tipo: "quiz",
        titulo: "Practica: Interpretación de tabla",
        pregunta: "Una tabla muestra solicitudes de acceso a información por trimestre: T1=45, T2=62, T3=38, T4=55. Qué porcentaje del total anual representa el T2?",
        opciones: ["A) 29%", "B) 31%", "C) 33%"],
        respuesta: 1,
        feedbackOk: "Correcto. Total: 45+62+38+55 = 200. T2: 62/200 = 0.31 = 31%.",
        feedbackError: "Suma primero el total: 45+62+38+55 = 200. Luego divide T2 entre el total: 62/200 = 0.31 = 31%."
    },

    // --- SLIDE 15: Tecnica de los 90 segundos ---
    {
        tipo: "formula",
        titulo: "La Tecnica de los 90 Segúndos",
        formula: "Si llevas 90 segundos en un problema y no encuentras la solucion: MARCA la opción más razonable y SIGUE",
        explicacion: "Cada reactivo del Módulo B vale lo mismo. Atascarte en uno puede costarte 3 o 4 preguntas que si sabias responder. Al final del simulacro, si te sobra tiempo, regresa a los reactivos dudosos. Nunca dejes reactivos sin responder: no hay penalizacion por respuesta incorrecta en el CENEVAL."
    },

    // --- SLIDE 16: Rango vs Varianza ---
    {
        tipo: "concepto",
        titulo: "Rango vs Varianza: midiendo la dispersion",
        frente: "Cuál es la diferencia entre el rango y la varianza como medidas de dispersion?",
        reverso: "<strong>Rango</strong> = valor máximo - valor mínimo. Simple, rapido, pero sensible a valores extremos.<br><br><strong>Varianza</strong> = promedio de las diferencias al cuadrado respecto a la media. Mas precisa, considera todos los datos.<br><br>En el examen: si la pregunta dice 'rango', es máximo menos mínimo. Si dice 'varianza', calcula las diferencias al cuadrado y promedia."
    },

    // --- SLIDE 17: Contexto electoral como validador ---
    {
        tipo: "ejemplo",
        titulo: "Usa el contexto electoral para validar tus respuestas",
        contenido: `<p>El examen CENEVAL contextualiza todos los problemás en el entorno del INE. Esto es una ventaja:</p>
        <ul>
            <li>Si calculas que un partido recibio <strong>financiamiento negativo</strong>, algo salio mal</li>
            <li>Si calculas que se necesitan <strong>0.3 casillas</strong> o <strong>800 casillas para 3,000 electores</strong>, revisa</li>
            <li>Si la probabilidad que calculas es <strong>mayor que 1</strong>, cometiste un error</li>
            <li>Si el número de consejeros con quorum es <strong>mayor que el total</strong>, revisa el denominador</li>
        </ul>
        <p>El sentido comun del contexto electoral es tu ultima linea de defensa contra errores de cálculo.</p>`
    },

    // --- SLIDE 18: Quiz 3 ---
    {
        tipo: "quiz",
        titulo: "Practica: Probabilidad simple",
        pregunta: "Se lanza un dado de 6 caras. Cuál es la probabilidad de obtener un número par o un número mayor a 4?",
        opciones: ["A) 2/3", "B) 5/6", "C) 1/2"],
        respuesta: 0,
        feedbackOk: "Correcto. Pares: {2,4,6}. Mayores a 4: {5,6}. Union: {2,4,5,6} = 4 resultados. P = 4/6 = 2/3.",
        feedbackError: "Busca la union: Pares = {2,4,6}. Mayores a 4 = {5,6}. Union = {2,4,5,6} = 4 elementos. No olvides quitar el 6 que aparece en ambos conjuntos. P = 4/6 = 2/3."
    },

    // --- SLIDE 19: Escala de evaluación ---
    {
        tipo: "contenido",
        titulo: "Como evaluar tu desempeno",
        contenido: `<table>
            <tr><th>Aciertos</th><th>Porcentaje</th><th>Evaluación</th><th>Accion</th></tr>
            <tr><td>27-30</td><td>90-100%</td><td>Excelente</td><td>Mantener nivel, entrenar velocidad</td></tr>
            <tr><td>24-26</td><td>80-89%</td><td>Bueno</td><td>Reforzar bloques con errores</td></tr>
            <tr><td>20-23</td><td>67-79%</td><td>Suficiente</td><td>Repasar material Dias 7-10</td></tr>
            <tr><td>Menos de 20</td><td>Menos de 67%</td><td>En proceso</td><td>Regresar a temás base con ejercicios</td></tr>
        </table>
        <p>Completa la tabla de diagnostico por bloque en el material del Día 11 para saber exactamente <strong>donde necesitas refuerzo</strong>.</p>`
    },

    // --- SLIDE 20: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del Día 11",
        puntos: [
            "El simulacro diagnostica tu nivel real y entrena para condiciones de examen",
            "Módulo B: 30 reactivos en 45 minutos (90 segundos por pregunta)",
            "Los 4 bloques: Conjuntos/Aritmética, Álgebra, Estadística/Probabilidad, Graficos/Tablas",
            "Identifica el tipo de problema en 10 segundos antes de calcular",
            "Si llevas 90 seg sin respuesta: marca la más razonable y sigue",
            "Mediana = valor central (datos ordenados); Medía = promedio; Moda = el que más se repite",
            "Probabilidad nunca es mayor que 1; frecuencias relativas suman 1",
            "Siempre redondea hacia arriba (ceil) en problemás de casillas o grupos enteros",
            "Usa el contexto electoral para validar que tus respuestas tienen sentido",
            "Manana (Día 12): Comprensión Lectora — Ámbito Literario y Participación Social (Módulo A)"
        ]
    }

]);

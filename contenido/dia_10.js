// Dia 10 — Interpretacion de Graficos y Tablas (Modulo B)
registerPresentation(10, 'B', 'Interpretacion de Graficos y Tablas', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "B",
        titulo: "Interpretacion de Graficos y Tablas",
        subtitulo: "Dia 10 — Modulo B: Competencia Matematica | Histogramas, frecuencias y lectura visual de datos"
    },

    // --- SLIDE 2: Introduccion ---
    {
        tipo: "contenido",
        titulo: "Por que importa este tema?",
        contenido: `<p>El examen CENEVAL incluye preguntas donde debes <strong>leer, interpretar y sacar conclusiones</strong> de graficos y tablas. No necesitas dibujarlos: necesitas entenderlos.</p>
        <ul>
            <li><strong>Modulo B</strong> tiene 30 reactivos; al menos 5-7 involucran graficos o tablas</li>
            <li>Son preguntas de <strong>razonamiento visual</strong>, no de calculo puro</li>
            <li>Los errores mas comunes vienen de <strong>leer mal los ejes</strong> o confundir porcentajes con valores absolutos</li>
        </ul>
        <p>Hoy vas a aprender a leer cada tipo de grafico como un profesional electoral.</p>`
    },

    // --- SLIDE 3: Tipos de graficos ---
    {
        tipo: "contenido",
        titulo: "Los 7 tipos de graficos que debes dominar",
        contenido: `<table>
            <tr><th>Tipo</th><th>Se usa para</th><th>Ejemplo electoral</th></tr>
            <tr><td><strong>Barras</strong></td><td>Comparar categorias</td><td>Votos por partido</td></tr>
            <tr><td><strong>Circular (pastel)</strong></td><td>Mostrar proporciones del 100%</td><td>Distribucion de escanos</td></tr>
            <tr><td><strong>Histograma</strong></td><td>Distribucion de datos continuos</td><td>Edades de funcionarios de casilla</td></tr>
            <tr><td><strong>Poligono de frecuencia</strong></td><td>Tendencia en datos agrupados</td><td>Evolucion de participacion por rango de edad</td></tr>
            <tr><td><strong>Linea (serie de tiempo)</strong></td><td>Cambio a lo largo del tiempo</td><td>Participacion electoral 2000-2024</td></tr>
            <tr><td><strong>Caja y bigotes</strong></td><td>Dispersion y valores atipicos</td><td>Votos por casilla en un distrito</td></tr>
            <tr><td><strong>Pictograma</strong></td><td>Comparacion visual simple</td><td>Material electoral por bodega</td></tr>
        </table>`
    },

    // --- SLIDE 4: Concepto clave ---
    {
        tipo: "concepto",
        titulo: "Histograma vs Grafica de Barras",
        frente: "Cual es la diferencia fundamental entre un histograma y una grafica de barras?",
        reverso: "El <strong>histograma</strong> usa intervalos continuos (rangos numericos como 18-25 anos) y las barras van pegadas. La <strong>grafica de barras</strong> usa categorias discretas (Partido A, Partido B) y las barras van separadas. Si ves barras pegadas, es histograma. Si estan separadas, son barras."
    },

    // --- SLIDE 5: Grafica de barras ---
    {
        tipo: "ejemplo",
        titulo: "Lectura de grafica de barras",
        contenido: `<p>En una eleccion distrital, los resultados fueron:</p>
        <table>
            <tr><th>Partido</th><th>Votos</th></tr>
            <tr><td>Partido A</td><td>12,500</td></tr>
            <tr><td>Partido B</td><td>8,300</td></tr>
            <tr><td>Partido C</td><td>6,200</td></tr>
            <tr><td>Candidato Independiente</td><td>3,000</td></tr>
        </table>
        <p><strong>Pregunta tipica CENEVAL:</strong> "Cual es la diferencia entre el primer y tercer lugar?"</p>
        <p><strong>Respuesta:</strong> 12,500 - 6,200 = <strong>6,300 votos</strong></p>
        <p><strong>Trampa comun:</strong> Confundir el tercer lugar con el segundo (8,300). Siempre ordena antes de responder.</p>`
    },

    // --- SLIDE 6: Grafica circular ---
    {
        tipo: "contenido",
        titulo: "Grafica circular (de pastel)",
        contenido: `<p>Muestra <strong>proporciones de un todo</strong> (siempre suman 100%).</p>
        <ul>
            <li><strong>Regla de oro:</strong> Si te dan porcentajes y el total, multiplica para obtener valores absolutos</li>
            <li><strong>Ejemplo:</strong> Si el 35% de 10,000 votos fueron para el Partido A, entonces fueron 3,500 votos</li>
            <li><strong>Trampa CENEVAL:</strong> Poner como opcion el porcentaje cuando preguntan el valor absoluto (o viceversa)</li>
        </ul>
        <p><strong>Cuando se usa en contexto electoral:</strong></p>
        <ul>
            <li>Distribucion del financiamiento publico entre partidos</li>
            <li>Composicion de la Camara de Diputados por partido</li>
            <li>Porcentaje de participacion vs abstencion</li>
        </ul>`
    },

    // --- SLIDE 7: Formula de frecuencia ---
    {
        tipo: "formula",
        titulo: "Frecuencia relativa",
        formula: "fr = fi / N",
        explicacion: "Donde <strong>fi</strong> es la frecuencia absoluta (cuantas veces aparece un dato) y <strong>N</strong> es el total de datos. El resultado es un decimal entre 0 y 1. Para obtener porcentaje, multiplica por 100."
    },

    // --- SLIDE 8: Tablas de frecuencia ---
    {
        tipo: "contenido",
        titulo: "Tablas de frecuencia",
        contenido: `<p>Una tabla de frecuencia organiza datos crudos en categorias o intervalos.</p>
        <table>
            <tr><th>Rango de edad</th><th>fi (absoluta)</th><th>fr (relativa)</th><th>Acumulada</th></tr>
            <tr><td>18-25</td><td>45</td><td>0.225 (22.5%)</td><td>45</td></tr>
            <tr><td>26-35</td><td>62</td><td>0.310 (31.0%)</td><td>107</td></tr>
            <tr><td>36-45</td><td>48</td><td>0.240 (24.0%)</td><td>155</td></tr>
            <tr><td>46-60</td><td>30</td><td>0.150 (15.0%)</td><td>185</td></tr>
            <tr><td>61+</td><td>15</td><td>0.075 (7.5%)</td><td>200</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>200</strong></td><td><strong>1.000</strong></td><td></td></tr>
        </table>
        <p><strong>Dato clave:</strong> El grupo mas numeroso (26-35) se llama <strong>clase modal</strong>.</p>`
    },

    // --- SLIDE 9: Quiz 1 ---
    {
        tipo: "quiz",
        titulo: "Tablas de frecuencia",
        pregunta: "Usando la tabla anterior: si quieres saber cuantos funcionarios tienen 35 anos o menos, que columna consultas?",
        opciones: [
            "A) La columna de frecuencia relativa (fr)",
            "B) La columna de frecuencia acumulada",
            "C) La columna de frecuencia absoluta (fi)"
        ],
        respuesta: 1,
        feedbackOk: "Correcto! La frecuencia acumulada te dice cuantos datos hay hasta ese intervalo. Para 35 anos o menos: 107 funcionarios.",
        feedbackError: "La respuesta es B. La frecuencia acumulada suma todos los datos hasta ese intervalo. Hasta 26-35: 45 + 62 = 107."
    },

    // --- SLIDE 10: Tablas de doble entrada ---
    {
        tipo: "ejemplo",
        titulo: "Tabla de doble entrada (contingencia)",
        contenido: `<p>Relaciona dos variables simultaneamente. Muy frecuente en el CENEVAL.</p>
        <table>
            <tr><th></th><th>Urbana</th><th>Rural</th><th>Total</th></tr>
            <tr><td><strong>Voto a favor</strong></td><td>320</td><td>180</td><td>500</td></tr>
            <tr><td><strong>Voto en contra</strong></td><td>80</td><td>120</td><td>200</td></tr>
            <tr><td><strong>Abstencion</strong></td><td>100</td><td>200</td><td>300</td></tr>
            <tr><td><strong>Total</strong></td><td>500</td><td>500</td><td>1,000</td></tr>
        </table>
        <p><strong>Preguntas tipicas:</strong></p>
        <ul>
            <li>"Que porcentaje de la zona rural voto a favor?" = 180/500 = <strong>36%</strong></li>
            <li>"En que zona hubo mayor abstencion?" = Rural (200 vs 100)</li>
            <li>"Del total de votos a favor, que porcentaje es urbano?" = 320/500 = <strong>64%</strong></li>
        </ul>`
    },

    // --- SLIDE 11: Concepto clave 2 ---
    {
        tipo: "concepto",
        titulo: "Porcentaje del total vs porcentaje del grupo",
        frente: "Un error frecuente: confundir el porcentaje del TOTAL con el porcentaje de un GRUPO. Como los distingues?",
        reverso: "Depende del <strong>denominador</strong>. Si te preguntan 'que porcentaje del TOTAL voto a favor en zona rural', divides entre 1,000. Si preguntan 'que porcentaje de la zona RURAL voto a favor', divides entre 500. <strong>Siempre identifica el denominador antes de calcular.</strong>"
    },

    // --- SLIDE 12: Graficas de linea ---
    {
        tipo: "contenido",
        titulo: "Graficas de linea (series de tiempo)",
        contenido: `<p>Muestran como cambia una variable a lo largo del tiempo. Ideales para <strong>tendencias</strong>.</p>
        <ul>
            <li><strong>Eje X:</strong> siempre es el tiempo (anos, meses, jornadas)</li>
            <li><strong>Eje Y:</strong> la variable medida (participacion, votos, presupuesto)</li>
            <li><strong>Linea ascendente:</strong> la variable crece</li>
            <li><strong>Linea descendente:</strong> la variable decrece</li>
            <li><strong>Pico:</strong> punto maximo local</li>
            <li><strong>Valle:</strong> punto minimo local</li>
        </ul>
        <p><strong>Pregunta tipica:</strong> "En que periodo hubo el mayor incremento de participacion?" Busca el tramo donde la linea sube mas pronunciadamente.</p>`
    },

    // --- SLIDE 13: Diagrama de caja ---
    {
        tipo: "contenido",
        titulo: "Diagrama de caja y bigotes (box plot)",
        contenido: `<p>Resume la <strong>dispersion</strong> de un conjunto de datos en 5 valores:</p>
        <ul>
            <li><strong>Minimo:</strong> el dato mas pequeno (inicio del bigote izquierdo)</li>
            <li><strong>Q1 (cuartil 1):</strong> el 25% de los datos esta por debajo</li>
            <li><strong>Mediana (Q2):</strong> la linea dentro de la caja (50% de los datos)</li>
            <li><strong>Q3 (cuartil 3):</strong> el 75% de los datos esta por debajo</li>
            <li><strong>Maximo:</strong> el dato mas grande (final del bigote derecho)</li>
        </ul>
        <p><strong>Rango intercuartilico (IQR):</strong> Q3 - Q1. Mide la dispersion del 50% central de los datos.</p>
        <p><strong>Valores atipicos:</strong> puntos fuera de los bigotes. Indican datos inusuales (ej: una casilla con participacion anomalamente alta).</p>`
    },

    // --- SLIDE 14: Quiz 2 ---
    {
        tipo: "quiz",
        titulo: "Interpretacion de graficos",
        pregunta: "En un diagrama de caja y bigotes sobre votos por casilla, la mediana es 350 y Q1 es 280. Si Q3 es 420, cual es el rango intercuartilico (IQR)?",
        opciones: [
            "A) 70",
            "B) 140",
            "C) 350"
        ],
        respuesta: 1,
        feedbackOk: "Correcto! IQR = Q3 - Q1 = 420 - 280 = 140. El 50% central de las casillas tiene entre 280 y 420 votos.",
        feedbackError: "IQR = Q3 - Q1 = 420 - 280 = 140. No confundas con Q1 solo (70 seria Q2-Q1) ni con la mediana."
    },

    // --- SLIDE 15: Estrategia de lectura ---
    {
        tipo: "contenido",
        titulo: "Protocolo de lectura: 4 pasos antes de responder",
        contenido: `<p>Antes de leer las opciones de respuesta, sigue estos 4 pasos:</p>
        <ol>
            <li><strong>Lee el titulo del grafico.</strong> Te dice QUE se esta midiendo</li>
            <li><strong>Lee los ejes.</strong> Identifica las unidades (porcentaje? miles? frecuencia?)</li>
            <li><strong>Identifica la escala.</strong> Empieza en 0? Hay corte? La escala es regular?</li>
            <li><strong>Lee la pregunta COMPLETA</strong> antes de mirar las opciones</li>
        </ol>
        <p><strong>Trampa clasica:</strong> El CENEVAL a veces usa escalas que no empiezan en 0, haciendo que diferencias pequenas parezcan enormes. Si ves barras que parecen muy distintas, <strong>verifica la escala del eje Y</strong>.</p>`
    },

    // --- SLIDE 16: Trampas comunes ---
    {
        tipo: "contenido",
        titulo: "7 trampas del CENEVAL en graficos",
        contenido: `<ol>
            <li><strong>Escala truncada:</strong> el eje Y no empieza en 0 (exagera diferencias)</li>
            <li><strong>Porcentaje vs absoluto:</strong> preguntan votos pero las opciones estan en porcentaje</li>
            <li><strong>Categorias invertidas:</strong> el orden de las barras no coincide con la leyenda</li>
            <li><strong>Doble eje Y:</strong> dos escalas diferentes en el mismo grafico</li>
            <li><strong>Total incorrecto:</strong> la suma de las partes no da 100% en un pastel</li>
            <li><strong>Interpolacion enganiosa:</strong> inferir datos entre dos puntos de una linea</li>
            <li><strong>Correlacion como causalidad:</strong> dos lineas suben juntas pero no estan relacionadas</li>
        </ol>`
    },

    // --- SLIDE 17: Quiz 3 ---
    {
        tipo: "quiz",
        titulo: "Deteccion de errores",
        pregunta: "Una grafica circular muestra: Partido A 35%, Partido B 28%, Partido C 22%, Otros 20%. Que error tiene este grafico?",
        opciones: [
            "A) Los porcentajes no suman 100% (suman 105%)",
            "B) No tiene error, es una distribucion valida",
            "C) Los porcentajes deberian ser numeros enteros"
        ],
        respuesta: 0,
        feedbackOk: "Correcto! 35 + 28 + 22 + 20 = 105%. Una grafica circular SIEMPRE debe sumar exactamente 100%. Este grafico tiene un error.",
        feedbackError: "Suma: 35 + 28 + 22 + 20 = 105%. Una grafica circular siempre debe sumar 100%. La respuesta es A."
    },

    // --- SLIDE 18: Conversion entre representaciones ---
    {
        tipo: "concepto",
        titulo: "Conversion tabla a grafico",
        frente: "Si tienes datos de votos por partido (categorias discretas), que tipo de grafico es el mas apropiado?",
        reverso: "<strong>Grafica de barras</strong> (categorias separadas). Un error comun es usar un histograma, pero este es solo para datos continuos agrupados en intervalos. Los partidos son categorias discretas, no intervalos numericos."
    },

    // --- SLIDE 19: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "Barras = categorias discretas (separadas). Histograma = intervalos continuos (pegadas)",
            "Grafica circular siempre suma 100%. Si no suma, hay error",
            "Frecuencia relativa = fi / N. Para porcentaje, multiplica por 100",
            "En tablas de doble entrada, identifica el DENOMINADOR antes de calcular porcentajes",
            "Series de tiempo: eje X = tiempo, busca tendencias (subida/bajada/pico/valle)",
            "Caja y bigotes: IQR = Q3 - Q1. Puntos fuera de bigotes = valores atipicos",
            "SIEMPRE lee titulo, ejes y escala ANTES de responder",
            "Trampa #1 del CENEVAL: escala truncada que exagera diferencias visuales"
        ]
    }
]);

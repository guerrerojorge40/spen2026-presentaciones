registerPresentation(27, 'C', 'Sistemas de Representación: Mayoría Relativa y Representación Proporcional', [

    {
        tipo: "titulo",
        modulo: "C",
        titulo: "Sistemas de Representación Electoral",
        subtitulo: "Día 27 — Mayoría Relativa (MR) y Representación Proporcional (RP)"
    },

    {
        tipo: "contenido",
        titulo: "El Sistema Mixto Mexicano",
        contenido: `<p>México utiliza un <strong>sistema electoral mixto</strong> que combina dos principios de representación para integrar el Congreso de la Unión:</p>
        <ul>
            <li><strong>Mayoría Relativa (MR):</strong> El candidato con más votos en un distrito o entidad gana el cargo, sin importar si obtuvo mayoría absoluta</li>
            <li><strong>Representación Proporcional (RP):</strong> Los escaños se distribuyen entre los partidos según su porcentaje de votación, a través de listas de candidatos</li>
        </ul>
        <p>Este sistema busca equilibrar la <em>gobernabilidad</em> (favorecida por MR) con la <em>pluralidad política</em> (garantizada por RP).</p>
        <p><strong>Fundamento constitucional:</strong> Artículos 52, 53, 54, 56 y 57 de la CPEUM.</p>`
    },

    {
        tipo: "contenido",
        titulo: "Cámara de Diputados — Integración",
        contenido: `<p>La Cámara de Diputados se integra con <strong>500 diputados</strong> (Art. 52 CPEUM):</p>
        <table style="width:100%; border-collapse:collapse; margin-top:8px;">
            <tr style="background:#1565c0; color:white;">
                <th style="padding:8px;">Principio</th>
                <th style="padding:8px;">Número</th>
                <th style="padding:8px;">Mecanismo</th>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>Mayoría Relativa</strong></td>
                <td style="padding:8px; text-align:center;">300</td>
                <td style="padding:8px;">Un diputado por cada distrito electoral uninominal</td>
            </tr>
            <tr>
                <td style="padding:8px;"><strong>Representación Proporcional</strong></td>
                <td style="padding:8px; text-align:center;">200</td>
                <td style="padding:8px;">Listas regionales en 5 circunscripciones plurinominales (40 por circunscripción)</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>TOTAL</strong></td>
                <td style="padding:8px; text-align:center;"><strong>500</strong></td>
                <td style="padding:8px;">Mandato de 3 años; renovación total cada período</td>
            </tr>
        </table>`
    },

    {
        tipo: "contenido",
        titulo: "Senado de la República — Integración",
        contenido: `<p>El Senado se integra con <strong>128 senadores</strong> (Art. 56 CPEUM):</p>
        <table style="width:100%; border-collapse:collapse; margin-top:8px;">
            <tr style="background:#1565c0; color:white;">
                <th style="padding:8px;">Principio</th>
                <th style="padding:8px;">Número</th>
                <th style="padding:8px;">Mecanismo</th>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>Mayoría Relativa</strong></td>
                <td style="padding:8px; text-align:center;">64</td>
                <td style="padding:8px;">2 senadores por cada entidad federativa (32 entidades × 2)</td>
            </tr>
            <tr>
                <td style="padding:8px;"><strong>Primera Minoría</strong></td>
                <td style="padding:8px; text-align:center;">32</td>
                <td style="padding:8px;">1 escaño por entidad al partido con la segunda mayor votación</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>Representación Proporcional</strong></td>
                <td style="padding:8px; text-align:center;">32</td>
                <td style="padding:8px;">Lista nacional única; mandato de 6 años</td>
            </tr>
            <tr>
                <td style="padding:8px;"><strong>TOTAL</strong></td>
                <td style="padding:8px; text-align:center;"><strong>128</strong></td>
                <td style="padding:8px;">Renovación total cada 6 años</td>
            </tr>
        </table>`
    },

    {
        tipo: "concepto",
        titulo: "Mayoría Relativa — Concepto",
        frente: "¿Cómo funciona el principio de Mayoría Relativa y cuál es su ventaja principal?",
        reverso: "En MR gana quien obtiene más votos en el distrito o entidad, sin necesidad de mayoría absoluta (más del 50%). Su ventaja es producir ganadores claros y gobiernos estables. Su desventaja es que los votos a partidos perdedores no se convierten en representación: el voto 'no útil' se pierde."
    },

    {
        tipo: "concepto",
        titulo: "Representación Proporcional — Cociente Natural",
        frente: "¿Qué es el cociente natural y cómo se usa para asignar diputados de RP?",
        reverso: "El cociente natural es el resultado de dividir la votación válida entre el número de diputados de RP a asignar. Cada partido recibe tantos diputados como veces cabe el cociente en su votación. Los escaños sobrantes se asignan por 'resto mayor': el partido con mayor fracción decimal restante recibe el siguiente escaño."
    },

    {
        tipo: "formula",
        titulo: "Fórmula de Asignación RP (Diputados)",
        formula: "Cociente natural = Votación válida nacional / 200  |  Diputados RP partido = Votos partido / Cociente natural (parte entera)  |  Sobrantes → Resto Mayor",
        explicacion: "Ejemplo: si la votación válida es 40,000,000 votos, el cociente natural = 200,000 votos por diputado. Un partido con 4,000,000 de votos obtiene 20 diputados de RP en primera ronda. Si hay escaños sobrantes, se asignan al partido con el mayor residuo decimal, hasta completar los 200 diputados."
    },

    {
        tipo: "ejemplo",
        titulo: "Ejemplo Práctico — Distribución RP",
        contenido: `<p><strong>Situación:</strong> Votación válida = 30,000,000. Diputados RP a repartir: 200.</p>
        <p><strong>Cociente natural:</strong> 30,000,000 / 200 = <strong>150,000 votos por diputado</strong></p>
        <table style="width:100%; border-collapse:collapse; margin-top:6px;">
            <tr style="background:#1565c0; color:white;">
                <th style="padding:6px;">Partido</th><th style="padding:6px;">Votos</th><th style="padding:6px;">Votos / CN</th><th style="padding:6px;">Diputados 1ª ronda</th><th style="padding:6px;">Residuo</th>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:6px;">A</td><td style="padding:6px;">9,000,000</td><td style="padding:6px;">60.00</td><td style="padding:6px;">60</td><td style="padding:6px;">0.00</td>
            </tr>
            <tr>
                <td style="padding:6px;">B</td><td style="padding:6px;">6,225,000</td><td style="padding:6px;">41.50</td><td style="padding:6px;">41</td><td style="padding:6px;">0.50</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:6px;">C</td><td style="padding:6px;">3,075,000</td><td style="padding:6px;">20.50</td><td style="padding:6px;">20</td><td style="padding:6px;">0.50</td>
            </tr>
        </table>
        <p style="margin-top:6px;">Si sobra 1 escaño entre B y C (igual residuo), se asigna al partido con <em>menor número de diputados MR</em> obtenidos, según los criterios del LGIPE.</p>`
    },

    {
        tipo: "contenido",
        titulo: "Las 5 Circunscripciones Plurinominales",
        contenido: `<p>El territorio nacional se divide en <strong>5 circunscripciones plurinominales</strong> para la elección de diputados de RP (Art. 53 CPEUM). Cada circunscripción elige <strong>40 diputados</strong> de listas regionales.</p>
        <ul>
            <li><strong>Circunscripción I (Noroeste):</strong> Baja California, B.C. Sur, Chihuahua, Durango, Jalisco, Nayarit, Sinaloa, Sonora</li>
            <li><strong>Circunscripción II (Norte):</strong> Aguascalientes, Coahuila, Guanajuato, Nuevo León, Querétaro, S.L.P., Tamaulipas, Zacatecas</li>
            <li><strong>Circunscripción III (Centro):</strong> Hidalgo, Estado de México, Morelos, Puebla, Tlaxcala</li>
            <li><strong>Circunscripción IV (Sureste):</strong> Campeche, Chiapas, Oaxaca, Tabasco, Veracruz, Yucatán, Quintana Roo</li>
            <li><strong>Circunscripción V (Centro-CDMX):</strong> Ciudad de México, Guerrero, Michoacán, Colima</li>
        </ul>
        <p><em>Los cabeceras de circunscripción son designadas por el INE.</em></p>`
    },

    {
        tipo: "quiz",
        titulo: "Quiz 1 — Integración del Congreso",
        pregunta: "¿Cuántos diputados de Representación Proporcional integran la Cámara de Diputados y en cuántas circunscripciones se eligen?",
        opciones: [
            "A) 300 diputados en 3 circunscripciones",
            "B) 200 diputados en 5 circunscripciones",
            "C) 200 diputados en 4 circunscripciones",
            "D) 128 diputados en 5 circunscripciones"
        ],
        respuesta: 1,
        feedbackOk: "¡Correcto! Son 200 diputados de RP elegidos en 5 circunscripciones plurinominales, con 40 diputados por circunscripción. Los otros 300 se eligen por MR en distritos uninominales.",
        feedbackError: "Incorrecto. La Cámara de Diputados tiene 200 escaños de RP distribuidos en 5 circunscripciones plurinominales (40 cada una). Los 300 restantes son de MR. Total: 500 diputados."
    },

    {
        tipo: "contenido",
        titulo: "Límites a la Sobrerrepresentación",
        contenido: `<p>El Art. 54 constitucional establece límites para evitar que un solo partido domine el Congreso:</p>
        <ul>
            <li><strong>Umbral o barrera legal:</strong> Para acceder a diputados de RP, un partido debe haber obtenido al menos el <strong>3% de la votación válida</strong> emitida en la elección nacional de diputados</li>
            <li><strong>Límite máximo de escaños:</strong> Ningún partido puede tener más de <strong>300 diputados</strong> (el 60% de 500), sumando MR y RP</li>
            <li><strong>Límite de sobrerrepresentación:</strong> La representación de un partido en la Cámara no puede exceder en más de <strong>8 puntos porcentuales</strong> su porcentaje de votación nacional</li>
        </ul>
        <p><em>Ejemplo: si un partido obtuvo el 40% de los votos, puede tener máximo el 48% de los diputados (240 de 500).</em></p>`
    },

    {
        tipo: "concepto",
        titulo: "Barrera Legal y Primera Minoría en el Senado",
        frente: "¿Qué es la 'primera minoría' en el Senado y cómo se diferencia de la RP?",
        reverso: "En cada entidad federativa, además de los 2 senadores de MR que gana el partido más votado, se asigna 1 escaño adicional al partido que obtuvo la segunda mayor votación en esa entidad — ese es el senador de 'primera minoría'. No es RP: no usa cocientes ni listas nacionales, sino el resultado por entidad. La RP en el Senado opera con 32 escaños de lista nacional."
    },

    {
        tipo: "contenido",
        titulo: "MR vs. RP — Comparativa",
        contenido: `<table style="width:100%; border-collapse:collapse;">
            <tr style="background:#1565c0; color:white;">
                <th style="padding:8px;">Aspecto</th>
                <th style="padding:8px;">Mayoría Relativa</th>
                <th style="padding:8px;">Representación Proporcional</th>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>¿Quién gana?</strong></td>
                <td style="padding:8px;">El candidato con más votos en el distrito</td>
                <td style="padding:8px;">Partidos según % de votos nacionales/regionales</td>
            </tr>
            <tr>
                <td style="padding:8px;"><strong>Candidatos</strong></td>
                <td style="padding:8px;">Uninominales (uno por distrito)</td>
                <td style="padding:8px;">Listas de partido (plurinominales)</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>Vínculo ciudadano</strong></td>
                <td style="padding:8px;">Directo con el representante de su distrito</td>
                <td style="padding:8px;">Con el partido político</td>
            </tr>
            <tr>
                <td style="padding:8px;"><strong>Resultado</strong></td>
                <td style="padding:8px;">Favorece bipartidismo, mayorías claras</td>
                <td style="padding:8px;">Favorece pluralidad, representación de minorías</td>
            </tr>
            <tr style="background:#e3f2fd;">
                <td style="padding:8px;"><strong>Votos perdidos</strong></td>
                <td style="padding:8px;">Votos al perdedor no producen representación</td>
                <td style="padding:8px;">Todos los votos sobre el umbral se representan</td>
            </tr>
        </table>`
    },

    {
        tipo: "quiz",
        titulo: "Quiz 2 — Senado y Primera Minoría",
        pregunta: "¿Cuántos senadores en total integran el Senado de la República y cuántos corresponden al principio de Mayoría Relativa?",
        opciones: [
            "A) 96 senadores; 64 de MR",
            "B) 128 senadores; 64 de MR",
            "C) 128 senadores; 96 de MR",
            "D) 128 senadores; 32 de MR"
        ],
        respuesta: 1,
        feedbackOk: "¡Exacto! El Senado tiene 128 senadores: 64 de MR (2 por entidad), 32 de primera minoría (1 por entidad al segundo partido) y 32 de RP (lista nacional). Solo los 64 son estrictamente de MR.",
        feedbackError: "Incorrecto. El Senado tiene 128 senadores. De ellos, 64 son de MR (2 por cada una de las 32 entidades). Los otros 64 se dividen entre primera minoría (32) y RP lista nacional (32)."
    },

    {
        tipo: "concepto",
        titulo: "Restricciones de las Listas Plurinominales",
        frente: "¿Puede un candidato que perdió en un distrito de MR aparecer en la lista de RP del mismo partido? ¿Qué dice la ley?",
        reverso: "Sí puede. La LGIPE y la Constitución permiten que un candidato registrado en MR también aparezca en la lista de RP del mismo partido. Si gana el distrito por MR, se le da de baja de la lista de RP y sube el siguiente. Esta práctica ha sido criticada políticamente pero es constitucional. La CPEUM prohíbe que un diputado o senador sea reelecto de forma inmediata para el mismo cargo, salvo que haya sido postulado por su mismo partido."
    },

    {
        tipo: "ejemplo",
        titulo: "Caso Práctico Integrado — SPEN",
        contenido: `<p><strong>Pregunta tipo SPEN:</strong> En la elección de diputados, el Partido X obtuvo el 35% de la votación válida nacional y ganó 110 distritos de MR. ¿Cuántos diputados de RP puede obtener como máximo, considerando el límite de sobrerrepresentación?</p>
        <p><strong>Análisis:</strong></p>
        <ul>
            <li>35% de votación → tope máximo de representación: 35% + 8% = <strong>43%</strong> de 500 = <strong>215 diputados</strong></li>
            <li>Ya tiene 110 de MR → puede recibir hasta 215 − 110 = <strong>105 diputados de RP</strong> como máximo</li>
            <li>Si el cociente natural le asigna más, se le reducen hasta llegar al tope</li>
            <li>Además, el límite absoluto es 300 diputados (60%); 215 &lt; 300, entonces aplica el de sobrerrepresentación</li>
        </ul>
        <p><em>Este tipo de cálculo aparece frecuentemente en el SPEN. Memorizar: tope = % votos + 8%, máximo absoluto = 300.</em></p>`
    },

    {
        tipo: "quiz",
        titulo: "Quiz 3 — Límites de Sobrerrepresentación",
        pregunta: "Un partido obtuvo el 45% de la votación válida y ganó 180 diputados de MR. ¿Cuántos diputados en total puede tener como máximo (sumando MR y RP)?",
        opciones: [
            "A) 265 diputados (53% de 500)",
            "B) 300 diputados (límite absoluto del 60%)",
            "C) 225 diputados (45% + 0%)",
            "D) 253 diputados (50.6%)"
        ],
        respuesta: 0,
        feedbackOk: "¡Correcto! El tope es 45% + 8% = 53% de 500 = 265 diputados. Aunque el límite absoluto es 300, se aplica el más restrictivo: 265. Si ya tiene 180 de MR, puede recibir hasta 85 de RP.",
        feedbackError: "Incorrecto. El cálculo correcto es: % votos (45%) + 8% = 53% × 500 = 265 diputados como tope. Se aplica este límite porque es menor al absoluto de 300 (60%). Resultado: máximo 265 diputados totales."
    },

    {
        tipo: "resumen",
        titulo: "Puntos Clave del Día 27",
        puntos: [
            "México usa sistema mixto: MR + RP para integrar el Congreso",
            "Cámara de Diputados: 500 total — 300 MR (distritos) + 200 RP (5 circunscripciones, 40 c/u)",
            "Senado: 128 total — 64 MR + 32 Primera Minoría + 32 RP (lista nacional)",
            "MR: gana quien tiene más votos en el distrito, sin necesidad de mayoría absoluta",
            "RP: escaños distribuidos por cociente natural; residuos por resto mayor",
            "Barrera legal: mínimo 3% de la votación válida para acceder a diputados de RP",
            "Límite de sobrerrepresentación: máximo % votos + 8 puntos porcentuales",
            "Límite absoluto de escaños: ningún partido puede tener más de 300 diputados (60%)",
            "Primera minoría (Senado): 1 escaño por entidad al partido con segunda mayor votación — no es RP",
            "Mañana (Día 28): Medios de Impugnación — LGSMIME: Reglas generales"
        ]
    }

]);

registerPresentation(16, 'AB', 'Reforzamiento Transversal A+B: Estrategias Forenses', [
    {
        tipo: "titulo",
        modulo: "AB",
        titulo: "Dia 16 — Reforzamiento Transversal Modulos A y B",
        subtitulo: "Dia 16 — Estrategias Forenses de Descarte y Carga Cognitiva"
    },
    {
        tipo: "contenido",
        titulo: "¿Que es la Carga Cognitiva?",
        contenido: "<p>La <strong>carga cognitiva</strong> es la cantidad de informacion que tu memoria de trabajo puede manejar al mismo tiempo durante el examen.</p><ul><li>Tu cerebro es como un escritorio con espacio limitado</li><li>Cada problema complejo abre un 'archivo' en ese escritorio</li><li>Cuando se satura: lentitud, errores, bloqueos</li></ul><p><strong>La meta:</strong> reducir la carga cognitiva con estrategias automatizadas, no con mas esfuerzo bruto.</p>"
    },
    {
        tipo: "formula",
        titulo: "Las 4 Estrategias Anti-Carga Cognitiva",
        formula: "1. Automatizar patrones | 2. Orden de ataque inteligente | 3. Tecnica de dos pasadas | 4. Descarte activo",
        explicacion: "Cada estrategia libera espacio mental para los problemas realmente dificiles. Practica hasta que sean reflejos, no decisiones conscientes."
    },
    {
        tipo: "concepto",
        titulo: "Trampa CENEVAL: Concordancia Oculta",
        frente: "¿Por que 'La Junta Ejecutiva, junto con todos los representantes, <u>resolvieron</u>' es incorrecto?",
        reverso: "El sujeto nucleo es 'La Junta' (singular). 'Junto con...' no pluraliza el sujeto. Correcto: 'resolvio'. Tecnica: tacha la frase subordinada entre comas y lee solo sujeto + verbo."
    },
    {
        tipo: "contenido",
        titulo: "Modulo A: Dequeismo y Queismo",
        contenido: "<p><strong>Prueba del 'de que / que':</strong> sustituye la clausula por 'eso'. Si 'de eso' suena natural, necesitas 'de que'.</p><ul><li><strong>Sin 'de' (dequeismo si lo agregas):</strong> decir, afirmar, informar, comunicar, manifestar, declarar</li><li><strong>Con 'de' (queismo si lo omites):</strong> certeza, seguridad, confianza, evidencia, garantia, conviccion</li></ul><p>Ejemplo: <em>'El Vocal tiene la certeza <u>de que</u> el proceso concluira.'</em></p>"
    },
    {
        tipo: "quiz",
        titulo: "Reactivo Tipo CENEVAL — Modulo A",
        pregunta: "El Director Ejecutivo manifesto DE QUE las credenciales cumplen con todos los requisitos. ¿Que error contiene?",
        opciones: ["A) Queismo", "B) Dequeismo", "C) Anfibologia", "D) Error de concordancia"],
        respuesta: 1,
        feedbackOk: "Correcto. 'Manifestar' no lleva preposicion 'de'. Correcto: 'manifesto QUE las credenciales...'",
        feedbackError: "Revisa: 'manifestar' es un verbo de comunicacion que NO requiere preposicion 'de'. Agregar 'de' es dequeismo."
    },
    {
        tipo: "concepto",
        titulo: "Anfibologia: La Trampa de la Ambiguedad",
        frente: "¿Que es la anfibologia y como la detecta el CENEVAL?",
        reverso: "Es cuando una frase puede interpretarse de dos formas. El CENEVAL usa pronombres relativos ambiguos ('que') con dos posibles antecedentes. Correccion: usar 'quien' para personas o reestructurar la frase."
    },
    {
        tipo: "formula",
        titulo: "Modulo B: Patron 'Al Menos Uno'",
        formula: "P(al menos uno) = 1 - P(ninguno)",
        explicacion: "Palabras magicas: 'al menos uno', 'por lo menos uno', 'uno o mas'. Calcula P(ninguno) multiplicando las probabilidades de NO ocurrencia, luego restalo de 1. Mucho mas rapido que sumar casos individuales."
    },
    {
        tipo: "ejemplo",
        titulo: "Probabilidad Inversa — Ejemplo Resuelto",
        contenido: "<p><strong>Problema:</strong> 3 urnas, probabilidad de falla en sellado = 0.2 cada una. ¿P(al menos una con falla)?</p><p><strong>Paso 1:</strong> P(ninguna falla) = 0.8 x 0.8 x 0.8 = 0.512</p><p><strong>Paso 2:</strong> P(al menos una) = 1 - 0.512 = <strong>0.488 = 48.8%</strong></p><p><em>Trampa: La opcion 59.2% es P(ninguna). No caigas.</em></p>"
    },
    {
        tipo: "contenido",
        titulo: "Los 3 Tipos de Problemas de Porcentaje",
        contenido: "<ul><li><strong>Tipo A — ¿Que % es X de Y?</strong><br>Formula: (X / Y) x 100<br>Atajo: simplifica la fraccion primero</li><li><strong>Tipo B — ¿Cuanto es X% de Y?</strong><br>Formula: Y x (X/100)<br>Atajo: calcula 10%, luego multiplica</li><li><strong>Tipo C — Si X% es N, ¿cual es el total?</strong><br>Formula: N / (X/100)<br>Trampa clasica: muchos dividen al reves</li></ul>"
    },
    {
        tipo: "quiz",
        titulo: "Reactivo Tipo CENEVAL — Modulo B",
        pregunta: "El 12% de las credenciales de un padron corresponde a ciudadanos fallecidos. Si hay 1,440 credenciales de fallecidos, ¿cual es el total del padron?",
        opciones: ["A) 10,000", "B) 12,000", "C) 15,000", "D) 17,280"],
        respuesta: 1,
        feedbackOk: "Correcto. Total = 1440 / 0.12 = 12,000. Es el Tipo C: el parcial entre la proporcion.",
        feedbackError: "Cuidado: D (17,280) es la trampa de multiplicar 1440 x 12 en lugar de dividir. Total = 1440 / 0.12 = 12,000."
    },
    {
        tipo: "formula",
        titulo: "Media vs. Mediana vs. Moda",
        formula: "Media = suma / n | Mediana = valor central ordenado | Moda = valor mas frecuente",
        explicacion: "Para datos con valores extremos (muy altos o bajos), la MEDIANA es mas representativa que la media. El CENEVAL pregunta cual usar: si hay un valor atipico obvio, elige mediana."
    },
    {
        tipo: "concepto",
        titulo: "Conjuntos: Formula Universal",
        frente: "¿Como calculas cuantos elementos no pertenecen a ninguno de dos conjuntos A y B?",
        reverso: "Total_universo - (A + B - Interseccion). Ejemplo: 80 empleados, 45 con cert. A, 35 con cert. B, 15 con ambas. Con al menos una: 45+35-15=65. Sin ninguna: 80-65=15."
    },
    {
        tipo: "quiz",
        titulo: "Reactivo Integrado — Modulo A y B",
        pregunta: "El Consejo Local, asi como los tres vocales adscritos, emitieron un comunicado conjunto. ¿Que error contiene?",
        opciones: ["A) Error de puntuacion: falta coma", "B) Dequeismo implicito", "C) Error de concordancia: 'emitio' es correcto", "D) Anfibologia en 'comunicado conjunto'"],
        respuesta: 2,
        feedbackOk: "Correcto. 'El Consejo Local' es el sujeto (singular). 'Junto con los tres vocales' no lo pluraliza. El verbo correcto es 'emitio'.",
        feedbackError: "Recuerda: 'asi como' no pluraliza el sujeto. 'El Consejo Local... emitio'. El error es de concordancia de numero."
    },
    {
        tipo: "contenido",
        titulo: "Los 5 Patrones CENEVAL que Siempre Regresan",
        contenido: "<ol><li><strong>Concordancia oculta:</strong> sujeto colectivo + frase larga + verbo plural</li><li><strong>Complemento de probabilidad:</strong> 'al menos uno' = 1 - P(ninguno)</li><li><strong>Porcentaje invertido:</strong> parcial/proporcion = total (no multiplicar)</li><li><strong>Signos asimetricos:</strong> parentesis o guiones sin cerrar</li><li><strong>Media vs. mediana:</strong> con datos extremos, usar mediana</li></ol>"
    },
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia 16",
        puntos: [
            "La carga cognitiva limita tu rendimiento: usa estrategias que la reduzcan",
            "Tachado mental para concordancia: aísla sujeto y verbo quitando frases intermedias",
            "Dequeismo: verbos de comunicacion sin 'de'. Queismo: sustantivos abstractos con 'de'",
            "Al menos uno siempre usa probabilidad inversa: 1 - P(ninguno)",
            "Porcentaje Tipo C: total = parcial dividido entre la proporcion, nunca multiplicado",
            "Con valores extremos, la mediana es mas representativa que la media",
            "Formula de conjuntos: Total = A + B - Interseccion + Ninguno",
            "Estrategia de lectura: lee la pregunta ANTES del texto para buscar activamente"
        ]
    }
]);

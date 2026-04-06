// Día 6 — Simulacro Parcial Módulo A (Módulo A)
registerPresentation(6, 'A', 'Simulacro Parcial Módulo A', [

    // --- SLIDE 1: Titulo ---
    {
        tipo: "titulo",
        modulo: "A",
        titulo: "Simulacro Parcial Módulo A",
        subtitulo: "Día 6 — Módulo A: Lenguaje y Comunicación | Repaso tactico, estrategia de examen y simulacro de 60 preguntas"
    },

    // --- SLIDE 2: Importancia del Módulo A ---
    {
        tipo: "contenido",
        titulo: "El Módulo A: tu red de seguridad",
        contenido: `<p>El Módulo A representa el <strong>40% de la evaluación total</strong> del examen CENEVAL para Vocal Secretario.</p>
        <ul>
            <li>Dominando Lenguaje y Comunicación, enfrentas los modulos políticos y matematicos con un <strong>colchon de puntos solido</strong></li>
            <li>Hoy no aprendes formulas nuevas: <strong>consolidas la vision tactica</strong> sobre las trampas del EXANI III</li>
            <li>El objetivo es identificar patrones de error y responder con precision bajo presion de tiempo</li>
        </ul>
        <p>Este día marca la culminacion de la Fase 1 del plan de estudio SPEN 2026.</p>`
    },

    // --- SLIDE 3: Las 5 trampas mortales ---
    {
        tipo: "contenido",
        titulo: "Las 5 trampas mortales del Módulo A",
        contenido: `<p>El CENEVAL disena reactivos con tres niveles de distraccion. Estos son los <strong>5 errores categoricos</strong> que debes detectar automaticamente:</p>
        <ol>
            <li><strong>Silépsis oculta:</strong> falta de concordancia entre el verbo y el nucleo del sujeto</li>
            <li><strong>Gerundio de posterioridad:</strong> usar gerundio para acciones posteriores al verbo principal</li>
            <li><strong>Anacoluto:</strong> sujeto que se queda sin verbo por cambio de construccion</li>
            <li><strong>Coma criminal:</strong> separar sujeto de predicado con coma</li>
            <li><strong>Queismo oculto:</strong> omitir la preposicion 'de' cuando el verbo la exige</li>
        </ol>`
    },

    // --- SLIDE 4: Trampa 1 - Silépsis ---
    {
        tipo: "ejemplo",
        titulo: "Trampa 1: Silépsis oculta (concordancia)",
        contenido: `<p>El verbo debe concordar con el <strong>nucleo del sujeto</strong>, no con los complementos plurales que se interpongan.</p>
        <p><strong>Trampa CENEVAL:</strong> "El conjunto de diputados y senadores <strong>votaron</strong> en contra de la reforma."</p>
        <p><strong>Error:</strong> El nucleo del sujeto es "el conjunto" (singular), no "diputados y senadores". El verbo debe ir en singular.</p>
        <p><strong>Correccion:</strong> "El conjunto de diputados y senadores <strong>voto</strong> en contra de la reforma."</p>
        <p><strong>Otros ejemplos:</strong> "La mayoría de los funcionarios <strong>cumplio</strong> con su deber" (no "cumplieron"). "El grupo de representantes <strong>presento</strong> su inconformidad" (no "presentaron").</p>`
    },

    // --- SLIDE 5: Concepto - Gerundio ---
    {
        tipo: "concepto",
        titulo: "Gerundio de posterioridad",
        frente: "Por que es incorrecto usar el gerundio para expresar una accion posterior al verbo principal?",
        reverso: "El gerundio expresa <strong>simultaneidad</strong> (mientras sucede) o <strong>anterioridad</strong> (habiendo sucedido antes), pero <strong>nunca posterioridad</strong>. Error: 'El Magistrado analizo el caso, dictando sentencia al día siguiente.' Lo correcto es: 'El Magistrado analizo el caso <strong>y dicto</strong> sentencia al día siguiente.' La accion de dictar ocurrio DESPUES, por lo que requiere un verbo conjugado, no un gerundio."
    },

    // --- SLIDE 6: Trampa 3 - Anacoluto ---
    {
        tipo: "ejemplo",
        titulo: "Trampa 3: Anacoluto (orfandad sintactica)",
        contenido: `<p>El anacoluto ocurre cuando se <strong>abandona la construccion</strong> de una oracion para iniciar otra, dejando al sujeto original sin verbo.</p>
        <p><strong>Ejemplo CENEVAL:</strong> "La Junta General Ejecutiva, respecto a las medidas presupuestales que deben aplicarse este ano, sin embargo, el Consejo General no estuvo de acuerdo."</p>
        <p><strong>Análisis:</strong> La oracion comienza con "La Junta General Ejecutiva" como sujeto, pero nunca se dice que hizo la Junta. A medio camino, el sujeto cambia a "el Consejo General".</p>
        <p><strong>Deteccion rapida:</strong> Al leer una oracion larga, preguntate: el sujeto inicial tiene un verbo que le corresponda? Si la respuesta es no, hay anacoluto.</p>`
    },

    // --- SLIDE 7: Trampa 4 - Coma criminal ---
    {
        tipo: "formula",
        titulo: "Trampa 4: La coma criminal",
        formula: "JAMAS se separa al sujeto asertivo de su verbo base con una coma.",
        explicacion: "Ejemplo de error: 'El Vocal Ejecutivo de esta Junta Distrital, ordeno el despliegue.' La coma antes de 'ordeno' es incorrecta. No importa que el sujeto sea largo: la coma entre sujeto y predicado siempre es un error. En el examen, sospecha de cualquier coma que aparezca justo antes del verbo principal."
    },

    // --- SLIDE 8: Trampa 5 - Queismo oculto ---
    {
        tipo: "contenido",
        titulo: "Trampa 5: Queismo oculto (dequeismo inverso)",
        contenido: `<p>El queismo oculto consiste en <strong>reducir erroneamente</strong> expresiones que exigen preposicion:</p>
        <ul>
            <li><strong>Error:</strong> "Asegurarse que" en lugar de "Asegurarse <strong>de que</strong>"</li>
            <li><strong>Error:</strong> "Enterarse que" en lugar de "Enterarse <strong>de que</strong>"</li>
            <li><strong>Error:</strong> "Tener la certeza que" en lugar de "Tener la certeza <strong>de que</strong>"</li>
        </ul>
        <p><strong>Truco de reemplazo:</strong> Transforma la frase a pregunta.</p>
        <ul>
            <li>"Asegurarse de que o asegurarse que?" -> Se asegura <strong>de que</strong>? Si. -> Lleva 'de que'.</li>
        </ul>
        <p><strong>Correccion:</strong> "El tribunal detérmino la necesidad <strong>de que</strong> los partidos entreguen la documentacion."</p>`
    },

    // --- SLIDE 9: Quiz 1 - Trampas ---
    {
        tipo: "quiz",
        titulo: "Deteccion de trampas del Módulo A",
        pregunta: "Cual de las siguientes oraciones contiene un error de gerundio de posterioridad?",
        opciones: [
            "A) El funcionario de casilla reviso las boletas, encontrando varias con marcas irregulares.",
            "B) La presidenta del consejo leyo el informe, aprobando el presupuesto tres dias despues.",
            "C) Habiendo concluido el conteo, el vocal procedio a sellar los paquetes."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. En B, 'aprobando el presupuesto tres dias despues' indica una accion POSTERIOR (tres dias despues), lo cuál es incorrecto con gerundio. Lo correcto seria: 'leyo el informe y aprobo el presupuesto tres dias despues.' A expresa simultaneidad (mientras revisaba, encontro). C expresa anterioridad (habiendo concluido antes).",
        feedbackError: "La respuesta es B. El gerundio 'aprobando' expresa una accion que ocurrio 'tres dias despues', es decir, POSTERIOR al verbo principal. El gerundio solo admite simultaneidad o anterioridad. A es correcta (simultaneidad) y C es correcta (anterioridad con 'habiendo')."
    },

    // --- SLIDE 10: Estrategia de tiempo ---
    {
        tipo: "contenido",
        titulo: "Gestión del tiempo en el examen",
        contenido: `<p>El CENEVAL oficial asigna aproximadamente <strong>1.7 minutos por reactivo</strong>. Tu meta de entrenamiento es responder en <strong>1 minuto 30 segundos o menos</strong>.</p>
        <table>
            <tr><th>Fase</th><th>Tiempo</th><th>Accion</th></tr>
            <tr><td>Primera pasada</td><td>0-60 min</td><td>Responde las preguntas que dominas sin detenerte en las dificiles</td></tr>
            <tr><td>Segúnda pasada</td><td>60-85 min</td><td>Regresa a las preguntas marcadas y aplica tecnicas de descarte</td></tr>
            <tr><td>Revision final</td><td>85-100 min</td><td>Verifica respuestas dudosas y asegurate de no dejar reactivos en blanco</td></tr>
        </table>
        <p><strong>Regla de oro:</strong> Nunca dejes un reactivo sin responder. No hay penalizacion por respuesta incorrecta en el CENEVAL.</p>`
    },

    // --- SLIDE 11: Tecnica de descarte ---
    {
        tipo: "formula",
        titulo: "Tecnica de descarte sistematico",
        formula: "Elimina 2 opciones con errores evidentes. Entre las 2 restantes, aplica el truco específico del tema.",
        explicacion: "Paso 1: Lee las 4 opciones e identifica las que tienen errores obvios (coma criminal, dequeismo evidente). Paso 2: Descarta esas opciones. Paso 3: Entre las restantes, aplica la regla o truco correspondiente (sustitución por ESO, verificación de concordancia, etc.). Este método reduce tu margen de error del 75% al 50% o menos."
    },

    // --- SLIDE 12: Concepto - Concordancia ---
    {
        tipo: "concepto",
        titulo: "Concordancia: nucleo del sujeto",
        frente: "En la oracion 'La lista de candidatos registrados ante el INE fueron publicados ayer', cuál es el error y como se corrige?",
        reverso: "El error es de <strong>concordancia</strong>. El nucleo del sujeto es 'la lista' (singular femenino), no 'candidatos registrados'. El verbo debe concordar con el nucleo: 'La lista de candidatos registrados ante el INE <strong>fue publicada</strong> ayer.' Truco: elimina mentalmente los complementos ('de candidatos registrados ante el INE') y verifica si sujeto y verbo concuerdan."
    },

    // --- SLIDE 13: Repaso rapido Módulo A ---
    {
        tipo: "contenido",
        titulo: "Repaso relampago: todos los temás del Módulo A",
        contenido: `<table>
            <tr><th>Dia</th><th>Tema</th><th>Concepto clave</th></tr>
            <tr><td>1-2</td><td>Comprensión lectora</td><td>Ideas principales, inferenciales, estructura argumentativa</td></tr>
            <tr><td>3</td><td>Redacción directa</td><td>Párrafos, conectores lógicos, cohesion textual</td></tr>
            <tr><td>4</td><td>Ortografía y acentuación</td><td>RAE 2010: solo/este sin tilde, guion, aun/aun, coma criminal</td></tr>
            <tr><td>5</td><td>Vicios de dicción</td><td>Dequeismo, queismo, truco de ESO, pleonasmos, anacoluto</td></tr>
            <tr><td>6</td><td>Simulacro</td><td>Integración de todos los temás bajo presion de tiempo</td></tr>
        </table>`
    },

    // --- SLIDE 14: Errores comunes en simulacros ---
    {
        tipo: "contenido",
        titulo: "Los 6 errores más comunes en simulacros",
        contenido: `<ol>
            <li><strong>Leer solo la mitad de la pregunta:</strong> el CENEVAL incluye negaciones ("NO presenta error") que cambian toda la lógica</li>
            <li><strong>Cambiar la respuesta correcta:</strong> estadísticamente, tu primera intuicion suele ser acertada. Solo cambia si encuentras evidencia solida</li>
            <li><strong>Invertir dequeismo y queismo:</strong> muchos aspirantes corrigen el queismo anadiendo 'de' donde no va, creando dequeismo</li>
            <li><strong>Ignorar el contexto temporal del gerundio:</strong> no todo gerundio es incorrecto, solo el de posterioridad</li>
            <li><strong>Confundir nucleo del sujeto con complementos:</strong> la concordancia siempre va con el nucleo, no con las palabras más cercanas al verbo</li>
            <li><strong>Perder tiempo en una pregunta dificil:</strong> marca y avanza. Regresa en la segunda pasada</li>
        </ol>`
    },

    // --- SLIDE 15: Quiz 2 - Integración ---
    {
        tipo: "quiz",
        titulo: "Pregunta integradora: Módulo A completo",
        pregunta: "Cual de las siguientes oraciones esta CORRECTAMENTE escrita según todas las reglas del Módulo A?",
        opciones: [
            "A) El grupo de funcionarios electorales, informaron de que el computo habia sido completado solo por ellos.",
            "B) El grupo de funcionarios electorales informo que el computo habia sido completado solo por ellos.",
            "C) El grupo de funcionarios electorales informaron que el computo habia sido completado solo por ellos."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. B no tiene errores: 'informo' concuerda con 'el grupo' (singular), no hay coma criminal, 'informar que' es correcto (no dequeismo), y 'solo' va sin tilde (RAE 2010). A tiene coma criminal, concordancia erronea ('informaron') y dequeismo ('de que'). C tiene concordancia erronea.",
        feedbackError: "La respuesta es B. Análisis: el nucleo del sujeto es 'el grupo' (singular), así que el verbo es 'informo' (no 'informaron'). Se informa 'algo' (que), no 'de algo' (de que). 'Solo' va sin tilde (RAE 2010). No hay coma entre sujeto y predicado."
    },

    // --- SLIDE 16: Quiz 3 - Coma y puntuación ---
    {
        tipo: "quiz",
        titulo: "Pregunta de puntuación avanzada",
        pregunta: "En cual de las siguientes oraciones el uso de la coma es CORRECTO?",
        opciones: [
            "A) Los partidos políticos con representación en el Congreso, solicitaron una audiencia con el consejero presidente.",
            "B) Los partidos políticos con representación en el Congreso solicitaron una audiencia con el consejero presidente.",
            "C) Los partidos políticos, con representación en el Congreso solicitaron una audiencia con el consejero presidente."
        ],
        respuesta: 1,
        feedbackOk: "Correcto. B no tiene comás entre sujeto y predicado, lo cuál es correcto. A tiene coma criminal (separa sujeto del verbo 'solicitaron'). C tiene una sola coma de inciso (deberian ser dos o ninguna).",
        feedbackError: "La respuesta es B. No se necesita coma entre el sujeto ('Los partidos políticos con representación en el Congreso') y el predicado ('solicitaron'). A tiene coma criminal. C tiene un inciso mal puntuado: si 'con representación en el Congreso' fuera inciso, necesitaria dos comas."
    },

    // --- SLIDE 17: Instrucciones del simulacro ---
    {
        tipo: "contenido",
        titulo: "Instrucciones para el simulacro parcial",
        contenido: `<p>Tu simulador web esta calibrado con <strong>285 preguntas</strong> disponibles. Para el ejercicio de hoy:</p>
        <ol>
            <li>Abre el simulador y seleccióna <strong>"Sprint Módulo A: Lenguaje y Redacción (Max 50 preguntas)"</strong></li>
            <li>Haz clic en <strong>COMENZAR SIMULACRO</strong></li>
            <li>Mantente debajo del umbral de <strong>1 minuto 30 segundos por reactivo</strong></li>
            <li>Al terminar, revisa cada error y clasifica su tipo (concordancia, dequeismo, coma, etc.)</li>
        </ol>
        <p><strong>Meta mínima:</strong> 80% de aciertos. Si obtienes menos, repasa los dias 4 y 5 antes de continuar al Módulo B.</p>`
    },

    // --- SLIDE 18: Concepto - Estrategia mental ---
    {
        tipo: "concepto",
        titulo: "Estrategia mental para el día del examen",
        frente: "Si durante el examen encuentras una pregunta que no puedes resolver en 90 segundos, que debes hacer?",
        reverso: "<strong>Marca la pregunta y avanza.</strong> No hay penalizacion por respuesta incorrecta en el CENEVAL, así que: (1) Elimina las opciones con errores evidentes, (2) Marca tu mejor estimacion, (3) Senala la pregunta para revision, (4) Continua con la siguiente. En la segunda pasada, regresa con mente fresca. Perder 5 minutos en una pregunta dificil te roba tiempo de 3 preguntas faciles."
    },

    // --- SLIDE 19: Resumen ---
    {
        tipo: "resumen",
        titulo: "Puntos clave del dia",
        puntos: [
            "El Módulo A vale el 40% del examen: dominarlo es tu mejor estrategia global",
            "Las 5 trampas mortales: silépsis, gerundio de posterioridad, anacoluto, coma criminal y queismo oculto",
            "El verbo siempre concuerda con el NUCLEO del sujeto, no con los complementos",
            "El gerundio solo expresa simultaneidad o anterioridad, NUNCA posterioridad",
            "Tecnica de descarte: elimina 2 opciones obvias antes de analizar las restantes",
            "Tiempo por reactivo: meta de 1 min 30 seg (el oficial es 1.7 min)",
            "Primera pasada: resuelve lo facil. Segúnda pasada: ataca lo dificil. Tercera: revisa",
            "Nunca dejes un reactivo en blanco: no hay penalizacion por error",
            "Meta del simulacro: 80% de aciertos mínimo para avanzar al Módulo B"
        ]
    }
]);

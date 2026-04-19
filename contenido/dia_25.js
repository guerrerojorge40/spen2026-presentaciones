registerPresentation(25, 'C', 'Partidos Políticos: Registro, Prerrogativas y Financiamiento', [

    {
        tipo: "titulo",
        modulo: "C",
        titulo: "Partidos Políticos: Registro, Prerrogativas y Financiamiento",
        subtitulo: "Día 25 — Sistema Político y Electoral"
    },

    {
        tipo: "contenido",
        titulo: "¿Qué son los Partidos Políticos?",
        contenido: `
            <p>El <strong>artículo 41 de la Constitución</strong> establece que los partidos políticos son <em>entidades de interés público</em> con personalidad jurídica y patrimonio propios.</p>
            <ul>
                <li>Fines: promover la participación del pueblo en la vida democrática, contribuir a la integración de los órganos de representación política y postular candidatos.</li>
                <li>Se rigen por la <strong>LGIPE</strong> (Ley General de Instituciones y Procedimientos Electorales) y sus propios estatutos.</li>
                <li>Solo pueden ser <strong>nacionales</strong> para efectos de elecciones federales; los locales se rigen por las leyes estatales.</li>
            </ul>
        `
    },

    {
        tipo: "concepto",
        titulo: "Concepto Clave",
        frente: "¿Cuál es la diferencia entre partido político NACIONAL y LOCAL?",
        reverso: "Nacional: registro ante el INE, participa en elecciones federales y locales en todo el país. Local: registro ante el OPLE correspondiente, solo participa en elecciones de esa entidad. El INE gestiona registro y cancelación de partidos nacionales."
    },

    {
        tipo: "contenido",
        titulo: "Requisitos para Obtener Registro (Arts. 9-11 LGIPE)",
        contenido: `
            <p>Para constituirse como partido político nacional se requiere:</p>
            <ul>
                <li><strong>Afiliados:</strong> mínimo 3,000 ciudadanos en al menos 20 entidades federativas, <em>O</em> 300 en al menos 200 distritos electorales uninominales.</li>
                <li><strong>Comités:</strong> contar con delegaciones o comités en esas entidades/distritos.</li>
                <li><strong>Total de afiliados:</strong> equivalente al <em>0.26% del padrón electoral</em> nacional.</li>
                <li><strong>Plazo:</strong> notificar al INE el inicio del proceso de constitución con al menos <em>1 año de anticipación</em> a la solicitud de registro.</li>
                <li><strong>Solicitud de registro:</strong> presentarla al INE al menos <em>1 año antes</em> del inicio del proceso electoral federal en que pretenda participar.</li>
            </ul>
        `
    },

    {
        tipo: "formula",
        titulo: "Fórmula del Financiamiento Público Ordinario (Art. 51 LGIPE)",
        formula: "Fondo total = N° ciudadanos en el padrón × 65% del valor diario de la UMA",
        explicacion: "La UMA (Unidad de Medida y Actualización) sustituye al salario mínimo como referencia. El 65% de su valor diario, multiplicado por el total de ciudadanos en el padrón, determina el fondo anual que el INE entrega a todos los partidos con registro."
    },

    {
        tipo: "contenido",
        titulo: "Distribución del Financiamiento Ordinario",
        contenido: `
            <p>El fondo total calculado se reparte de la siguiente forma:</p>
            <ul>
                <li><strong>30%</strong> se distribuye en forma <em>igualitaria</em> entre todos los partidos con representación en alguna de las cámaras del Congreso.</li>
                <li><strong>70%</strong> se distribuye de forma <em>proporcional</em> a los votos obtenidos por cada partido en la última elección de diputados federales.</li>
            </ul>
            <p><strong>Importante:</strong> Los partidos de nueva creación reciben solo el 2% del total del fondo, distribuido igualitariamente entre ellos, hasta que participen en su primera elección general.</p>
        `
    },

    {
        tipo: "formula",
        titulo: "Financiamiento para Gastos de Campaña",
        formula: "Elección Presidente + Senadores + Diputados: 50% adicional del financiamiento ordinario | Solo Diputados: 30% adicional | Solo Senadores: 30% adicional",
        explicacion: "En año de proceso electoral federal, los partidos reciben un monto adicional al ordinario. Cuando coinciden varios tipos de elección en el mismo año, se aplica el porcentaje del tipo de elección más alto (no se suman)."
    },

    {
        tipo: "concepto",
        titulo: "Tipos de Financiamiento",
        frente: "¿Cuáles son los tres tipos de financiamiento público que reciben los partidos políticos?",
        reverso: "1) Sostenimiento de actividades ordinarias permanentes (el más grande). 2) Gastos de campaña (solo en año electoral). 3) Actividades específicas: educación y capacitación política, investigación socioeconómica y política, tareas editoriales."
    },

    {
        tipo: "contenido",
        titulo: "Prerrogativas de los Partidos Políticos",
        contenido: `
            <p>Además del financiamiento, los partidos tienen derecho a:</p>
            <ul>
                <li><strong>Acceso a radio y televisión:</strong> el INE administra los tiempos del Estado. En periodo ordinario: 12 minutos diarios (en cadena). En campaña: 18 minutos en precampaña y 48 en campaña por hora. Se distribuyen 30% igualitario y 70% proporcional.</li>
                <li><strong>Franquicias postales y telegráficas</strong> para comunicaciones dentro del territorio nacional.</li>
                <li><strong>Uso de locales del INE</strong> para la realización de sus reuniones o asambleas.</li>
                <li><strong>Exenciones fiscales</strong> sobre ingresos destinados a sus fines estatutarios.</li>
            </ul>
        `
    },

    {
        tipo: "ejemplo",
        titulo: "Caso Práctico: Cálculo de Financiamiento",
        contenido: `
            <p><strong>Escenario:</strong> El padrón electoral tiene 100 millones de ciudadanos y la UMA diaria es de $108.57. Hay 5 partidos con representación en el Congreso.</p>
            <p><strong>Fondo total:</strong> 100,000,000 × (108.57 × 65%) = 100,000,000 × $70.57 = <em>$7,057,000,000 pesos</em></p>
            <p><strong>Distribución igualitaria (30%):</strong> $7,057,000,000 × 30% = $2,117,100,000 ÷ 5 partidos = <em>$423,420,000 c/u</em></p>
            <p><strong>Distribución proporcional (70%):</strong> $7,057,000,000 × 70% = $4,939,900,000 → cada partido recibe según su % de votos.</p>
            <p>Si un partido obtuvo el 30% de los votos: $4,939,900,000 × 30% = <em>$1,481,970,000</em></p>
        `
    },

    {
        tipo: "quiz",
        titulo: "Quiz 1",
        pregunta: "Un partido político obtuvo el 2.8% de la votación válida emitida en la elección de diputados federales. ¿Qué consecuencia tiene esto?",
        opciones: [
            "A) Pierde el registro porque no alcanzó el 3% mínimo requerido",
            "B) Mantiene el registro pero no recibe financiamiento ordinario",
            "C) Solo pierde sus prerrogativas de radio y televisión",
            "D) Recibe una amonestación pero conserva todos sus derechos"
        ],
        respuesta: 0,
        feedbackOk: "¡Correcto! El artículo 94 LGIPE establece que un partido pierde su registro si no obtiene al menos el 3% de la votación válida emitida en cualquier elección federal ordinaria (Presidente, Senadores o Diputados). El 2.8% está por debajo del umbral.",
        feedbackError: "Incorrecto. El umbral mínimo para mantener el registro es el 3% de la votación válida emitida. Con 2.8%, el partido no cumple ese requisito y pierde su registro por resolución del INE."
    },

    {
        tipo: "contenido",
        titulo: "Pérdida de Registro (Art. 94 LGIPE)",
        contenido: `
            <p>Un partido político nacional pierde su registro cuando:</p>
            <ul>
                <li>No obtiene el <strong>3% de la votación válida emitida</strong> en alguna de las elecciones federales ordinarias (Presidente, Senadores o Diputados).</li>
                <li>No <strong>postula candidatos</strong> en al menos el <em>51% de los distritos uninominales</em> (anteriormente 200 distritos).</li>
                <li>No <strong>sostiene a sus órganos directivos</strong> ni realiza actividades propias durante 6 meses consecutivos.</li>
                <li><strong>Se fusiona</strong> con otro partido (el partido fusionado pierde el registro; el resultado de la fusión puede solicitar uno nuevo).</li>
                <li>Incumplimiento <strong>grave y sistemático</strong> de la Constitución o la LGIPE.</li>
            </ul>
            <p><em>Nota:</em> Los partidos nuevos quedan exceptuados del requisito del 3% en su primera elección federal ordinaria.</p>
        `
    },

    {
        tipo: "concepto",
        titulo: "Financiamiento Público vs. Privado",
        frente: "¿El financiamiento privado de los partidos políticos tiene límites? ¿Cuáles?",
        reverso: "Sí. Las aportaciones privadas no pueden exceder el 10% del tope de gastos de campaña para Presidente. Están PROHIBIDAS: aportaciones de extranjeros, de poderes ejecutivos/legislativos/judiciales, de patronatos, dependencias o entidades públicas, de iglesias, de empresas mercantiles con concesiones o contratos gubernamentales, y de personas anónimas."
    },

    {
        tipo: "contenido",
        titulo: "Obligaciones de Transparencia y Fiscalización",
        contenido: `
            <p>Los partidos tienen obligaciones contables y de transparencia ante el INE:</p>
            <ul>
                <li><strong>Informes anuales</strong> de ingresos y egresos ordinarios.</li>
                <li><strong>Informes de campaña</strong> (previo, durante y final) en cada proceso electoral.</li>
                <li>Apertura de <strong>cuentas bancarias</strong> específicas para cada campaña.</li>
                <li>El INE fiscaliza a través de la <strong>Unidad Técnica de Fiscalización (UTF)</strong>.</li>
                <li>El incumplimiento puede derivar en <strong>multas de hasta el 100%</strong> del monto no reportado o mal justificado.</li>
                <li>Los <strong>topes de campaña</strong> son fijados por el INE; rebasarlos es una infracción grave que puede llevar a la <em>pérdida del registro</em>.</li>
            </ul>
        `
    },

    {
        tipo: "ejemplo",
        titulo: "Caso Práctico: Pérdida de Registro",
        contenido: `
            <p><strong>Escenario:</strong> El partido "Fuerza Ciudadana" participó en las elecciones federales de 2024. Resultados:</p>
            <ul>
                <li>Votación para Diputados: obtuvo 2.4% de la votación válida emitida.</li>
                <li>Votación para Presidente: obtuvo 1.8% de la votación válida emitida.</li>
                <li>Votación para Senadores: obtuvo 3.1% de la votación válida emitida.</li>
            </ul>
            <p><strong>Análisis:</strong> Aunque en 2 de 3 elecciones no alcanzó el 3%, el partido obtuvo el <em>3.1% en la elección de Senadores</em>, que es suficiente para mantener su registro.</p>
            <p><strong>Regla:</strong> Basta con superar el 3% en <em>al menos una</em> de las tres elecciones federales ordinarias celebradas en el mismo proceso.</p>
        `
    },

    {
        tipo: "quiz",
        titulo: "Quiz 2",
        pregunta: "¿Cómo se distribuye el 70% del financiamiento público ordinario entre los partidos políticos nacionales con representación en el Congreso?",
        opciones: [
            "A) En partes iguales entre todos los partidos",
            "B) En proporción al número de legisladores que tiene cada partido",
            "C) En proporción a los votos obtenidos en la última elección de diputados federales",
            "D) En proporción al número de afiliados registrados ante el INE"
        ],
        respuesta: 2,
        feedbackOk: "¡Correcto! El 70% proporcional se calcula con base en el porcentaje de votos que obtuvo cada partido en la última elección de diputados federales ordinaria. Es la referencia establecida en el artículo 51 de la LGIPE.",
        feedbackError: "Incorrecto. El criterio para el 70% proporcional es el porcentaje de votos en la última elección de diputados federales, no el número de curules ni de afiliados. El número de legisladores se usa para otros cálculos, pero no para el financiamiento ordinario."
    },

    {
        tipo: "resumen",
        titulo: "Puntos Clave del Día 25",
        puntos: [
            "Los partidos políticos son entidades de interés público reguladas por la LGIPE y el artículo 41 constitucional.",
            "Para registrarse se requiere: 0.26% del padrón, presencia en 20 estados o 200 distritos, y afiliados suficientes.",
            "Financiamiento ordinario: padrón × 65% UMA diaria. Se reparte 30% igualitario + 70% proporcional a votos.",
            "En año electoral se agrega un financiamiento de campaña: 50% adicional si hay elección presidencial.",
            "Los partidos pierden el registro si no obtienen el 3% en ninguna de las elecciones federales ordinarias.",
            "El INE fiscaliza a través de la UTF; rebasar topes de campaña puede llevar a la pérdida del registro.",
            "El financiamiento privado tiene topes estrictos y prohibiciones expresas (extranjeros, entidades públicas, anónimos)."
        ]
    }

]);

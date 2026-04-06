"""Corrige acentos faltantes en todos los archivos de presentaciones."""
import os

correcciones = [
    # Sustantivos y términos frecuentes
    ("Comprension", "Comprensión"), ("comprension", "comprensión"),
    ("Redaccion", "Redacción"), ("redaccion", "redacción"),
    ("Acentuacion", "Acentuación"), ("acentuacion", "acentuación"),
    ("Puntuacion", "Puntuación"), ("puntuacion", "puntuación"),
    ("Ortografia", "Ortografía"), ("ortografia", "ortografía"),
    ("Diccion", "Dicción"), ("diccion", "dicción"),
    ("Introduccion", "Introducción"), ("introduccion", "introducción"),
    ("Interpretacion", "Interpretación"), ("interpretacion", "interpretación"),
    ("Participacion", "Participación"), ("participacion", "participación"),
    ("Comunicacion", "Comunicación"), ("comunicacion", "comunicación"),
    ("Estadistica", "Estadística"), ("estadistica", "estadística"),
    ("Matematica", "Matemática"), ("matematica", "matemática"),
    ("Aritmetica", "Aritmética"), ("aritmetica", "aritmética"),
    ("Factorizacion", "Factorización"), ("factorizacion", "factorización"),
    ("Constitucion", "Constitución"), ("constitucion", "constitución"),
    ("Soberania", "Soberanía"), ("soberania", "soberanía"),
    ("Ciudadania", "Ciudadanía"), ("ciudadania", "ciudadanía"),
    ("Impugnacion", "Impugnación"), ("impugnacion", "impugnación"),
    ("Informacion", "Información"), ("informacion", "información"),
    ("Administracion", "Administración"), ("administracion", "administración"),
    ("Gestion", "Gestión"), ("gestion", "gestión"),
    ("Representacion", "Representación"), ("representacion", "representación"),
    ("Organizacion", "Organización"), ("organizacion", "organización"),
    ("Vocalia", "Vocalía"), ("vocalia", "vocalía"),
    ("Oficialia", "Oficialía"), ("oficialia", "oficialía"),
    ("Eleccion", "Elección"), ("eleccion", "elección"),
    ("Resolucion", "Resolución"), ("resolucion", "resolución"),
    ("Calificacion", "Calificación"), ("calificacion", "calificación"),
    ("Evaluacion", "Evaluación"), ("evaluacion", "evaluación"),
    ("Legislacion", "Legislación"), ("legislacion", "legislación"),
    ("Clasificacion", "Clasificación"), ("clasificacion", "clasificación"),
    ("Definicion", "Definición"), ("definicion", "definición"),
    ("Situacion", "Situación"), ("situacion", "situación"),
    ("Explicacion", "Explicación"), ("explicacion", "explicación"),
    ("Distincion", "Distinción"), ("distincion", "distinción"),
    ("Distribucion", "Distribución"), ("distribucion", "distribución"),
    ("Aplicacion", "Aplicación"), ("aplicacion", "aplicación"),
    ("Ponderacion", "Ponderación"), ("ponderacion", "ponderación"),
    ("Certificacion", "Certificación"), ("certificacion", "certificación"),
    ("Notificacion", "Notificación"), ("notificacion", "notificación"),
    ("Designacion", "Designación"), ("designacion", "designación"),
    ("Integracion", "Integración"), ("integracion", "integración"),
    ("Expresion", "Expresión"), ("expresion", "expresión"),
    ("Ecuacion", "Ecuación"), ("ecuacion", "ecuación"),
    ("Proporcion", "Proporción"), ("proporcion", "proporción"),
    ("Seccion", "Sección"), ("seccion", "sección"),
    ("Fraccion", "Fracción"), ("fraccion", "fracción"),
    ("Funcion", "Función"), ("funcion", "función"),
    ("Relacion", "Relación"), ("relacion", "relación"),
    ("Direccion", "Dirección"), ("direccion", "dirección"),
    ("Opcion", "Opción"), ("opcion", "opción"),
    ("Operacion", "Operación"), ("operacion", "operación"),
    ("Combinacion", "Combinación"), ("combinacion", "combinación"),
    ("Permutacion", "Permutación"), ("permutacion", "permutación"),
    ("Sustitucion", "Sustitución"), ("sustitucion", "sustitución"),
    ("Eliminacion", "Eliminación"), ("eliminacion", "eliminación"),
    ("Igualacion", "Igualación"), ("igualacion", "igualación"),
    ("Verificacion", "Verificación"), ("verificacion", "verificación"),
    ("Reduccion", "Reducción"), ("reduccion", "reducción"),
    ("Interpolacion", "Interpolación"), ("interpolacion", "interpolación"),
    ("Correlacion", "Correlación"), ("correlacion", "correlación"),
    ("Poblacion", "Población"), ("poblacion", "población"),
    ("Votacion", "Votación"), ("votacion", "votación"),
    ("Federacion", "Federación"), ("federacion", "federación"),
    ("Inscripcion", "Inscripción"), ("inscripcion", "inscripción"),
    ("Postulacion", "Postulación"), ("postulacion", "postulación"),
    ("Reeleccion", "Reelección"), ("reeleccion", "reelección"),
    ("Coalicion", "Coalición"), ("coalicion", "coalición"),
    ("Asignacion", "Asignación"), ("asignacion", "asignación"),
    # Palabras con acento - adjetivos y adverbios
    ("Politico", "Político"), ("politico", "político"),
    ("Politica", "Política"), ("politica", "política"),
    ("Juridico", "Jurídico"), ("juridico", "jurídico"),
    ("Historico", "Histórico"), ("historico", "histórico"),
    ("Autonomo", "Autónomo"), ("autonomo", "autónomo"),
    ("Critico", "Crítico"), ("critico", "crítico"),
    ("Logico", "Lógico"), ("logico", "lógico"),
    ("Logica", "Lógica"), ("logica", "lógica"),
    ("Tipico", "Típico"), ("tipico", "típico"),
    ("Especifico", "Específico"), ("especifico", "específico"),
    ("Publico", "Público"), ("publico", "público"),
    ("Valido", "Válido"), ("valido", "válido"),
    ("Unico", "Único"), ("unico", "único"),
    ("Minimo", "Mínimo"), ("minimo", "mínimo"),
    ("Minima", "Mínima"), ("minima", "mínima"),
    ("Maximo", "Máximo"), ("maximo", "máximo"),
    ("Maxima", "Máxima"), ("maxima", "máxima"),
    ("Basica", "Básica"), ("basica", "básica"),
    ("Basico", "Básico"), ("basico", "básico"),
    # Sustantivos comunes
    ("Articulo", "Artículo"), ("articulo", "artículo"),
    ("Articulos", "Artículos"), ("articulos", "artículos"),
    ("Organo", "Órgano"), ("organo", "órgano"),
    ("Organos", "Órganos"), ("organos", "órganos"),
    ("Camara", "Cámara"), ("camara", "cámara"),
    ("Numero", "Número"), ("numero", "número"),
    ("Numeros", "Números"), ("numeros", "números"),
    ("Calculo", "Cálculo"), ("calculo", "cálculo"),
    ("Formula ", "Fórmula "), ("formula ", "fórmula "),
    ("Termino", "Término"), ("termino", "término"),
    ("Terminos", "Términos"), ("terminos", "términos"),
    ("Metodo", "Método"), ("metodo", "método"),
    ("Metodos", "Métodos"), ("metodos", "métodos"),
    ("Codigo", "Código"), ("codigo", "código"),
    ("Periodo", "Período"), ("periodo", "período"),
    ("Regimen", "Régimen"), ("regimen", "régimen"),
    ("Pagina", "Página"), ("pagina", "página"),
    ("Parrafo", "Párrafo"), ("parrafo", "párrafo"),
    ("Capitulo", "Capítulo"), ("capitulo", "capítulo"),
    ("Mayoria", "Mayoría"), ("mayoria", "mayoría"),
    ("Teoria", "Teoría"), ("teoria", "teoría"),
    ("Ambito", "Ámbito"), ("ambito", "ámbito"),
    ("Genero", "Género"), ("genero", "género"),
    ("Algebra", "Álgebra"),
    ("Analisis", "Análisis"), ("analisis", "análisis"),
    ("Simbolo", "Símbolo"), ("simbolo", "símbolo"),
    ("Diagrama", "Diagrama"),
    ("Hiperbole", "Hipérbole"), ("hiperbole", "hipérbole"),
    ("Metafora", "Metáfora"), ("metafora", "metáfora"),
    ("Silepsis", "Silépsis"), ("silepsis", "silépsis"),
    ("Anacoluto", "Anacoluto"),
    # Palabras con Día/Módulo
    ("Dia ", "Día "), ("dia ", "día "),
    ("Modulo ", "Módulo "), ("modulo ", "módulo "),
    # Adverbios y conjunciones
    ("ademas", "además"), ("Ademas", "Además"),
    ("tambien", "también"), ("Tambien", "También"),
    ("segun", "según"), ("Segun", "Según"),
    # Verbos conjugados frecuentes
    ("podra", "podrá"), ("debera", "deberá"),
    ("tendra", "tendrá"), ("obtendra", "obtendrá"),
    ("estan ", "están "), ("esten ", "estén "),
    # Años
    ("anos", "años"),
    # Interrogativos (solo dentro de preguntas - cuidado)
    ("Cual es", "Cuál es"), ("cual es", "cuál es"),
    ("Cuales", "Cuáles"), ("cuales", "cuáles"),
    ("Que es ", "Qué es "), ("Que tipo", "Qué tipo"),
    ("Que significa", "Qué significa"),
    ("Que diferencia", "Qué diferencia"),
    ("Que funcion", "Qué función"),
    ("Que error", "Qué error"),
    ("Que porcentaje", "Qué porcentaje"),
    ("Como se", "Cómo se"), ("Como funciona", "Cómo funciona"),
    # Preposiciones y conectores
    ("traves", "través"),
    ("asi ", "así "),
    ("mas ", "más "),
]

contenido_dir = os.path.join(os.path.dirname(__file__), "contenido")
total_corregidos = 0

for fname in sorted(os.listdir(contenido_dir)):
    if not fname.endswith(".js"):
        continue
    fpath = os.path.join(contenido_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        text = f.read()

    original = text
    for wrong, right in correcciones:
        text = text.replace(wrong, right)

    if text != original:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(text)
        diff_count = sum(1 for w, r in correcciones if w in original and w != r)
        print(f"Corregido: {fname} ({diff_count} tipos de correcciones aplicadas)")
        total_corregidos += 1
    else:
        print(f"Sin cambios: {fname}")

print(f"\nTotal archivos corregidos: {total_corregidos}")

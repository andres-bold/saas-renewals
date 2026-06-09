# Prototipo Backoffice Bold — Módulo Renovaciones SaaS

## Qué es esto
Prototipo HTML estático publicado en GitHub Pages para simular el Backoffice de Bold.
URL: https://andres-bold.github.io/saas-renewals/

El prototipo está separado en múltiples archivos:
- `shared.css` — todos los estilos globales
- `shared.js` — datos (`ROWS`, `ALERTS`, historiales) y funciones compartidas
- `index.html` — Tab Lista
- `gestion.html` — Tab Gestión
- `alertas.html` — Tab Alertas
- `detalle.html` — Vista de Detalle del comercio (`?id=XXX`)

---

## Sistema de diseño Bold

### Colores (variables CSS)
| Variable | Valor | Uso |
|---|---|---|
| `--red` | `#E8003D` | Botón primario, acciones destructivas, badges |
| `--navy` | `#12122A` | Títulos, logo, texto fuerte |
| `--blue` | `#121E6C` | Tab activo, títulos de sección, chips, labels |
| `--gray-bg` | `#F4F5F8` | Fondo general |
| `--gray-line` | `#E4E6EF` | Bordes, divisores |
| `--gray-text` | `#7B7E96` | Labels, texto secundario |
| `--text` | `#1C1C3A` | Texto principal |
| `--green` | `#00C48C` | Indicador activo |
| `--orange` | `#FF9500` | Probabilidad media |

### Tipografía
- Fuente: **Inter** (Google Fonts)
- Tamaños: 22px títulos, 15px subtítulos, 13px cuerpo, 12px labels, 11px chips, 10px micro

### Componentes principales
- **Botón primario**: `btn btn-primary` → rojo, pill shape (border-radius: 50px)
- **Botón outline**: `btn btn-outline` → blanco, borde gris
- **Chips de probabilidad**: `chip-high` (verde), `chip-mid` (naranja), `chip-low` (rojo)
- **Chips de clasificación**: `chip-grande` (azul), `chip-mediano` (naranja), `chip-pequeno` (gris)
- **Badges sidebar**: pill rojo con número blanco
- **Drawer/panel lateral**: desde la derecha, fondo semitransparente oscuro
- **Modal centrado**: `center-modal-backdrop` + `center-modal`
- **Tooltips**: clase `has-tip` con `data-tip="texto"`
- **Fila/card importante**: fondo amarillo pastel `#FFFBE6`, borde dorado, estrella ★

### Layout
- **Sidebar**: 220px, blanco, iconos SVG monocromáticos
- **Topbar**: 52px, blanco, campana + avatar RG
- **Contenido**: padding 28px 32px, fondo `--gray-bg`

---

## Estructura del prototipo

### Menú lateral
```
SUSCRIPCIONES SAAS
  - Comercios en Onboarding (badge 179)
  - Comercios activos (badge 9.654)
  - Renovaciones ← MÓDULO ACTIVO
  - Comercios inactivos

ADMIN SAAS
  - Planes por vertical
  - Configuraciones
```
Items sin contenido muestran pantalla "Esta pantalla aún está en proceso de diseño".

### Navegación entre tabs
Las tabs usan `<a href>` reales (no JS toggle):
- Lista → `index.html`
- Gestión → `gestion.html`
- Alertas → `alertas.html`
- Detalle → `detalle.html?id=XXX` (parámetro URL)
- `openDetail(id)` en `shared.js` navega a `detalle.html?id=` + id
- Retroceso en Detalle: `history.back()`

---

### Módulo Renovaciones — Tab Lista (`index.html`)
- Toolbar: Buscar (350px) + Descargar + Ordenar por (dropdown) + Filtrar (drawer lateral)
- Tabla con 11 columnas: ID POS, Nombre, Prob. Renovación, Valor a pagar, Plan, Vertical, Antigüedad, Últ. transacción, Facturas, Comprobantes, Clasif. facturación
- Paginación: 12 registros por página
- Búsqueda en tiempo real por nombre/ID/vertical/plan
- Clic en fila → `openDetail(id)` → `detalle.html?id=XXX`
- Ícono de comentario en cada fila → abre Drawer de comentarios

### Módulo Renovaciones — Tab Gestión (`gestion.html`)
- Toolbar: Buscar (350px) + Descargar + Filtrar + Navegador de mes (‹ Junio 2026 ›)
- Segmento: **En proceso** | **Ganados** | **Perdidos**
- Cards en mosaico (minwidth 185px), ordenadas ASC por día de vencimiento
- Cada card muestra: ícono calendario+X + día vencimiento, nombre, dot probabilidad, valor, días última transacción, chip clasificación, chip plan
- Cards "Importante" (solo En proceso): fondo amarillo pastel, borde dorado, estrella ★
- Cards Ganados/Perdidos: borde lateral verde/rojo + fecha de gestión
- Clic en card → `openDetail(id)`
- Botón comentario en cada card → abre Drawer de comentarios

### Módulo Renovaciones — Tab Alertas (`alertas.html`)
- Toolbar: Buscar + Descargar + Filtrar
- Sub-tabs: **En proceso** | **Completadas**
- **En proceso**: tablas agrupadas por sección: Vencidas / Hoy / Mañana / Siguientes
  - Columnas: Fecha creación, Fecha programada (con hora), Actividad, Nombre del cliente, Pipeline, Prob. renovación, Acción (botón Gestionar), Comentarios
  - Filas con `importante:true` en ROWS → fondo amarillo pastel + estrella ★
  - Botón Gestionar → abre modal centrado para registrar resultado (Realizado/Cancelado) + comentario obligatorio
- **Completadas**: tabla con columnas: Fecha creación, Fecha programada, Actividad, Nombre del cliente, Pipeline, Resultado, Comentario de gestión, Comentarios
  - Clic en fila → `openDetail(clienteId)`
  - Paginación: 10 por página, siempre visible
- Ícono comentario → abre Drawer de comentarios (mismo patrón que otras tabs)

#### Datos de alertas — array `ALERTS` (en `alertas.html`)
Cada alerta tiene: `id, fechaCreacion, horaCreacion, fechaAlerta, hora, clienteId, prob, pipeline, actividad, estado`
- `estado`: `'pendiente'` | `'realizado'` | `'cancelado'`
- Alertas completadas añaden: `comentarioFinal, fechaGestion`
- Clasificación por fecha: Vencidas (`< TODAY`), Hoy (`= TODAY`), Mañana (`= TOMORROW`), Siguientes (`> TOMORROW`)
- TODAY = `'2026-06-09'`, TOMORROW = `'2026-06-10'`

---

### Drawer de comentarios (compartido en todas las tabs)
- Header: nombre del comercio + ✕
- Fila: **Importante** (checkbox, oculto fuera de "En proceso") | **Probabilidad de Renovación** (pill coloreado) + ícono historial
- Fila: **Estado de renovación** (texto coloreado) + pipeline o motivo de pérdida + ícono historial
- Lista de comentarios: avatar iniciales + nombre + fecha + texto
  - Comentarios con alerta muestran badge bajo el texto con: ícono campana + fecha/hora programada + estado de la alerta
  - Badge estados: **Pendiente de gestión** (gris), **✓ Realizado** (verde con comentario de resolución), **✕ Cancelado** (rojo con comentario de resolución)
  - Badge alineado con `margin-left: 36px` para coincidir con el texto del comentario
- Área de nuevo comentario:
  - Textarea
  - Checkbox **"Añadir alerta"** → al activarse muestra selector de fecha (date picker) y selector de hora (intervalos de 30 min, 8:00 am – 7:30 pm)
  - Al guardar con alerta: el comentario queda con `alerta: { fechaAlerta, hora, estado:'pendiente' }`
  - Botones Cancelar / Agregar

#### Estructura de un comentario con alerta
```js
{
  autor: 'Nombre',
  iniciales: 'NM',
  fecha: '09 jun 2026',
  texto: 'Texto del comentario',
  alerta: {                          // opcional
    fechaAlerta: '2026-06-12',
    hora: '3:00 pm',
    estado: 'pendiente' | 'realizado' | 'cancelado',
    comentarioResolucion: '...'      // solo en realizado/cancelado
  }
}
```

### Modal Historial de Probabilidad (centrado)
- Lista de cambios: avatar + nombre + fecha + tag probabilidad coloreada + comentario
- Se abre desde el ícono reloj junto al pill de probabilidad en el drawer

### Modal Historial de Estado (centrado)
- Lista de cambios: avatar + nombre + fecha + tag estado + pipeline/motivo + comentario
- Se abre desde el ícono reloj junto al estado en el drawer

### Vista Detalle del Comercio (`detalle.html?id=XXX`)
- Breadcrumb: Renovaciones › Nombre
- Header: ‹ Nombre + botón "Historial de comentarios (N)"
- Datos resumen: nombre comercio, ID POS, plan actual, inicio plan, vencimiento, antigüedad
- 3 tabs: **Información** (construida) | Implementación (vacía) | Historial de suscripciones (muestra datos de ejemplo)
- Tab Información: 4 secciones con grid 3 columnas:
  1. Datos del Comercio (ID POS, ID Bold, ID Merchant, nombre cliente, nombre comercio, identificación, teléfono, correo, ciudad)
  2. Datos de uso (facturas, comprobantes, última transacción)
  3. Datos registrados en POS (nombre, identificación, teléfono, correo)
  4. Datos huella (fechas de registro, cuenta activa, primer pago, implementación, ready, responsables)

---

## Datos de prueba (`shared.js`)

### Array `ROWS` — 32 registros
Campos por registro:
`id, nombre, prob, valor, plan, vertical, antiguedad, diasUltima, venceDia, facturas, comprobantes, clasif, estado, fechaGestion, comentarios, importante, pipeline, motivoPerdida, validado, venceMes, venceAnio`

- `estado`: `'proceso'` | `'ganado'` | `'perdido'`
- `importante`: `true` en IDs 345 y 965 (resaltado amarillo en cards, filas y alertas)
- `comentarios`: array de objetos `{ autor, iniciales, fecha, texto, alerta? }`
- Muchos comercios ya tienen comentarios con alertas en los 3 estados (pendiente, realizado, cancelado). Comercios con comentarios ricos: 345, 512, 477, 622, 659, 741, 774, 965, 390, 544, 618, 165, 271, 192, 708, 453

### Objetos `PROB_HISTORY` y `ESTADO_HISTORY`
Historiales de cambios de probabilidad y estado por id de comercio.

### Constantes de fecha del prototipo
- TODAY = `'2026-06-09'`
- Fecha actual del prototipo usada en `new Date(2026, 5, 9)` en `diasRestantes()`

---

## Funciones clave en `shared.js`
- `openDetail(id)` → navega a `detalle.html?id=` + id
- `openComments(id, hideImportante)` → abre drawer de comentarios para el comercio `id`
- `openCommentsFromTable(id)` → alias que oculta el checkbox Importante
- `renderCommentList(comments)` → renderiza lista con soporte de badges de alerta
- `renderAlertaBadge(alerta)` → genera HTML del badge de alerta (pendiente/realizado/cancelado)
- `fmtAlertaDate(iso, hora)` → formatea fecha ISO + hora como "9 jun 2026 - 3:00 pm"
- `toggleAlertaRow(checkbox)` → muestra/oculta los campos de fecha y hora al activar "Añadir alerta"
- `addComment()` → agrega comentario; si "Añadir alerta" está activo, incluye el objeto `alerta`
- `toggleImportante(checkbox)` → actualiza `importante` en ROWS y re-renderiza cards
- `clasifChip(c)`, `probChip(p)`, `probDot(p)` → helpers de chips visuales
- `diasRestantes(r)` → calcula días al vencimiento desde TODAY del prototipo
- Funciones de modales: `openProbModal/confirmProb`, `openEstadoModal/confirmEstado`, `openProbHistory`, `openEstadoHistory`
- Guards para evitar errores cross-page: `if (typeof renderCards === 'function') renderCards()`

---

## Pendiente por construir
- [ ] Tab Implementación (en vista Detalle)
- [ ] Funcionalidad real de Descargar
- [ ] Pantallas de los otros ítems del menú
- [ ] Resolución de alertas desde el drawer de comentarios (marcar alerta existente como realizada/cancelada)

---

## Para actualizar en GitHub Pages
Los archivos se suben manualmente.

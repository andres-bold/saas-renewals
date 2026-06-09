# Prototipo Backoffice Bold — Módulo Renovaciones SaaS

## Qué es esto
Prototipo HTML estático publicado en GitHub Pages para simular el Backoffice de Bold.
URL: https://andres-bold.github.io/saas-renewals/

Todo el prototipo vive en un único archivo: `index.html`

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

### Módulo Renovaciones — Tab Lista
- Toolbar: Buscar (350px) + Descargar + Ordenar por (dropdown) + Filtrar (drawer lateral)
- Tabla con 11 columnas: ID POS, Nombre, Prob. Renovación, Valor a pagar, Plan, Vertical, Antigüedad, Últ. transacción, Facturas, Comprobantes, Clasif. facturación
- Paginación: 12 registros por página, 3 páginas
- Búsqueda en tiempo real por nombre/ID/vertical/plan
- Clic en fila → abre vista de Detalle del comercio

### Módulo Renovaciones — Tab Gestión
- Toolbar: Buscar (350px) + Descargar + Filtrar + Navegador de mes (‹ Junio 2026 ›)
- Segmento: **En proceso** | **Ganados** | **Perdidos**
- Cards en mosaico (minwidth 185px), ordenadas ASC por día de vencimiento
- Cada card muestra: ícono calendario+X + día vencimiento, nombre, dot probabilidad, valor, días última transacción, chip clasificación, chip plan
- Cards "Importante" (solo En proceso): fondo amarillo pastel `#FFFBE6`, borde dorado, estrella ★
- Cards Ganados/Perdidos: borde lateral verde/rojo + fecha de gestión
- Clic en card → abre vista de Detalle del comercio
- Botón comentario en cada card → abre Drawer de comentarios

### Drawer de comentarios
- Header: nombre del comercio + ✕
- Fila única: **Importante** (checkbox, solo visible en "En proceso") a la izquierda | **Probabilidad de Renovación** (select pill coloreado) + ícono historial a la derecha
- Lista de comentarios: avatar iniciales + nombre + fecha + texto
- Textarea para agregar comentario + botón Agregar
- Al agregar: actualiza comentarios y probabilidad en tiempo real

### Modal Historial de Probabilidad (centrado)
- Lista de cambios: avatar + nombre + fecha + tag probabilidad coloreada
- Se abre desde el ícono reloj junto al select de probabilidad

### Vista Detalle del Comercio
- Breadcrumb: Renovaciones › Nombre
- Header: ‹ Nombre + botón "Historial de comentarios (22)"
- Datos: nombre comercio, ID POS, plan actual, inicio plan, vencimiento, antigüedad
- 3 tabs: **Información** (construida) | Implementación (vacía) | Historial de suscripciones (vacía)
- Tab Información: 4 secciones con grid 3 columnas:
  1. Datos del Comercio (ID POS, ID Bold, ID Merchant, nombre cliente, nombre comercio, identificación, teléfono, correo, ciudad)
  2. Datos de uso (facturas, comprobantes, última transacción)
  3. Datos registrados en POS (nombre, identificación, teléfono, correo)
  4. Datos huella (fechas de registro, cuenta activa, primer pago, implementación, ready, responsables)

---

## Datos de prueba
32 registros en array `ROWS`, cada uno con:
`id, nombre, prob, valor, plan, vertical, antiguedad, diasUltima, venceDia, facturas, comprobantes, clasif, estado, fechaGestion, comentarios, importante`

`estado` puede ser: `'proceso'` | `'ganado'` | `'perdido'`

---

## Pendiente por construir
- [ ] Tab Implementación (en vista Detalle)
- [ ] Tab Historial de suscripciones (en vista Detalle)
- [ ] Tab Gestión — contenido real (actualmente vacía en diseño)
- [ ] Funcionalidad real de Descargar
- [ ] Pantallas de los otros ítems del menú

---

## Para actualizar en GitHub Pages
```bash
cd /Users/andres.lizarazo/and_claude/saas-renewals
git add index.html
git commit -m "descripción del cambio"
git push
```

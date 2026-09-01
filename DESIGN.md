# Design System & UI Specifications: Lab-Device Catalog

## 1. Aesthetic Vision
A precision laboratory catalog and spec inspector. The interface is optimized for rapid scanning, crystal-clear readability of complex technical specifications, instant single-view search/filtering, and high-fidelity schematic viewing.

---

## 2. Color Palette & Semantic Tokens

### Base Theme (Dark / Precision Slate)
- **Canvas Background (`--lab-bg-canvas`)**: `#0b0f19` (Deep slate navy)
- **Surface Layer 1 (`--lab-surface-1`)**: `#111827` (Card and panel backgrounds)
- **Surface Layer 2 (`--lab-surface-2`)**: `#1f2937` (Filter chips, search bars, modal drawers)
- **Border / Grid Lines (`--lab-border`)**: `#374151` / `rgba(255, 255, 255, 0.08)`

### Semantic Status Indicators
- **Operational**: `#10b981` (Emerald 500 - In service / Certified)
- **In Maintenance**: `#f59e0b` (Amber 500 - Maintenance scheduled)
- **Decommissioned / Standby**: `#94a3b8` (Slate 400 - Storage / Standby)

---

## 3. Key UI Views & Components

### A. Unified Explorer Screen (`src/app/page.js` + `DeviceExplorer.js`)
- **Integrated Search Bar**: Real-time fuzzy search matching instrument name, model, serial number, room, or manufacturer.
- **Category Filter Chips**: Quick one-click pill filters (e.g. *All*, *PCR Cyclers*, *Centrifuges*, *Spectrophotometers*, *Incubators*).
- **Status & Location Dropdowns**: Secondary filters to narrow by room or operational state.
- **Device Grid**: Responsive card layout displaying equipment photo, model badge, serial number, key specs, and status pill.
- **Dynamic Result Count & Reset**: Instant counter showing matching instruments with a one-click clear button.

### B. Device Spec Sheet (`src/app/devices/[id]/page.js`)
- Header badge with manufacturer, model, and serial number.
- **Technical Specifications Table (`SpecTable.js`)**:
  - Primary hardware parameters (temperature ranges, power supply, speed, interfaces).
  - Dynamic **"Other Specifications"** section that dynamically formats arbitrary key-value pairs stored in `specifications.other`.
- Embedded vector schematic preview with full-screen zoom modal trigger (`SchematicModal.js`).

---

## 4. Asset Hierarchy (`public/assets/`)
- `/public/assets/devices/`: High-definition transparent PNGs of equipment.
- `/public/assets/schematics/`: Clean vector SVGs of pinouts and wiring blueprints.
- `/public/assets/icons/`: Laboratory instrument category glyphs.

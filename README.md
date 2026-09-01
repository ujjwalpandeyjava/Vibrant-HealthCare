# Lab-Device Explorer & Equipment Catalog

A high-performance, read-only laboratory equipment catalog with unified instant search and specification inspector built with **Next.js (JavaScript)**, **TailwindCSS**, and **static JSON data**.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 Next.js Frontend / SSR (JS)                 │
│  - Unified Fleet Explorer & Live Search (`/`)               │
│    └─ Instant Search Bar + Category Pills + Status Filter   │
│    └─ Dynamic Device Grid / Table View                      │
│  - Detailed Device Spec Sheet & Pinouts (`/devices/[id]`)   │
│  - Zoomable Vector Schematic Inspector                      │
└──────────────────────────────┬──────────────────────────────┘
                               │ Direct Server Component Read
┌──────────────────────────────▼──────────────────────────────┐
│                    Static JSON Data Store                   │
│  - data/devices.json : Read-Only Device Specifications      │
│  - public/assets/    : Static Photos, Badges & Schematics   │
└─────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Domain | Technology | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router, Plain JS, React Server Components) | Direct file read at build/render time. Zero API latency. |
| **Styling** | TailwindCSS + CSS Variables | Precision scientific dark/light themes, high-contrast badges, responsive layout. |
| **Data Layer** | Static Flat JSON (`data/devices.json`) | Read-only dataset imported directly into Server Components without API endpoints. |
| **Assets** | Next.js Static `/public/assets` | Hardware schematics, blueprints, and equipment photos. |

---

## Directory Layout

```
Lab-device/
├── public/
│   └── assets/             # Device schematics, equipment photos, diagrams
│       ├── devices/        # Equipment photos and vector models
│       ├── schematics/     # Wiring diagrams and pinout blueprints
│       └── icons/          # Category glyphs
├── data/
│   └── devices.json        # Read-only device inventory and technical specs
├── src/
│   ├── app/
│   │   ├── page.js         # Unified Device Explorer with integrated search & filters
│   │   ├── devices/
│   │   │   └── [id]/
│   │   │       └── page.js # Detailed specification, pinout & schematic view
│   │   ├── layout.js       # App shell, persistent header, and theme wrapper
│   │   └── globals.css     # TailwindCSS configuration & lab theme
│   ├── components/
│   │   ├── DeviceExplorer.js # Unified client-side search bar, filter chips & grid
│   │   ├── DeviceCard.js     # Equipment card with status badges and quick specs
│   │   ├── SpecTable.js      # Formatted technical parameters and 'other' specs table
│   │   ├── SchematicModal.js # High-res zoomable schematic viewer
│   │   └── StatusBadge.js    # Read-only operational status tag
│   └── lib/
│       └── getDevices.js   # Fast read-only JSON data loaders
├── README.md               # Main project reference
├── DESIGN.md               # Visual design system & UX specifications
├── ANTIGRAVITY.md          # AI pair programming guidelines & prompt rules
└── ARCHITECTURE.md         # Data schema & Server Component data flow
```

---

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
npm run start
```

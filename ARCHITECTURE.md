# Technical Architecture: Unified Read-Only Device Explorer

## 1. Data Flow & Route Architecture

The entire device catalog and search interface operate on a single root route (`/`), rendering server-fetched data with fast, client-interactive search and filter controls.

```
data/devices.json ──► src/lib/getDevices.js ──► Server Component (page.js) ──► Client Explorer (DeviceExplorer.js)
```

```javascript
// src/lib/getDevices.js
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'devices.json');

export async function getAllDevices() {
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

export async function getDeviceById(id) {
  const devices = await getAllDevices();
  return devices.find((d) => d.id === id) || null;
}
```

---

## 2. Static JSON Schema (`data/devices.json`)

```json
[
  {
    "id": "dev-pcr-01",
    "name": "Thermal Cycler Alpha",
    "model": "TC-9600 Pro",
    "category": "PCR & Thermal Cyclers",
    "manufacturer": "BioPrecision Dynamics",
    "serialNumber": "SN-2026-9941",
    "status": "OPERATIONAL",
    "location": "Room 204 - Bench 3 (Molecular Lab)",
    "image": "/assets/devices/thermal_cycler.png",
    "schematic": "/assets/schematics/tc9600_pinout.svg",
    "specifications": {
      "temperatureRange": "4.0°C - 105.0°C",
      "maxRampRate": "5.0°C / sec",
      "wellCapacity": "96 x 0.2 mL tubes",
      "lidTemperatureRange": "30°C - 110°C",
      "powerSupply": "100-240V AC, 50/60Hz, 850W",
      "communicationPorts": "Ethernet (RJ45), USB-B, RS-232",
      "other": {
        "dimensions": "420 x 280 x 240 mm",
        "weight": "11.5 kg",
        "operatingHumidity": "10% - 85% RH",
        "firmwareVersion": "v3.1.4-rc2",
        "coolingTechnology": "Peltier Solid-State"
      }
    }
  },
  {
    "id": "dev-centrifuge-02",
    "name": "High-Speed Microfuge",
    "model": "CF-15000X",
    "category": "Centrifuges",
    "manufacturer": "VortexLab Instruments",
    "serialNumber": "SN-2026-8820",
    "status": "STANDBY",
    "location": "Room 201 - Bench 1 (Sample Prep)",
    "image": "/assets/devices/centrifuge.png",
    "schematic": "/assets/schematics/cf15000_diagram.svg",
    "specifications": {
      "maxRpm": "15,000 RPM",
      "maxRcf": "21,380 x g",
      "rotorCapacity": "24 x 1.5/2.0 mL",
      "temperatureControl": "Non-refrigerated (Ambient)",
      "noiseLevel": "< 56 dBA",
      "timerRange": "10s to 99 min 59s",
      "description": "ABC",
      "other": {
        "dimensions": "310 x 250 x 180 mm",
        "weight": "6.2 kg",
        "accelerationTime": "< 15 seconds to max speed",
        "brakingSystem": "Dynamic Electronic Braking",
        "safetyCertifications": "CE, UL-61010-1"
      }
    }
  }
]
```

---

## 3. Page Routing

| Route | Rendering Mode | Purpose |
| :--- | :--- | :--- |
| `/` | Server Component + Interactive Client Filter (`DeviceExplorer.js`) | Unified device catalog with real-time fuzzy search, category chips, status filtering, and device cards. |
| `/devices/[id]` | Server Component (`generateStaticParams`) | Full specification sheet (including dynamic `other` spec items), pinouts, blueprints, and equipment schematics. |

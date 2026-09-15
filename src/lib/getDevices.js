import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'devices.json');

/**
 * Read all devices directly from the static data/devices.json file.
 * @returns {Promise<Array>} Array of device objects.
 */
export async function getAllDevices() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed.filter(device => device.status === true);
  } catch (error) {
    console.error('Error reading devices.json:', error);
    return [];
  }
}

/**
 * Retrieve a specific device by its unique identifier.
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getDeviceById(id) {
  const devices = await getAllDevices();
  return devices.find((device) => String(device.id) === String(id)) || null;
}

/**
 * Retrieve a unique list of all categories across configured instruments.
 * @returns {Promise<Array<string>>}
 */
export async function getCategories() {
  const devices = await getAllDevices();
  const set = new Set(devices.map((d) => d.category));
  return Array.from(set);
}

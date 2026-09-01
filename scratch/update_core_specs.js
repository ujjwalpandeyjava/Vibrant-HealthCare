const fs = require('fs');

const path = 'c:/All files/Projects_Products/Vibrant-HealthCare/data/devices.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.forEach(device => {
  const highlights = device.specifications.highlights || [];
  
  const architecture = highlights.find(h => h.title.includes('Architecture'))?.detail || 'Standard';
  const monitor = highlights.find(h => h.title.includes('Monitor'))?.detail || 'Standard Output';
  
  const archDescription = architecture === 'Standard' ? 'Reliable architecture for consistent imaging performance.' : 'State-of-the-art framework for optimal performance and clarity.';
  const monitorDescription = monitor === 'N/A' || monitor === 'Standard Output' ? 'Clear output for precise diagnostic assessment.' : 'High-resolution display tailored for clinical precision.';

  device.specifications.coreSpecs = [
    {
      title: `${architecture} Architecture`,
      description: archDescription
    },
    {
      title: `${monitor} Display`,
      description: monitorDescription
    },
    {
      title: 'Advanced Workflow',
      description: 'Automated tools included for faster throughput and efficiency.'
    }
  ];
});

fs.writeFileSync(path, JSON.stringify(data, null, 4));
console.log('Updated devices.json with coreSpecs');

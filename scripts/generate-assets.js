import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/sample-files');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate a simple valid PDF with standard fonts
function createSimplePdf(title, subtitle, bullets) {
  const contentLines = [
    `BT`,
    `/F1 20 Tf`,
    `50 750 Td`,
    `(${title}) Tj`,
    `/F1 12 Tf`,
    `0 -30 Td`,
    `(${subtitle}) Tj`,
    `0 -30 Td`,
    `/F1 10 Tf`,
    ...bullets.map((b) => `(${b.replace(/[()\\]/g, '\\$&')}) Tj 0 -18 Td`),
    `ET`
  ].join('\n');

  const streamLength = Buffer.byteLength(contentLines, 'utf8');

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${contentLines}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000300 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
385
%%EOF`;

  return Buffer.from(pdf, 'utf-8');
}

// 1. Sample Lesson Plan PDF
const lpPdf = createSimplePdf(
  'ITI RESOURCE HUB - LESSON PLAN',
  'Trade: ICTSM | Topic: Motherboard Form Factors & POST Diagnostics',
  [
    '1. Instructional Objectives: Trainee will be able to identify ATX, Micro-ATX, and Mini-ITX form factors.',
    '2. Instructional Aids: Motherboard display unit, POST diagnostic PCI card, Multimeter, Screwdriver set.',
    '3. Motivation / Review: Explain common symptoms when a computer powers on without video display.',
    '4. Presentation Points: Chipset architecture (Northbridge / Southbridge or PCH), bus lanes, BIOS beep codes.',
    '5. Practical Application: Trainees insert diagnostic card into PCIe slot and record hexadecimal error codes.',
    '6. Safety Precaution: Ground wrist with anti-static ESD strap before handling delicate microchips.',
    '7. Evaluation & Assignment: Complete the fault diagnosis questionnaire and test 3 faulty test boards.'
  ]
);
fs.writeFileSync(path.join(outDir, 'sample-lesson-plan.pdf'), lpPdf);

// 2. Sample Demo Plan PDF
const dpPdf = createSimplePdf(
  'ITI RESOURCE HUB - DEMONSTRATION PLAN',
  'Trade: ICTSM | Topic: Single-Mode Optical Fiber Fusion Splicing',
  [
    '1. Objective: Demonstrate precision cleaving and fusion arc splicing with < 0.05dB insertion loss.',
    '2. Tools & Equipment Required: Automatic fusion splicer, High-precision fiber cleaver, Miller strippers.',
    '3. Step 1: Slide heat-shrink protective sleeve over the primary buffer tube.',
    '4. Step 2: Strip outer jacket, Kevlar yarn, and 250-micron acrylate coating using thermal/mechanical stripper.',
    '5. Step 3: Clean bare core with 99.9% pure isopropyl alcohol lint-free wipes.',
    '6. Step 4: Cleave perpendicular at precisely 90 degrees with zero micro-cracks.',
    '7. Step 5: Place fiber in V-grooves, initiate motorized 3-axis alignment, and execute electric arc fusion.',
    '8. Step 6: Verify splice loss calculation on digital screen and transfer to heat-shrink oven.'
  ]
);
fs.writeFileSync(path.join(outDir, 'sample-demo-plan.pdf'), dpPdf);

// 3. Sample Lab Manual PDF
const lmPdf = createSimplePdf(
  'ITI RESOURCE HUB - PRACTICAL LAB MANUAL',
  'Trade: ICTSM | Practical Exercise: Cat6 Structured Cabling & Patch Panels',
  [
    'Job No: ICTSM-P-14 | Time Allotted: 3 Hours',
    'Task: Terminate 8-conductor UTP Cat6 cable onto 110-type punch down keystone jack using T568B standard.',
    'Color Pinout: 1: White-Orange, 2: Orange, 3: White-Green, 4: Blue, 5: White-Blue, 6: Green, 7: White-Brown, 8: Brown.',
    'Procedure: Untwist pairs no more than 0.5 inches (12.7mm) to maintain crosstalk immunity.',
    'Quality Test: Use digital cable certifier to test for Wiremap, Continuity, Open, Short, and NEXT.',
    'Instructor Signature and Grading Rubric: Accuracy (40%), Neatness (30%), Safety & Speed (30%).'
  ]
);
fs.writeFileSync(path.join(outDir, 'sample-lab-manual.pdf'), lmPdf);

// 4. Sample Notes PDF
const notesPdf = createSimplePdf(
  'ITI RESOURCE HUB - SUBJECT STUDY NOTES',
  'Trade: ICTSM | Topic: TCP/IP Subnetting and VLSM Calculations',
  [
    'Class A default: /8 (255.0.0.0), Class B default: /16 (255.255.0.0), Class C default: /24 (255.255.255.0).',
    'Borrowing Bits Formula: 2^n = Number of Subnets created (where n = borrowed network bits).',
    'Host Capacity Formula: 2^h - 2 = Usable hosts per subnet (where h = remaining host bits).',
    'Step 1: Determine the required host size for each departmental LAN segment.',
    'Step 2: Allocate the largest subnet block first to avoid subnet overlapping.',
    'Step 3: Document Network ID, Broadcast IP, First Usable Host IP, and Last Usable Host IP.'
  ]
);
fs.writeFileSync(path.join(outDir, 'sample-notes.pdf'), notesPdf);

// 5. Sample DOCX (mock binary document)
const docxContent = Buffer.from(
  'PK\x03\x04\x14\x00\x00\x00\x08\x00ITI-RESOURCE-HUB-DEMO-DOCX-MEMBER\x00[Content_Types].xml\x00Demonstration DOCX file for ITI Resource Hub Lesson Plan'
);
fs.writeFileSync(path.join(outDir, 'sample-lesson-plan.docx'), docxContent);

// 6. Sample SVG Diagram: Network Topology
const svgDiagram = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="500" fill="#0A0A0A" rx="16"/>
  
  <!-- Grid Lines -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F1F1F" stroke-width="1"/>
    </pattern>
    <linearGradient id="mintGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00D4A4"/>
      <stop offset="100%" stop-color="#00B48A"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#grid)" rx="16"/>

  <!-- Title -->
  <text x="40" y="50" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="20" font-weight="600">Enterprise Network Architecture - 3-Tier Hierarchical Model</text>
  <text x="40" y="75" fill="#888888" font-family="Inter, sans-serif" font-size="13">ICTSM Trade Demonstration Diagram | Standard IEEE 802.1Q Topology</text>

  <!-- Core Layer -->
  <rect x="250" y="110" width="300" height="60" rx="8" fill="#1C1C1E" stroke="#00D4A4" stroke-width="2"/>
  <text x="400" y="138" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="14" font-weight="600" text-anchor="middle">CORE LAYER (High-Speed Backplane)</text>
  <text x="400" y="156" fill="#00D4A4" font-family="Geist Mono, monospace" font-size="12" text-anchor="middle">10G Optical Fiber Trunks | OSPF Area 0</text>

  <!-- Distribution Layer Left -->
  <rect x="120" y="230" width="220" height="60" rx="8" fill="#1C1C1E" stroke="#3772CF" stroke-width="1.5"/>
  <text x="230" y="258" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13" font-weight="600" text-anchor="middle">DISTRIBUTION SWITCH 1</text>
  <text x="230" y="276" fill="#3772CF" font-family="Geist Mono, monospace" font-size="11" text-anchor="middle">VLAN Routing &amp; ACL Policy</text>

  <!-- Distribution Layer Right -->
  <rect x="460" y="230" width="220" height="60" rx="8" fill="#1C1C1E" stroke="#3772CF" stroke-width="1.5"/>
  <text x="570" y="258" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13" font-weight="600" text-anchor="middle">DISTRIBUTION SWITCH 2</text>
  <text x="570" y="276" fill="#3772CF" font-family="Geist Mono, monospace" font-size="11" text-anchor="middle">Redundant HSRP Gateway</text>

  <!-- Access Layer -->
  <rect x="60" y="360" width="180" height="70" rx="8" fill="#1C1C1E" stroke="#5A5A5C" stroke-width="1"/>
  <text x="150" y="388" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13" font-weight="600" text-anchor="middle">ACCESS SW: LAB A</text>
  <text x="150" y="406" fill="#888888" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">VLAN 10 - ICTSM Lab</text>
  <text x="150" y="420" fill="#00D4A4" font-family="Geist Mono, monospace" font-size="10" text-anchor="middle">192.168.10.0/24</text>

  <rect x="310" y="360" width="180" height="70" rx="8" fill="#1C1C1E" stroke="#5A5A5C" stroke-width="1"/>
  <text x="400" y="388" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13" font-weight="600" text-anchor="middle">ACCESS SW: LAB B</text>
  <text x="400" y="406" fill="#888888" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">VLAN 20 - Telecom Lab</text>
  <text x="400" y="420" fill="#00D4A4" font-family="Geist Mono, monospace" font-size="10" text-anchor="middle">192.168.20.0/24</text>

  <rect x="560" y="360" width="180" height="70" rx="8" fill="#1C1C1E" stroke="#5A5A5C" stroke-width="1"/>
  <text x="650" y="388" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13" font-weight="600" text-anchor="middle">SERVER FARM / DMZ</text>
  <text x="650" y="406" fill="#888888" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">VLAN 99 - DC &amp; DNS</text>
  <text x="650" y="420" fill="#00D4A4" font-family="Geist Mono, monospace" font-size="10" text-anchor="middle">192.168.99.0/24</text>

  <!-- Connectors -->
  <line x1="330" y1="170" x2="230" y2="230" stroke="#00D4A4" stroke-width="2" stroke-dasharray="4"/>
  <line x1="470" y1="170" x2="570" y2="230" stroke="#00D4A4" stroke-width="2" stroke-dasharray="4"/>
  <line x1="230" y1="290" x2="150" y2="360" stroke="#3772CF" stroke-width="1.5"/>
  <line x1="230" y1="290" x2="400" y2="360" stroke="#3772CF" stroke-width="1.5"/>
  <line x1="570" y1="290" x2="400" y2="360" stroke="#3772CF" stroke-width="1.5"/>
  <line x1="570" y1="290" x2="650" y2="360" stroke="#3772CF" stroke-width="1.5"/>
</svg>`;

fs.writeFileSync(path.join(outDir, 'sample-diagram.svg'), svgDiagram.trim());

console.log('Sample files generated successfully in public/sample-files/');

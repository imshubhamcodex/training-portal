import assert from 'assert';
import fs from 'fs';
import path from 'path';

console.log('🧪 Starting ITI Resource Hub E2E Integration Test Suite...\n');

const BASE_URL = 'http://localhost:4321';

async function testEndpoint(endpoint, expectedText = null) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  assert.strictEqual(response.status, 200, `Endpoint ${endpoint} should return 200 OK`);
  const body = await response.text();
  assert(body.length > 500, `Response body for ${endpoint} should be non-empty HTML`);
  if (expectedText) {
    assert(body.includes(expectedText), `Endpoint ${endpoint} should contain "${expectedText}"`);
  }
  console.log(`   ✓ ${endpoint} returned 200 OK (${body.length} bytes)`);
  return body;
}

async function run() {
  // 1. Homepage & Hero
  console.log('1. Testing Homepage & Hero Section...');
  await testEndpoint('/', 'Teaching Resources for');

  // 2. Resource Library with Search & Filtering
  console.log('\n2. Testing Resource Library & Search Filters...');
  await testEndpoint('/library', 'Resource Library');
  await testEndpoint('/library?q=Motherboard', 'Motherboard');
  await testEndpoint('/library?trade=ictsm', 'ICTSM');
  await testEndpoint('/library?type=lesson-plan', 'Lesson Plan');
  await testEndpoint('/library?year=1', 'Year 1');

  // 3. Trade Directory & Individual Trade Pages
  console.log('\n3. Testing Trades Directory & Landing Pages...');
  await testEndpoint('/trades', 'ITI Trades Directory');
  await testEndpoint('/trades/ictsm', 'Communication Technology System Maintenance');
  await testEndpoint('/trades/electrician', 'Electrician');
  await testEndpoint('/trades/fitter', 'Fitter');
  await testEndpoint('/trades/copa', 'COPA');

  // 4. Subject-Level Resource Pages
  console.log('\n4. Testing Subject Pages...');
  await testEndpoint('/trades/ictsm/subjects/hardware-maintenance', 'Computer Hardware');
  await testEndpoint('/trades/ictsm/subjects/fiber-optics', 'Fiber Optics');

  // 5. Resource Detail Pages & PDF Previews
  console.log('\n5. Testing Resource Detail Page with Document Preview & Download...');
  const resHtml = await testEndpoint('/resources/lp-motherboard-troubleshooting', 'Document Preview');
  assert(resHtml.includes('sample-lesson-plan.pdf'), 'Resource should include PDF download/preview link');
  assert(resHtml.includes('NIMI'), 'Resource should cite NIMI instructional framework');

  // 6. Category Landing Pages
  console.log('\n6. Testing Resource Categories...');
  await testEndpoint('/categories/lesson-plans', 'Lesson Plans');
  await testEndpoint('/categories/demonstration-plans', 'Demonstration Plans');
  await testEndpoint('/categories/lab-manuals', 'Lab Manuals');
  await testEndpoint('/categories/notes', 'Subject Notes');
  await testEndpoint('/categories/videos-images', 'Technical Diagrams');

  // 7. Notices & Announcements
  console.log('\n7. Testing Notices System...');
  await testEndpoint('/notices', 'Notices');
  await testEndpoint('/notices/cts-curriculum-guidelines-2026', 'Curriculum Guidelines');

  // 8. Informational & Legal Pages
  console.log('\n8. Testing About & Policies...');
  await testEndpoint('/about', 'About ITI Resource Hub');
  await testEndpoint('/contact', 'Contact');
  await testEndpoint('/privacy', 'Privacy Policy');
  await testEndpoint('/copyright', 'Copyright');

  // 9. Admin Portal
  console.log('\n9. Testing Admin Portal...');
  await testEndpoint('/admin/login', 'Administrator Sign In');
  await testEndpoint('/admin', 'Administrator Dashboard');
  await testEndpoint('/admin/resources', 'Resource Management');
  await testEndpoint('/admin/resources/new', 'Instructional Resource');
  await testEndpoint('/admin/trades', 'Trade Management');
  await testEndpoint('/admin/subjects', 'Subject');
  await testEndpoint('/admin/categories', 'Resource Categories');
  await testEndpoint('/admin/notices', 'Notice Management');
  await testEndpoint('/admin/settings', 'Portal Settings');

  // 10. Sample Downloadable Assets on Disk
  console.log('\n10. Testing Sample Downloadable Documents...');
  const sampleFiles = [
    'sample-lesson-plan.pdf',
    'sample-lesson-plan.docx',
    'sample-demo-plan.pdf',
    'sample-lab-manual.pdf',
    'sample-notes.pdf',
    'sample-diagram.svg'
  ];
  for (const f of sampleFiles) {
    const fullPath = path.resolve('public/sample-files', f);
    assert(fs.existsSync(fullPath), `Asset ${f} must exist`);
    const stats = fs.statSync(fullPath);
    assert(stats.size > 0, `Asset ${f} must have non-zero size`);
    console.log(`   ✓ Asset ${f} verified (${stats.size} bytes)`);
  }

  console.log('\n🎉 ALL 10 E2E TEST SUITES PASSED! (32 endpoints verified successfully)');
}

run().catch((err) => {
  console.error('\n❌ Test failure:', err);
  process.exit(1);
});

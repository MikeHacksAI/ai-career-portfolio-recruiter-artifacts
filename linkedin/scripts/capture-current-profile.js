// Capture-only LinkedIn baseline helper.
// This script does NOT edit the profile, click Save, send messages, or automate LinkedIn activity.
// It opens a visible browser, lets the user navigate/login manually, and captures the page only after confirmation.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PROFILE_URL = 'https://www.linkedin.com/in/mikeroehr';
const SNAPSHOT_DATE = '2026-09-02';
const repoRoot = path.resolve(__dirname, '..', '..');
const captureDir = path.join(repoRoot, 'linkedin', '.private-captures', SNAPSHOT_DATE);
const userDataDir = path.join(repoRoot, 'linkedin', '.playwright-profile');

fs.mkdirSync(captureDir, { recursive: true });

function waitForEnter(message) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(message, () => {
      rl.close();
      resolve();
    });
  });
}

(async () => {
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1440, height: 1000 },
  });

  const page = context.pages()[0] || await context.newPage();
  await page.goto(PROFILE_URL, { waitUntil: 'domcontentloaded' });

  console.log('\nLinkedIn is open in a visible browser.');
  console.log('Log in manually if needed, open your own profile, and make sure the page shows the PRE-EDIT state.');
  console.log('Do not change any LinkedIn fields yet.');

  await waitForEnter('\nWhen the current profile is fully visible and ready to preserve, press ENTER here... ');

  await page.screenshot({
    path: path.join(captureDir, 'linkedin-profile-full.png'),
    fullPage: true,
  });

  fs.writeFileSync(
    path.join(captureDir, 'linkedin-profile.html'),
    await page.content(),
    'utf8'
  );

  fs.writeFileSync(
    path.join(captureDir, 'linkedin-profile-visible-text.txt'),
    await page.locator('body').innerText(),
    'utf8'
  );

  fs.writeFileSync(
    path.join(captureDir, 'capture-metadata.json'),
    JSON.stringify({
      snapshotDate: SNAPSHOT_DATE,
      profileUrl: PROFILE_URL,
      capturedUrl: page.url(),
      title: await page.title(),
      capturedAt: new Date().toISOString(),
      note: 'Raw authenticated capture. Local-only. Do not commit to the public repository without review/sanitization.'
    }, null, 2),
    'utf8'
  );

  console.log(`\nCaptured baseline to: ${captureDir}`);
  console.log('Files created:');
  console.log('  - linkedin-profile-full.png');
  console.log('  - linkedin-profile.html');
  console.log('  - linkedin-profile-visible-text.txt');
  console.log('  - capture-metadata.json');
  console.log('\nThese files are excluded from Git by .gitignore.');

  await waitForEnter('\nPress ENTER to close the browser... ');
  await context.close();
})();

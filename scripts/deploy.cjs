const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const deploy = path.resolve(root, '..', 'revigoo-gh-pages-deploy')

function run(command, cwd = root) {
  console.log(`\n> ${command}`)
  execSync(command, {
    cwd,
    stdio: 'inherit',
  })
}

function copyDirectoryContents(source, destination) {
  fs.cpSync(source, destination, {
    recursive: true,
    force: true,
  })
}

console.log('\nREVIGOO DEPLOYMENT')
console.log('==================\n')

// 1. Build
run('npm run build')

// 2. Check deployment folder
if (!fs.existsSync(deploy)) {
  throw new Error(
    `Deployment folder not found:\n${deploy}`
  )
}

// 3. Remove everything except .git
for (const item of fs.readdirSync(deploy, {
  withFileTypes: true,
})) {
  if (item.name === '.git') continue

  const itemPath = path.join(deploy, item.name)

  fs.rmSync(itemPath, {
    recursive: true,
    force: true,
  })
}

// 4. Copy fresh Vite build
copyDirectoryContents(dist, deploy)

// 5. Verify important files
const requiredFiles = [
  'index.html',
  'CNAME',
  'favicon.png',
  'og-image.png',
  'robots.txt',
  'sitemap.xml',
]

for (const file of requiredFiles) {
  const filePath = path.join(deploy, file)

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Required deployment file missing: ${file}`
    )
  }
}

console.log('\n✓ Production build prepared')
console.log('✓ Required deployment files verified')

// 6. Git
run('git add -A', deploy)

const status = execSync('git status --short', {
  cwd: deploy,
  encoding: 'utf8',
}).trim()

if (!status) {
  console.log('\n✓ No changes to deploy.')
  process.exit(0)
}

console.log('\nChanges:')
console.log(status)

run(
  'git commit -m "Deploy latest REVIGOO website"',
  deploy
)

// 7. Push
run('git push origin gh-pages', deploy)

console.log('\n================================')
console.log('✓ REVIGOO DEPLOYMENT COMPLETE')
console.log('================================')
console.log('\nWebsite:')
console.log('https://revigoo.in/\n')
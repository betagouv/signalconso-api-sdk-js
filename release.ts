import {exec, execSync} from 'child_process'
import * as fs from 'fs'

const config = {
  mainBranch: 'main',
}

const run = (cl: string) => {
  return new Promise((resolve, reject) => {
    const _ = exec(cl)
    _.stdout?.on('data', console.log)
    _.stderr?.on('data', console.error)
    _.on('exit', code => {
      if (code === 0) {
        resolve(code)
      } else {
        console.log(`${cl} exited with ${code}`)
        reject(code)
      }
    })
  })
}
const gitWorkspaceIsEmpty = () => execSync(`git status --porcelain`).toString() === ''

const getPackageVersion = () => JSON.parse(fs.readFileSync('package.json', 'utf8')).version

const isOnMainBranch = () => new RegExp(`${config.mainBranch}\s*\n*`).test(execSync('git branch --show-current').toString())

;(async () => {
  const newversion = process.argv[2] ?? ('patch' as 'patch' | 'minor' | 'major' | 'test')
  if (!gitWorkspaceIsEmpty()) {
    console.error(`Your git status must be clean before to publish.`)
    process.exit(1)
  }
  if (newversion === 'test') {
    await run(`npm run build`)
    const packageVersion = getPackageVersion().split('-test-')[0]
    await run(`npm version ${packageVersion + '-test-' + new Date().getTime()}`)
  } else {
    if (!isOnMainBranch()) {
      console.error(`You must be on branch ${config.mainBranch} to publish.`)
      process.exit(2)
    }
    await run(`npm run build`)
    await run(`npm version ${newversion}`)
  }
  await run(`git push`)
  await run(`npm publish`)
  // await run(`git commit -m "Release ${getPackageVersion()}"`)
  // await run(`git checkout ${config.mainBranch}`)
  console.log(`Successfully published version ${getPackageVersion()} !`)
})()

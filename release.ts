import {exec, execSync} from 'child_process'
import * as fs from 'fs'

const config = {
  mainBranch: 'main',
  prodBranch: 'prod',
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

const newversion = process.argv[2] ?? 'patch' as 'patch' | 'minor' | 'major'

const getPackageVersion = () => JSON.parse(fs.readFileSync('package.json', 'utf8')).version

const isOnMainBranch = () => /main\s*\n*/.test(execSync('git branch --show-current').toString())

;(async () => {
  if (!isOnMainBranch()) {
    console.error(`You must be on branch ${config.mainBranch} to publish.`)
  } else if (!gitWorkspaceIsEmpty()) {
    console.error(`Your git status must be clean before to publish.`)
  } else {
    await run(`npm version ${newversion}`)
    await run(`npm publish`)
    // await run(`git commit -m "Release ${getPackageVersion()}"`)
    await run(`git push`)
    await run(`git checkout ${config.prodBranch}`)
    await run(`git merge ${config.mainBranch}`)
    await run(`git push`)
    await run(`git checkout ${config.mainBranch}`)
    console.log(`Successfully published verison ${getPackageVersion()} !`)
  }
})()

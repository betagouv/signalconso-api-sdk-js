import {execSync} from 'child_process'

const branch = execSync('git branch --show-current').toString()
if (branch === 'main') {
  console.log('ok')
} else {
  console.log('nok')
}

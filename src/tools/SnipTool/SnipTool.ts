import type { Tool } from '../../Tool.js'

export const SnipTool: Tool = {
  name: 'Snip',
  async description() {
    return 'Unavailable placeholder tool.'
  },
  prompt() {
    return 'Unavailable placeholder tool.'
  },
  isEnabled() {
    return false
  },
  async call() {
    return { type: 'result', data: 'SnipTool is unavailable in this build.' }
  },
}

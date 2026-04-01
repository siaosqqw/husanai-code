import type { Tool } from '../../Tool.js'

export const WebBrowserTool: Tool = {
  name: 'WebBrowser',
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
    return { type: 'result', data: 'WebBrowserTool is unavailable in this build.' }
  },
}

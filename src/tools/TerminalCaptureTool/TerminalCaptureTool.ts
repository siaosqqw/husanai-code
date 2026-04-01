import type { Tool } from '../../Tool.js'

export const TerminalCaptureTool: Tool = {
  name: 'TerminalCapture',
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
    return { type: 'result', data: 'TerminalCaptureTool is unavailable in this build.' }
  },
}

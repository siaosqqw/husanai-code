import type { Tool } from '../../Tool.js'

export const SendUserFileTool: Tool = {
  name: 'SendUserFile',
  async description() { return 'Unavailable placeholder tool.' },
  prompt() { return 'Unavailable placeholder tool.' },
  isEnabled() { return false },
  async call() { return { type: 'result', data: 'SendUserFileTool is unavailable.' } },
}

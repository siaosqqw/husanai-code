import type { Tool } from '../../Tool.js'

export const SubscribePRTool: Tool = {
  name: 'SubscribePR',
  async description() { return 'Unavailable placeholder tool.' },
  prompt() { return 'Unavailable placeholder tool.' },
  isEnabled() { return false },
  async call() { return { type: 'result', data: 'SubscribePRTool is unavailable.' } },
}

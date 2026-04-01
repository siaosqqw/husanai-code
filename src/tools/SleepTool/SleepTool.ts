import type { Tool } from '../../Tool.js'

export const SleepTool: Tool = {
  name: 'Sleep',
  async description() { return 'Unavailable placeholder tool.' },
  prompt() { return 'Unavailable placeholder tool.' },
  isEnabled() { return false },
  async call() { return { type: 'result', data: 'SleepTool is unavailable.' } },
}

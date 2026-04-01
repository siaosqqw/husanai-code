import type { Tool } from '../../Tool.js'

export const PushNotificationTool: Tool = {
  name: 'PushNotification',
  async description() { return 'Unavailable placeholder tool.' },
  prompt() { return 'Unavailable placeholder tool.' },
  isEnabled() { return false },
  async call() { return { type: 'result', data: 'PushNotificationTool is unavailable.' } },
}

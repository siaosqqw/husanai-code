import type { Command } from '../commands.js'

const command: Command = {
  name: 'subscribe-pr',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'subscribe-pr is unavailable.' } },
  userFacingName() { return 'subscribe-pr' },
}

export default command

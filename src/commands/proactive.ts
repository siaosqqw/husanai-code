import type { Command } from '../../commands.js'

const command: Command = {
  name: 'proactive',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'proactive is unavailable.' } },
  userFacingName() { return 'proactive' },
}

export default command

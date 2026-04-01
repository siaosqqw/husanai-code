import type { Command } from '../../commands.js'

const command: Command = {
  name: 'remote-control',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'remote-control is unavailable.' } },
  userFacingName() { return 'remote-control' },
}

export default command

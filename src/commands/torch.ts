import type { Command } from '../commands.js'

const command: Command = {
  name: 'torch',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'torch is unavailable.' } },
  userFacingName() { return 'torch' },
}

export default command

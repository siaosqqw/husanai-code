import type { Command } from '../../commands.js'

const command: Command = {
  name: 'assistant',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'assistant is unavailable.' } },
  userFacingName() { return 'assistant' },
}

export default command

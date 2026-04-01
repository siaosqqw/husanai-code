import type { Command } from '../commands.js'

const command: Command = {
  name: 'force-snip',
  description: 'Unavailable in this build.',
  isEnabled() { return false },
  isHidden() { return true },
  async call() { return { type: 'text', value: 'force-snip is unavailable.' } },
  userFacingName() { return 'force-snip' },
}

export default command

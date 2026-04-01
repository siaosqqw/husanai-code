import type { Tool } from '../../Tool.js'

export const ListPeersTool: Tool = {
  name: 'ListPeers',
  async description() {
    return 'Unavailable placeholder tool.'
  },
  prompt() {
    return 'Unavailable placeholder tool.'
  },
  isEnabled() {
    return false
  },
  async call() {
    return { type: 'result', data: 'ListPeersTool is unavailable in this build.' }
  },
}

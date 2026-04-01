import type { Tool } from '../../Tool.js'

export const CtxInspectTool: Tool = {
  name: 'CtxInspect',
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
    return { type: 'result', data: 'CtxInspectTool is unavailable in this build.' }
  },
}

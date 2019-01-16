import { theme } from '@/constants'

export const state = () => ({
  theme: theme[0]
})

export const mutations = {
  setTheme(state, { theme }) {
    state.theme = theme
  }
}

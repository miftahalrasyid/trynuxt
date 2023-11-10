import { defineStore } from 'pinia'
export const useAuth = defineStore({
  id: 'filter-store',
  state: () => ({
    layout: 'default',
  }),
  getters: {
    getLayout: (state) => state.layout,
  },
  actions: {
    setLayout(value) {
      this.layout = value;
    },
  },
})
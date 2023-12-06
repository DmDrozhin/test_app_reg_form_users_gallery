import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import comps from '@/components'
import ui from '@/components/UI'
// const uiComps = [...comps, ...ui]

import '@/styles/main.scss'

const app = createApp(App)

ui.forEach(uic => app.component(uic.name, uic))

app.use(store).use(router).mount('#app')

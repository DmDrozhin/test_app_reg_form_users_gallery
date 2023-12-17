import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import drs from './directives'
import ui from '@/components/UI'

const app = createApp(App)

ui.forEach(uic => app.component(uic.name, uic))
drs.forEach(dr => app.directive(dr.name, dr))

app.use(store).use(router).mount('#app')

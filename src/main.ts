import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CountDownTimer from './components/CountDownTimer.vue'

const app = createApp(App);
app.component('CountDownTimer', CountDownTimer);
app.use(createPinia())
app.use(router)

app.mount('#app')

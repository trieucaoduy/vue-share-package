import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { shareLibs } from '@share-package/common';

const app = createApp(App)

app.use(shareLibs);

app.mount('#app')

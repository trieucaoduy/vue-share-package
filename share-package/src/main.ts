import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import * as Aura from '@primevue/themes/aura';
import Select from 'primevue/select';

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } });
app.component('Select', Select);

app.mount('#app')

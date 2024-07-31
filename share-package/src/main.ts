import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } });
app.component('Select', Select);
app.component('DatePicker', DatePicker);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);

app.mount('#app')

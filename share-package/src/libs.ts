import type { App } from 'vue';
import PkgSelect from './components/atoms/PkgSelect.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const shareLibs = {
  install: (app: App) => {
    app.use(PrimeVue, { theme: { preset: Aura } });
    app.component('PkgSelect', PkgSelect);
  }
};

export { shareLibs, PkgSelect };
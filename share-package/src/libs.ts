import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import PkgSelect from './components/atoms/PkgSelect.vue';
import PkgTable from './components/organisms/PkgTable.vue';

const shareLibs = {
  install: (app: App) => {
    app.use(PrimeVue, { theme: { preset: Aura } });
    app.component('PkgSelect', PkgSelect);
    app.component('PkgTable', PkgTable);
  }
};

export { shareLibs, PkgSelect };
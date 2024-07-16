import type { App } from 'vue';
import PkgSelect from './components/atoms/PkgSelect.vue';

const shareLibs = {
  install: (app: App) => {
    app.component('PkgSelect', PkgSelect);
  }
};

export { shareLibs, PkgSelect };
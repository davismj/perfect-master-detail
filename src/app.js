export class AppViewModel {

  constructor() {
  }

  configureRouter(config, router) {
    config.map([
      { route: 'cryptos', name: 'crypto-list', viewPorts: { main: { moduleId: 'master' }, side: { moduleId: null } } },
      { route: 'cryptos/:code', name: 'crypto-detail', viewPorts: { main: { moduleId: 'master' }, side: { moduleId: 'detail' } } },
      { route: '', redirect: 'cryptos' }
    ]);
  }
}

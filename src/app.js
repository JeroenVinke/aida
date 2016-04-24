export class App {
  configureRouter(config, router) {
    config.title = 'Aida';
    config.map([
      { route: ['edit'],       name: 'edit',        moduleId: 'edit',        nav: true, title: 'Edit' },
      { route: ['help'],       name: 'help',        moduleId: 'help',        nav: true, title: 'Help' },
      { route: ['file'],       name: 'file',        moduleId: 'file',        nav: true, title: 'File' },
      { route: ['view'],       name: 'view',        moduleId: 'view',        nav: true, title: 'View' }


    ]);

    this.router = router;
  }
}

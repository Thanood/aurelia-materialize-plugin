import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

    configureRouter(config, router){
        config.title = 'Components';
        config.map([
          { route: ['','buttons'],  moduleId: './buttons',      nav: true, title:'Buttons' },
          { route: ['collections'],  moduleId: './collections',      nav: true, title:'Collections' },
        ]);

        this.router = router;
    }
}
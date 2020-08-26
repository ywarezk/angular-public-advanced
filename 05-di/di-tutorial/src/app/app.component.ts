import { Component, Injector, Inject, Optional, ComponentRef, Compiler, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';
import {HelloService} from './services/hello.service';
// import { environment } from '../environments/environment';
// import { StamModule } from '../stam/stam.module';


/**

 <input type="text" required email minlength="5" isEqual ngModel />

 */

@Component({
  selector: 'app-root',
  template: `
    <h1>DI Lesson</h1>
    <button (click)="loadService()">
      load hello service
    </button>

    <h1>
    {{message}}
    </h1>
    <button (click)="displayStamComponent()">
      Display StamComponent
    </button>

    <div #container>
    </div>
  `,
  providers: [
    // {
    //   provide: 'hello',
    //   useValue: 'hello from app component'
    // }
  ]
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  constructor(
    @Inject('hello') public message: string,
    // private _hello: HelloService,
    private _injector: Injector,
    private _compiler: Compiler
  ) {

  }

// angular DI is made for Injector service?
// we do not have a single injector we have many injectors
/**

 |      key        |             value                         |
    HelloService   |       null  ----> new HelloService()      |
      'hello'      |               'world'
    LoggerService  |      null ----> new LoggerService()      |
    MinimalLogger  |           new LoggerService()
 */

  loadService() {
    // new OrelService(http, HelloService, RuslanService, )
    const helloService = this._injector.get(HelloService);
  }

  async displayStamComponent() {
    // { StamModule: class StamModule}
    const moduleFile = await import('../stam/stam.module');
    const stamComponent = await import('../stam/stam.component');
    const moduleFactory = await this._compiler.compileModuleAsync(moduleFile.StamModule);
    const moduleRef = moduleFactory.create(this._injector);
    const stamComponentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(stamComponent.StamComponent);

    // moduleRef.onDestroy(() => {

    // })

    // const moduleWithComponents = await this._compiler.compileModuleAndAllComponentsAsync(moduleFile.StamModule);
    // const stamComponentFactory = moduleWithComponents.componentFactories.find((factory: ComponentFactory<any>) => {
    //   return factory.selector === 'brain-stam';
    // });
    this.container.createComponent(stamComponentFactory);
  }
}

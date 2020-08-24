/**
<content-projection>
  <ng-template let-title>
    <label>
      <h1>{{title}}</h1>
    </label>
  </ng-template>

  <input type="text" class="" placeholder="" />
</content-projection>
 */

import { Component, OnInit, ContentChild, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'content-projection',
  template: `
    <form>
      <div #container>
      </div>
      <ng-content select="label"></ng-content>
      <ng-content select="input"></ng-content>
    </form>
  `
})
export class ContentProjectionComponent implements AfterViewInit, AfterContentInit, AfterContentChecked {
  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.template, {$implicit: 'hello'});
  }
}

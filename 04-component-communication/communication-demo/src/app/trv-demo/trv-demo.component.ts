/**
 <trv-demo #childComponent>
 </trv-demo>

 <input type="text" ngModel #stamInput />
 *ngIf, *ngFor
 <ng-template [ngIf]="" >
  <h1>
    dfsgsd
  </h1>
  <input-demo></input-demo>
 </ng-template>
 */

import { Component, ViewChild, ElementRef, TemplateRef, ViewContainerRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { InputDemoComponent } from '../input-demo/input-demo.component';

@Component({
  selector: 'trv-demo',
  template: `
    <p>
      {{
        h1Element.id
      }}
    </p>
    <h1 #h1Element id="stam">
      TRV Demo
    </h1>

    <!-- <div *ngIf="expression; else greeting">
    </div> -->

    <ng-template #greeting let-myArray let-fooFromContext="foo">
      <h1>part of the template that is repeating</h1>
      <p>
        {{fooFromContext}}
      </p>
      <ul>
        <li *ngFor="let num of myArray">
          {{num}}
        </li>
      </ul>
    </ng-template>

    <div *ngTemplateOutlet="greeting; context: {$implicit: [1,2,3], foo: 'bar'}">
    </div>

    <div *ngTemplateOutlet="greeting; context: {$implicit: [4,5,6], foo: 'hello world'}">
    </div>

    <div #containerForTemplate>
    </div>

  `,
  exportAs: 'trv-demo'
})
export class TrvDemoComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('h1Element')
  h1: ElementRef;

  @ViewChild(InputDemoComponent)
  inputDemo: InputDemoComponent;

  @ViewChild('greeting')
  greetingTemplate: TemplateRef<any>;

  @ViewChild('containerForTemplate', {read: ViewContainerRef})
  container: ViewContainerRef

  /**
   * @ViewChild is populated
   * view is initiated
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.container.createEmbeddedView(this.greetingTemplate, { $implicit: ['piglet', 'sweetness', 'yariv'], foo: 'blah' })
    })

  }

  /**
   * will jump every cd
   */
  ngAfterViewChecked() {

  }
}

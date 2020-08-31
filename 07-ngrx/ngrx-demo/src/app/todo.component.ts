import { Component, OnInit } from '@angular/core';
import { DefaultDataServiceFactory, EntityCollectionServiceFactory, EntityCollectionService, } from '@ngrx/data';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'todo',
  template: `
    <h1>Todo</h1>

    <ul>
      <li *ngFor="let task of taskService.entities$ | async">
        {{task.title}}
        <button (click)="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>

    <form [formGroup]="taskForm" (ngSubmit)="createTask()">
      <input type="text" placeholder="title" formControlName="title" />
      <input type="text" placeholder="Description" formControlName="description" />
      <input type="text" placeholder="Group" formControlName="group" />
      <input type="datetime" placeholder="When" formControlName="when" />
      <button>
        Submit
      </button>
    </form>

  `
})

export class TodoComponent implements OnInit {
  public taskService: EntityCollectionService<any>;

  // public yuvalEntities$ = this.taskService.entities$.pipe(

  // )

  taskForm = this._formBuilder.group({
    title: '',
    description: '',
    group: '',
    when: new Date()
  })

  constructor(
    httpClientFactory: EntityCollectionServiceFactory,
    private _formBuilder: FormBuilder
  ) {
    this.taskService = httpClientFactory.create('Task');
  }

  ngOnInit() {
    this.taskService.getAll();
  }

  deleteTask(id: number) {
    this.taskService.delete(id);
  }

  createTask() {
    this.taskService.add(this.taskForm.value);
  }
}

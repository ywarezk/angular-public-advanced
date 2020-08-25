# Change Detection

In this lesson we will learn how the change detection in Angular works.

## Lesson Plan

- Automatic change detection
- stabilization during cd 
- Content changed after it was checked.
- cd order
- how angular starts the cd process
- zone.js
- NgZone
- OnPush

## EX OnPush

- Create a new project using @angular/cli
- All the components in this project should be OnPush
- Practice all the OnPush triggers
  - Create a component which is getting an @Input
  - The parent will change the input with a button press
  - Create a component which use the **interval** operator to create a counter and display the count using the **async** pipe
  - Create a component which injects the **ChangeDetectorRef** and will have a **setInterval** that will update a property that will be displayed on the template but not updated until a button is pressed the will call the **ChangeDetectorRef** detectChanges.
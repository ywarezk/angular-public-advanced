# CD in angular

the ability of angular to know that something happened in our app that might require
an update to the view

{{}}, []

## What triggers CD

something async happened inside angular
  - Events
  - Timer
  - Promise / Observable
  - Websocket


## Automatic change detection

angular can automatically identify async stuff and trigger cd.
performance.

## The order of CD

when something async happens
angular trigger cd in all components
the order will be from top to bottom

## How angular automatically knows that something async happened

- zone.js

## How to improve angular performance 

improve CD
we can tell angular to move from auto cd to manual cd.

## OnPush

what will trigger cd for on push?

## When on push will trigger CD?

- Timers - no
- Observable.subscribe(() => ...) - no
- Promise.then(() => ) - no


- Events will trigger CD - events on my children as well
- @Input is changing
- Inject ChangeDetectorRef and call the detect changes methods
- Observable/Promise that you will subscribe with the async pipe - WILL TRIGGER CD!




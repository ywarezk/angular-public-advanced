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


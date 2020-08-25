# Dependency Injection

We worked with the Angular's DI for quite sometime, time for us to thoroughly understand how the DI in angular works.

## Lesson Plan

- DI in angular
- Injector
- Dynamically injecting
- @Inject
- Injector trees
- Element injector tree
- Module injector tree
- Expending the trees
- Dynamic module
- InjectionToken

## EX. Lazy loading

- Create a new project using @angular/cli with routing
- create a lazy loaded module using the routing and display a component from that module
- In the **AppComponent** create a button, when the button is pressed you will lazy load another module and display a component in that module

## EX. InjectionToken configuration

- InjectionToken is used for configuration of services
- create a service called **GreetingService**
- that service contains a single method called:

```
greeting(): string
```
- the method will return the string:
```
Hello Yariv
```
- the name part is configurable using an InjectionToken
- Create an injection token that will configure the name in the service
- Configure the service with the injection token by providing your name.
- Create another module with static create method **forRoot**
- that static method will accept a name and use it to configure a similar service.
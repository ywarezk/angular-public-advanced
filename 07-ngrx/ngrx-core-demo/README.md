## Hello world in redux and NGRX

- SendComponent 
  - contains a text input in a form
  - when submit
- RecieveComponent
  - gets the message from the Send component
  
MessageService
  - Subject
  
```
`{
  message: {
    hello: '....'
  },
  user: {
    firstName: '',
    lastName: ''
  },
  todo: {
    tasks: [
      ...
    ]
  }
}
```

## Store

holds all the data - the data is immutable

-----+-----+------+-----+------->

-----H-----H------H-----H------->

## How do i change the data in the store

```
1. messageService.message.next('new data');

2. messageService.message.next('another message');

3. messageService.message.next('present data state');
```

ngrx redux implementation

reducer + flux

[
  Action1,
  Action2,
  Action3,
  Action4
] ==> reduce ===> reducer ===> data / state

- separate the what happened - Action 
- how the data is changed - Reducer


----A------A-----A-----A------A-------->
    |      |      |     |      |
S0--S1----S2-----S3----S4-----S5-------->

(state, Action) => new state

## Redux / NGRX

-----------        -----------             ---------
|  Store  | -----> Components|-----------> Actions |
-----------        -----------             ----------
    | |
    | |
  Reducer

## 

# Advanced forms

In this lesson we will cover advanced forms patterns used in Angular.

## Lesson Plan

- Understanding the form structure
- Describing the structure with FormControl, FormArray, FormGroup
- Template driven 
- Reactive
- when to choose what
- FormBuilder
- Extending the form tools
- ControlValueAccessor
- custom validation
- dynamic forms

## EX. login jwt

- Create a new project using @angular/cli
- Under **AppComponent** create 2 additional components
  - **LoginComponent** - This component will display a login form containing two input fields, one to enter email and the other to enter a password
  - **TodoComponent** - display a todo list that is taken from a server. the component also contains a button to refresh the list.
- The login api is in this url: https://academeez-login-ex.herokuapp.com/api/users/login
  - this api will get a **POST** request containing in the body:
  ```
  {
	  email: 'yariv@nerdeez.com',
	  password: '12345678'
  }
  ```
  The above is an example with an active account.
  When sending this the server will return a JWT token
- When the jwt token arrives you will need to store it in the **localStorage**
- Create an interceptor that will grab the token from the localStorage and add the following header:
```
{
	Authorization: `Bearer ${localStorage.getItem('token')}`
}
```
- After you have the token you can grab the todo list from the server
- by pressing the button in the **TodoComponent** a get request to the following url should be sent to retrieve the list:
  - https://academeez-login-ex.herokuapp.com/api/tasks
  - The server will return 401 if there is no jwt token in the headers

## EX. custom control

- You need to create a custom autocomplete control using Control Value Accessor.
- The control will get an array of AutocompleteItem as @Input
```
interface AutocompleteItem {
	id: number;
	title: string
}

@Input()
items: AutocompleteItem[];
```

- The control will filter the list as the user types and display the filtered list as a ul li items
- the user can click a list item to send a value. which will send the AutocompleteItem id.

## EX. Validation

- create a custom validation of a text input verifying the id number of a user: 
  - 9 digits
  - only numbers
- make sure to place this validation in a workspace where you will create a library for forms items.

## Ex. Async Validation

- We will create an AsyncValidator that checks with a server if an item exists.
  - https://nztodo.herokuapp.com/api/task/?format=json&search=item
- The validation can be placed on a control (for example a text input) and when the value change (for example the user types text) a request is sent and if the server returns a non empty array the validation will pass otherwise it will fail.

## Ex. Dynamic form

- Create a form containing an array of text input
- when a button is pressed in the form that a text input will be added.


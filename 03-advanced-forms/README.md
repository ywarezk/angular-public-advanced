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

## EX.

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
- Create an interceptor that will 


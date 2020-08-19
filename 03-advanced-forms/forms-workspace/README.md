# Advanced forms

## Prerequisites

- some knowledge with Template driven:
  - NgModel
  - NgForm

- Reactive
  - FormGroup
  - FormArray
  - FormControl
  - formControl / formControlName
  
## Our goals

- we now know how to build libraries
- How can we extend the tools for forms using what we learned about libraries

## How angular wants us to look at the forms we build?

what is the structure of the form you are building

- FormControl
- FormArray
- FormGroup

login - FormGroup
  - email - FormControl
  - password - FormControl
  
register - FormGroup
  - email - FormControl
  - FormGroup
    - password - FormControl
    - repeat password - FormControl
  
phoneNumbers - FormGroup
  - FormArray
    - FormGroup
      - prefix - FormControl
      - phonenumber - FormControl
    - FormGroup
      - prefix - FormControl
      - phonenumber - FormControl
      
  - button to add new phone number
  
Template driven represents the following structure:

- FormGroup - NgForm
  - FormControl - NgModel
  - FormControl
  - FormControl
  - FormControl
  - FormControl

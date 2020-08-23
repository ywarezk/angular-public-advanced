# Component Communication

In this lesson we will learn different way that a parent component can communicate with a child component.
We will also go over the relevant lifecycle hooks of a component/directive that are relevant to the different component communications.

## Lesson Plan

- The importance of communication parent child for components and directives in a library
- @Input
- OnChanges
- OnInit
- @Input with setter
- @Output
- Template Reference Variable
- @ViewChild
- AfterViewInit / AfterViewChecked
- ng-template / TemplateRef
- ViewContainerRef
- ng-content
- AfterContentInit / AfterContentChecked
- @ContentChild

## EX

In this ex you will create a completely configurable Login component
The login component is made from these configurable items:
- labels
- input for email
- input for password
- submit button
Each item can change the appearance based on content projection.

```
<app-login>

	<app-login-label>
		<ng-template let-title>
			<label>
			<h1>
				<u>
				{{title}}
				</u>
			</h1>
			</label>
		</ng-template>
	</app-login-label>

	<app-login-input>
		<ng-template let-fc>
			<input
			[formControl]="fc"
			type="text"
			placeholder="Enter your email"
			/>
		</ng-template>
	</app-login-input>>

	<app-login-input>
	<ng-template let-fc>
		<input
		[formControl]="fc"
		matInput
		placeholder="Ex. Pizza"
		value="Sushi">
	</ng-template>
	</app-login-input>
	
	<app-login-submit>
		<ng-template>
			<button type="submit">Submit</button>
		</ng-template>
	</app-login-input>

</app-login>
```

- The directive **app-login-label** will get a template configuring how the labels will look like. Notice that it will get a variable to the text of the label.
- The directive **app-login-input** will define how the inputs look like, they will get the formControl to attach
- The directive **app-login-submit** will define how the submit button looks like
- The login component should print to the console the email and password when the form is submitted

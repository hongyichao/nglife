# Nglife 

- This project was generated with [Angular CLI]. The project is developing based on Angular 9.
- This project includes multiple sub-projects
- Runs "ng update @angular/core @angular/cli" to update your Angular 
- Runs "ng new nglife --createApplication=false" to create an empty workspace
- Runs "ng generate application HelloAngularWorld" to create new project HelloAngularWorld in nglife workspace

## Developing Projects 
1) MyProfile Run `ng serve --project=MyProfile --port 4300`. Navigate to `http://localhost:4300/` to see MyProfile
  - use Angular Route, Router, Service, template-driven and reactive forms
  - steps : 1) register 2) login 3) add attributes or messages 4) update to save info to session storage
  
2) Run `ng serve --project=SignUp`. Navigate to `http://localhost:4200/` to see SignUp.
  - use template-driven NgForm with service and routes to view/add/update users
  
3) Run `ng serve --project=HelloAngularWorld`. Navigate to `http://localhost:4200/` to see HelloAngularWorld.
  - use data binding
4) Run `ng serve --project=StashGoods`. Navigate to `http://localhost:4200/` to see StashGoods.
  - use @Output() event emitter and @Input()
5) Run `ng serve --project=UserService`. Navigate to `http://localhost:4200/` to see UserService.
  - use service


The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


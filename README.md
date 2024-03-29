# Angular Todo

[![angular-todo.yml][angular-todo-badge]][angular-todo-status]

A very basic Angular application based on chapter 2 in the book 'Pro Angular 9' by Adam Freeman (Apress, 2020).

>A simple Angular application that will manage a to-do list. The user will be able to see the list of to-do items, check off items that are complete, and create new items. To keep the application simple, I assume that there is
only one user and that I don’t have to worry about preserving the state of the data in the application, which
means that changes to the to-do list will be lost if the browser window is closed or reloaded.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Prerequisites

- Nodejs 12.x
- Angular CLI 9.x

## Getting started

1. Clone the repository.
1. Run `npm install` to install dependencies.
1. Run `ng serve` to start the development server.
1. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Screen capture

![angular-todo.png][angular-todo]

[angular-todo-status]: https://github.com/feliperomero3/angular-todo/actions?query=workflow:angular-todo.yml
[angular-todo-badge]: https://github.com/feliperomero3/angular-todo/workflows/angular-todo.yml/badge.svg

[angular-todo]: .github/assets/angular-todo.png

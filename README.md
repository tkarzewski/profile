# Profile

_Profile_ is just a tiny [Angular](http://www.angular.io) Webapplication to demonstrate some techniques on the one hand and
present me as a freelancer on the other hand.  The Focus is on the frontend, so backend topics are handled with less motivation.
_Profile_ is served on http://www.tobias-karzewski.de

This project is managed in this [Kanban board](https://github.com/tkarzewski/profile/projects/1) and
[versioned on GitHub](https://github.com/tkarzewski/profile) 

## Technology Stack

### Frontend

* [TypeScript](https://www.typescriptlang.org/) - The programming language the frontend is written in
* [Angular](http://angular.io) - The JavaScript-Framework used
* [NPM - Node Package Manager](https://www.npmjs.com/) - to manage dependencies
* [Jasmine](https://jasmine.github.io/) - to run Tests
* [Protractor](https://www.protractortest.org/) - to run E2E-Tests
* [W3CSS](https://www.w3schools.com/w3css/) - The CSS framework used
* [W3CSS CV Template](https://www.w3schools.com/w3css/w3css_templates.asp) - The template _profile_ is based on

### Backend
* [PHP](http://php.net) - The programming language the backend is written in
* [Apigility](https://apigility.org/) - The API Builder to create the API Skeleton

### Infrastructure
* [Google Cloud Services](http://cloud.google.com) - The Service to run Continuous Integration Tasks

## Development

### Requirements and Installation
* Install Git: https://git-scm.com/
* Install NPM: https://www.npmjs.com/get-npm
* Clone Project:
  ```
  git clone https://github.com/tkarzewski/profile.git
  ```
* Install Apigility: https://apigility.org/documentation/intro/installation
* Start Backend: 
  ```
  cd api  php -S 0.0.0.0:8080 -ddisplay_errors=1 -t public public/index.php
  ```
* Start Frontend
  ```
  ng serve
  ```
* Open _profile_ on [http://localhost:4200](http://localhost:4200)

### Code Quality

#### TsLint
TsLint is tool for static code analysis. It checks proven coding styles and helps to keep them up.
In IntelliJ you should enable it at `File -> Settings -> Languages & Frameworks -> TypeScript -> TsLint`  and 
check the option _Search for tslint.json_. It uses the `tslint.json` in the root folder and will mark all failing
rules **red** in the code.

It may start it also with `ng lint` 

#### Coding Style
To keep the code style up you should import the file `coding-style.xml`
1. `File -> Settings -> Editor -> Code Style -> TypeScript`
2. Top right: Config-Dropdown -> Import Scheme
3. Choose `coding-style.xml` -> IntelliJ IDEA Code Style XML and Save
 

### Configuration
Configuration of the WebApp will be available in future Releases. See [Milestones](https://github.com/tkarzewski/profile/milestones)

### Testing
Testing will be done only for frontend. There will be [UnitTests](https://en.wikipedia.org/wiki/Unit_testing) to test the functionality
of the code and there will be [E2E-Tests](https://en.wikipedia.org/wiki/Integration_testing) to test the Application from UI down to
the Database. More information about Unit- and E2E-Tests may be found [here](https://www.guru99.com/unit-test-vs-integration-test.html) 
 
#### E2E-Tests
E2E-Tests will be realized in a future Version

#### UnitTests
UnitTests will be realized in a future Version

#### Testresults
Testresults of the Unit- and E2E-Tests will be generated and hosted in a future version

### Continuous Integration
Continuous Integration incl Build, Test and Deployment will be realized in a future version

#### Build
tbd...

#### Test
tbd...

#### Deploy
tbd...

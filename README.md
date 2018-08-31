# Profile

TODO Doc

## TODOs

- Kontakt
  - FE Validierungen
  - BA kleines contact.php
- Snippets
- Readme überarbeiten
  - Apigility Config auf TODO
  - GitHub Projekt mit Issues aus TODOs machen
- Versionierung
  - in GitHub
  - versions.ts und im Footer/Konsole
- Release
- Publish on Github


### TODOs fürs Profile

- **Grundlegendes**
  - (X) Update auf Angular 7beta
  - (X) Caching in die Services und aus dem Interceptor
- **Infrastruktur**
  - ( ) Continuous Build
  - ( ) Continuous Testing
  - ( ) Continuous Deployment
- **Testing**
  - ( ) UnitTests
  - ( ) E2E-Tests 
- **Layout anpassen**
  - (X) Theme von W3C nutzen
  - (X) Theme in Komponenten auslagern
  - (X) Theme anpassen
  - (X) Mobile Menu basteln
  - ( ) Theme von W3C in Bootstrap umsetzen?
- **Content hinzufügen**
  - (X) Impressum hinzufügen
  - (X) Datenschutz
  - _( ) Kontaktformular hinzufügen_
- **Backend implementieren**
  - (x) Grundlegendes
  - (x) Backend mit Mockdaten
  - _( ) Backend für den Mailversand_
  - ( ) Backend für DB `person`
  - ( ) Backend für DB `projects`
  - ( ) Backend für DB `skills`
  - ( ) Backend für DB `services`
- **Daten hinzufügen**
  - _( ) Projekte_
  - (X) Dienstleistungen
  - (X) Person 
  - (X) Skills
- **Profile veröffentlichen**
  - _( ) Auf Webseite bringen_
  - ( ) Konfigurierbar machen (z.B. Skills)
    - ( ) Skills
    - ( ) Felder dynamisch
- **Nice to have**
  - ( ) Barrierefreiheit umsetzen
  - ( ) Outputs Konfigurierbar
  - ( ) Routen Konfigurierbar
  - ( ) i18n umsetzen

## Requirements
- NPM
- NodeJS
- Angular
- Angular CLI
- Composer
- PHP

### Frontend

### Backend
#### Install
* Apigility https://apigility.org/documentation/intro/installation
* https://apigility.org/documentation/intro/first-rest-service
* Composer install
* `composer development-enable`

## Start
```
cd api
php -S 0.0.0.0:8080 -ddisplay_errors=1 -t public index.php
php -S 0.0.0.0:8080 -ddisplay_errors=1 -t public public/index.php
```
#### Configure REST-API
Start the Apigility Builder at http://localhost:8080/apigility/ui#/



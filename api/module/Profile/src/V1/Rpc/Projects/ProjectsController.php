<?php

namespace Profile\V1\Rpc\Projects;

use Zend\Mvc\Controller\AbstractActionController;
use ZF\ContentNegotiation\ViewModel;

class ProjectsController extends AbstractActionController
{
  private $data = '[
    {
      "title": "Entwicklung Kundenportal \'Meine Barmenia\'",
      "fromDate": "2017-06-16",
      "customer": "Barmenia Versicherungen",
      "roles": ["Architektur", "Entwicklung", "Testing", "DevOps"],
      "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      "keywords": ["Angular", "TypeScript", "REST-API", "JSON", "Jade/Pug", "CSS", "SASS", "Gulp", "NPM", "GitLab", "Continuous Integration", "Karma", "Jasmine", "Protractor", "PhpStorm", "Scrum"]
    },
    {
      "title": "Relaunch ElectronicPartner B2B Plattform- & shop",
      "fromDate": "2017-02-01",
      "toDate": "2017-06-30",
      "customer": "Electronic Partner",
      "roles": ["Architektur", "Entwicklung", "Testing"],
      "description": "Migration und Entwicklung einer vorhandenen B2B Plattform inkl. des Händlershops auf AngularJS 1.6 in einer Komponentenarchitektur und anschließend Migration auf Angular. Neuentwicklung des Katalogs und des Warenkorbs inkl. Redesign mit SASS. Features wie Formulare inkl. Validierung, Modale, Filterung und Paginierung, Plakatdruck, CMS-Suche",
      "keywords": ["AngularJS", "Angular", "JavaScript", "REST-API", "HTML", "CSS", "SASS", "Gulp", "NPM", "GitLab", "Continuous Integration", "Karma", "Jasmine", "Protractor", "PhpStorm", "Scrum"]
    },
    {
      "title": "Neuentwicklung Mehrkanal MarketingPlanner",
      "fromDate": "2016-04-01",
      "toDate": "2017-06-30",
      "customer": "Mehrkanal GmbH, Opel AG",
      "roles": ["Architektur", "Entwicklung", "Testing", "ScrumMaster"],
      "description": "Architektur und Entwicklung einer SPA zur Verwaltung und Teilnahme von Marketingkampagnen mit Features wie z.B. Kalenderansicht, Export, sortierbare, filterbare und paginierbare Tabellen, JIRA-ähnliche AdvancedFilter, UserSettings, FileUploader und CRUD-Oberfläche. Dazu Authentifizierung/Authorisierung, Buildmanagement und Unit- & E2E-Testing. ScrumMaster eines 6köpfigen Teams",
      "keywords": ["Angular", "TypeScript", "REST-API", "JSON", "Jade/Pug", "CSS", "SASS", "Gulp", "NPM", "GitLab", "Continuous Integration", "Karma", "Jasmine", "Protractor", "PhpStorm", "Scrum"]
    },
    {
      "title": "Relaunch OnlineFussballManager",
      "fromDate": "2015-02-01",
      "toDate": "2015-12-15",
      "customer": "OnlineFussballManager GmbH",
      "roles": ["Architektur", "Entwicklung", "Testing"],
      "description": "Frontendarchitektur und Entwicklung der Webseite des OnlineFussballManager. Routing, JS-Lazy Loading, REST-API Kommunikation, Logging, Infinite Scrolling, EventManagement, UI-Komponenten, Responsive Support, Form Validation, HighCharts, native App-API, und E2E-Tests",
      "keywords": ["tbd","tbd","tbd","tbd","tbd","tbd"]
    }
  ]
  ';

  public function projectsAction()
  {
    return new ViewModel([json_decode($this->data)]);
  }
}

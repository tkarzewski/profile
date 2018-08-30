<?php

namespace Profile\V1\Rpc\Services;

use Zend\Mvc\Controller\AbstractActionController;
use ZF\ContentNegotiation\ViewModel;

class ServicesController extends AbstractActionController
{
  private $data = '[
    "Architektur und Entwicklung von Webapps (11 Jahre) mit JavaScript- und Angular(JS) (6 Jahre)",
    "Continuous Unit- und End-to-End-Testing von Webapplications",
    "Agile Softwareentwicklung als Entwickler und ScrumMaster",
    "Softwareentwicklung im Sinne von Clean Code, gewissenhafte Dokumentation und Wissenstransfer"
  ]';

  public function servicesAction()
  {
    return new ViewModel(json_decode($this->data));
  }
}

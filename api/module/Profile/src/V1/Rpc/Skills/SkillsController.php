<?php

namespace Profile\V1\Rpc\Skills;

use Zend\Mvc\Controller\AbstractActionController;
use ZF\ContentNegotiation\ViewModel;

class SkillsController extends AbstractActionController
{
  private $data = '[
    {
      "name": "Angular",
      "category": "Frontend",
      "experience": 9
    },
    {
      "name": "TypeScript",
      "category": "Frontend",
      "experience": 8
    },
    {
      "name": "JavaScript",
      "category": "Frontend",
      "experience": 9
    },
    {
      "name": "HTML",
      "category": "Frontend",
      "experience": 9
    },
    {
      "name": "(S)CSS",
      "category": "Frontend",
      "experience": 6
    },
    {
      "name": "Bootstrap",
      "category": "Frontend",
      "experience": 6
    },
    {
      "name": "REST",
      "category": "Backend",
      "experience": 8
    },
    {
      "name": "Java",
      "category": "Backend",
      "experience": 6
    },
    {
      "name": "PHP",
      "category": "Backend",
      "experience": 6
    },
    {
      "name": "DevOps (Continuous Build, Testing, Deployment)",
      "category": "Drumherum",
      "experience": 6
    },
    {
      "name": "Google Analytics / Google Tag Manager",
      "category": "Other",
      "experience": 7
    },
    {
      "name": "Scrum",
      "category": "Other",
      "experience": 8
    },
    {
      "name": "Softwareentwicklungsprozess",
      "category": "Other",
      "experience": 5
    },
    {
      "name": "Clean Code",
      "category": "Other",
      "experience": 7
    },
    {
      "name": "Deutsch",
      "category": "Language",
      "experience": 10
    },
    {
      "name": "Englisch",
      "category": "Language",
      "experience": 7
    }
  ]
  ';

  public function skillsAction()
  {
      return new ViewModel(json_decode($this->data, true));
  }
}

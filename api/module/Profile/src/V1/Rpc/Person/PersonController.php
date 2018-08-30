<?php
namespace Profile\V1\Rpc\Person;

use Zend\Mvc\Controller\AbstractActionController;
use ZF\ContentNegotiation\ViewModel;

class PersonController extends AbstractActionController
{
    // TODO Move to DB
    private $data = '{
       "name": "Karzewski",
       "givenName": "Tobias",
       "nationality": "deutsch",
       "dateOfBirth": "1981-22-22",
       "address": {
         "street": "Wiemelhauser Str.",
         "houseNo": "195",
         "postalCode": "44789",
         "city": "Bochum",
         "country": "Deutschland"
       },
       "contact": {
         "phone": "0151 / 15 49 17 93",
         "mail": "tobias@karzewski.de"
       },
       "socialMedia": {
         "xingUrl": "https://www.xing.com/profile/Tobias_Karzewski",
         "gulpUrl": "https://www.gulp.de/gulp2/home/profil/na5nkpjhcl?4"
       },
       "availableFrom": "2017-03-01",
       "availableTo": null
     }
    ';


    public function personAction()
    {
        return new ViewModel([json_decode($this->data)]);
    }
}

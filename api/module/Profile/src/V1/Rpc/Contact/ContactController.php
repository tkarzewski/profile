<?php
namespace Profile\V1\Rpc\Contact;

use Zend\Json\Json;
use Zend\Mvc\Controller\AbstractActionController;

class ContactController extends AbstractActionController
{
    public function contactAction()
    {
        $params = Json::decode($this->getRequest()->getContent());
        var_dump($params);

        /*
        $to      = 'nobody@example.com';
        $subject = 'the subject';
        $message = 'hello';
        $headers = 'From: webmaster@example.com' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
        */
    }
}

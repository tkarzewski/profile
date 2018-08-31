<?php
namespace Profile\V1\Rpc\Contact;

class ContactControllerFactory
{
    public function __invoke($controllers)
    {
        return new ContactController();
    }
}

<?php
namespace Profile\V1\Rpc\Person;

class PersonControllerFactory
{
    public function __invoke($controllers)
    {
        return new PersonController();
    }
}

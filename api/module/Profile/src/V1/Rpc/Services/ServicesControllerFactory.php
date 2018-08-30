<?php
namespace Profile\V1\Rpc\Services;

class ServicesControllerFactory
{
    public function __invoke($controllers)
    {
        return new ServicesController();
    }
}

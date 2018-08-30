<?php
namespace Profile\V1\Rpc\Projects;

class ProjectsControllerFactory
{
    public function __invoke($controllers)
    {
        return new ProjectsController();
    }
}

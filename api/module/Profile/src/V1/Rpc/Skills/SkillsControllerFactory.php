<?php
namespace Profile\V1\Rpc\Skills;

class SkillsControllerFactory
{
    public function __invoke($controllers)
    {
        return new SkillsController();
    }
}

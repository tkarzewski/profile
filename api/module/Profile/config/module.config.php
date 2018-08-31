<?php
return [
    'service_manager' => [
        'factories' => [],
    ],
    'router' => [
        'routes' => [
            'profile.rpc.person' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/person',
                    'defaults' => [
                        'controller' => 'Profile\\V1\\Rpc\\Person\\Controller',
                        'action' => 'person',
                    ],
                ],
            ],
            'profile.rpc.projects' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/projects',
                    'defaults' => [
                        'controller' => 'Profile\\V1\\Rpc\\Projects\\Controller',
                        'action' => 'projects',
                    ],
                ],
            ],
            'profile.rpc.skills' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/skills',
                    'defaults' => [
                        'controller' => 'Profile\\V1\\Rpc\\Skills\\Controller',
                        'action' => 'skills',
                    ],
                ],
            ],
            'profile.rpc.services' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/services',
                    'defaults' => [
                        'controller' => 'Profile\\V1\\Rpc\\Services\\Controller',
                        'action' => 'services',
                    ],
                ],
            ],
        ],
    ],
    'zf-versioning' => [
        'uri' => [
            0 => 'profile.rpc.person',
            1 => 'profile.rpc.projects',
            2 => 'profile.rpc.skills',
            3 => 'profile.rpc.services',
        ],
    ],
    'zf-rest' => [],
    'zf-content-negotiation' => [
        'controllers' => [
            'Profile\\V1\\Rpc\\Person\\Controller' => 'Json',
            'Profile\\V1\\Rpc\\Projects\\Controller' => 'Json',
            'Profile\\V1\\Rpc\\Skills\\Controller' => 'Json',
            'Profile\\V1\\Rpc\\Services\\Controller' => 'Json',
        ],
        'accept_whitelist' => [
            'Profile\\V1\\Rpc\\Person\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Profile\\V1\\Rpc\\Projects\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Profile\\V1\\Rpc\\Skills\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
            'Profile\\V1\\Rpc\\Services\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
                2 => 'application/*+json',
            ],
        ],
        'content_type_whitelist' => [
            'Profile\\V1\\Rpc\\Person\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
            ],
            'Profile\\V1\\Rpc\\Projects\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
            ],
            'Profile\\V1\\Rpc\\Skills\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
            ],
            'Profile\\V1\\Rpc\\Services\\Controller' => [
                0 => 'application/vnd.profile.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'zf-hal' => [
        'metadata_map' => [],
    ],
    'zf-content-validation' => [
        'Profile\\V1\\Rpc\\Person\\Controller' => [
            'input_filter' => 'Profile\\V1\\Rpc\\Person\\Validator',
        ],
    ],
    'input_filter_specs' => [
        'Profile\\V1\\Rest\\Person\\Validator' => [],
        'Profile\\V1\\Rpc\\Person\\Validator' => [],
    ],
    'controllers' => [
        'factories' => [
            'Profile\\V1\\Rpc\\Person\\Controller' => \Profile\V1\Rpc\Person\PersonControllerFactory::class,
            'Profile\\V1\\Rpc\\Projects\\Controller' => \Profile\V1\Rpc\Projects\ProjectsControllerFactory::class,
            'Profile\\V1\\Rpc\\Skills\\Controller' => \Profile\V1\Rpc\Skills\SkillsControllerFactory::class,
            'Profile\\V1\\Rpc\\Services\\Controller' => \Profile\V1\Rpc\Services\ServicesControllerFactory::class,
        ],
    ],
    'zf-rpc' => [
        'Profile\\V1\\Rpc\\Person\\Controller' => [
            'service_name' => 'Person',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'profile.rpc.person',
        ],
        'Profile\\V1\\Rpc\\Projects\\Controller' => [
            'service_name' => 'Projects',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'profile.rpc.projects',
        ],
        'Profile\\V1\\Rpc\\Skills\\Controller' => [
            'service_name' => 'Skills',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'profile.rpc.skills',
        ],
        'Profile\\V1\\Rpc\\Services\\Controller' => [
            'service_name' => 'Services',
            'http_methods' => [
                0 => 'GET',
            ],
            'route_name' => 'profile.rpc.services',
        ],
    ],
];

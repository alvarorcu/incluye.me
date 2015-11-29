<?php

require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'dbs.options' => array (
        'pgadmin' => array(
            'driver'    => 'pdo_pgsql',
            'host'      => 'jumbo.db.elephantsql.com',
            'dbname'    => 'uhmcbaln',
            'user'      => 'uhmcbaln',
            'password'  => 'gYYN5hWQm-hG6O5YvoAt4tJ2mZpbpPWT',
        )
    ),
));

$app->get('/search', function () use ($app) {
    $sql = 'SELECT * FROM usuario';
    $usuarios = $app['db']->fetchAll($sql);
    var_dump($usuarios); die();
    //return $usuarios['db'];
    return 'Hola Mundo'; 
});

$app['debug'] = true;

$app->run();

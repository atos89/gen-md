<?php

require_once('./define.php');

$request_uri = trim(preg_replace('/\//', ' ', $_SERVER['REQUEST_URI']));
$routes = explode(' ', $request_uri);

if ($routes[0] === '' || count($routes) >= 3) { // ex. / or /path/to/anything
    $class = 'Index';
    $method = 'index';
} else if (count($routes) === 2) { // ex. /gen/generate
    $class = ucfirst($routes[0]);
    $method = $routes[1];
} else {
    $class = ucfirst($routes[0]); // ex. /edit
    $method = 'index';
}

$controller_class = $class . 'Controller';
if ($class !== 'Index' && file_exists(CONTROLLERS_PATH . '/' . $controller_class . '.php')) {
    require_once(CONTROLLERS_PATH . '/' . $controller_class . '.php');
    $controller = new $controller_class();
    if (method_exists($controller, $method)) {
        // コントローラークラスにメソッドがあったらコントローラークラスに処理を委譲する
        $controller->$method();
        exit;
    }
}

require_once(CONTROLLERS_PATH . '/IndexController.php');
$controller = new IndexController();
$controller->index();
exit;

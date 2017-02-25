<?php

require_once(CONTROLLERS_PATH . '/BaseController.php');

class TestController extends BaseController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        var_dump($this->_smarty);
        var_dump('Test/index');
    }
}

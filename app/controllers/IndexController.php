<?php

require_once CONTROLLERS_PATH . '/BaseController.php';

class IndexController extends BaseController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $obj = new stdClass();
        $obj->mess = 'hello!';
        $this->assign(array('obj', $obj));
        $this->render('index/index');
    }
}

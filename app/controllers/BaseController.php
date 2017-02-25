<?php

require_once(ROOT_PATH . '/libs/Smarty/Smarty.class.php');

class BaseController
{
    protected $_smarty;

    public function __construct()
    {
        $smarty = new Smarty();

        $smarty->template_dir = APP_PATH . '/views/scripts';
        $smarty->compile_dir = ROOT_PATH . '/data/templates_c';
        $smarty->left_delimiter = '<!--';
        $smarty->right_delimiter = '-->';

        $this->_smarty = $smarty;
    }

    public function assign($array)
    {
        // $array(key,val)
        $this->_smarty->assign($array[0], $array[1]);
    }

    public function render($tpl_path)
    {
        $this->_smarty->display($tpl_path . '.tpl');
    }
}

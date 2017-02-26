<?php

if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)/', $_SERVER['REQUEST_URI'])) {
    return FALSE;
} else {
    require_once(dirname(realpath(__FILE__)) . '/index.php');
}

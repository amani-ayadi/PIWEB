<?php

namespace LoisirBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@Loisir/Default/index.html.twig');
    }
    public function helloAction()
    {
        return $this->render('@Loisir/Default/hello.html.twig');
    }
    public function NotFoundAction()
    {
        return $this->render('@Loisir/Default/NotFound.html.twig');
    }
    public function loginAction()
    {
        return $this->render('@Loisir/Default/Login.html.twig');
    }
}

<?php

namespace UserBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
class SecurityController extends \FOS\UserBundle\Controller\SecurityController
{



    public function redirectAction(Request $request)
    {
        $auth_checker = $this->get('security.authorization_checker');
        if ($auth_checker->isGranted(['ROLE_ADMIN'])) {

            return $this->render('@User/Default/Admin_HomePage.html.twig');
        }

        if ($auth_checker->isGranted('ROLE_CLIENT')) {
            // Everyone else goes to the `home` route
            return $this->render('@User/Default/index.html.twig');
        }

        // Always call the parent unless you provide the ENTIRE implementation
        return parent::loginAction($request);
    }
}
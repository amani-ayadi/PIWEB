<?php
// src/AppBundle/Entity/User.php

namespace UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    /**
     * @ORM\Column(type="string",length=255)
     */
    private $nom;
    /**
     * @ORM\Column(type="string",length=255)
     */
    private $prenom;
    /**
     * @ORM\Column(type="string",length=255)
     */
    private $type="hhhh";

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }
    /**
     * @return string
     */
    public function getnom()
    {
        return $this->nom;
    }

    /**
     * @param string $type
     */
    public function settype($type)
    {
        $this->type = $type;
    }
    /**
     * @return string
     */
    public function gettype()
    {
        return $this->type;
    }

    /**
     * @param string $nom
     */
    public function setnom($nom)
    {
        $this->nom = $nom;
    }
    /**
     * @return string
     */
    public function getprenom()
    {
        return $this->prenom;
    }

    /**
     * @param string $prenom
     */
    public function setprenom($prenom)
    {
        $this->prenom = $prenom;
    }

}
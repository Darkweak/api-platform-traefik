<?php

namespace App\Traits;

use Doctrine\ORM\Mapping as ORM;

trait EmailTrait
{
    /**
     * @var string
     * @ORM\Column
     */
    private $email;

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }
}

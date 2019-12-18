<?php

namespace App\Traits;

use Doctrine\ORM\Mapping as ORM;

trait TokenTrait
{
    /**
     * @var string
     * @ORM\Column
     */
    private $token;

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;
        return $this;
    }
}

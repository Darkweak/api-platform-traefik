<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use App\Traits\EmailTrait;
use App\Traits\IdTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      mercure=true,
 *      collectionOperations={
 *          "get"={
 *              "access_control"="is_granted('ROLE_ADMIN')"
 *          },
 *          "post"={
 *              "denormalization_context"={"groups"={"user_creation"}}
 *          }
 *      },
 *      itemOperations={
 *          "get"={
 *              "access_control"="is_granted('ROLE_ADMIN') or object == user"
 *          },
 *          "put"={
 *              "access_control"="is_granted('ROLE_ADMIN') or object == user"
 *          },
 *          "delete"={
 *              "access_control"="is_granted('ROLE_ADMIN') or object == user"
 *          }
 *      }
 * )
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="users")
 */
class User implements UserInterface
{
    use IdTrait;
    use EmailTrait;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Groups({"user_creation"})
     */
    private $password;

    /**
     * @var string The user's first name
     * @ORM\Column(type="string")
     * @Groups({"user_creation"})
     */
    private $firstname;

    /**
     * @var string The user's last name
     * @ORM\Column(type="string")
     * @Groups({"user_creation"})
     */
    private $lastname;

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;
        return $this;
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
    }
}

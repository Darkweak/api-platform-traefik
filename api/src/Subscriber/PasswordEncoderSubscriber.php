<?php

namespace App\Subscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\User;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class PasswordEncoderSubscriber implements EventSubscriberInterface
{
	private $userPasswordEncoder;

	public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
	{
		$this->userPasswordEncoder = $userPasswordEncoder;
	}

	public static function getSubscribedEvents()
	{
		return [
			KernelEvents::VIEW => ['passwordUpdater', EventPriorities::PRE_WRITE]
		];
	}

	public function passwordUpdater(ViewEvent $event): void
	{
		$user = $event->getControllerResult();

		if (
			!$user instanceof User ||
			(Request::METHOD_POST !== $event->getRequest()->getMethod() &&
				Request::METHOD_PUT !== $event->getRequest()->getMethod()) ||
			null === $plainPassword = $user->getPassword()
		) {
			return;
		}

		$user->setPassword($this->userPasswordEncoder->encodePassword($user, $plainPassword));
	}
}

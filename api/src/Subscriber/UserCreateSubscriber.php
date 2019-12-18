<?php

namespace App\Subscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\User;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class UserCreateSubscriber implements EventSubscriberInterface
{
	public static function getSubscribedEvents()
	{
		return [
			KernelEvents::VIEW => ['userCreate', EventPriorities::PRE_WRITE]
		];
	}

	public function userCreate(ViewEvent $event): void
	{
		$user = $event->getControllerResult();

		if (!($user instanceof User && Request::METHOD_POST === $event->getRequest()->getMethod())) {
			return;
		}

		//$token = hash('sha512',$user->getUsername().$user->getEmail().(new \DateTime())->format('Y-m-d H:i:s'));

		//$user->setToken($token);
		$user->setRoles(['ROLE_USER']);
	}
}

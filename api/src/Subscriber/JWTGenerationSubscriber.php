<?php

declare(strict_types=1);

namespace App\Subscriber;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTGenerationSubscriber
{
	public function onJWTCreated(JWTCreatedEvent $event)
	{
		$user = $event->getUser();

		if ($user->getToken()) {
			$payload = null;
		} else {
			$payload = $event->getData();
			$payload['exp'] = time() + (60 * 60 * 24 * 30 * 6); // six months token lifetime
			$payload['user'] = sprintf('/users/%s', $user->getId());
		}

		$event->setData($payload);
	}
}

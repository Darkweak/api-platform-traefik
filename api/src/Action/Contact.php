<?php


namespace App\Action;


use App\Helpers\ContactMailer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class Contact extends ContactMailer
{
    public function __invoke(Request $request)
    {
        try {
            $content = json_decode($request->getContent());

            $this->contact(
                $content->email,
                $content->firstname,
                $content->lastname,
                $content->message
            );
        } catch (\Exception $e) {}

        return new JsonResponse([]);
    }
}

<?php


namespace App\Helpers;


use Symfony\Component\Mailer\Bridge\Mailgun\Smtp\MailgunTransport;
use Symfony\Component\Mailer\Mailer as SFMailer;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class Mailer
{
    private $environment;
    private $mailer;

    public function __construct(Environment $environment)
    {
        $this->environment = $environment;
        $transport = new MailgunTransport(getenv('EMAIL_USER'), getenv('MAILGUN_KEY'), 'eu');
        $this->mailer = new SFMailer($transport);
    }

    protected function send(
        string $from,
        string $to,
        string $subject,
        string $template,
        array $options = []
    ): void
    {
        $email = (new Email())
            ->from($from)
            ->to($to)
            ->replyTo($from)
            ->subject($subject)
            ->html(
                $this->environment
                    ->render(
                        \sprintf('Emails/%s.html.twig', $template),
                        \array_merge(
                            [
                                'app_name' => getenv('APP_NAME')
                            ],
                            $options
                        )
                    )
            )->text(
                $this->environment
                    ->render(
                        \sprintf('Emails/%s.txt.twig', $template),
                        \array_merge(
                            [
                                'app_name' => getenv('APP_NAME')
                            ],
                            $options
                        )
                    )
            );

        $this->mailer->send($email);
    }
}

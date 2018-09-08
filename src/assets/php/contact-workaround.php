<?php

$postdata = file_get_contents("php://input");
if (!isset($postdata)) {

    // ERROR - no Post Data found
    echo "false";
} else {

    $request = json_decode($postdata);

    // required Params are set
    if (isset($request->subject) && isset($request->email) && isset($request->message))  {

        // ======== Send Mail to Me ========
        $visitor_email = $request->email;
        $my_email = "tobias@karzewski.de";
        $subject = $request->subject;
        $message = "Nachricht von der Webseite\n\n----\n\n" . $request->message;
        $headers   = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/plain; charset=utf-8";
        $headers[] = "From: {$visitor_email}";
        $headers[] = "Reply-To: {$visitor_email}";
        $headers[] = "Subject: {$subject}";
        $headers[] = "X-Mailer: PHP/".phpversion();
        mail($my_email, "$subject", $message, implode("\r\n",$headers));


        // ======== Send Copy of the message to visitor ========
        $subject_copy = "Ihre Anfrage an Tobias Karzewski";
        $message_copy = "Hallo und schönen guten Tag!\n\nVielen Dank für Ihre Anfrage über meine Webseite http://www.tobias-karzewski.de\n" .
            "Ich werde Ihre untenstehende Nachricht in Kürze beantworten.\n\nViele Grüße\n\n Tobias Karzewski - Selbstständiger Softwareentwickler\n\n\n" .
            "==== Kopie Ihrer Nachricht ====\n\n" . $request->message;
        $headers   = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/plain; charset=utf-8";
        $headers[] = "From: {$my_email}";
        $headers[] = "Reply-To: {$my_email}";
        $headers[] = "Subject: {$subject_copy}";
        $headers[] = "X-Mailer: PHP/".phpversion();
        mail($visitor_email, "$subject_copy", $message_copy, implode("\r\n",$headers));

        //Email response
        echo "true";
    }

    else  {

        // at least one required param is missing
        echo "false";
    }
}
?>

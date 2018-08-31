<?php

// required Params are set
if (isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['message']))  {

  //Email information
  $sender_email = "tobias@karzewski.de";
  $recipient_email = $_REQUEST['email'];
  $subject = "TODO Betreff";
  $message = $_REQUEST['message'];

  //send email
  mail($sender_email, "$subject", $message, "From:" . $recipient_email);

  //Email response
  echo "true";
}

// at least one required param is missing
else  {
  echo "false";
}
?>

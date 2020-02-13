<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

/*$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['title']) && empty($_POST['mail']))  die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['title'];
	$to = "xxx";
	$from = $_POST['mail'];
	$phone = $_POST['phone'];

	// data

	$msg = $_POST['textarea'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . $phone .">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}
*/
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['title']) && empty($_POST['mail']))  die();

if ($_POST){

    
$subject = $_POST['title'];
$from = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['textarea'];

http_response_code(200);
	

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'wojciech.zuwalski@gmail.com';                 // SMTP username
$mail->Password = 'acting93';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->isHTML(true); 
$mail->addAddress('wojciech.zuwalski@gmail.com');
$mail->setFrom($from,'Klient'); // Add a recipient
$mail->addReplyTo($from);
$mail->Subject = $subject;
$mail->Body    = $message;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
}

?>
<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name  \n Message: $message";
$recipient = "robert.d.stepanov@gmail.com";
$subject = "Portfolio Submission";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" , " -" , "<a href='index.html' style='text-decoration:none; color: #ff0099;'> Return Home</a>";
// echo '<script>
// alert("Thank you for reaching out.")</script>'
?>
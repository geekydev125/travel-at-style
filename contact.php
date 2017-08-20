<?php 
    
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subjectUser = $_POST['subject'];
        $msg = $_POST['message'];

        $to = 'travelatstyle@gmail.com';
        $subject = 'T@S FORM SUBMISSION';
        $message = "Name: ".$name."\n\n"."Email: ".$email."\n\n"."Subject: ".$subjectUser. "\n\n"."Wrote the following: ".$msg;
        $headers = "From: ".$name;

        mail($to, $subject, $message, $headers);
    }

    if(isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
        print_r($_POST);
    }

?>
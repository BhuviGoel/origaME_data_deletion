<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];

    // Validate the email (you can add more validation here)

    // Store the email or send it to your inbox
    $to = "bhuvigoel@gmail.com"; // Replace with your email address
    $subject = "New Email Submission";
    $message = "A user has submitted the following email: " . $email;
    mail($to, $subject, $message);

    // Return a response to the frontend
    echo "Email submitted successfully!";
} else {
    http_response_code(400);
    echo "Invalid request.";
}
?>

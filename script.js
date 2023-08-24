document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("email-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        responseMessage.textContent = "Submitting...";

        const formData = new FormData(form);

        fetch("submit_email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            responseMessage.textContent = data;
            form.reset();
        })
        .catch(error => {
            console.error(error);
            responseMessage.textContent = "An error occurred.";
        });
    });
});

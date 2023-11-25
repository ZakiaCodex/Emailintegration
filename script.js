let form = document.querySelector("form");
let fullname = document.getElementById("name");
let email = document.getElementById("Email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

function sendEmail() {
    let bodymessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "zkwpexpert@gmail.com",
        Password: "7056BFAA1DBA9044A11FC6051D8CD2AF302E",
        To: "zkwpexpert@gmail.com",
        From: "zkwpexpert@gmail.com",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        (message) => {
          

            if (message === "OK") {
                console.log("Email sent successfully!");
                Swal.fire({
                    title: "Good job!",
                    text: "Email sent successfully!",
                    icon: "success"
                });
            } else {
                console.error("Error sending email:", message);
                alert("Error sending email. Please check the console for details.");
            }
        }
    );
}
function checkInputs() {
    let items = document.querySelectorAll(".item");

    for (let item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

    


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    sendEmail();
});

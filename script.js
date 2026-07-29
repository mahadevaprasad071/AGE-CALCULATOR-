function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML =
        "Your Age is " + age + " years.";
}

document.getElementById("appointmentForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    document.getElementById("result").innerHTML =
    `Appointment Booked Successfully! <br>
     Patient: ${name}<br>
     Doctor: ${doctor}<br>
     Date: ${date}`;
});

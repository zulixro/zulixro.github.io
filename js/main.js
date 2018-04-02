var contact = document.getElementById('contact-info');
var btn = document.getElementById("contactBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    contact.style.display = "block";
}

span.onclick = function() {
    contact.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == contact) {
        contact.style.display = "none";
    }
}

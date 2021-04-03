/*
Author       : Mohit Dodhia
 */

$(document).ready(function () {
    // Tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    document.getElementById("dark-mode-switch").checked = false;
    document.getElementById("navbar").classList.add("navbar-light");
    document.getElementById("navbar").classList.add("bg-light");
});

function darkModeToggle() {
    var element = document.body;
    var switchLabel = document.getElementById("switch");

    element.classList.toggle("dark-mode");

    var darkModeSwitch = document.getElementById("dark-mode-switch");
    if (darkModeSwitch.checked) {
        switchLabel.textContent = "🌙";

        document.getElementById("navbar").classList.remove("navbar-light");
        document.getElementById("navbar").classList.remove("bg-light");


        document.getElementById("navbar").classList.add("navbar-dark");
        document.getElementById("navbar").classList.add("bg-dark");
    } else {
        switchLabel.textContent = "☀️";

        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.remove("bg-dark");
        
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.add("bg-light");
    }
}
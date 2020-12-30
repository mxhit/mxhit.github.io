/*
Author       : Mohit Dodhia
 */

$(document).ready(function () {
    // Tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    document.getElementById("dark-mode-switch").checked = false;
});

function darkModeToggle() {
    var element = document.body;
    var switchLabel = document.getElementById("switch");

    element.classList.toggle("dark-mode");

    var darkModeSwitch = document.getElementById("dark-mode-switch");
    if (darkModeSwitch.checked) {
        switchLabel.textContent = "🌙";
    } else {
        switchLabel.textContent = "☀️";
    }
}
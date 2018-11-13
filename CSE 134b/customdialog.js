/*eslint-env browser*/
// Show alert dialog box when alert button is pressed
document.getElementById("AlertBut").addEventListener("click", function() {
    var dialog = document.getElementById('alertDialog');
    var close = document.getElementById('alertOk');
    dialog.showModal();
    close.addEventListener('click', function() {
        dialog.close();
    });
});

// Show confirm dialog box when confirm button is pressed
document.getElementById("ConfirmBut").addEventListener("click", function() {
    var dialog = document.getElementById('confirmDialog');
    var confirm = document.getElementById('confirmTrue');
    var cancel = document.getElementById('confirmFalse');
    dialog.showModal();
    // Confirm: close and display true
    confirm.addEventListener('click', function() {
        dialog.close();
        document.getElementById("Output").innerHTML = "Confirm Result: true";
    });
    // Cancel: close and display false
    cancel.addEventListener('click', function() {
        dialog.close();
        document.getElementById("Output").innerHTML = "Confirm Result: false";
    });
});

// Show prompt dialog box when prompt button is pressed
document.getElementById("PromptBut").addEventListener("click", function() {
    var dialog = document.getElementById('promptDialog');
    var confirm = document.getElementById('promptTrue');
    var cancel = document.getElementById('promptFalse');
    document.getElementById('promptInput').value = "";
    dialog.showModal();
    // Confirm: Save input value and display it or display text if no input
    confirm.addEventListener('click', function() {
        dialog.close();
        var input = document.getElementById('promptInput').value;
        if (input == null || input.length == 0) {
            document.getElementById("Output").innerHTML = "User didn't enter anything";
        }
        else {
            var clean = DOMPurify.sanitize(input);
            document.getElementById("Output").innerHTML = "Prompt result : " + clean;
        }
    });

    // Cancel: Exit
    cancel.addEventListener('click', function() {
        dialog.close();
        document.getElementById("Output").innerHTML = "User didn't enter anything";
    });
});
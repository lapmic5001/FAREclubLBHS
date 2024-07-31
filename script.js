document.addEventListener("keydown", function (event) {
    if (event.key === "+" || event.key === "Add") {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open");
        if (sidebar.classList.contains("open")) {
            addGreeting();
        }
    }
});

document.getElementById("commandInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = event.target.value;
        executeCommand(command);
        event.target.value = "";
    }
});

function addGreeting() {
    const outputDiv = document.getElementById("commandOutput");
    const greeting = 'Welcome to the command line interface! Type "help" to see available commands.';
    const outputElement = document.createElement("div");
    outputElement.textContent = greeting;
    outputDiv.prepend(outputElement);
}

function executeCommand(command) {
    const outputDiv = document.getElementById("commandOutput");
    let output = "";

    switch (command.toLowerCase()) {
        case "hello":
            output = "Hello, world!";
            break;
        case "date":
            output = new Date().toString();
            break;
        case "clear":
            outputDiv.innerHTML = "";
            return; // Exit the function early since we don't need to append anything
        case "help":
            output = `Available commands:<br><br>hello: Greets the user<br><br>date: Displays the current date and time<br><br>clear: Clears the command output<br><br>help: Lists all available commands`;
            break;
        default:
            output = `Command not recognized: ${command}`;
    }

    const outputElement = document.createElement("div");
    outputElement.innerHTML = output; // Use innerHTML to render HTML tags
    outputDiv.prepend(outputElement);

    // Remove old results if there are too many
    if (outputDiv.children.length > 100) {
        // Adjust this number as needed
        outputDiv.removeChild(outputDiv.lastChild);
    }
}
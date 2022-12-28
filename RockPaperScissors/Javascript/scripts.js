// Karan Mehta A2 scripts
var us = 0,
    cs = 0;
f1();

function f1() {
    var ui = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor");

    while (ui != 1 && ui != 2 && ui != 3) {
        if (isNaN(ui)) {
            alert("Please enter a valid number");
            ui = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor");
        } else {
            alert("Only 1, 2, and 3 are accepted")
            ui = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor");
        }
    }

    alert("User entered: " + ui);
    var ci = Math.floor((1 + Math.random() * 3));
    var b = alert("Computer selected: " + ci);



    if (((ui == 1) && (ci == 3)) || ((ui == 2) && (ci == 1)) || ((ui == 3) && (ci == 2))) {
        alert("You Won");
        us++;
    } else if ((((ui == 3) && (ci == 1)) || ((ui == 1) && (ci == 2)) || ((ui == 2) && (ci == 3)))) {
        alert("You lost");
        cs++;
    } else {
        alert("That's a tie");
        us++;
        cs++;
    }

    var cont = confirm("Do you want to continue?");
    if (cont == true) {
        f1();
    } else {
        alert("User Score: " + us + "\nComputer Score: " + cs);

        if (us > cs) {
            alert("Congratulations! You Won.")
        } else if (us == cs) {
            alert("Ohh! That's a tie");
            cont1 = confirm("Want to play again?")
            if (cont1) {
                f1();
            } else {
                alert("Thanks for playing!");
            }
        } else {
            alert("Alas! You lost. Better luck next time.")
        }




    }
}
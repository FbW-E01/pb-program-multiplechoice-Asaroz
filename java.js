// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = "red"

switch (color) {
    case "blue":

        break;
    case "red":
        console.log("hi")
        break;
    case "green":

        break;
    case "yellow":

        break;
}

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = 6

switch (grade) {
    case 1:
        console.log("oh a 1. lets go get some icecream")
        break;
    case 2:
        console.log("its a 2. Very nice.")
        break;
    case 3:
        console.log("3 is fine. Was it hard?")
        break;
    case 4:
        console.log("4... Do better next time.")
        break;
    case 5:
        console.log("You got a 5. Didn't you learn enough?")
        break;
    case 6:
        console.log("You got a 6! Bad Child!")
        break;
}

// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruits = "banana"

switch (fruits) {
    case "banana":
        console.log("i like bananas")
        break;
    case "orange":
        console.log("you can make nice juice out of oranges")
        break;
    case "strawberry":
        console.log("strawberry icecream is the best")
        break;
    case "apple":
        console.log("an apple a day keeps the doctor away")
        break;
}




// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

let percentages = Math.random() * 100
percentages = Math.round(percentages)
console.log(percentages)

switch (true) {
    case (percentages < 30):
        console.log("Still a long way to go")
        break;
    case (percentages < 50):
        console.log("Slowly getting there")
        break;
    case (percentages < 80):
        console.log("You can do it!")
        break;
    case (percentages < 99):
        console.log("This is the last push!")
        break;
    case (percentages == 100):
        console.log("You're there. Well done!")
        break;
}


// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.


// Switch statements are useful because they provide code that is more concise and more readable
//Both can achieve the same thing but its much more readable and concise when you only got one expression for multible choices.

// TASK 1 
// function displayWelcomeMessag(){
//     let name = prompt("Enter your name : ");

//     document.write(`Welcome ${name}`);
// }
// displayWelcomeMessag();


// TASK 2
// var quotes = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "Innovation distinguishes between a leader and a follower. - Steve Jobs",
//     "Stay hungry, stay foolish. - Steve Jobs",
//     "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
//     "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
//     "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//     "The only impossible journey is the one you never begin." ,
//    "Believe you can and you're halfway there." ,
//     "The future belongs to those who believe in the beauty of their dreams." ,
//     "You must be the change you wish to see in the world." 
// ];

//   // Function to generate a random quote
//   function generateQuote() {
//     var randomNumber = Math.floor(Math.random() * quotes.length);
//     return quotes[randomNumber];
//   }

//   function displayQuote() {
//     var quote = generateQuote();
//     console.log(quote);
//   }


// generateQuote();
// displayQuote();



// TASK 3
function generateRandomNumber(){
    let generateNumber = Math.floor( Math.random() * 100);
    // console.log(generateNumber);
    console.log(`Generate Random Number is =  ${generateNumber}`);

}
generateRandomNumber();

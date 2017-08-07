  console.log("Starting 'Welcome!' message...")
  var user = prompt("I'm glad you're here!", "What's your name?");
  console.log("The user's name is: "+user);
  var today = new Date();
  console.log("Today is: "+today);
  var message = "Let's learn about Oaxaca " + user + "!\nToday is: " + today.toDateString();
  console.log("Message given to the user: " +message);
  alert(message);

  var questionOne = prompt("Is Oaxaca a city?", "yes/no");
  var lowerCaseOne = questionOne.toLowerCase ();
  var questionOneCount = 0
  if (lowerCaseOne == "yes" || lowerCaseOne == "y") {
    alert("Aja! I see you know some Geography!");
    console.log("User answers to question one: " +questionOne);
    questionOneCount = 1;
  } else if (lowerCaseOne == "no" || lowerCaseOne == "n") {
    alert("Oops, thats not right.  It is the name of the State and also the City!");
    console.log("User answers to question one: " +questionOne);
  } else {
    alert("You missed the correct answer");

  }


  var questionTwo = prompt("Does it snow in Oaxaca?", "yes/no");
  var lowerCaseTwo = questionTwo.toLowerCase ();
  var questionTwoCount = 0
  if (lowerCaseTwo == "yes" || lowerCaseTwo == "y") {
    alert("Nop, Oaxaca's climate is mostly subtropical!");
    console.log("User answers to question two: " +questionTwo);
    questionTwoCount = 1;
  } else if (lowerCaseTwo == "no" || lowerCaseTwo == "n") {
    alert("Correct, it is located 6,562 ft above sea level with subtropical climate!")
    console.log("User answers to question two: " +questionTwo)
  } else {
    alert("You missed the correct answer");
  }


  var questionThree = prompt("Have you been to Oaxaca?", "yes/no");
  var lowerCaseThree = questionThree.toLowerCase ();
  var questionThreeCount = 0
  if (lowerCaseThree == "yes" || lowerCaseThree == "y") {
    alert("Great, I'm sure you loved the food!.");
    console.log("User answers to question three: " +questionThree)
    questionThreeCount = 1;
  } else if (lowerCaseThree == "no" || lowerCaseThree == "n") {
    alert("Oh well, you definitly have to go visit someday!.")
    console.log("User answers to question three: " +questionThree)
  } else {
    alert("You missed the correct answer");
  }

  //Obtaining number of Correct/Wrong answers
  console.log("Total of Correct Answered Questions")
  var correctAnswers = questionOneCount +questionTwoCount +questionThreeCount
  alert("Your correct answers are: " +correctAnswers);

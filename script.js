// Stores which answer the user selected for each question
var answer1 = "";
var answer2 = "";
var answer3 = "";

var questionCount = 0;

// Question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

// Question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

// Question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Result
var result = document.getElementById("result");


// --------------------
// EVENT LISTENERS
// --------------------

q1a1.addEventListener("click", function () {
  answer1 = "fantasy";
  questionCount++;
  disableQuestion1();
  checkQuiz();
});

q1a2.addEventListener("click", function () {
  answer1 = "realistic";
  questionCount++;
  disableQuestion1();
  checkQuiz();
});


q2a1.addEventListener("click", function () {
  answer2 = "thought";
  questionCount++;
  disableQuestion2();
  checkQuiz();
});

q2a2.addEventListener("click", function () {
  answer2 = "cozy";
  questionCount++;
  disableQuestion2();
  checkQuiz();
});


q3a1.addEventListener("click", function () {
  answer3 = "standalone";
  questionCount++;
  disableQuestion3();
  checkQuiz();
});

q3a2.addEventListener("click", function () {
  answer3 = "series";
  questionCount++;
  disableQuestion3();
  checkQuiz();
});


// --------------------
// DISABLE BUTTONS
// --------------------

function disableQuestion1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQuestion2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQuestion3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}


// --------------------
// DETERMINE RESULT
// --------------------

function checkQuiz() {

  if (questionCount == 3) {

    // Fantasy OR Dystopian

    if (answer1 == "fantasy" && answer2 == "thought" && answer3 == "series") {
      result.innerHTML = "📖 You should read <strong>The Prison Healer</strong>!";
    }

    else if (answer1 == "fantasy" && answer2 == "thought" && answer3 == "standalone") {
      result.innerHTML = "📖 You should read <strong>The Song of Achilles</strong>!";
    }

    else if (answer1 == "fantasy" && answer2 == "cozy" && answer3 == "standalone") {
      result.innerHTML = "📖 You should read <strong>The Very Secret Society of Irregular Witches</strong>!";
    }

    else if (answer1 == "fantasy" && answer2 == "cozy" && answer3 == "series") {
      result.innerHTML = "📖 You should read <strong>Percy Jackson</strong>!";
    }

    // Realistic Fiction

    else if (answer1 == "realistic" && answer2 == "cozy" && answer3 == "series") {
      result.innerHTML = "📖 You should read <strong>Better Than the Movies</strong>!";
    }

    else if (answer1 == "realistic" && answer2 == "thought" && answer3 == "series") {
      result.innerHTML = "📖 You should read <strong>The Inheritance Games</strong>!";
    }

    else if (answer1 == "realistic" && answer2 == "thought" && answer3 == "standalone") {
      result.innerHTML = "📖 You should read <strong>To Kill a Mockingbird</strong>!";
    }

    else if (answer1 == "realistic" && answer2 == "cozy" && answer3 == "standalone") {
      result.innerHTML = "📖 You should read <strong>Borrow My Heart</strong>!";
    }

  }

}
// Scores for each possible outcome
var fantasyScore = 0;
var realisticScore = 0;
var nonfictionScore = 0;

// Tracks how many questions have been answered
var questionCount = 0;


// Question 1 buttons
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

// Question 2 buttons
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

// Question 3 buttons
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

// Result text
var result = document.getElementById("result");


// Question 1 event listeners
q1a1.addEventListener("click", function() {
  fantasy();
  disableQuestion1();
});

q1a2.addEventListener("click", function() {
  realistic();
  disableQuestion1();
});

q1a3.addEventListener("click", function() {
  nonfiction();
  disableQuestion1();
});


// Question 2 event listeners
q2a1.addEventListener("click", function() {
  nonfiction();
  disableQuestion2();
});

q2a2.addEventListener("click", function() {
  fantasy();
  disableQuestion2();
});


// Question 3 event listeners
q3a1.addEventListener("click", function() {
  realistic();
  disableQuestion3();
});

q3a2.addEventListener("click", function() {
  fantasy(); // Change later if needed
  disableQuestion3();
});

q3a3.addEventListener("click", function() {
  fantasy();
  disableQuestion3();
});



// Score functions

function fantasy() {
  fantasyScore += 1;
  questionCount += 1;
  checkQuiz();
}


function realistic() {
  realisticScore += 1;
  questionCount += 1;
  checkQuiz();
}


function nonfiction() {
  nonfictionScore += 1;
  questionCount += 1;
  checkQuiz();
}



// Disable buttons after answering

function disableQuestion1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
}


function disableQuestion2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}


function disableQuestion3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
}



// Determine final result

function checkQuiz() {

  if (questionCount == 3) {

    if (fantasyScore >= realisticScore && fantasyScore >= nonfictionScore) {

      result.innerHTML = 
      "You should read <strong>Placeholder Fantasy Book</strong>!";

    }

    else if (realisticScore >= fantasyScore && realisticScore >= nonfictionScore) {

      result.innerHTML = 
      "You should read <strong>Placeholder Realistic Fiction Book</strong>!";

    }

    else {

      result.innerHTML = 
      "You should read <strong>Placeholder Nonfiction Book</strong>!";

    }

  }

}
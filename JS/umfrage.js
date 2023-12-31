document.addEventListener('DOMContentLoaded', function() {
    showQuestion(currentQuestionNumber);
  
    // Add event listeners for next and previous buttons
    document.querySelectorAll('.next-button').forEach(button => {
        button.addEventListener('click', () => {
            if (currentQuestionNumber < 5) {
                showNextQuestion();
            } else {
                berechneErgebnis();
            }
        });
    });
  
    document.querySelectorAll('.prev-button').forEach(button => {
        button.addEventListener('click', () => showPreviousQuestion());
    });
  });
  
  let currentQuestionNumber = 1;
  
  function showQuestion(questionNumber) {
    let questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'none';
    });
  
    let questionToShow = document.getElementById('question' + questionNumber);
    if(questionToShow) {
        questionToShow.style.display = 'block';
    }
  
    let prevButton = document.querySelector('.prev-button');
    if (prevButton) {
        prevButton.style.display = questionNumber === 1 ? 'none' : 'block';
    }
  
    let nextButton = document.querySelector('.next-button');
    if (nextButton) {
        nextButton.style.display = questionNumber === 5 ? 'none' : 'block';
        nextButton.innerText = questionNumber === 5 ? 'Ergebnis anzeigen' : 'Weiter';
    }
  
    // Verstecke das Ergebnis, wenn eine Frage angezeigt wird
    document.getElementById("ergebnis").style.display = 'none';
  }
  
  function showNextQuestion() {
    currentQuestionNumber++;
    showQuestion(currentQuestionNumber);
  }
  
  function showPreviousQuestion() {
    currentQuestionNumber--;
    if (currentQuestionNumber < 1) {
      currentQuestionNumber = 1;
    }
    showQuestion(currentQuestionNumber);
  }
  
  function berechneErgebnis() {
    let nervoes = parseInt(document.getElementById("nervoes").value);
    let niedergeschlagen = parseInt(document.getElementById("niedergeschlagen").value);
    let entmutigt = parseInt(document.getElementById("entmutigt").value);
    let ausgeglichen = parseInt(document.getElementById("ausgeglichen").value);
    let gluecklich = parseInt(document.getElementById("gluecklich").value);
  
    let ergebnisText = "";
  
   // Bestimmung des Ergebnisses
   if (nervoes >= 4 || niedergeschlagen >= 4 || entmutigt >= 4) {
    ergebnisText = "Deine Antworten deuten darauf hin, dass du dich häufig gestresst oder niedergeschlagen fühlst. " +
        "Es ist kein Problem, um Hilfe zu bitten. " 
} else if (nervoes <= 2 && niedergeschlagen <= 2 && entmutigt <= 2 && ausgeglichen >= 4 && gluecklich >= 4) {
    ergebnisText = "Es sieht so aus, als hättest du eine positive Einstellung und fühlst dich meistens gut. Weiter so!";
} else {
    ergebnisText = "Es scheint, als hättest du Höhen und Tiefen, was ganz normal ist. Achte auf dich und zögere nicht, " +
        "Unterstützung zu suchen, wenn du das Gefühl hast, dass du sie brauchst. " ;
}

  
    document.getElementById("ergebnis").innerText = ergebnisText;
    document.getElementById("ergebnis").style.display = 'block';
  }
  
  document.addEventListener("DOMContentLoaded", () => {
      const menuBtn = document.querySelector(".menu-button");
      const menuOverlay = document.querySelector("#menuOverlay");
      const closeMenu = document.querySelector("#closeMenu");
  
      if (!menuBtn || !menuOverlay || !closeMenu) {
          console.error("Eines der benötigten Elemente fehlt im DOM.");
          return;
      }
  
      menuBtn.addEventListener("click", () => {
          menuOverlay.classList.toggle("active");
      });
  
      closeMenu.addEventListener("click", () => {
          menuOverlay.classList.remove("active");
      });
  
      const menuLinks = menuOverlay.querySelectorAll("li a");
      menuLinks.forEach(link => {
          link.addEventListener("click", () => {
              menuOverlay.classList.remove("active");
          });
      });
  });
  
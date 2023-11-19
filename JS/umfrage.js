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
}

function showNextQuestion() {
  currentQuestionNumber++;
  showQuestion(currentQuestionNumber);
}

function showPreviousQuestion() {
  currentQuestionNumber--;
  showQuestion(currentQuestionNumber);
}

function berechneErgebnis() {
  let nervoes = parseInt(document.getElementById("nervoes").value);
  let niedergeschlagen = parseInt(document.getElementById("niedergeschlagen").value);
  let entmutigt = parseInt(document.getElementById("entmutigt").value);
  let ausgeglichen = parseInt(document.getElementById("ausgeglichen").value);
  let gluecklich = parseInt(document.getElementById("gluecklich").value);

  let ergebnisText = "";

  if (nervoes <= 2 && niedergeschlagen <= 2 && entmutigt <= 2 && ausgeglichen >= 4 && gluecklich >= 4) {
      ergebnisText = "Es ist wichtig zu betonen, dass es in Ordnung ist, Hilfe zu suchen. Zögere nicht, mit Freunden zu sprechen oder professionelle Hilfe zu suchen, wenn dieses Gefühl anhält.";
  } else if (nervoes == 3 && niedergeschlagen == 3 && entmutigt == 3 && ausgeglichen == 3 && gluecklich == 3) {
      ergebnisText = "Es ist okay, sich nicht immer gut zu fühlen. Es kann helfen, mit Freunden darüber zu sprechen.";
  } else if (nervoes >= 4 && niedergeschlagen >= 4 && entmutigt >= 4 && ausgeglichen <= 2 && gluecklich <= 2) {
      ergebnisText = "Es freut uns zu hören, dass du dich in letzter Zeit gut gefühlt hast. Achte darauf, dass es so bleibt und tu etwas, das dir Freude bereitet.";
  } else {
      ergebnisText = "Deine Antworten sind vielfältig. Es könnte nützlich sein, sie im Kontext deiner persönlichen Erfahrungen zu betrachten.";
  }

  document.getElementById("ergebnis").innerText = ergebnisText;
  document.getElementById("ergebnis").style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-button");
    const menuOverlay = document.querySelector("#menuOverlay");
    const closeMenu = document.querySelector("#closeMenu");

    // Überprüfen, ob die Elemente existieren
    if (!menuBtn || !menuOverlay || !closeMenu) {
        console.error("Eines der benötigten Elemente fehlt im DOM.");
        return; // Beenden Sie das Skript, weil ein kritisches Element fehlt
    }

    // Event-Listener für das Öffnen und Schließen des Menüs
    menuBtn.addEventListener("click", () => {
        menuOverlay.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    // Stellen Sie sicher, dass alle Links im Menü das Menü schließen, wenn sie geklickt werden
    const menuLinks = menuOverlay.querySelectorAll("li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuOverlay.classList.remove("active");
        });
    });
});

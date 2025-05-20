const questions = [
    {
      da: "Man ved at angst børn bliver angst voksne",
      en: "We know that anxious children become anxious adults",
      answer: false,
      explanation_da: "Det er forholdsvist nemt at behandle angst hos børn.",
      explanation_en: "Anxiety in children is often treatable and does not always continue into adulthood.",
      link: "#"
    },
    {
      da: "Angst kan give fysiske symptomer i kroppen",
      en: "Anxiety can cause physical symptoms in the body",
      answer: true,
      explanation_da: "Angst påvirker både kroppen og hjernen – f.eks. hjertebanken og sved.",
      explanation_en: "Anxiety can cause sweating, rapid heartbeat and muscle tension.",
      link: "#"
    },
    {
      da: "Man kan ikke få angst som barn",
      en: "Children cannot experience anxiety",
      answer: false,
      explanation_da: "Børn kan sagtens udvikle angst, og det er vigtigt at opdage det tidligt.",
      explanation_en: "Children can absolutely develop anxiety, and it's important to catch it early.",
      link: "#"
    },
    {
      da: "Motion kan hjælpe mod angst",
      en: "Exercise can help reduce anxiety",
      answer: true,
      explanation_da: "Motion frigiver endorfiner og kan mindske angstfølelser.",
      explanation_en: "Exercise releases endorphins and can help reduce anxiety symptoms.",
      link: "#"
    },
    {
      da: "Angst går altid over af sig selv",
      en: "Anxiety always goes away on its own",
      answer: false,
      explanation_da: "Angst forsvinder sjældent uden støtte eller behandling.",
      explanation_en: "Anxiety rarely disappears on its own without support or treatment.",
      link: "#"
    }
  ];
  
  let currentIndex = 0;
  let correctCount = 0;
  let currentLang = "da";
  
  function startQuiz() {
    document.getElementById("startView").style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    document.getElementById("quizView").style.display = "block";
    document.getElementById("feedbackView").style.display = "none";
    document.getElementById("endView").style.display = "none";
  
    const question = questions[currentIndex];
    document.getElementById("questionText").textContent = question[currentLang];
    document.getElementById("progress").textContent = `${currentIndex + 1}/${questions.length}`;
  
    document.getElementById("trueBtn").textContent = currentLang === "da" ? "Sandt" : "True";
    document.getElementById("falseBtn").textContent = currentLang === "da" ? "Falsk" : "False";
  }
  
  function checkAnswer(userAnswer) {
    const q = questions[currentIndex];
    const isCorrect = userAnswer === q.answer;
  
    if (isCorrect) correctCount++;
  
    document.getElementById("quizView").style.display = "none";
    document.getElementById("feedbackView").style.display = "block";
  
    document.getElementById("answerResult").textContent = isCorrect
      ? (currentLang === "da" ? "Korrekt" : "Correct")
      : (currentLang === "da" ? "Forkert" : "Wrong");
  
    document.getElementById("answerResult").style.color = isCorrect ? "green" : "darkred";
  
    document.getElementById("answerExplanation").textContent =
      currentLang === "da" ? q.explanation_da : q.explanation_en;
  
    document.getElementById("readMore").textContent = currentLang === "da" ? "Læs mere" : "Read more";
    document.getElementById("readMore").href = q.link;
  
    const nextBtn = document.querySelector("#feedbackView .next-btn");
    nextBtn.textContent = currentLang === "da" ? "Næste myte" : "Next myth";
    nextBtn.onclick = nextQuestion;
  }
  
  function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showEndScreen();
    }
  }
  
  function showEndScreen() {
    document.getElementById("quizView").style.display = "none";
    document.getElementById("feedbackView").style.display = "none";
    document.getElementById("endView").style.display = "block";
  
    const title = currentLang === "da" ? "Quiz færdig!" : "Quiz complete!";
    const text = currentLang === "da"
      ? `Du svarede rigtigt på ${correctCount} ud af ${questions.length} myter.`
      : `You answered correctly on ${correctCount} out of ${questions.length} myths.`;
  
    document.getElementById("endTitle").textContent = title;
    document.getElementById("finalScore").textContent = text;
    document.getElementById("progress").textContent = "";
  
    document.querySelector("#endView .next-btn").textContent = currentLang === "da" ? "Prøv igen" : "Try again";
  }
  
  function restartQuiz() {
    currentIndex = 0;
    correctCount = 0;
    showQuestion();
  }
  
  document.getElementById("homeBtn").addEventListener("click", () => {
    // Nulstil quizstatus
    currentIndex = 0;
    correctCount = 0;
  
    // Skjul alt andet
    document.getElementById("quizView").style.display = "none";
    document.getElementById("feedbackView").style.display = "none";
    document.getElementById("endView").style.display = "none";
  
    // Vis startskærm
    document.getElementById("startView").style.display = "block";
  
    // Opdater sprogvisning på forsiden
    showCurrentView();
  });

  // Sprogskift
  document.getElementById("daBtn").addEventListener("click", () => {
    currentLang = "da";
    updateLanguageButtons();
    showCurrentView();
  });
  
  document.getElementById("enBtn").addEventListener("click", () => {
    currentLang = "en";
    updateLanguageButtons();
    showCurrentView();
  });
  
  function updateLanguageButtons() {
    document.querySelectorAll(".lang").forEach(btn => btn.classList.remove("active"));
    document.getElementById(currentLang + "Btn").classList.add("active");
  }
  
  function showCurrentView() {
    if (document.getElementById("quizView").style.display === "block") {
      showQuestion();
    } else if (document.getElementById("feedbackView").style.display === "block") {
      const q = questions[currentIndex];
      document.getElementById("answerExplanation").textContent =
        currentLang === "da" ? q.explanation_da : q.explanation_en;
      document.getElementById("readMore").textContent = currentLang === "da" ? "Læs mere" : "Read more";
  
      const nextBtn = document.querySelector("#feedbackView .next-btn");
      nextBtn.textContent = currentLang === "da" ? "Næste myte" : "Next myth";
      nextBtn.onclick = nextQuestion;
    } else if (document.getElementById("endView").style.display === "block") {
      showEndScreen();
    } else if (document.getElementById("startView").style.display === "block") {
      document.getElementById("startTitle").textContent = currentLang === "da" ? "Velkommen til Mytequizzen" : "Welcome to the Myth Quiz";
      document.getElementById("startDesc").textContent = currentLang === "da"
        ? "Test din viden om angst og opdag, hvad der er sandt eller falsk!"
        : "Test your knowledge about anxiety and discover what's true or false!";
      document.getElementById("startBtn").textContent = currentLang === "da" ? "Start quiz" : "Start quiz";
    }
  }
  
  // Startvisning
  document.getElementById("startView").style.display = "block";
  document.getElementById("quizView").style.display = "none";
  document.getElementById("feedbackView").style.display = "none";
  document.getElementById("endView").style.display = "none";
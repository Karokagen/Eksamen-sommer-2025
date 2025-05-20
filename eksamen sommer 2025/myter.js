// Sandt eller falsk med angst (indeholder da og en)

const questions = [
  {
    da: "Angst kan være arveligt.",
    en: "Anxiety can be inherited.",
    answer: true,
    explanation_da: "Forskning viser, at genetiske faktorer kan øge risikoen for at udvikle angstlidelser.",
    explanation_en: "Research shows that genetic factors can increase the risk of developing anxiety disorders.",
    link: "#"
  },
  {
    da: "Børn og unge kan godt få angst.",
    en: "Children and young people can experience anxiety.",
    answer: true,
    explanation_da: "Angst er en af de mest almindelige psykiske lidelser blandt børn og unge.",
    explanation_en: "Anxiety is one of the most common mental disorders among children and youth.",
    link: "#"
  },
  {
    da: "Angst er det samme som nervøsitet.",
    en: "Anxiety is the same as nervousness.",
    answer: false,
    explanation_da: "Nervøsitet er en normal reaktion på stress, mens angst er en mere intens og vedvarende tilstand.",
    explanation_en: "Nervousness is a normal stress response, while anxiety is more intense and persistent.",
    link: "#"
  },
  {
    da: "Man kan bare tage sig sammen og komme over angst.",
    en: "You can just pull yourself together and get over anxiety.",
    answer: false,
    explanation_da: "Angst er en psykisk lidelse, der ofte kræver professionel behandling.",
    explanation_en: "Anxiety is a mental disorder that often requires professional treatment.",
    link: "#"
  },
  {
    da: "Hvis man har angst, har man det hele livet.",
    en: "If you have anxiety, you'll have it for life.",
    answer: false,
    explanation_da: "Med den rette behandling kan mange blive symptomfri eller opleve væsentlig bedring.",
    explanation_en: "With the right treatment, many people can become symptom-free or improve significantly.",
    link: "#"
  },
  {
    da: "Motion og søvn kan hjælpe mod angst.",
    en: "Exercise and sleep can help reduce anxiety.",
    answer: true,
    explanation_da: "Regelmæssig fysisk aktivitet og god søvnkvalitet kan reducere symptomer på angst.",
    explanation_en: "Regular physical activity and good sleep quality can reduce anxiety symptoms.",
    link: "#"
  },
  {
    da: "Man kan altid se på folk, at de har angst.",
    en: "You can always tell when someone has anxiety.",
    answer: false,
    explanation_da: "Mange med angst skjuler deres symptomer, og det er ikke altid synligt for omgivelserne.",
    explanation_en: "Many people with anxiety hide their symptoms, and it's not always visible to others.",
    link: "#"
  },
  {
    da: "Angst er bare en moderne dille.",
    en: "Anxiety is just a modern trend.",
    answer: false,
    explanation_da: "Angstlidelser har eksisteret i lang tid og er anerkendt som alvorlige psykiske lidelser.",
    explanation_en: "Anxiety disorders have existed for a long time and are recognized as serious mental conditions.",
    link: "#"
  },
  {
    da: "Angst kan give fysiske symptomer.",
    en: "Anxiety can cause physical symptoms.",
    answer: true,
    explanation_da: "Symptomer som hjertebanken, svedeture og svimmelhed er almindelige ved angst.",
    explanation_en: "Symptoms such as heart palpitations, sweating and dizziness are common in anxiety.",
    link: "#"
  },
  {
    da: "Medicinsk behandling er den eneste løsning.",
    en: "Medication is the only solution.",
    answer: false,
    explanation_da: "Terapi, især kognitiv adfærdsterapi, er ofte effektiv, og medicin er ikke altid nødvendig.",
    explanation_en: "Therapy, especially cognitive behavioral therapy, is often effective and medication is not always necessary.",
    link: "#"
  }
];
  // svar tæller
  let currentIndex = 0;
  let correctCount = 0;
  let currentLang = "da";
  // start quiz
  function startQuiz() {
    document.getElementById("startView").style.display = "none";
    showQuestion();
  }
  // selve spørgsmålet
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
  // SVARET
  function checkAnswer(userAnswer) {
    const q = questions[currentIndex];
    const isCorrect = userAnswer === q.answer;
  // tilføjer point til rigtige svar
    if (isCorrect) correctCount++;
  
    document.getElementById("quizView").style.display = "none";
    document.getElementById("feedbackView").style.display = "block";
  // farve på sandt/falsk
    document.getElementById("answerResult").textContent = isCorrect
      ? (currentLang === "da" ? "Korrekt" : "Correct")
      : (currentLang === "da" ? "Forkert" : "Wrong");
    document.getElementById("answerResult").style.color = isCorrect ? "green" : "darkred";
  
    document.getElementById("answerExplanation").textContent =
      currentLang === "da" ? q.explanation_da : q.explanation_en;
  
    document.getElementById("readMore").textContent = currentLang === "da" ? "Læs mere" : "Read more";
    document.getElementById("readMore").href = q.link;
  // næste myte
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
  // SLUTNING AF QUIZZ
  function showEndScreen() {
    document.getElementById("quizView").style.display = "none";
    document.getElementById("feedbackView").style.display = "none";
    document.getElementById("endView").style.display = "block";
  // færdig og resultat
    const title = currentLang === "da" ? "Quiz færdig!" : "Quiz complete!";
    const text = currentLang === "da"
      ? `Du svarede rigtigt på ${correctCount} ud af ${questions.length} myter.`
      : `You answered correctly on ${correctCount} out of ${questions.length} myths.`;
  
    document.getElementById("endTitle").textContent = title;
    document.getElementById("finalScore").textContent = text;
    document.getElementById("progress").textContent = "";
  
    document.querySelector("#endView .next-btn").textContent = currentLang === "da" ? "Prøv igen" : "Try again";
  }
  // restart quizz
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

  // Sprogskifter
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
  // DANSK/ENGELSK forskellige steder
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
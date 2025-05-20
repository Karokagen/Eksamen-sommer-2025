// DANSK OG ENGELSK HEADER
let currentIndex = 0;
const titleTranslations = {
    da: "Teknikker mod angst",
    en: "Techniques for Anxiety"
  };
let currentLang = 'da';
//FORSKELLIGE TIPS (INDEHOLDER DA OG EN)
const techniques = [
    {
      da: "Træk vejret roligt –<br>Dybe åndedrag beroliger kroppen og sindet.",
      en: "Breathe calmly –<br>Deep breaths calm the body and mind.",
      qr: "qr1.png"
    },
    {
      da: "Husk: Angst er ikke farlig –<br>Følelsen går over igen.",
      en: "Remember: Anxiety isn't dangerous –<br>The feeling will pass.",
      qr: "qr2.png"
    },
    {
      da: "Ground dig selv –<br>Brug dine sanser til at finde ro.",
      en: "Ground yourself –<br>Use your senses to find calm.",
      qr: "qr3.png"
    },
    {
      da: "Skriv det ned –<br>Tanker virker mindre skræmmende på papir.",
      en: "Write it down –<br>Thoughts seem less scary on paper.",
      qr: "qr4.png"
    },
    {
      da: "Bevæg dig –<br>Gåture eller motion mindsker angst i kroppen.",
      en: "Move your body –<br>Walking or exercise eases anxiety.",
      qr: "qr5.png"
    },
    {
      da: "Accepter følelsen –<br>Lad angsten komme og gå som en bølge.",
      en: "Accept the feeling –<br>Let the anxiety rise and fall like a wave.",
      qr: "qr6.png"
    },
    {
      da: "Tal med nogen –<br>Del dine tanker, du er ikke alene.",
      en: "Talk to someone –<br>Share your thoughts, you're not alone.",
      qr: "qr7.png"
    },
    {
      da: "Pas på kroppen –<br>Søvn, mad og pauser hjælper meget.",
      en: "Care for your body –<br>Sleep, food, and breaks help a lot.",
      qr: "qr8.png"
    },
    {
      da: "Brug hjælpemidler –<br>Apps, fidgets eller beroligende lyde kan støtte.",
      en: "Use tools –<br>Apps, fidgets or calming sounds can help.",
      qr: "qr9.png"
    },
    {
      da: "Gør noget rart –<br>Lyt til musik, se noget sjovt.",
      en: "Do something nice –<br>Listen to music, watch something funny.",
      qr: "qr10.png"
    }
  ];
// Elementer
const slideContent = document.getElementById('slideContent');
const qrImage = document.getElementById('qrImage');
const indicator = document.getElementById('indicator');
const qrText = document.querySelector('.qr-section p');
const btnDa = document.getElementById('lang-da');
const btnEn = document.getElementById('lang-en');
// QR box indhold
function updateSlide() {
    document.getElementById("title").textContent = titleTranslations[currentLang];
    const text = techniques[currentIndex][currentLang];
    slideContent.innerHTML = `<h2 id="questionText">${text}</h2>`;
    qrImage.src = techniques[currentIndex].qr;
    qrText.innerHTML = currentLang === 'da'
      ? 'Tag teknikkerne<br>med dig'
      : 'Take the techniques<br>with you';
    updateIndicator();
  }
// "skift imellem" boks indehold
function updateIndicator() {
  indicator.innerHTML = "";
  for (let i = 0; i < techniques.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    indicator.appendChild(dot);
  }
}
// Slider imellem tips
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < techniques.length - 1) {
    currentIndex++;
    updateSlide();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

btnDa.addEventListener('click', () => {
  currentLang = 'da';
  btnDa.classList.add('active');
  btnEn.classList.remove('active');
  updateSlide();
});

btnEn.addEventListener('click', () => {
  currentLang = 'en';
  btnEn.classList.add('active');
  btnDa.classList.remove('active');
  updateSlide();
});

updateSlide();
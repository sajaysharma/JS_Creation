const quotes = [
  "Believe in yourself.",
  "Stay curious.",
  "Small steps matter.",
  "Dream big.",
  "Never stop learning.",
  "Consistency beats talent.",
  "Progress over perfection.",
  "Code. Learn. Improve.",
  "Make today count.",
  "Focus on growth.",
  "Keep moving forward.",
  "Success takes time.",
  "Practice makes better.",
  "Stay positive.",
  "Think different.",
  "Create your own path.",
  "Learn from mistakes.",
  "Hard work pays off.",
  "Be disciplined.",
  "Stay hungry.",
  "Simple is powerful.",
  "Push your limits.",
  "Never give up.",
  "Action creates results.",
  "Knowledge is power."
];


const button = document.querySelector("button");

button.addEventListener("click", (e)=>{
  const index = Math.floor(Math.random()*25);
  const h1 = document.getElementById("generate");
  h1.textContent = quotes[index];
})
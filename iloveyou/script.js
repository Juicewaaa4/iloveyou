const scene = document.getElementById("heartScene");
const words = [];

for (let i = 0; i < 76; i += 1) {
  const t = (Math.PI * 2 * i) / 76;
  const x = 16 * Math.sin(t) ** 3;
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  const word = document.createElement("span");
  word.className = "love-word";
  word.textContent = "I love you";
  word.style.setProperty("--x", `${x * 13}px`);
  word.style.setProperty("--y", `${y * 13}px`);
  word.style.setProperty("--r", `${Math.sin(t) * 10}deg`);
  word.style.setProperty("--delay", `${-(i % 19) * 0.08}s`);
  word.style.setProperty("--o", `${0.44 + (i % 5) * 0.12}`);
  scene.appendChild(word);
  words.push(word);
}

for (let i = 0; i < 26; i += 1) {
  const word = document.createElement("span");
  word.className = "love-word";
  word.textContent = "I love you";
  const x = (Math.random() - 0.5) * 350;
  const y = (Math.random() - 0.5) * 250;
  word.style.setProperty("--x", `${x}px`);
  word.style.setProperty("--y", `${y}px`);
  word.style.setProperty("--r", `${(Math.random() - 0.5) * 14}deg`);
  word.style.setProperty("--delay", `${-(0.2 + Math.random() * 2.4)}s`);
  word.style.setProperty("--o", `${0.12 + Math.random() * 0.22}`);
  scene.appendChild(word);
}

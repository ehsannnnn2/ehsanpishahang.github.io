const texts = ["website: ibg-co.ir", "instagram: infinit.ibg", "call number:0987654321", "سبک مینیمال"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;

let textIndex = 0;
let charIndex = 0;
let isErasing = false;
const typedTextSpan = document.getElementById("typed-text");

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isErasing) {
    if (charIndex < currentText.length) {
      typedTextSpan.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeLoop, typingSpeed);
    } else {
      isErasing = true;
      setTimeout(typeLoop, delayBetweenTexts);
    }
  } else {
    if (charIndex > 0) {
      typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, erasingSpeed);
    } else {
      isErasing = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeLoop, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);

const container = document.querySelector('.random-typing-container');
const words = ["Design", "Structure", "Line", "Detail", "Space", "IBG", "Geometry", "Modern", "Interior", "Minimal"];

function createTypingText(text, x, y) {
    const el = document.createElement("div");
    el.classList.add("random-text");
    el.style.top = y + "px";
    el.style.left = x + "px";
    container.appendChild(el);

    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            el.style.border = "none";
        }
    }, 100);
    // حذف بعد از 30 ثانیه با افکت fade
    setTimeout(() => {
        el.classList.add("fade-out");
        setTimeout(() => {
            el.remove();
        }, 2000); // ۲ ثانیه برای پایان انیمیشن fadeOut
    }, 10000); // 1۰ ثانیه بعد از ظاهر شدن
}

function spawnRandomText() {
    const word = words[Math.floor(Math.random() * words.length)];
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    createTypingText(word, x, y);
}


// تکرار هر ۱.۵ ثانیه
setInterval(spawnRandomText, 1500);

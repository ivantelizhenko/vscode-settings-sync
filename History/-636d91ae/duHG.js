document.addEventListener("DOMContentLoaded", function () {
  const bubblesContainer = document.querySelector(".header-bubbles");

  // Налаштування
  const config = {
    bubbleCount: 8, // Кількість кульок
    minSize: 150, // Мінімальний розмір (px)
    maxSize: 400, // Максимальний розмір (px)
    color: "rgba(138, 43, 226, 0.7)", // Насичено-фіолетовий з прозорістю
    baseSpeed: 0.5, // Базова швидкість (значно збільшено)
    mouseRepelForce: 0.3, // Сила відштовхування від миші
    bubbleRepelForce: 0.2, // Сила відштовхування між кульками
    maxSpeed: 1.0, // Максимальна швидкість
  };

  // Позиція миші
  const mouse = { x: -1000, y: -1000 };
  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Генерація випадкового числа
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Створення кульки
  function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = random(config.minSize, config.maxSize);
    const posX = random(size, window.innerWidth - size);
    const posY = random(size, window.innerHeight - size);

    Object.assign(bubble.style, {
      width: `${size}px`,
      height: `${size}px`,
      background: config.color,
      left: "0",
      top: "0",
      borderRadius: "50%",
      filter: "blur(10px)",
      position: "absolute",
      transform: `translate(${posX}px, ${posY}px)`,
      pointerEvents: "none",
      zIndex: "1000",
    });

    bubblesContainer.appendChild(bubble);

    return {
      x: posX,
      y: posY,
      vx: random(-1, 1) * config.baseSpeed,
      vy: random(-1, 1) * config.baseSpeed,
      size: size,
      element: bubble,
    };
  }

  // Масив кульок
  const bubbles = Array.from({ length: config.bubbleCount }, createBubble);

  // Функція обмеження швидкості
  function limitSpeed(bubble) {
    const speed = Math.sqrt(bubble.vx * bubble.vx + bubble.vy * bubble.vy);
    if (speed > config.maxSpeed) {
      bubble.vx = (bubble.vx / speed) * config.maxSpeed;
      bubble.vy = (bubble.vy / speed) * config.maxSpeed;
    }
  }

  // Анімація
  function animate() {
    // Оновлення позицій
    bubbles.forEach((bubble) => {
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;

      // Відштовхування від миші
      const dxMouse = mouse.x - bubble.x;
      const dyMouse = mouse.y - bubble.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < 300) {
        const force = config.mouseRepelForce * (1 - distMouse / 300);
        bubble.vx -= (dxMouse / distMouse) * force;
        bubble.vy -= (dyMouse / distMouse) * force;
      }

      // Відштовхування між кульками
      bubbles.forEach((otherBubble) => {
        if (bubble === otherBubble) return;

        const dx = otherBubble.x - bubble.x;
        const dy = otherBubble.y - bubble.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = (bubble.size / 2 + otherBubble.size / 2) * 0.8;

        if (dist < minDist) {
          const force = config.bubbleRepelForce * (1 - dist / minDist);
          bubble.vx -= (dx / dist) * force;
          bubble.vy -= (dy / dist) * force;
        }
      });

      // Відбивання від країв
      if (
        bubble.x < bubble.size / 2 ||
        bubble.x > window.innerWidth - bubble.size / 2
      ) {
        bubble.vx *= -0.8; // Додаткове гасіння при ударі
      }
      if (
        bubble.y < bubble.size / 2 ||
        bubble.y > window.innerHeight - bubble.size / 2
      ) {
        bubble.vy *= -0.8;
      }

      // Обмеження швидкості
      limitSpeed(bubble);

      // Застосування позиції
      bubble.element.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
    });

    requestAnimationFrame(animate);
  }

  // Запуск анімації
  animate();

  // Реакція на зміну розміру вікна
  window.addEventListener("resize", () => {
    bubbles.forEach((bubble) => {
      if (bubble.x > window.innerWidth)
        bubble.x = window.innerWidth - bubble.size;
      if (bubble.y > window.innerHeight)
        bubble.y = window.innerHeight - bubble.size;
    });
  });
});

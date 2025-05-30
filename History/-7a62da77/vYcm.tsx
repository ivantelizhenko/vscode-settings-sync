import { useRef, useEffect } from 'react';

function TimeComponent() {
  // 1) Ініціалізуємо реф під числовий ID або null
  const intervalRef = useRef<number | null>(null);
  // Якщо використовуєте Node-середовище (Next.js), тип буде NodeJS.Timeout | null :contentReference[oaicite:1]{index=1}

  useEffect(() => {
    // 2) Створюємо інтервал та зберігаємо його ID у реф
    intervalRef.current = window.setInterval(() => {
      console.log('tick');
      // ... ваша логіка
    }, 1000);

    // 3) Очищаємо інтервал при розмонтуванні
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div>Дивись консоль кожну секунду</div>;
}

export default TimeComponent;

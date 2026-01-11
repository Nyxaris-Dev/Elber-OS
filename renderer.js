document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const dots = document.querySelectorAll('.dot');
    const statusLight = document.querySelector('.status-light');
    const statusText = document.querySelector('.status-text');
    
    let progress = 0;
    let currentDot = 0;
    
    // Сообщения статуса
    const statusMessages = [
      "ИНИЦИАЛИЗАЦИЯ",
      "ЗАГРУЗКА ЯДРА",
      "ПРОВЕРКА СИСТЕМЫ",
      "ГОТОВО"
    ];
    
    // Анимация прогресса
    function updateProgress() {
      if (progress < 100) {
        // Плавное увеличение прогресса
        const increment = Math.random() * 2 + 0.5;
        progress = Math.min(progress + increment, 100);
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        
        // Обновление точек
        updateDots();
        
        // Обновление статуса
        updateStatus();
        
        // Продолжаем анимацию
        setTimeout(updateProgress, 80 + Math.random() * 100);
      } else {
        // Загрузка завершена
        progressText.textContent = "100%";
        statusText.textContent = "ГОТОВО";
        statusLight.classList.add('active');
        
        // Все точки активны
        dots.forEach(dot => dot.classList.add('active'));
        
        // Задержка перед переходом
        setTimeout(() => {
          // Здесь можно добавить переход к основному интерфейсу
          console.log('System ready');
        }, 1000);
      }
    }
    
    function updateDots() {
      const dotThresholds = [15, 30, 50, 65, 80, 95];
      
      dots.forEach((dot, index) => {
        if (progress >= dotThresholds[index] && !dot.classList.contains('active')) {
          dot.classList.add('active');
          currentDot = index;
        }
      });
    }
    
    function updateStatus() {
      const statusThresholds = [20, 50, 80];
      
      if (progress < statusThresholds[0]) {
        statusText.textContent = statusMessages[0];
      } else if (progress < statusThresholds[1]) {
        statusText.textContent = statusMessages[1];
      } else if (progress < statusThresholds[2]) {
        statusText.textContent = statusMessages[2];
      }
    }
    
    // Начинаем анимацию загрузки
    setTimeout(() => {
      updateProgress();
    }, 500);
    
    // Создаем фоновые линии
    function createBackgroundLines() {
      const bgLines = document.querySelector('.bg-lines');
      
      // Горизонтальные линии
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'line horizontal';
        line.style.top = `${(i + 1) * 5}%`;
        line.style.opacity = `${0.02 + Math.random() * 0.03}`;
        bgLines.appendChild(line);
      }
      
      // Вертикальные линии
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'line vertical';
        line.style.left = `${(i + 1) * 5}%`;
        line.style.opacity = `${0.02 + Math.random() * 0.03}`;
        bgLines.appendChild(line);
      }
    }
    
    createBackgroundLines();
  });
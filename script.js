function escuchar() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.start();

  recognition.onresult = function(event) {
    const texto = event.results[0][0].transcript.toLowerCase().trim();
    console.log("🗣️ Detectado:", texto);

    const frases = [
      "quien es daniela",
      "¿quien es daniela?",
      "pregúntame quién es daniela",
      "dime quién es daniela",
      "dime ¿quién es daniela?",
      "daniela",
      "¿quién es daniela",
      "hablame quien es daniela"
    ];

    const coincide = frases.some(frase => texto.includes(frase));

    if (coincide) {
      const audio = new Audio("assets/audio/quien_soy.mp3");
      audio.play();
    } else {
      alert("No te entendí. Di algo como 'quién es Daniela'");
    }
  };

  recognition.onerror = function(event) {
    alert("Error con el reconocimiento de voz: " + event.error);
  };
}

    // Inicializar AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Menú móvil
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
      });
    });

    
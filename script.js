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
      "dime quién es daniela"
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

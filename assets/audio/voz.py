from gtts import gTTS

texto = """
Daniela es una Full Stack Developer ¡que sufre de glitch!. No lo arregla todo, pero si algo falla, después de gritar internamente, probablemente ya esta viendo cómo mejorarlo.

Trabaja con Spring Boot, FastAPI y NestJS en el backend, y React con Tailwind en el frontend. Hace APIs que escuchan, interfaces que comunican y sistemas que no solo funcionan, sino que tienen sentido.

No compite. Colabora. Pero sí, a veces es la que encuentra el bug antes que nadie porque lo tenía en su cabeza.

¿Quién es? La que transforma errores en estructura. Y caos… en aplicaciones.
"""

tts = gTTS(text=texto, lang='es')
tts.save("quien_soy.mp3")

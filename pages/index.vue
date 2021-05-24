<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        planetas
      </h1>
      <template v-if="currentStep === 0">
        <section class="intro">
          <h2>Hola!</h2>
          <p>Nosotros somos <a href="https://www.instagram.com/beldimusic/" target="blank">beldi</a>. Te presentamos nuestro primer tema del 2021: Espejismos.</p>
          <audio controls>
            <source src="/espejismos.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          <p>Cuando termines de escucharlo te invitamos a responder 5 preguntas sencillas, no te llevará más de 5 minutos.</p>
          <div class="buttons">
            <button @click.prevent="setStep('next')">Empezar ›</button>
          </div>
        </section>
      </template>
      <section class="form">
        <form class="questions-form">
          <div class="question-wrapper" :class="{active: currentStep === i+1}" :data-caca="i" v-bind:key="pregunta.id" v-for="(pregunta,i) in preguntas">
            <p>{{pregunta.label}}</p>
            <div v-bind:key="option.id" v-for="option in pregunta.content">
              <label class="checkmark-container" :for="option.id">
              <input :id="option.id" type="radio" :name="pregunta.name" :value="option.id" @change="setOption(option.id,pregunta.name)" />
                {{ option.id }}
              </label>
            </div>
            <div class="buttons">
              <button :disabled="currentStep === 0" @click.prevent="setStep('prev')">‹ Anterior</button>
              <button @click.prevent="setStep('next')">Siguiente ›</button>
            </div>
          </div>
        </form>
      </section>
      <template v-if="currentStep === 6">
        <section class="your-planet">
          <h2>Tu planeta!</h2>
          <p>Querés enviarlo y publicarlo?</p>
            <svg ref="planetRef" class="planeta-final" viewBox="0 0 160 160" :width="planet.size" :height="planet.size" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <g id="planeta"><path d="M46.35 48.67c-13.15 15-16.74 40.92-.76 59.29 19.69 22.63 58.93 22.1 75.54-.35 14.8-20 14-47-4.29-62.84-19.32-16.71-53.32-15.71-70.49 3.9z"/><path d="M44.78 44.85C30.7 61.43 27.74 86 39.06 104.93c10.72 17.91 32.82 26.67 53.1 23.64 21.26-3.17 36.39-18.87 41-39.66 4.75-21.5-4.47-43.94-24.21-54.28-20.55-10.76-48.41-7.21-64.17 10.22-2.42 2.67 0 11.12 3.15 7.64C72 25.84 128.05 36.3 128.53 76.76c.22 18.34-11.53 35.3-28.91 41.05-15.6 5.17-34.21 2.12-47-8.3-17.55-14.28-19.19-39.93-4.68-57a5.93 5.93 0 00.9-6.14c-.66-1.37-2.61-3.24-4.06-1.52z"/></g>
              </defs>
              <pattern id="pat1" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M.4 4.2C.4.7 6.4.3 6.5 4c.1 3.3-4.8 3.2-5.9.6-.3-.7-.6.7-.4 1.1.8 1.7 2.9 2.7 4.7 2C6.8 7.1 7.4 5 7.1 3.3 6.8 1.4 5.4-.3 3.4 0 1.4.3 0 2.2 0 4.2c0 .5.4.5.4 0z" fill="#eee8d3"/>
              </pattern>
              <pattern id="pat2" width="10" height="10" patternUnits="userSpaceOnUse">
                <path fill="#eee8d3" d="M7.5 16.1c.3 0 .5 0 .8-.1.3 0 .3-.5.3-.7 0-.2-.1-.7-.3-.7-.3 0-.5 0-.8-.1-.1 0-.2.1-.2.2-.1.2-.1.4-.1.5 0 .2 0 .4.1.5 0 .2.1.4.2.4zM23.6 26.9c-.2.2-.3.4-.5.6-.3.3-.1 1.8.4 1.3.2-.2.3-.4.5-.5.3-.4.1-1.8-.4-1.4-.1.2-.3.4-.5.6-.3.3 0 1.7.3 1.4l.5-.5c.5-.5.2-2.1-.3-1.5zM19.8 19.8c.2 0 .2-.8 0-.8-.3 0-.3.8 0 .8zM9.1 27.8c.1 0 .1-.4 0-.4-.1-.1-.1.4 0 .4zM18.9 4.5c.4 0 .4-1.3 0-1.3s-.4 1.3 0 1.3zM10 29.7c.3 0 .3-.9 0-.9-.4-.1-.3.9 0 .9zM5.9 9.9c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM1 24.6c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM23.8 12.5c.3 0 .3-.9 0-.9s-.3.9 0 .9zM10 1.2c.4 0 .3-1.2 0-1.2-.4 0-.4 1.2 0 1.2zM13.2 16.4c1 0 .9-2.2-.1-2.2-.9 0-.9 2.2.1 2.2zM11.6 10c.3 0 .2-.9 0-.9-.3 0-.3.9 0 .9zM.1 2.5c.2 0 .2-.6 0-.6s-.1.6 0 .6zM13.2 25.7c.4 0 .4-1.2 0-1.2s-.4 1.2 0 1.2zM7.5 23.8c.2 0 .2-.6 0-.6s-.2.6 0 .6zM.1 17.2c.1 0 .1-.5 0-.5s-.1.5 0 .5z"/>
              </pattern>
              <pattern id="pat3" width="60" height="70" patternUnits="userSpaceOnUse">
                <path d="M.3 73.1C28.9 48.2 58.6 24.6 88.5 1.4c.3-.2.1-1.6-.2-1.4C57.9 22.6 28.6 47 .1 72c-.2.2 0 1.3.2 1.1z" fill="#eee8d3"/>
              </pattern>
              <pattern id="pat4" width="90" height="30" patternUnits="userSpaceOnUse">
                <path fill="#eee8d3" d="M0 4.2C-.2 11.8 8.7 22 16.8 17.9c5.5-2.8 7.6-9.6 13.4-12.3 8.4-3.9 10.9 4.3 15.5 9 11.6 12 19.1-12 29.5-12.3 11.2-.4 13.1 25.2 26.5 16 .8-.5.2-2.6-.8-1.9C89 24.5 86.5-.5 75 0 64.7.5 56.6 24.2 46 12.3c-2.5-2.9-4.2-6.8-7.6-8.8-4-2.4-8.4-.7-11.8 1.9-3.9 3-6.5 9.2-11.3 10.8-6.7 2.2-14-5.7-13.9-12C1.5 2.8 0 2.8 0 4.2z"/><path fill="#eee8d3" d="M70.6 13c.9-2.7 3.8-3.7 6.3-2.4 2 1.1 2.3 4.2.8 5.8-2.8 3-8 .2-7.1-3.7.3-1.2-1.1-2-1.4-.6-.5 2.1.1 4.9 1.8 6.3 2.6 2.3 7 1.6 8.5-1.5 1.2-2.5.9-6.5-1.6-8.1-3.3-2.2-7.3-.6-8.6 3.1-.3 1 .8 2.5 1.3 1.1z"/>
              </pattern>
              <pattern id="pat5" width="25" height="25" patternUnits="userSpaceOnUse">
                <path fill="#eee8d3" d="M1.5 6.1c2 0 1.9-4.5-.1-4.5-1.9 0-1.9 4.5.1 4.5zM9.4 14c2 0 1.9-4.5-.1-4.5S7.4 14 9.4 14zM23 14c2 0 1.9-4.5-.1-4.5S21 14 23 14zM12.2 24.7c2 0 1.9-4.5-.1-4.5-1.9 0-1.8 4.5.1 4.5zM3.2 22.5c2 0 1.9-4.5-.1-4.5-2 .1-1.9 4.5.1 4.5zM15.6 4.5c2 0 1.9-4.5-.1-4.5s-1.9 4.5.1 4.5z"/>
              </pattern>
              <pattern id="pat6" width="10" height="7" patternUnits="userSpaceOnUse">
                <path d="M.3 7c-.3-2.8 2.4-5.2 5-5.2 2.4 0 4.4 1.6 5.1 3.8.1.4.4-1.2.3-1.5-1-3-4.4-5.1-7.5-3.6C.7 1.8-.3 4.7.1 7.3c.1.8.3.1.2-.3z" fill="#eee8d3"/>
              </pattern>
              <use xlink:href="#planeta" :fill="planet.color"/>
              <use xlink:href="#planeta" :fill="planet.texture"/>
              <g v-html="planet.satelite"></g>
              <g v-html="planet.aro"></g>
            </svg>
            <div class="textarea-content" :class="{active: sendingFeedback}">
              <form ref="submitFeedback" name="submit-to-google-sheet">
                <input ref="planetInput" type="hidden" name="svg">
                <input class="nombre" name="nombre" placeholder="Tu nombre (optional)">
                <button ref="btnSubmit" type="button" @click.prevent="feedbackSubmit()">Enviar »</button>
              </form>  
            </div>
        </section>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendingFeedback: false,
      currentStep: 0,
      planet: {
        color: "none",
        size: "200",
        texture: "none",
        satelite: "",
        aro: ""
      },
      preguntas: [
        {
          label: "1. De qué signo sos?",
          name: "color",
          content: [
          {
            id: "aries",
            value: false,
            color: "#db6c5a",
          },
          {
            id: "tauro",
            value: false,
            color: "#e99468",
          },
          {
            id: "geminis",
            value: false,
            color: "#ebd186",
          },
          {
            id: "cancer",
            value: false,
            color: "#acba8a",
          },
          {
            id: "leo",
            value: false,
            color: "#689782",
          },
          {
            id: "virgo",
            value: false,
            color: "#578c80",
          },
          {
            id: "libra",
            value: false,
            color: "#5c89a5",
          },
          {
            id: "escorpio",
            value: false,
            color: "#306687",
          },
          {
            id: "sagitario",
            value: false,
            color: "#00517b",
          },
          {
            id: "capricornio",
            value: false,
            color: "#45327a",
          },
          {
            id: "acuario",
            value: false,
            color: "#5d2c7a",
          },
          {
            id: "piscis",
            value: false,
            color: "#992676",
          },
          ],
        },
        {
          label: "2. Cómo te sentiste al escuchar la canción?",
          name: "texture",
          content: [
            {
              id: "enérgico",
              value: false,
              texture: 'url(#pat1)',
            },
            {
              id: "trance",
              value: false,
              texture: 'url(#pat2)',
            },
            {
              id: "relajado",
              value: false,
              texture: 'url(#pat3)',
            },
            {
              id: "rockeando",
              value: false,
              texture: 'url(#pat4)',
            },
            {
              id: "con ganas de salir",
              value: false,
              texture: 'url(#pat5)',
            },
            {
              id: "melanco",
              value: false,
              texture: 'url(#pat6)',
            },
          ],
        },
        {
          label: "3. En este momento te sentís:",
          name: "aro",
          content: [
            {
              id: "ansioso",
              value: false,
              aro: '<path d="M130.32 46.11c-2-.12 22.34-7.25 25.27-4.19 5.33 5.55-18.86 23.88-25.22 28.2-34.12 23.17-52.37 33.4-91.75 48.06-5 1.87-23.95 7.54-26.66 2.92-1.6-2.74 5.81-11.41 9.32-14.11a38.12 38.12 0 0112.82-7.75c6.58-2.18-9 7.23-9.65 11.26 7.29 3.25 37.22-12.12 42.63-14.92C99.79 78.66 101.61 77 132.75 57.46c2.57-1.61 11.73-7.89 10.22-9.12a54.82 54.82 0 00-12.65-2.23z" fill="#eee8d3"/>',
            },
            {
              id: "tranquilo",
              value: false,
              aro: "",
            },
            {
              id: "ns/nc",
              value: false,
              aro: '<path d="M43.44 115.51A89.19 89.19 0 0038 132a34.09 34.09 0 00-1 9.55c.1 1.69.33 4.76 2.45 5.23 1.19.27 2.63-.7 3.6-1.26a55.58 55.58 0 006.53-4.59 234.69 234.69 0 0018.6-16.64q11.1-10.84 21.21-22.63c7.48-8.75 14.38-18 21-27.37 6.19-8.69 12.17-17.56 17.5-26.81 3.67-6.35 7.29-13 9.29-20.1a26.5 26.5 0 001-7.92c-.07-2-.18-4.75-1.83-6.16-2.08-1.76-5.41.23-7.3 1.35a116.78 116.78 0 00-12 8.72 476.45 476.45 0 01-7.21 5.55c-.45.33-.27 1.82-.25 2.31a16.76 16.76 0 00.41 2.27c4.43-3.34 8.73-6.84 13.17-10.17 2.92-2.2 6.1-4.78 9.65-5.89 1.94-.61 3.81-.31 4.6 1.74.06.13.09.27.14.41s0 .2.08.34 0-.38 0-.43v.25c0 .23 0 .46-.08.69-.08.53-.19 1-.3 1.58-1.45 6.35-4.63 12.36-7.73 18a287.19 287.19 0 01-15.38 24.54c-6.32 9.2-12.89 18.29-19.89 27C88 99.35 81.34 106.79 74.43 114c-6.17 6.44-12.56 12.69-19.27 18.58-4.07 3.55-8.33 7.42-13.16 10.05-1 .53-2.17 1.19-3.24.54-1.67-1-1.36-3.22-1.16-4.8.76-6.17 2.79-12.29 4.95-18.1.32-.85.64-1.7 1-2.54a3.4 3.4 0 00.08-1.42c0-.12-.16-.93-.22-.8z" fill="#eee8d3"/>',
            },
          ],
        },
        {
          label: "4. En este momento te estás:",
          name: "satelite",
          content: [
            {
              id: "optimista",
              value: false,
              satelite: '<path d="M7.61 88.84c3.63 1.81 9.12 1.34 11.13-2.32 2.57-4.66.3-8.86-3.61-10.64s-8.77-.1-10.44 2.9c-1.93 3.46-1.29 7.98 2.92 10.06z" fill="#fff"/><path d="M7.27 91c4.66 2.09 10.61 1.18 13-3.76a10 10 0 00-4.08-13.19c-4.65-2.5-10.94-.7-13.06 4.25A9.77 9.77 0 007.27 91c1.78 1 2.32-3.41.67-4.33-2.9-1.61-3.86-5.1-1.22-7.52a7.67 7.67 0 019-.61c3.06 2 3.56 6.15.19 8.16-2.41 1.43-5.54 1.07-8 0-1.91-.88-2.37 3.53-.64 4.3z" fill="#fff"/><path d="M10.73 77.94a.72.72 0 00.86.87.69.69 0 00.12-1.19c-.45-.24-1.07.32-.86.78" fill="#dddddb"/><path d="M4.74 82.33a1 1 0 001.07 1.13 1 1 0 10-.7-1.74 1 1 0 000 1.55" fill="#dddddb"/><path d="M9 89.88v.4a.61.61 0 00.87-.28.55.55 0 00-.56-.67.5.5 0 00-.32.78" fill="#dddddb"/><path d="M14.51 78a.68.68 0 001 .38.81.81 0 00.32-1 .79.79 0 00-1-.39.63.63 0 00-.06 1" fill="#dddddb"/><path d="M7.33 76.92a1.17 1.17 0 01.8-1.72 1.18 1.18 0 011.17 1.5 1.17 1.17 0 01-1.86.36" fill="#dddddb"/><path d="M5.23 86.52a.54.54 0 00.88 0 .5.5 0 00-.47-.71.46.46 0 00-.18.79" fill="#dddddb"/><path d="M15.22 86.33c-.16.12.16.4.25.22s.14-.48-.09-.48-.3.39-.09.48" fill="#dddddb"/><path d="M11.64 87.58a.45.45 0 100-.76.38.38 0 00.24.57" fill="#dddddb"/><path d="M17.5 87.05a.93.93 0 00.81.08.53.53 0 00-.19-.76.52.52 0 00-.68.39.62.62 0 00.5.41" fill="#dddddb"/><path d="M12.87 76.41a.34.34 0 00.11.37.44.44 0 00.15-.81.39.39 0 00-.25.56" fill="#dddddb"/><path d="M4.38 80.23a.5.5 0 00.78-.17.44.44 0 00-.54-.53c-.29.13-.24.66.07.7" fill="#dddddb"/><path d="M14.68 75a.27.27 0 00.33-.3.27.27 0 00-.43-.12v.36" fill="#dddddb"/><path d="M11.84 90c-.19.15 0 .51.23.46a.33.33 0 00.13-.55.41.41 0 00-.6.13l.26.3" fill="#dddddb"/><path d="M11 74.26a.54.54 0 00.79.38.47.47 0 00-.11-.81c-.33-.1-.65.39-.41.64" fill="#dddddb"/><path d="M14.43 90.15a.46.46 0 00.7-.22.44.44 0 10-.79.13" fill="#dddddb"/><path d="M9 80.67a.57.57 0 00.81-.51.9.9 0 00-.92.07l.13.39" fill="#dddddb"/><path d="M18.43 84.28c-.13.26.32.48.53.28a.78.78 0 00.1-.8c-.3-.23-.77.24-.55.54" fill="#dddddb"/>',
            },
            {
              id: "pesimista",
              value: false,
              satelite: '<path d="M155.68 94.28c.17-2.4.25-5-1.29-7-1.94-2.53-6-2.81-7.79 0a10.11 10.11 0 00-1 3.67 56.87 56.87 0 01-2.27 9.61c-1.92 5.29-5 10-7.41 15.11-.12.26-.27 2.17.33 1.86a31.34 31.34 0 008.75-6.63l-.4-1.72-2.76 10.11c0 .18-.1 2.14.41 1.74a37.08 37.08 0 0013.65-26.59c0-.89-.66-2.08-.78-.57A36.11 36.11 0 01142 119l.41 1.75 2.75-10.13c.05-.18 0-2.15-.41-1.72a31.25 31.25 0 01-8.74 6.66l.33 1.85c2.67-5.68 6.12-11 8-17 .9-2.81 1.06-5.71 1.84-8.52 2.2-7.91 9-5.11 9.12 2.25.05.41.35.7.38.14z" fill="#db6c5a"/><path d="M149.11 94.57a3.23 3.23 0 01-1.52-4.65 3.63 3.63 0 015.7-.54 3.41 3.41 0 01-1.18 5.21 4 4 0 01-3-.02z" fill="#eee8d3"/><path d="M151.72 98.67c-1 4.33-2.2 8.22-4.79 11.9l.42 1.06c.28-2 .42-4.07.7-6.1 0-.13-.07-1.59-.38-1.25a18.55 18.55 0 01-5.34 4l.3 1.67a37.65 37.65 0 005.23-13.57c.11-.53-.35-2.11-.62-.93a39.05 39.05 0 01-5 12.93c-.16.25-.21 1.95.31 1.67a18.89 18.89 0 005.31-4.17l-.41-1.05c-.26 2.05-.39 4.11-.65 6.16 0 .18.13 1.34.44.88a28.9 28.9 0 004.62-13.08c0-.12-.09-.42-.15-.17z" fill="#ebd186"/>',
            },
            {
              id: "ns / nc",
              value: false,
              satelite: "",
            },
          ],
        },
        {
          label: "5. Nos definirías como una banda:",
          name: "size",
          content: [
            {
              id: "extraterrestre",
              value: false,
              size: "120",
            },
            {
              id: "indie",
              value: false,
              size: "200",
            },
            {
              id: "pop-rock",
              value: false,
              size: "300",
            },
          ],
        }
      ]
    }
  },
  methods: {
    feedbackSubmit() {
      this.sendingFeedback = true;
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwz6CT-24RkNWGcggDWfh29uyE1B8qqr8AjJhYOesQDwHt5R38D_ThFzMAC5KDT7odV/exec'
      const form = this.$refs.submitFeedback
      this.$refs.planetInput.value = this.$refs.planetRef.outerHTML
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => this.sendingFeedback = false)
        .catch(error => console.error('Error!', error.message))
        this.$refs.btnSubmit.onclick = function () { location.href = "https://beldi.netlify.app/gallery/"; }
    },
    setStep(type){
      if (type === "next" && this.currentStep < 6) {
        this.currentStep++
      }
      if (type === "prev" ) {
        this.currentStep = this.currentStep-1
      }
    },
    setOption(optionid,type) {
      for (let i = 0; i < this.preguntas.length; i++) {
        for (let e = 0; e < this.preguntas[i].content.length; e++) {
          if (this.preguntas[i].content[e].id === optionid) {
            this.planet[type] = this.preguntas[i].content[e][type];
          }
        }
      }
    },
  }
}
</script>

<style>
html {
  font-family: 'Nunito', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif;  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  background-color: #012e42;
  color: #eee8d3;
  font-size: 1.5rem;
  margin: 0;
}
a { color: aquamarine; }
a:hover { opacity: .8; }

button {
  background-color: aquamarine;
  border: 0;
  border-radius: .3rem;
  color: #012e42;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 140px;
  padding: .5rem 1rem;
}
button:hover { 
  opacity: .8;
}
audio {
  display: block;
  margin: 2rem auto;
}
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1rem;
  text-align: center;
}
.title {
  display: block;
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.intro {
  max-width: 720px;
}
input[type="radio"] {
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
}
.questions-form {
  display: flex;
  flex-wrap: wrap;
}
.question-wrapper {
  display: none;
}
.question-wrapper.active {
  display: block;
}
.question-wrapper p {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
}
.question-wrapper div label {
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: .5rem;
  padding: .5rem;
}
.question-wrapper div label:hover {
  color: aquamarine
}
.buttons {
  margin: 3rem auto;
}
.buttons button {
  margin: .5rem;
}
.planeta-final {
  margin: 4rem auto;
}
.textarea-content {
  margin-bottom: 3rem;
  position: relative;
}
.textarea-content.active:after {
  background-color: rgba(0,0,0,.6);
  position: absolute;
  top: 0;
  left: 0;
  content: "loading..";
  height: 100%;
  width: 100%;
}
.nombre {
  border: 1px solid #001b28;
  border-radius: .3rem;
  font-size: 1.2rem;
  margin-bottom: .5rem;
  padding: .5rem;
}

</style>

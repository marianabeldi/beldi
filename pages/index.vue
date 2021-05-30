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
            <svg ref="planetRef" class="planeta-final" viewBox="0 0 160 160" :width="planet.size" :height="planet.size" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" :color="planet.color">
              <defs>
                <g id="planeta" transform="translate(-80, -80)"><path d="M46.35 48.67c-13.15 15-16.74 40.92-.76 59.29 19.69 22.63 58.93 22.1 75.54-.35 14.8-20 14-47-4.29-62.84-19.32-16.71-53.32-15.71-70.49 3.9z"/><path d="M44.78 44.85C30.7 61.43 27.74 86 39.06 104.93c10.72 17.91 32.82 26.67 53.1 23.64 21.26-3.17 36.39-18.87 41-39.66 4.75-21.5-4.47-43.94-24.21-54.28-20.55-10.76-48.41-7.21-64.17 10.22-2.42 2.67 0 11.12 3.15 7.64C72 25.84 128.05 36.3 128.53 76.76c.22 18.34-11.53 35.3-28.91 41.05-15.6 5.17-34.21 2.12-47-8.3-17.55-14.28-19.19-39.93-4.68-57a5.93 5.93 0 00.9-6.14c-.66-1.37-2.61-3.24-4.06-1.52z"/></g>
              </defs>
              <pattern id="pat1" width="120" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(10) skewX(30) scale(1 0.8)">
                <path d="M1.4 13.6c45.8-1 72.3.2 117.9 3.4V6c0-.9.6-1.9 0-2.5-.6-.6.8-.7 0-.7C73.3-.5 47 1.1 1.4 0v13.6zM1.4 38c8.6-.3 17.1-.6 25.7-.2 8.3.3 16.6 1.2 24.9 1.8 16 1 32 .9 48 .5 6.4-.2 12.9-.4 19.3-.8 1.9-.1 1.9-3.1 0-3a654.3 654.3 0 01-64.3.5c-8.4-.4-16.7-1.4-25.1-1.8-9.5-.5-19-.3-28.5.1-1.9 0-1.9 3 0 2.9zM1.4 52.3c44.2.9 73.8 1.7 117.9-1.6.2 3.9-.2 7.8 0 11.6-44.2-1.5-73.9 3.9-117.9-2-.4-1.7 0-8 0-8z" fill="currentColor"/>
              </pattern>
          <pattern id="pat2" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(18) skewX(20) scale(1 0.5)">
                <path d="M105.1 27.9c-3.8-6-13.6 13.1-15.4 9S82.3 27.6 78.1 26c-5.3-2-10.5 2.8-14 7.2s-5.5 9.3-10.9 7.6c-6.1-1.9-7.7-11.1-13.9-12.8-3.7-1-7.5 1.2-10.4 3.8s-6.6 8.6-10.2 9.8c-6.6 2.2-9.8-9.5-9.1-16.4 0 0-21.7 24.2-.1 46.5 2.4 2.4 6.3-13 9.6-13.4 5.7-.7 12.4 13 18 13 5.7 0 13.1-14.8 19-14.9 4.9-.1 13.3 13.7 18.8 13.1 4.9-.6 12.8-14.2 16.4-14.1 3.1.1 9.8 10.1 12.9 11.7 0 0 11.8-21.9.9-39.2z" fill="currentColor"/>
                <path d="M15.8 25.5c.9-2.7 3.8-3.7 6.3-2.4 2 1.1 2.3 4.2.8 5.8-2.8 3-8 .2-7.1-3.7.3-1.2-1.1-2-1.4-.6-.5 2.1.1 4.9 1.8 6.3 2.6 2.3 7 1.6 8.5-1.5 1.2-2.5.9-6.5-1.6-8.1-3.3-2.2-7.3-.6-8.6 3.1-.3.9.8 2.4 1.3 1.1zM88.9 64.4c2.7-.5 6.2 1.6 5.3 4.7a4.2 4.2 0 01-5.8 2.6c-3.9-1.8-2.7-6.3.7-7.4.9-.3.6-2.5-.4-2.1-5.7 1.8-5.6 10.8.5 12.1 3.4.7 6.5-2.5 6.6-5.8.1-3.7-3.2-7.1-7-6.3-.9.1-.8 2.4.1 2.2zM19.8 92.4c5.2-1.9 11-6.2 16.6-6.3 2.4 0 4.9 1.5 7.1 2.3l9.3 3.3c7.5 2.4 13.3-1.7 19.9-4.5 7.8-3.4 15.8 1.6 22.2 6.1 1 .7 1.4-1.4.7-1.9-4.9-3.4-12.1-8.4-18.4-7.9-3.8.3-7.4 2.8-10.8 4.4a17.7 17.7 0 01-14.2 1.4c-3.4-1.1-6.7-2.4-10-3.6-2-.8-3.8-1.9-6-1.8-5.8.1-11.7 4.4-17 6.4-.7.3-.4 2.5.6 2.1zM13.6 6.3a24 24 0 0021.7 3.3c3.8-1 7.4-2.5 11.1-4.1 2.5-1 5.1-2.5 7.9-2.5 7.7 0 14.3 5.5 22 5.8 7.3.4 16.2-1.5 21.7-6.7.7-.6.1-2.7-.8-1.9-5.7 5.5-15.5 7.2-23.1 6.3C67.2 5.7 61.2 1 54.2.8c-4.8-.1-9.7 3.4-14 5-8.7 3.3-18 4.5-25.9-1.4-1-.7-1.5 1.4-.7 1.9z" fill="currentColor"/>
              </pattern>
          <pattern id="pat3" width="55" height="70" patternUnits="userSpaceOnUse">
                <path d="M.3 73.1C28.9 48.2 58.6 24.6 88.5 1.4c.3-.2.1-1.6-.2-1.4C57.9 22.6 28.6 47 .1 72c-.2.2 0 1.3.2 1.1z" fill="currentColor" stroke="currentColor" stroke-width="7"/>
              </pattern>
            <pattern id="pat4" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(30) skewX(0) scale(2 1.5)">
                <path fill="currentColor" d="M7.5 16.1c.3 0 .5 0 .8-.1.3 0 .3-.5.3-.7 0-.2-.1-.7-.3-.7-.3 0-.5 0-.8-.1-.1 0-.2.1-.2.2-.1.2-.1.4-.1.5 0 .2 0 .4.1.5 0 .2.1.4.2.4zM23.6 26.9c-.2.2-.3.4-.5.6-.3.3-.1 1.8.4 1.3.2-.2.3-.4.5-.5.3-.4.1-1.8-.4-1.4-.1.2-.3.4-.5.6-.3.3 0 1.7.3 1.4l.5-.5c.5-.5.2-2.1-.3-1.5zM19.8 19.8c.2 0 .2-.8 0-.8-.3 0-.3.8 0 .8zM9.1 27.8c.1 0 .1-.4 0-.4-.1-.1-.1.4 0 .4zM18.9 4.5c.4 0 .4-1.3 0-1.3s-.4 1.3 0 1.3zM10 29.7c.3 0 .3-.9 0-.9-.4-.1-.3.9 0 .9zM5.9 9.9c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM1 24.6c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM23.8 12.5c.3 0 .3-.9 0-.9s-.3.9 0 .9zM10 1.2c.4 0 .3-1.2 0-1.2-.4 0-.4 1.2 0 1.2zM13.2 16.4c1 0 .9-2.2-.1-2.2-.9 0-.9 2.2.1 2.2zM11.6 10c.3 0 .2-.9 0-.9-.3 0-.3.9 0 .9zM.1 2.5c.2 0 .2-.6 0-.6s-.1.6 0 .6zM13.2 25.7c.4 0 .4-1.2 0-1.2s-.4 1.2 0 1.2zM7.5 23.8c.2 0 .2-.6 0-.6s-.2.6 0 .6zM.1 17.2c.1 0 .1-.5 0-.5s-.1.5 0 .5z"/>
              </pattern>
            <pattern id="pat5" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(20) scale(1)">
                <path fill="currentColor" d="M1.5 6.1c2 0 1.9-4.5-.1-4.5-1.9 0-1.9 4.5.1 4.5zM9.4 14c2 0 1.9-4.5-.1-4.5S7.4 14 9.4 14zM23 14c2 0 1.9-4.5-.1-4.5S21 14 23 14zM12.2 24.7c2 0 1.9-4.5-.1-4.5-1.9 0-1.8 4.5.1 4.5zM3.2 22.5c2 0 1.9-4.5-.1-4.5-2 .1-1.9 4.5.1 4.5zM15.6 4.5c2 0 1.9-4.5-.1-4.5s-1.9 4.5.1 4.5z"/>
              </pattern>
                <pattern id="pat6" width="54" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(14) scale(1.4) skewX(-8)">
                <path d="M19.4 9.5c.8 1.8-.5 4.2-2.1 5.5-1.2.9-2.8 1.4-3.8 2.6-1.3 1.6-1 4-1.9 5.9-1.2 2.5-4.5 3.4-6.8 2.2s-3.6-4-3.7-6.7c0-1.5.3-3.1.2-4.6C1.1 12.2 0 10.3 0 8.1c0-3.3 3.1-6.4 6.3-6.3 3 .2 12 5.2 13.1 7.7zM36.8 45.6c-2.2-2-2.7-6.1-.7-8.3 1.1-1.3 3-1.6 4.3-2.8 1.2-1.2 1.7-3.1 3.2-3.9 1.7-1 4-.1 5 1.5 1.1 1.6 1.6 5.8 0 7.7-1.3 1.5-2.7.8-3.5 1.8-.6.8-.4 1.9-.7 2.9-.3 1.4-3.5 5-7.6 1.1zM36.7.5c2.8-.7 6.1-.9 7.8 1 1.7 1.9 1.2 5.1 3.3 6.6.8.5 1.8.8 2.4 1.5.7.8.8 2.7.2 3.7-.6 1-4.6 4.4-7.5 4.2-2.5-.2-3.9-2.4-4.8-4.4-.7-1.6-1.5-3.2-3.2-3.9-1.1-.4-2.3-.4-3.5-.6-2.3-.4-4.9-5.7 5.3-8.1zM24.7 44.2c-.2 2.4-1.8 3.2-3.4 3.5s-3.2-.1-4.7-.4-3.7-.6-6.2.4c-1.6.6-4-1.1-5-2.4-1-1.3-1.2-3.2-.4-4.5.9-1.5 2.8-1.9 4.2-3.1 1.5-1.3 3.3-3.9 5.9-2.3 1.9 1.1 2.9 3.2 4.4 4.9s5.4 1.2 5.2 3.9zM30 29.8c2.7-.9 4.9-4 4.3-6.8-.6-2.9-3.8-4.8-6.6-4.5-1.4.1-2.7.6-3.8 1.4a4.4 4.4 0 00-1.6 3.5c-.1 1.5.2 3.1 1 4.4a5 5 0 002.6 2.1c1.3.5 2.8.3 4.1-.1.8-.2 1.3-1.1 1-1.8-.2-.8-1-1.3-1.8-1l-.8.2-.4.1c.4-.1 0 0 0 0H27.1h.1-.2l-.5-.1s.3.2.1 0l-.2-.1-.2-.1c-.2-.1.3.3.1 0l-.4-.4.1.1-.1-.2-.2-.4-.1-.2c-.1-.3.1.4 0 .1l-.2-.5-.2-.8c-.1-.4 0 .4 0-.1v-.4-.7-.1c0-.4-.1.3 0-.1l.1-.3c.1-.2 0-.1 0 0l.1-.2.2-.3c-.2.3 0 0 0 0l.2-.2c.2-.3-.3.2 0 0l.6-.3c.1 0 .4-.2 0 0l.4-.1.7-.2c.1 0 .4-.2 0 0h1c.4 0-.3-.1.1 0l.5.1.4.1c-.3-.1.1 0 .1.1l.6.4.1.1.3.3.1.1.3.4.2.3.1.2.1.3V24v.2c0 .1-.1.4 0 .1l-.1.5-.1.3-.1.2-.5.7-.1.1-.4.4-.3.2-.2.1-.3.2c-.2.1-.1.1 0 0l-.2.1c-.7.2-1.3 1.1-1 1.8.3.6 1.1 1.2 1.9.9z" fill="currentColor"/>
                <!-- <path d="M.3 7c-.3-2.8 2.4-5.2 5-5.2 2.4 0 4.4 1.6 5.1 3.8.1.4.4-1.2.3-1.5-1-3-4.4-5.1-7.5-3.6C.7 1.8-.3 4.7.1 7.3c.1.8.3.1.2-.3z" :fill="planet.color"/> -->
              </pattern>
              <g transform="translate(80, 80)">
                <use xlink:href="#planeta" :fill="planet.color"/>
                <use xlink:href="#planeta" :fill="planet.texture" :color="planet.color" style="mix-blend-mode: multiply;"/>
              </g>
                <g v-html="planet.aro"></g>
                <g v-html="planet.satelite"></g>
            </svg>
            <div class="textarea-content" :class="{active: sendingFeedback}">
              <form ref="submitFeedback" name="submit-to-google-sheet">
                <input ref="planetInput" type="hidden" name="svg">
                <input class="nombre" name="nombre" placeholder="Tu nombre (optional)">
                <button ref="btnSubmit" type="submit" @click.prevent="feedbackSubmit()">Enviar »</button>
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
              aro: '<path fill="#eee9d8" d="M158.2 32.2c2.3 3.9-.2 7.2-2.5 10a137.4 137.4 0 01-23.6 23.2c-18.4 14.4-63 46.8-101.9 65a106.3 106.3 0 01-19.3 7.1c-3 .7-6.3.8-8.2-1.2-1.7-1.8-1.2-5-.2-7 3.6-7.4 18-21 30.6-30.7.8-.5 1.6-1.6 2.4-.6s-.5 1.7-1.2 2.2c-8.7 6.7-10.7 9-17.7 15.5-3.4 3.4-14 13.5-10.8 17.1 2 2.6 13.4-.8 25.3-6.7A631.2 631.2 0 00131 61c8-6.8 16.8-14 22.6-23 2-3.1 1.3-5.7-3.2-4.6-9 1.9-17.2 5.2-25 8.4-3.5 1.4-4.3 2-4.7 1-.3-.7 1-1 4.3-2.6 5.7-2.5 10.4-4.5 16.3-6.7 5.3-1.6 14.3-5.7 16.9-1.3z"/>',
            },
            {
              id: "tranquilo",
              value: false,
              aro: "",
            },
            {
              id: "ns/nc",
              value: false,
              aro: '<path fill="none" stroke="#eee9d8" stroke-linecap="round" stroke-linejoin="round" d="M36.3 102.4a209 209 0 00-17.6 17.2c-3.2 3.6-13.2 14.4-9.8 17.8 2.3 2.4 13.4-1.7 25-8.4 34-19.8 80-55.7 95.6-71.2 7.6-7.2 16-15 21.1-24.4 1.8-3.2 1-5.6-3.5-4.3-8.8 2.4-20.5 8-28.1 11.7"/><path fill="none" stroke="#eee9d8" stroke-linecap="round" stroke-linejoin="round" d="M37.6 104.8c-4 3.4-26.7 25.8-23.8 28.2 2.1 2.3 11.6-3.8 22.3-10A584.4 584.4 0 00125 56.8C132.1 50 139.8 43 144.8 36c1.6-3-.5-3.7-4.6-1.8-7.2 3-12 5.3-19.1 8.8"/><path fill="none" stroke="#eee9d8" stroke-linecap="round" stroke-linejoin="round" d="M117.6 39.5c5.5-2.8 14.8-7.2 20.4-9.7 5.3-1.9 14-6.6 16.8-2.3 2.6 3.7.3 7.2-1.8 10.1a137.6 137.6 0 01-22.1 24.6c-17.5 15.6-60 50.6-97.7 71.2a105 105 0 01-18.8 8.3c-3 .8-6.2 1.2-8.3-.7-1.9-1.6-1.5-4.8-.6-7 3-7.6 18.3-23.4 30.1-33.7"/>',
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
              satelite: '<g transform="translate(20, 10)"><path fill="#fff" d="M16.3 48.5c3.7 1.8 9.1 1.3 11.2-2.4 2.5-4.6.3-8.8-3.7-10.6s-8.7 0-10.4 3c-2 3.4-1.3 7.9 3 10z"/><path fill="#fff" d="M16 50.6c4.7 2.1 10.6 1.2 13-3.7a10 10 0 00-4-13.2c-4.7-2.5-11-.7-13.2 4.2A9.8 9.8 0 0016 50.6c1.8 1 2.3-3.4.7-4.3-3-1.6-3.9-5-1.2-7.5a7.7 7.7 0 019-.6c3 2 3.5 6.1.1 8.1-2.4 1.5-5.5 1.1-8 0-1.9-.8-2.3 3.6-.6 4.3z"/><path fill="#012e42" d="M19.6 38a.6.6 0 00.7.4.6.6 0 00.2-1.1c-.5-.2-1.1.2-1 .7M14.5 43a1 1 0 10-.7-1.6 1 1 0 000 1.5 1 1 0 00.7.2zM17.8 50a.6.6 0 00.8-.4.6.6 0 00-.6-.7.6.6 0 00-.3 1M23 37.7a.9.9 0 001.2.3.8.8 0 00.3-1 .8.8 0 10-1.5.7M16 36.6a1.2 1.2 0 01.8-1.8 1.1 1.1 0 11-.7 1.9M14 46.2a.5.5 0 00.9 0 .5.5 0 00-.5-.8c-.3.1-.6.3-.4.7M23.8 46c0 .3.4.4.5.2a.3.3 0 00-.2-.5c-.2 0-.3 0-.3.3M20.4 47.2a.5.5 0 100-.8.5.5 0 000 .8M26.3 46.9a.5.5 0 00.7-.1.5.5 0 00-.2-.8.6.6 0 00-.7.3.5.5 0 00.2.6zM21.3 36a.4.4 0 00.4.5c.5 0 .5-.8 0-.9a.4.4 0 00-.4.4M13.1 39.9a.5.5 0 00.8-.2c0-.3-.3-.6-.6-.5a.4.4 0 00-.2.7M23.4 34.7a.3.3 0 00.3-.4.3.3 0 00-.4 0s-.2.2.1.4zM20.3 49.7c0 .3.3.4.5.4a.3.3 0 00.1-.6.4.4 0 00-.6.2M19.7 33.9a.5.5 0 00.8.4.5.5 0 00-.1-.8c-.4-.1-.7 0-.7.4M23.1 49.8a.4.4 0 100-.1M17.8 40.3c.3.2.9-.1.8-.5a.5.5 0 00-1-.1s-.2.4.1.6zM27 44a.4.4 0 00.7.2.4.4 0 00.2-.6c-.3-.5-1-.1-.8.4" opacity=".5"/></g>',
            },
            {
              id: "pesimista",
              value: false,
              satelite: '<path fill="#e99468" d="M154 92.3c.1-1.6.2-3.6-.5-5a5 5 0 00-3.5-3c-2-.2-4.4.3-5 3.2-.5 1.6-.9 5-1.3 7-2.2 9-5.8 13.3-9 20.2a27.6 27.6 0 008.8-6.6l-2.8 10c2.3-1.6 5.2-4.8 8.3-9.6a33.5 33.5 0 005-16.2z"/><path fill="#db6c5a" d="M147.7 92.7a3.2 3.2 0 01-1.5-4.6 3.6 3.6 0 015.7-.6 3.4 3.4 0 01-1.2 5.2 4 4 0 01-3 0z"/><path fill="#ebd186" d="M150.3 96.8c-1 4.4-2.2 8.3-4.8 12l.4 1 .7-6.1c0-.2 0-1.6-.4-1.3a18.4 18.4 0 01-5.3 4l.3 1.8a37.6 37.6 0 005.2-13.6c.1-.5-.3-2.1-.6-1a39 39 0 01-5 13c-.2.2-.2 2 .3 1.6a18.4 18.4 0 005.3-4.1l-.4-1-.7 6.1c0 .2.2 1.4.5 1a28.9 28.9 0 004.6-13.2c0-.1 0-.4-.1-.2z"/>',
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
      this.$router.push({name: 'gallery'})
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

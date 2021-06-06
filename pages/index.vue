<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Espejismos
      </h1>
      <template v-if="currentStep === 0">
        <section class="intro">
          <p><strong>¡Hola!</strong> Nosotros somos <a href="https://www.instagram.com/beldimusic/" target="blank">BELDI</a>, te presentamos nuestro próximo single <b>Espejismos</b> y te invitamos a ser parte de la nueva tapa:</p>
          <p><small> 🎧  Te recomendamos escucharlo con auriculares  🎧</small></p>
          <audio controls>
            <source src="/espejismos.mp3" type="audio/mpeg">
            Tu browser no soporta elementos de audio.
          </audio>
          <p>Después de escucharlo clickeá <b>'empezar'</b> para contestar 5 preguntas sencillas.<br>
            Aparecerá tu planeta al final de la encuesta y podrás elegir enviarlo a la <nuxt-link to="/gallery">galería</nuxt-link> junto a tu nombre y tu mail.</p>
          <p>Seleccionaremos por sorteo los planetas que formarán parte del arte de tapa. Sus creadores recibirán de regalo remeras, gorras y bouchers de cerveza en Cervelar Palermo.</p>
          <div class="buttons">
            <button @click.prevent="setStep('next')">Empezar ›</button>
          </div>
        </section>
      </template>
      <section class="form" :class="{active: currentStep > 0 && currentStep < 6}">
        <form class="questions-form">
          <div class="question-wrapper" :class="{active: currentStep === i+1, cols: currentStep === 1 || 2}" :data-caca="i" v-bind:key="pregunta.id" v-for="(pregunta,i) in preguntas">
            <p class="pregunta">{{pregunta.label}}</p>
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
          <p>¿Querés enviarlo y publicarlo en la galería?</p>
            <svg ref="planetRef" class="planeta-final" viewBox="0 0 160 160" :width="planet.size" :height="planet.size" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible">
              <defs>
                <g id="planeta" transform="translate(-80, -80)"><path d="M46.35 48.67c-13.15 15-16.74 40.92-.76 59.29 19.69 22.63 58.93 22.1 75.54-.35 14.8-20 14-47-4.29-62.84-19.32-16.71-53.32-15.71-70.49 3.9z"/><path d="M44.78 44.85C30.7 61.43 27.74 86 39.06 104.93c10.72 17.91 32.82 26.67 53.1 23.64 21.26-3.17 36.39-18.87 41-39.66 4.75-21.5-4.47-43.94-24.21-54.28-20.55-10.76-48.41-7.21-64.17 10.22-2.42 2.67 0 11.12 3.15 7.64C72 25.84 128.05 36.3 128.53 76.76c.22 18.34-11.53 35.3-28.91 41.05-15.6 5.17-34.21 2.12-47-8.3-17.55-14.28-19.19-39.93-4.68-57a5.93 5.93 0 00.9-6.14c-.66-1.37-2.61-3.24-4.06-1.52z"/></g>
              </defs>
              <pattern v-if="planet.texture === 'url(#pat1)'" id="pat1" width="120" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(10) skewX(30) scale(1 0.8)">
                <path d="M1.4 13.6c45.8-1 72.3.2 117.9 3.4V6c0-.9.6-1.9 0-2.5-.6-.6.8-.7 0-.7C73.3-.5 47 1.1 1.4 0v13.6zM1.4 38c8.6-.3 17.1-.6 25.7-.2 8.3.3 16.6 1.2 24.9 1.8 16 1 32 .9 48 .5 6.4-.2 12.9-.4 19.3-.8 1.9-.1 1.9-3.1 0-3a654.3 654.3 0 01-64.3.5c-8.4-.4-16.7-1.4-25.1-1.8-9.5-.5-19-.3-28.5.1-1.9 0-1.9 3 0 2.9zM1.4 52.3c44.2.9 73.8 1.7 117.9-1.6.2 3.9-.2 7.8 0 11.6-44.2-1.5-73.9 3.9-117.9-2-.4-1.7 0-8 0-8z" :fill="planet.color"/>
              </pattern>
              <pattern v-if="planet.texture === 'url(#pat2)'" id="pat2" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(18) skewX(20) scale(1 0.5)">
                <path d="M105.1 27.9c-3.8-6-13.6 13.1-15.4 9S82.3 27.6 78.1 26c-5.3-2-10.5 2.8-14 7.2s-5.5 9.3-10.9 7.6c-6.1-1.9-7.7-11.1-13.9-12.8-3.7-1-7.5 1.2-10.4 3.8s-6.6 8.6-10.2 9.8c-6.6 2.2-9.8-9.5-9.1-16.4 0 0-21.7 24.2-.1 46.5 2.4 2.4 6.3-13 9.6-13.4 5.7-.7 12.4 13 18 13 5.7 0 13.1-14.8 19-14.9 4.9-.1 13.3 13.7 18.8 13.1 4.9-.6 12.8-14.2 16.4-14.1 3.1.1 9.8 10.1 12.9 11.7 0 0 11.8-21.9.9-39.2z" :fill="planet.color"/>
                <path d="M15.8 25.5c.9-2.7 3.8-3.7 6.3-2.4 2 1.1 2.3 4.2.8 5.8-2.8 3-8 .2-7.1-3.7.3-1.2-1.1-2-1.4-.6-.5 2.1.1 4.9 1.8 6.3 2.6 2.3 7 1.6 8.5-1.5 1.2-2.5.9-6.5-1.6-8.1-3.3-2.2-7.3-.6-8.6 3.1-.3.9.8 2.4 1.3 1.1zM88.9 64.4c2.7-.5 6.2 1.6 5.3 4.7a4.2 4.2 0 01-5.8 2.6c-3.9-1.8-2.7-6.3.7-7.4.9-.3.6-2.5-.4-2.1-5.7 1.8-5.6 10.8.5 12.1 3.4.7 6.5-2.5 6.6-5.8.1-3.7-3.2-7.1-7-6.3-.9.1-.8 2.4.1 2.2zM19.8 92.4c5.2-1.9 11-6.2 16.6-6.3 2.4 0 4.9 1.5 7.1 2.3l9.3 3.3c7.5 2.4 13.3-1.7 19.9-4.5 7.8-3.4 15.8 1.6 22.2 6.1 1 .7 1.4-1.4.7-1.9-4.9-3.4-12.1-8.4-18.4-7.9-3.8.3-7.4 2.8-10.8 4.4a17.7 17.7 0 01-14.2 1.4c-3.4-1.1-6.7-2.4-10-3.6-2-.8-3.8-1.9-6-1.8-5.8.1-11.7 4.4-17 6.4-.7.3-.4 2.5.6 2.1zM13.6 6.3a24 24 0 0021.7 3.3c3.8-1 7.4-2.5 11.1-4.1 2.5-1 5.1-2.5 7.9-2.5 7.7 0 14.3 5.5 22 5.8 7.3.4 16.2-1.5 21.7-6.7.7-.6.1-2.7-.8-1.9-5.7 5.5-15.5 7.2-23.1 6.3C67.2 5.7 61.2 1 54.2.8c-4.8-.1-9.7 3.4-14 5-8.7 3.3-18 4.5-25.9-1.4-1-.7-1.5 1.4-.7 1.9z" fill="currentColor"/>
              </pattern>
              <pattern v-if="planet.texture === 'url(#pat3)'" id="pat3" width="55" height="70" patternUnits="userSpaceOnUse">
                <path d="M.3 73.1C28.9 48.2 58.6 24.6 88.5 1.4c.3-.2.1-1.6-.2-1.4C57.9 22.6 28.6 47 .1 72c-.2.2 0 1.3.2 1.1z" :fill="planet.color" :stroke="planet.color" stroke-width="7"/>
              </pattern>
              <pattern v-if="planet.texture === 'url(#pat4)'" id="pat4" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(30) skewX(0) scale(2 1.5)">
                <path :fill="planet.color" d="M7.5 16.1c.3 0 .5 0 .8-.1.3 0 .3-.5.3-.7 0-.2-.1-.7-.3-.7-.3 0-.5 0-.8-.1-.1 0-.2.1-.2.2-.1.2-.1.4-.1.5 0 .2 0 .4.1.5 0 .2.1.4.2.4zM23.6 26.9c-.2.2-.3.4-.5.6-.3.3-.1 1.8.4 1.3.2-.2.3-.4.5-.5.3-.4.1-1.8-.4-1.4-.1.2-.3.4-.5.6-.3.3 0 1.7.3 1.4l.5-.5c.5-.5.2-2.1-.3-1.5zM19.8 19.8c.2 0 .2-.8 0-.8-.3 0-.3.8 0 .8zM9.1 27.8c.1 0 .1-.4 0-.4-.1-.1-.1.4 0 .4zM18.9 4.5c.4 0 .4-1.3 0-1.3s-.4 1.3 0 1.3zM10 29.7c.3 0 .3-.9 0-.9-.4-.1-.3.9 0 .9zM5.9 9.9c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM1 24.6c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM23.8 12.5c.3 0 .3-.9 0-.9s-.3.9 0 .9zM10 1.2c.4 0 .3-1.2 0-1.2-.4 0-.4 1.2 0 1.2zM13.2 16.4c1 0 .9-2.2-.1-2.2-.9 0-.9 2.2.1 2.2zM11.6 10c.3 0 .2-.9 0-.9-.3 0-.3.9 0 .9zM.1 2.5c.2 0 .2-.6 0-.6s-.1.6 0 .6zM13.2 25.7c.4 0 .4-1.2 0-1.2s-.4 1.2 0 1.2zM7.5 23.8c.2 0 .2-.6 0-.6s-.2.6 0 .6zM.1 17.2c.1 0 .1-.5 0-.5s-.1.5 0 .5z"/>
              </pattern>
              <pattern v-if="planet.texture === 'url(#pat5)'" id="pat5" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(20) scale(1)">
                <path :fill="planet.color" d="M1.5 6.1c2 0 1.9-4.5-.1-4.5-1.9 0-1.9 4.5.1 4.5zM9.4 14c2 0 1.9-4.5-.1-4.5S7.4 14 9.4 14zM23 14c2 0 1.9-4.5-.1-4.5S21 14 23 14zM12.2 24.7c2 0 1.9-4.5-.1-4.5-1.9 0-1.8 4.5.1 4.5zM3.2 22.5c2 0 1.9-4.5-.1-4.5-2 .1-1.9 4.5.1 4.5zM15.6 4.5c2 0 1.9-4.5-.1-4.5s-1.9 4.5.1 4.5z"/>
              </pattern>
              <pattern v-if="planet.texture === 'url(#pat6)'" id="pat6" width="98" height="86" patternUnits="userSpaceOnUse" patternTransform="rotate(-30) scale(.8 .5) skewY(-10)">
                <path d="M.5.8c13.2.2 26.5.8 39.7 1.3A445.7 445.7 0 0097.7.8c.5 0 .5-.8 0-.8C84.5 1 71.3 1.7 58 1.7c-10.9 0-21.8-.5-32.7-1L.5 0C0 0 0 .7.5.8zM97.7 10.4c-13.4-.4-26.8-.8-40.2-.8-11 0-22 .2-33 .4l-24.1.4c-.5 0-.5.8 0 .8l38.9-.7c11.1-.2 22.2-.2 33.3 0l25 .7c.6 0 .6-.8.1-.8zM97.7 86.9c-13.4-.4-26.8-.8-40.2-.8-11 0-22 .2-33 .4l-24.1.4c-.5 0-.5.8 0 .8l39-.7c11.1-.2 22.3-.2 33.4 0l25 .7c.4-.1.4-.8-.1-.8zM.5 77.2c13.2.3 26.5.8 39.7 1.3a445.7 445.7 0 0057.5-1.3c.5 0 .5-.8 0-.8-13.2 1-26.4 1.7-39.7 1.7-10.9 0-21.8-.5-32.7-1-8.3-.3-16.6-.6-24.9-.7-.4 0-.4.8.1.8z" :fill="planet.color"/><path fill="none" :stroke="planet.color" stroke-miterlimit="10" stroke-width=".8" d="M97.7 28.4c-6.8-.4-14.4 8.5-16.2 6a23.7 23.7 0 00-11.6-6.6c-5.3-1.2-10.5 1.7-14 4.4s-5.5 5.6-10.9 4.6c-6.1-1.1-7.7-6.7-13.9-7.8v0c-3.7-.6-12 7.5-15.6 8.3-6.6 1.3-6.9-8.4-15.2-8.9M.4 57.9c3.7 0 10.3-5.1 13.6-5.3 5.7-.4 9.4 7.7 15 7.7v0c5.7 0 13.1-8.8 19-8.8 4.9 0 13.3 8.1 18.8 7.7 4.9-.3 12.8-8.4 16.4-8.3 3.1 0 8.3 6.9 14.6 7.1"/><path d="M57.4 36.4l-.5.6c-.3.3-.1 1.8.4 1.3l.5-.5c.3-.4.1-1.8-.4-1.4l-.5.6c-.3.3 0 1.7.3 1.4l.5-.5c.5-.4.1-2-.3-1.5zM33.1 52.7c.2 0 .1-.5 0-.5-.2 0-.2.5 0 .5zM67.4 43.1c.3 0 .3-.8 0-.8s-.3.8 0 .8zM39.6 34.7c.1 0 .1-.4 0-.4s-.1.4 0 .4zM54.3 50.6c.2 0 .2-.7 0-.7-.2-.1-.2.7 0 .7zM37.2 40.3c.3 0 .3-.9 0-.9s-.3.9 0 .9zM22.4 52.5h.8c.2 0 .2-.4.2-.6 0-.2 0-.5-.3-.5h-.8c-.2 0-.3.4-.2.6 0 .1.1.5.3.5zM26.6 53c.3 0 .3-1 0-1-.4 0-.4 1 0 1zM4.5 48c.3 0 .3-.9 0-.9s-.3.9 0 .9zM15.9 39.8c.2 0 .2-.8 0-.8s-.2.8 0 .8zM9.4 40.8c.4 0 .3-1.2 0-1.2-.4 0-.4 1.2 0 1.2zM26.6 37.2c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM42.9 43.1c.3 0 .3-.9 0-.9s-.3.9 0 .9zM30.6 41.1c.5 0 .5-1.8 0-1.8s-.5 1.8 0 1.8zM81.3 47.2c.3 0 .3-1 0-1-.4.1-.3 1 0 1zM67.4 56.3h.8c.2 0 .2-.4.2-.5 0-.1 0-.5-.3-.5h-.8c-.2 0-.2.4-.2.6 0 0 .1.4.3.4zM77.2 38v-.5c-.2 0-.2.5 0 .5zM73.9 34.2c.3 0 .3-1 0-1s-.3 1 0 1zM89.4 35.7c.3 0 .2-.8 0-.8s-.2.8 0 .8zM90.3 49.5c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM45.6 47.9c1 0 .9-2.2-.1-2.2-.9-.1-.9 2.2.1 2.2zM55.1 45.3c.1 0 .1-.4 0-.4s-.1.4 0 .4zM40.6 49.9c.3 0 .2-.8 0-.8-.3-.1-.3.8 0 .8zM76 46.6c.3 0 .3-.8 0-.8-.3-.1-.2.8 0 .8zM8.6 51.1c.2 0 .2-.6 0-.6s-.2.6 0 .6zM5.3 39.8c.2 0 .2-.7 0-.7-.2-.1-.2.7 0 .7zM1.2 32.4c.2 0 .2-.6 0-.6-.2-.1-.2.6 0 .6zM61.9 41.8V41c0-.1 0-.5-.3-.5-.2 0-.2.4-.2.5v.8c0 .1.1.6.3.6.2 0 .2-.4.2-.6zM57.6 48.7c.2 0 .2-.7 0-.7-.2.1-.2.7 0 .7zM77.2 42.3c.3 0 .3-.9 0-.9s-.3.9 0 .9zM73.9 52.1c.3 0 .3-1 0-1s-.3 1 0 1zM53.5 47.1c.2 0 .2-.7 0-.7s-.2.7 0 .7zM70.6 35.5c.1 0 .1-.4 0-.4s-.1.4 0 .4zM19.2 47.9c1 0 .9-2.2-.1-2.2-.9-.1-.9 2.2.1 2.2zM37.2 53.6c.2 0 .2-.7 0-.7-.3 0-.3.7 0 .7zM59.2 53.8c.3 0 .3-1.1 0-1.1s-.3 1.1 0 1.1zM91.9 39.7c.2 0 .2-.7 0-.7-.2.1-.2.7 0 .7zM69.8 48.8c.3 0 .3-.9 0-.9s-.2.9 0 .9zM64.1 35.8c.3 0 .3-.9 0-.9s-.3.9 0 .9zM31.4 48.2c.4 0 .4-1.2 0-1.2-.4-.1-.4 1.2 0 1.2zM48.6 41.5c.3 0 .3-1 0-1s-.3 1 0 1zM1.4 55.5s.1 0 0 0l.2-.2v-.2-.2l-.1-.4-.2-.2H.9.8l-.2.2v.4l.1.4.2.2h.2l.2-.2v-.2-.2l-.1-.4-.2-.2H.8l-.2.2v.4l.1.4.2.2h.5s.1 0 0 0l.2-.2v-.2-.2l-.1-.4-.2-.2-.2.2v.4l.1.4.2.2zM87 41.4c.2 0 .2-.7 0-.7-.3 0-.3.7 0 .7zM95.7 52.4c.3 0 .3-1 0-1s-.3 1 0 1zM10.2 44.7c.2 0 .2-.8 0-.8s-.2.8 0 .8zM15.1 51.2c.2 0 .2-.7 0-.7s-.2.7 0 .7zM37.2 44.6c.2 0 .2-.7 0-.7-.3.1-.2.7 0 .7zM21 39.6c.2 0 .1-.5 0-.5-.2.1-.2.5 0 .5zM29 58.4v-.5c-.2 0-.2.5 0 .5zM25.7 45.5c.2 0 .2-.8 0-.8s-.2.8 0 .8zM33.1 36.8c.2 0 .2-.6 0-.6s-.2.6 0 .6zM55.1 41.3v0zM51.9 52.7c.2 0 .2-.5 0-.5s-.2.5 0 .5zM69.8 38.1c.2 0 .2-.6 0-.6s-.2.6 0 .6z" :fill="planet.color"/><g><path d="M97 40.4c.8 0 .8-1.9 0-1.9-.9-.1-.9 1.9 0 1.9zM69.8 32c.8 0 .8-1.9 0-1.9s-.8 1.9 0 1.9zM97 49.3c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM82.1 40.4c.8 0 .8-1.9 0-1.9-.9-.1-.9 1.9 0 1.9zM34.4 44.4c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM17.9 42.8c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM79.8 44.9c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM1.8 40.1c.6 0 .6-1.4 0-1.4s-.6 1.4 0 1.4zM65.2 47.1c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM5.3 44.4c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM73.9 40.4c.8 0 .8-1.9 0-1.9-.9-.1-.8 1.9 0 1.9zM85.7 47.7c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM63.6 54.2c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM38.6 48.5c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM67.8 52.6c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM93 47.1c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM70.7 54.2c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM26.6 56.5c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM91.9 38.1c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM93.8 33c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM93 52.6c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM11.1 51.2c.8 0 .8-1.9 0-1.9s-.8 1.9 0 1.9zM31.4 33.4c.8 0 .8-1.9 0-1.9-.9-.1-.8 1.9 0 1.9zM5.3 54.2c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM12.9 42.4c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM65.7 38.7c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM95 36.3c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM60.4 46.1c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM95 43.6c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM22.8 42.4c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM14.6 47.7c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM61.7 50.4c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM34.7 51.2c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM5.3 34.6c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM45.5 40.8c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM26.6 42.8c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM36.1 37.1c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM60.4 33.4c.8 0 .8-1.9 0-1.9-.9-.1-.8 1.9 0 1.9zM69.8 42c.8 0 .8-1.9 0-1.9s-.8 1.9 0 1.9zM77.2 36.3c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM89.4 43.6c.8 0 .8-1.9 0-1.9s-.8 1.9 0 1.9zM57.6 42.4c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM51.4 50.4c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM83.5 44.4c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM66.6 33c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM23.2 48.5c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM51.9 42c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM27.6 48.5c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM77.2 50.4c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM41.6 40.8c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM49.2 45.3c.8 0 .8-1.9 0-1.9-.9-.1-.8 1.9 0 1.9zM31.4 56.5c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM40.6 52.6c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM2 45.1c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM54.1 37.5c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM86.2 38.1c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9zM1.3 51.2c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM1.3 36.3c.8 0 .8-1.9 0-1.9-.9 0-.9 1.9 0 1.9zM71.6 46.1c.8 0 .8-1.9 0-1.9-.9 0-.8 1.9 0 1.9z" :fill="planet.color"/></g>
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
                <input class="input-text" name="nombre" placeholder="Nombre" required>
                <input class="input-text" name="email" type="email" placeholder="Email" required>
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
            color: "#d25b46",
          },
          {
            id: "tauro",
            value: false,
            color: "#f09d74",
          },
          {
            id: "geminis",
            value: false,
            color: "#fadb86",
          },
          {
            id: "cancer",
            value: false,
            color: "#a5c986",
          },
          {
            id: "leo",
            value: false,
            color: "#5d8f76",
          },
          {
            id: "virgo",
            value: false,
            color: "#335c64",
          },
          {
            id: "libra",
            value: false,
            color: "#adc6b9",
          },
          {
            id: "escorpio",
            value: false,
            color: "#7895a4",
          },
          {
            id: "sagitario",
            value: false,
            color: "#67a3c1",
          },
          {
            id: "capricornio",
            value: false,
            color: "#27689e",
          },
          {
            id: "acuario",
            value: false,
            color: "#992676",
          },
          {
            id: "piscis",
            value: false,
            color: "#c73f69",
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
      var exportsvg = this.$refs.planetRef.outerHTML
      var exportpat = this.planet.texture.replace("url(", "").replace(")", "").replace("#", "")
      var seconds = new Date().getTime() / 1000 | 0
      
      this.$refs.planetInput.value = exportsvg.replaceAll(exportpat, `${exportpat}-${seconds}`)
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
      window.scrollTo(0,0)
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
a { color: #a5c986; }
a:hover { color: #fadb86; }
b { color: #fadb86; }
h2 { font-size: 1.8rem; }
button {
  background-color: #a5c986;
  border: 0;
  border-radius: .3rem;
  color: #032b49;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 140px;
  padding: .5rem 1rem;
}
button:hover { 
  background-color: #fadb86;
}
audio {
  display: block;
  margin: 2rem auto;
}
.intro, .form.active, .your-planet {
  background-color: #032b49;
  border-radius: 4px;
  margin-bottom: 2rem;
  max-width: 690px;
  padding: .2rem 2rem 1.5rem;
}
.intro p {
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 1rem; 
  text-align: left;
}
.intro small {
  display: block;
  font-size: 1rem;
  text-align: center;
}
input[type="radio"] {
  margin-right: .8rem;
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
  display: flex;
  flex-wrap: wrap;
}
.question-wrapper div {
  flex: 1 1 50%;
}
.question-wrapper div.buttons {
  flex: 1 1 100%;
}
.question-wrapper p {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
  flex: 1 1 100%;
}
.question-wrapper div label {
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: .5rem;
  padding: .5rem;
}
.question-wrapper div label:hover {
  color: #a5c986
}
.buttons {
  margin: 3rem auto 0;
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
.input-text {
  border: 1px solid #032b49;
  border-radius: .3rem;
  font-size: 1.2rem;
  margin-bottom: .5rem;
  padding: .5rem;
}
@media (max-width: 48em) {
  body { font-size: 1.2rem;}
.intro, .form.active, .your-planet {
  padding: .2rem 1rem 1.5rem;
}
.question-wrapper div label {
    margin-bottom: 1rem;
    padding: .2rem 0;
    text-align: left;
}
input[type="radio"] {
    margin-right: .5rem;
}
.buttons {
    margin: 1.5rem auto 0;
}
  button {
    min-width: 110px;
    padding: .5rem;
  }
}
</style>

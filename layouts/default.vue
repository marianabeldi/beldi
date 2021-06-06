<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

html {
  font-family: 'Noto Sans JP', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif;  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  background: #032b49 url("/home-planets.svg");
  background-size: cover;
  color: #f2ead3;
  font-size: 1.4rem;
  margin: 0;
  position: relative;
}
body::before {
  content: '';
  background: url("/bg-noise.png");
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.container {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 2rem 1rem;
  text-align: center;
}
.title {
  display: block;
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
</style>

<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title"> beldi</h1>
      <h2>Todos los planetas</h2>
      <section class="all-planets">
          <div></div>
      </section>

    </div>
  </div>
</template>

<script>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  display: block;
  font-size: 6rem;
  font-weight: 300;
  letter-spacing: 1px;
}
.all-planets {
    display: grid;
}

</style>

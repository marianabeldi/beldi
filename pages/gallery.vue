<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title"> beldi</h1>
      <h2>Todos los planetas</h2>
      <section class="all-planets" v-if="!gettingData">
          <div v-for="(item, i) in gotData" :key="i">
            <svg v-html="item.svg" width="300" height="300"></svg>
            <p>by {{item.name}}</p>
          </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gettingData: true,
      gotData: []
    };
  },  
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetch("https://sheets.googleapis.com/v4/spreadsheets/1uO61cTI5r7mx0NrX5LJaXuzKAfbVIL-nPKUOEL0vTEY?key=AIzaSyDLhiXvMbj7DUfamL_WTFT7nBMBmcZdGts&includeGridData=true", {mode: 'cors'})
        .then(response => response.json())
        .then((data) => { 
          for (let e = 1; e < data.sheets[0].data[0].rowData.length; e++) {
            var newObj = {}
            newObj.name = data.sheets[0].data[0].rowData[e].values[0].formattedValue
            newObj.svg = data.sheets[0].data[0].rowData[e].values[1].formattedValue
            this.gotData.push(newObj)
          }
          this.gettingData = false
        });
      console.log(this.gotData)
    }
  },  
};
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
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}
.all-planets p {
  background-color: #001b28;
  font-size: 1rem;
}

</style>

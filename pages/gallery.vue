<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title"> beldi</h1>
      <h2>Todos los planetas</h2>
      <p class="disclaimer">Si tu planeta no aparece, refrescá la página</p>
      <section class="all-planets" v-if="!gettingData">
          <div class="planet" v-for="(item, i) in gotData.slice().reverse()" :key="i">
            <div v-html="item.svg" width="300" height="300"></div>
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
    setTimeout(() => this.getData(), 2000);
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

<style scoped>

.logo, h1, h2, .all-planets, .disclaimer {
  animation: 1s appear ease-in forwards;
  opacity: 0;
}
h1 {
  animation-delay: .5s;
}
h2 {
  animation-delay: 1s;
  margin-bottom: 2rem;
}
.disclaimer {
  animation-delay: 1.5s;
}
@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}
.all-planets {
  border-radius: 4px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .5rem;
}
.all-planets p {
  background-color: #001b28;
  font-size: 1rem;
}
.all-planets .planet {
  background-color: #032b49;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: .5rem;
  padding: 0 1rem;
}

</style>

<template>
    <div class="container">
      <h1>Available functionalities</h1>
      <ul v-for="func in funcs" v-bind:key="func" >
        <li>{{func.name}}</li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'Func',
  data () {
    return {
      funcs: ''
    }
  },
  mounted(){
    this.$http.get(process.env.API_URL+'/funcs')
      .then(response => {
        this.funcs = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>
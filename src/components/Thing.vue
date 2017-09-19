<template>
    <div>
      <h1></h1>
    </div>
</template>

<<script>
export default {
  name: 'Thing',
  data () {
    return {

    }
  },
  mounted(){
    this.$http.post(process.env.API_URL+'/things')
      .then(response => {
        this.things.push(response.data.thing);
        this.count += 1;
        Materialize.toast(response.data.message, '3000');
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

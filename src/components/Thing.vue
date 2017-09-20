<template>
    <div class="container">
      <h1>{{thing.name}}</h1>
      <thingform></thingform>
    </div>
</template>

<<script>
import ThingForm from './forms/ThingForm'

export default {
  name: 'Thing',
  components:{
    'thingform': ThingForm
  },
  data () {
    return {
      thing: ''
    }
  },
  mounted(){
    this.$http.get(process.env.API_URL+'/things/'+this.$route.params.id)
      .then(response => {
        this.thing = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

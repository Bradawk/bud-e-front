<template>
    <div>
        <div class="row">
          <form class="col s12" v-on:submit.prevent="saveThing">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" class="validate" v-model="thing.name">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" class="validate" v-model="thing.ip">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" class="validate" v-model="thing.mac">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <!--<select v-model="c.value" style="margin-top: 2%;" required>
                      <option value="gaussian"> Gaussian </option>
                      <option value="sigmoid"> Sigmoid </option>
                      <option value="polynomial"> Polynomial </option>
                </select>-->
                <input id="icon_telephone" type="text" class="validate" v-model="thing.type">
              </div>
              <div class="input-field col s6">
                <button class="btn waves-effect red lighten-2 waves-light"> SAVE </button>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ThingForm',
  data () {
    return {
      thing: '',
      func: [],
      load: ''
    }
  },
  mounted(){
    this.$http.get(process.env.API_URL+'/things/'+this.$route.params.id)
        .then(response => {
           this.thing = response.data;
           this.func = response.data.func;
        })
        .catch(function (error) {
            console.log(error);
        });
  },
  methods: {
    saveThing(){
      this.$http.put(process.env.API_URL+'/things/'+this.$route.params.id, {
        'ip': this.thing.ip,
        'mac': this.thing.mac,
        'name': this.thing.name,
        'type': this.thing.type,
        'id': this.thing._id
      })
        .then(response => {
          Materialize.toast(response.data.message, '3000');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <div class="postman">
      <label>Url</label>
      <input v-model="url" type="text">
      <button @click="getData">Click</button>
      <div v-show="loading">
          идет загрузка
      </div>
      <div>
        <code>
          {{response}}
        </code>
      </div>
  </div>
</template>
 
<script>


export default {
  name: 'postman',
  data(){
    return {
      url: 'http://10.4.29.72:85/WebTask/TestService',
      response: '',
      loading: false
    }
  },
  methods:{
    async getData(){
      this.loading = true;
      const body = {
          dob: '01.02.2022',
          doe: '05.05.2022',
      } 

      try {
          const request = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(body),
          });
          this.response = request.text();
      } catch (error) {
        console.log(error)
        this.response = error;
      }

      this.loading = false;
    
    }
  }
}
</script>





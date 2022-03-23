<template>
  <div id="app">
    <headerx brand="Avantage"/>
    <router-view />
  </div>
</template>
<script>
import Headerx from '@/components/Header'
import { mapActions } from "vuex";
export default {
  components:{
    Headerx
  },
  methods: {
    ...mapActions(["GetProducts"]),
    async fetchList() {
      try {
        let results = await this.GetProducts();
        this.carts = results;
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
     this.fetchList();
  },
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&display=swap');

#app {
  line-height: 1.8;
}

</style>

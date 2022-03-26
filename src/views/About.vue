<template>
  <section class="inner-section">
    <About :key="$t('title.about')+fU" :title="$t('title.about')" :content="about" />
  </section>
</template>

<script>
import About from "@/components/About";

export default {
  data() {
    return {
      carts: [],
      fU: 0
    };
  },
   components: {
    About,
   },
  computed: {
    about() {
      return this.$store.getters["ABOUT"]
    }
  },
  // methods: {
  //   ...mapActions(["GetProducts"]),
  //   async fetchList() {
  //     try {
  //       let results = await this.GetProducts();
  //       this.carts = results;
  //       console.log(results);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   },
  // },
  // mounted() {
  //    this.fetchList();
  // },
};
</script>


<style>

</style>
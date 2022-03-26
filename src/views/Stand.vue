<template>
  <section class="inner-section">
    <Stand :key="$t('title.stand')+fU" :title="$t('title.stand')" :content="stand" />
  </section>
</template>

<script>
import Stand from "@/components/Stand";

export default {
  data() {
    return {
      carts: [],
      fU: 0
    };
  },
   components: {
    Stand,
   },
  computed: {
    stand() {
      return this.$store.getters["STAND"]
    }
  },
};
</script>


<style>

</style>
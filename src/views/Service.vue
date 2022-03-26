<template>
  <section class="inner-section">
    <Service
        :key="$t('title.catering')+fU"
        :title="$t('title.catering')"
        :content="service"
      />
  </section>
</template>

<script>
import Service from "@/components/Service";


export default {
  data() {
    return {
      carts: [],
      fU: 0
    };
  },
   components: {
    Service,
   },
  computed: {
    service() {
      console.log(this.$store.getters["SERVICE"]);
      return this.$store.getters["SERVICE"]
    }
  },
};
</script>


<style>

</style>
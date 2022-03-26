<template>
  <section class="inner-section">
     <Registration
        :key="$t('title.registration')+fU"
        :title="$t('title.registration')"
        :content="registration"
      />
  </section>
</template>

<script>
import Registration from "@/components/Registration";

export default {
  data() {
    return {
      carts: [],
      fU: 0
    };
  },
   components: {
    Registration,
   },
  computed: {
    registration() {
      return this.$store.getters["REGISTRATION"]
    }
  },
};
</script>


<style>

</style>
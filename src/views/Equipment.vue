<template>
  <section class="inner-section">
      <Equipment :key="$t('title.equipment')+fU" :title="$t('title.equipment')" />
  </section>
</template>

<script>
import Equipment from "@/components/Equipment";

export default {
  data() {
    return {
      carts: [],
      fU: 0
    };
  },
   components: {
    Equipment,
   },
};
</script>


<style>

</style>
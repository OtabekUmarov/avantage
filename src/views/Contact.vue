<template>
  <section class="inner-section">
    <Contact :key="$t('title.contact') + fU" :title="$t('title.contact')" />
  </section>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  data() {
    return {
      fU: 0,
    };
  },
  components: {
    Contact,
  },
};
</script>

<style></style>

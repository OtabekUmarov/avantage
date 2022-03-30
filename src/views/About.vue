<template>
  <section class="inner-section">
    <About
      :key="$t('title.about') + fU"
      :title="$t('title.about')"
      :content="about"
    />
  </section>
</template>

<script>
import About from "@/components/About";

export default {
  metaInfo: {
    meta: [
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'keywords', content: 'to organize a business event'}
    ]
  },
  data() {
    return {
      carts: [],
      fU: 0,
    };
  },
  components: {
    About,
  },
  head() {
    return {
      title: "test",
      meta: [
        {
          name: "keywords",
          property: "keywords",
          content: "test",
        },
      ],
    };
  },
  computed: {
    about() {
      return this.$store.getters["ABOUT"];
    },
  },
};
</script>

<style></style>

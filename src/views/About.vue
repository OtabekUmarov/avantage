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
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'keywords', content: 'test' }
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

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
  head() {
    return {
      title: "Epiloge - Build your network in your field of interest",
      meta: [
        {
          name: "description",
          content:
            "Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
        },
        {
          property: "og:title",
          content: "Epiloge - Build your network in your field of interest",
        },
        { property: "og:site_name", content: "Epiloge" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
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

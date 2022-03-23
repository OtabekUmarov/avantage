<template>
  <div class="home" data-spy="scroll" data-target="#navbar" data-offset="100">
    <template v-if="data">
      <About :key="$t('title.about')+fU" :title="$t('title.about')" :content="data.aboutSection" />
      <Equipment :key="$t('title.equipment')+fU" :title="$t('title.equipment')" />
      <Service
        :key="$t('title.catering')+fU"
        :title="$t('title.catering')"
        :content="data.cateringSection"
      />
      <Stand :key="$t('title.stand')+fU" :title="$t('title.stand')" :content="data.standSection" />
      <Registration
        :key="$t('title.registration')+fU"
        :title="$t('title.registration')"
        :content="data.registerSection"
      />
      <Contact :key="$t('title.contact')+fU" :title="$t('title.contact')" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";
import Contact from "@/components/Contact";
import Equipment from "@/components/Equipment";
import Registration from "@/components/Registration";
import Service from "@/components/Service";
import Stand from "@/components/Stand";

export default {
  name: "Home",
  components: {
    About,
    Contact,
    Equipment,
    Registration,
    Service,
    Stand
  },
  watch: {
    "$i18n.locale": {
      handler: async function(val) {
        await this.getData();
      }
    }
  },
  data() {
    return {
      data: null,
      fU: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axi.get("FullPage/",{
        headers:{
          "content-language": this.$i18n.locale
        }
      });
      this.data = res.data;
    },
    forceRerender() {
      this.fU += 1;
    }
  }
};
</script>
<style lang="scss">
.section {
  .content {
    .text {
      font-weight: 200;
    }
  }
  .video video {
    width: 100%;
    height: auto;
  }
  .photos {
    margin-bottom: 20px;
    img {
      height: 300px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
</style>
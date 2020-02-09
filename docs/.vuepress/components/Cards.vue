<template>
  <div class="card">
    <iframe :src="htmlSrc" ref="frame" seamless frameborder="0" scrolling="no" @load="frameAdapt" />
  </div>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {
      htmlSrc: ""
    };
  },
  created() {
    this.getHtmlResource();
  },
  methods: {
    getHtmlResource() {
      this.htmlSrc = "./htmlSrc/" + this.card + ".html";
    },
    frameAdapt() {
      const frame = this.$refs.frame;
      console.log(frame.contentWindow);
      const doc = frame.contentWindow.document;
      frame.width = "100%";
      frame.height = doc.documentElement.offsetHeight; // 571
      // frame.height = doc.body.offsetHeight; // 539
      doc.body.style.margin = "0";
    }
  }
};
</script>

<style scoped>
</style>
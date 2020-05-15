<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100" v-for="(data, index) in resume" :key="index">
      <h1 class="mb-0">
        {{data.about.fname}}
        <span class="text-primary">{{data.about.lname}}</span>
      </h1>
      <div class="subheading mb-5">
        {{data.about.address}} · {{data.about.mobile}} ·
        <a
          :href="'mailto:' + data.about.email"
        >{{data.about.email}}</a>
      </div>
      <p class="lead mb-5">{{data.about.goal}}</p>
      <div class="social-icons">
        <a :href="data.about.linkedin">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a :href="data.about.github">
          <i class="fab fa-github"></i>
        </a>
        <a :href="data.about.twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="data.about.facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {
    resume() {
      return this.$store.state.data;
    }
  }
};
</script>
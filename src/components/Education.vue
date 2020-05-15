<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div class="w-100" v-for="(data,index) in resume" :key="index">
      <h2 class="mb-5">Education</h2>
      <div
        v-for="(education, index) in data.education"
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{education.name}}</h3>
          <div class="subheading mb-3">{{education.certificate}}</div>
          <div v-if="index === 0">
            <a
              href="http://aut.researchgateway.ac.nz/bitstream/handle/10292/10574/BakhshB.pdf?sequence=3"
              target="_blank"
            >Research on Social Context Acquisition and Reasoning Techniques for Online Social Networks</a>
          </div>
          <!-- <div>Computer Science - Web Development Track</div> -->
          <!-- <p>GPA: 3.23</p> -->
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{education.date}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
  computed: {
    resume() {
      return this.$store.state.data;
    }
  }
};
</script>
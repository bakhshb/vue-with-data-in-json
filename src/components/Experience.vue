<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100" v-for="(data, index) in resume" :key="index">
      <h2 class="mb-5">Experience</h2>

      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for=" (experience, index) in data.experience"
        :key="experience.id"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{experience.job_title}}</h3>
          <div class="subheading mb-3">{{experience.company}}</div>
          <p>{{experience.desc}}</p>

          <template v-if="index === 0">
            <div class="subheading mb-3">Achievements</div>
            <ul
              class="fa-ul mb-0"
              v-for=" achievment in experience.achievment"
              :key="achievment.id"
            >
              <li>
                <i class="fa-li fa fa-check"></i>
                {{achievment}}
              </li>
            </ul>
          </template>

          <template v-if="index === 2">
            <div class="subheading mb-3">Tools involved:</div>
            <p>{{experience.tools}}</p>
            <div class="subheading mb-3">Key Points</div>
            <ul class="fa-ul mb-0" v-for=" point in experience.achievment" :key="point.id">
              <li>
                <i class="fa-li fa fa-check"></i>
                {{point}}
              </li>
            </ul>
          </template>
        </div>

        <div class="resume-date text-md-right">
          <span class="text-primary">{{experience.date}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  computed: {
    resume() {
      return this.$store.state.data;
    }
  }
};
</script>
<template>
  <div>
    <Menu/>
    <About/>
    <hr class="m-0">
    <Experience/>
    <hr class="m-0">
    <Education/>
    <hr class="m-0">
    <Skill/>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";
export default {
  name: "App",
  computed: {
    resume() {
      return this.$store.state.data;
    }
  },
  components: {
    Menu,
    About,
    Experience,
    Education,
    Skill
  }
};
</script>

<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'rrr'
    };
  },
  name: "app",
  components: {}
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

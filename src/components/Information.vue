<template>
  <div class="information">
    <p><span>name:</span>{{person.name}}</p>
    <p><span>phone:</span>{{person.phone}}</p>
  </div>
</template>
<div>

</div>
<script>
    export default {
        name: "Information",
      data() {
          return {
            person: {}
          };
      },
      mounted() {
          this.person = this.$store.state.person
      }
    }
</script>

<style scoped>
 .information {
 margin-top: 30px;
}
</style>

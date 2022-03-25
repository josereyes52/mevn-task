<template>
  <div id="nav">
      <Header></Header>
  </div>
  <router-view />
</template>

<script>
import Header from './Header.vue';

export default {
    components: {
        Header
    },
    setup() {
        
    },
}
</script>
<template>
  <div>
    <Navbar/>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Shared/Navbar'
export default {
  components: {
    Navbar
    }

};
</script>
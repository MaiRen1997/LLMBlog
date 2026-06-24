<template>
  <video controls style="width:100%">
    <source :src="src" type="video/mp4">
  </video>
</template>

<script setup>
defineProps({
  src: String
})
</script>
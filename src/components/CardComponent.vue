<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
});
</script>

<template>
  <div class="category-item">
    <img src="@/assets/img/Rectangle%2010.png" alt="">
    <div class="category-title">{{ title }}</div>
  </div>
</template>

<style scoped>
.category-item {
  position: relative;
  display: inline-block;
  width: 273px;
  margin: 10px;
}

.category-item img {
  display: block;
  max-width: 100%;
  height: auto;
}

.category-title {
  padding: 8px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  background: #E0BEA2BF;
  transform: translateX(-50%);
  color: white;
  font-size: 20px;
  font-weight: 300;
}
@media (max-width: 768px) {
  .category-item:nth-child(3) {
display: none ;
  }
  .category-item:nth-child(4) {
    display: none ;
  }
  .category-item {
    width: 100%;
  }
}

</style>
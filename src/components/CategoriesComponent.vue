<script setup>
import { ref, computed } from 'vue';
import CardComponent from '@/components/CardComponent.vue';

const categories = [
  { title: 'Пальто' },
  { title: 'Куртки' },
  { title: 'Шапки' },
  { title: 'Шарфы' },
  { title: 'Обувь' },
  { title: 'Рюкзаки' },
  { title: 'Сумки' },
  { title: 'Перчатки' }
];

const currentPage = ref(0);
const itemsPerPage = 4;

const totalPages = computed(() => Math.ceil(categories.length / itemsPerPage));

const visibleCategories = computed(() =>
    categories.slice(currentPage.value * itemsPerPage, (currentPage.value + 1) * itemsPerPage)
);

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="categories container">
    <h1 class="categories-title">Категории</h1>
    <div class="categories-slider">
      <button class="slider-button left" @click="prevPage">
        <img src="@/assets/img/sliderbtn.png" alt="">
      </button>
      <div class="categories-list">
        <CardComponent
            v-for="(category, index) in visibleCategories"
            :key="index"
            :title="category.title"
        />
      </div>
      <button class="slider-button right" @click="nextPage">
        <img src="@/assets/img/sliderbtn.png" alt="">
      </button>
    </div>
  </div>
</template>

<style scoped>
.categories {
  padding-top: 100px;
}

.categories-title {
  font-size: 36px;
  font-weight: 300;
}

.categories-slider {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.categories-list {
  position: relative;
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.slider-button {
  position: absolute;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;
}

.slider-button.left {
  left: 20px;
}

.slider-button.right {
  right: 20px;
}

.slider-button:hover {
  background: #d2a689;
  transition: 0.3s;
}

.slider-button img {
  height: 30px;
  width: 30px;
}

@media (max-width: 768px) {
  .categories-title {
    padding: 0 20px;
    margin-bottom: 30px;
  }
  .categories-list {
    display: flex;
    flex-wrap: nowrap;
    gap: 0;
    padding: 5px;
  }
  .slider-button.left,
  .slider-button.right {
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .slider-button.left,
  .slider-button.right {
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (min-width: 1025px) {
  .slider-button.left,
  .slider-button.right {
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
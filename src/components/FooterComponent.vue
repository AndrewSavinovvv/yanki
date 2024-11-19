<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showCompanyList = ref(false);
const showUsefulList = ref(false);
const showCustomerList = ref(false);
const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>
<template>
  <footer class="footer container">
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-title">
          КОМПАНИЯ
          <span v-if="isMobile" @click="showCompanyList = !showCompanyList" class="arrow">
             <img src="@/assets/icons/arrow-down2.svg" alt="">
          </span>
        </h3>
        <ul v-if="!isMobile || showCompanyList">
          <li><a href="/catalog">О нас</a></li>
          <li><a href="/catalog">Контакты</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">
          ПОЛЕЗНОЕ
          <span v-if="isMobile" @click="showUsefulList = !showUsefulList" class="arrow">
            <img src="@/assets/icons/arrow-down2.svg" alt="">
          </span>
        </h3>
        <ul v-if="!isMobile || showUsefulList">
          <li><a href="/catalog">Оплата и доставка</a></li>
          <li><a href="/catalog">Условия возврата</a></li>
          <li><a href="/catalog">Бонусная программа</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">
          ПОКУПАТЕЛЮ
          <span v-if="isMobile" @click="showCustomerList = !showCustomerList" class="arrow">
             <img src="@/assets/icons/arrow-down2.svg" alt="">
          </span>
        </h3>
        <ul v-if="!isMobile || showCustomerList">
          <li><a href="/catalog">Избранное</a></li>
          <li><a href="/catalog">Публичная оферта</a></li>
          <li><a href="/catalog">Политика конфиденциальности</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">КОНТАКТЫ</h3>
        <ul>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src="@/assets/icons/inst.svg" alt="Instagram">
            </a>
            <a href="https://t.me" target="_blank">
              <img src="@/assets/icons/tg.svg" alt="Telegram">
            </a>
          </li>
          <li><a href="tel:+380730963644">+38(073) 096 36 44</a></li>
          <li><a href="mailto:info@yanki.com">info@yanki.com</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: 100px;
  color: #252525;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-title {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column li {
  margin: 5px 0;
  font-size: 16px;
  font-weight: 200;
}

.footer-column li img {
  margin-right: 10px;
}

.footer-column a {
  color: inherit;
  text-decoration: none;
}

.arrow {
  cursor: pointer;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-title {
    text-align: center;
    border-bottom: 1px solid #252525;
    padding-bottom: 10px;

  }

  .footer-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .footer-column ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-column li {
    text-align: center;
  }

  .footer-column a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  .arrow {
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
<script setup>
import { ref } from 'vue';


const isBurgerMenuOpen = ref(false);

const toggleBurgerMenu = () => {
  isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
};

const isLanguageOpen = ref(false);
const isCurrencyOpen = ref(false);

const toggleLanguageDropdown = () => {
  isLanguageOpen.value = !isLanguageOpen.value;
};

const toggleCurrencyDropdown = () => {
  isCurrencyOpen.value = !isCurrencyOpen.value;
};
</script>
<template>
  <div class="qwe">
    <header class="header container">
      <div class="burger-menu" @click="toggleBurgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="dropdown-mob">
        <button @click="toggleLanguageDropdown">
          <span>RU</span>
          <img src="@/assets/icons/arrow-down.svg" alt="">
        </button>
        <ul v-if="isLanguageOpen" class="dropdown-menu">
          <li>English</li>
          <li>Русский</li>
        </ul>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="new-view">NEW</a></li>
          <li><a href="catalog">КАТАЛОГ</a></li>
          <li><a href="about-us">О НАС</a></li>

        </ul>
      </nav>
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="">
      </div>
      <div class="dropdowns">
        <div class="dropdown">
          <button @click="toggleLanguageDropdown">
            <span>RU</span>
            <img src="@/assets/icons/arrow-down.svg" alt="">
          </button>
          <ul v-if="isLanguageOpen" class="dropdown-menu">
            <li>EN</li>
            <li>RU</li>
            <li>UA</li>
          </ul>
        </div>
        <div class="dropdown">
          <button @click="toggleCurrencyDropdown">
            <span>UAH</span>
            <img src="@/assets/icons/arrow-down.svg" alt="">
          </button>
          <ul v-if="isCurrencyOpen" class="dropdown-menu">
            <li>USD</li>
            <li>EUR</li>
            <li>UAH</li>
          </ul>
        </div>
      </div>
      <div class="icons">
        <a href="">
          <img src="@/assets/icons/search.svg" alt="">
        </a>
        <a href="">
          <img src="@/assets/icons/user.svg" alt="">
        </a>
        <a href="">
          <img src="@/assets/icons/fav.svg" alt="">
        </a>
        <a href="">
          <img src="@/assets/icons/baket.svg" alt="">
        </a>
      </div>
    </header>
    <div v-if="isBurgerMenuOpen" class="burger-menu-overlay">
     <div class="burger-menu-inner">
       <input placeholder="Введите ваш запрос">
     </div>
      <div class="burger-menu__nav">
        <ul class="burger-menu__list">
          <li class="mob-only">Личный кабинет</li>
          <li class="mob-only">NEW</li>
          <li class="mob-only">КАТАЛОГ</li>
          <li class="mob-only">О НАС</li>
          <li class="mob-only">УСЛОВИЯ ВОЗВРАТА</li>
          <li class="mob-only">КОНТАКТЫ</li>
          <li class="desktop-only"><a href="payment">ОПЛАТА И ДОСТАВКА</a></li>
          <li class="desktop-only"><a href="return-conditions">УСЛОВИЯ ВОЗВРАТА</a></li>
          <li class="desktop-only"><a href="contacts">КОНТАКТЫ</a></li>
        </ul>
      </div>
      <div class="burger-menu__contact mob-only">
        <img src="@/assets/icons/inst.svg" alt="">
        <img src="@/assets/icons/tg.svg" alt="">
        <a href="tel:+380730963644">+38(073) 096 36 44</a>
        <a href="mailto:info@yanki.com">info@yanki.com</a>
      </div>
    </div>
    <div class="collection">
      <div>
        <h1>Новая коллекция</h1>
        <div class="line"></div>
        <div class="collection-btn">
          <h6>Смотреть Новинки</h6>
          <img src="@/assets/icons/arrow-right.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qwe {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("@/assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  position: relative;
}

.collection {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.collection h1 {
  font-size: 46px;
  margin-bottom: 10px;
  color: #FFFFFF;
  font-weight: 200;

}

.collection-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.collection-btn img:hover {
  color: #CCA88A;
}
.collection .line {
  height: 2px;
  width: 30%;
  background-color: #FFFFFF;
  margin: 20px auto;
}

.collection h6 {
  font-size: 16px;
  cursor: pointer;
  color: #FFFFFF;
  font-weight: 300;
  text-transform: uppercase;
}
.burger-menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}
.burger-menu span {
  width: 24px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
}
.burger-menu span:nth-child(1) {
  width: 34px;
}
.burger-menu span:nth-child(2) {
  width: 26px;
}
.burger-menu span:nth-child(3) {
  width: 18px;
}
.burger-menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.burger-menu-overlay {
  position: absolute;
  top: 92px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
}


.nav-list {
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.nav-list a {
  text-decoration: none;
  color: white;
  font-weight: 300;
}
.nav-list a:hover {
  color: #CCA88A;
  transition: 0.3s;
}
.dropdowns {
  display: flex;
  gap: 10px;
  align-items: center;
}
.dropdown {
  position: relative;
}
.dropdown span {
  color: white;
  font-size: 18px;
  font-weight: 300;
  margin-right: 5px;
}
.dropdown button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  list-style: none;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1000;
}
.dropdown-menu li {
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid #E0BEA2;
}
.dropdown-menu li:hover {
  background-color: #f0f0f0;
}

.icons {
  display: flex;
  gap: 30px;
  color: white;
}
.icons img:hover {
  color: #CCA88A;
}
.icons img {
  color:  #CCA88A;
}
.dropdown-mob {
  display: none;
}
@media (min-width: 769px) {
  .mob-only{
    display: none;
  }
}
@media (max-width: 769px) {
  .mob-only{
    display: flex;
  }
  .desktop-only{
    display: none;
  }
  .dropdown:nth-child(2) {
    display: none;
  }
  .nav-list {
    display: none;
  }
  .icons a:nth-child(1) {
    display: none
  }
  .icons a:nth-child(2) {
    display: none
  }
  .header {
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0;
  }
  .qwe {
    padding: 20px;
    background-position: left;
  }
  .dropdown {
    display: none;
  }
  .dropdown-mob {
    display: flex;
  }
  .dropdown-mob span {
    color: white;
    font-size: 18px;
    font-weight: 300;
    margin-right: 5px;
  }
  .dropdown-mob button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 20px;
  }
  .collection h1 {
    font-size: 32px;
  }
  .collection .line {
    height: 2px;
    width: 50%;
    background-color: #FFFFFF;
    margin: 20px auto;
  }
  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav.open .nav-list {
    display: flex;
  }
}
</style>
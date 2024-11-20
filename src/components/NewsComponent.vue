<template>
  <div class=" news">
    <h1 class="news-title">Узнайте  первым о новинках</h1>
    <input class="news-input" type="text" placeholder="Ваш e-mail*">
    <button class="news-btn">
      ПОДПИСАТЬСЯ
    </button>
    <p class="news-text">Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
    </p>
  </div>
</template>

<style scoped>
.news {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.news-title {
  font-size: 36px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
}
.news-input {
  padding: 12px 15px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #252525;
  width: 600px;
}
.news-input::placeholder {
  color: #25252580;
  font-weight: 200;
  font-size: 16px;
}
.news-btn {
  padding: 17px 0;
  cursor: pointer;
  color: #FFFFFF;
  background: #E0BEA2;
  border: none;
  font-weight: 300;
  font-size: 16px;
  width: 633px;
}
.news-btn:active {
  background: #CCA88A;
  transition: 1ms;
}
.news-text {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 200;
}
@media (max-width: 769px) {
  .news {
    width: 90%;
  }
  .news-title {
    font-size: 24px;
  }
}
</style>
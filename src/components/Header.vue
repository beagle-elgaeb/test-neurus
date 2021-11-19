<script setup>
const props = defineProps({
  date: String,
  timeOpen: String,
  timeExit: String,
  saved: Boolean,
});
</script>

<template>
  <div
    class="header"
    :class="[props.saved ? 'header_saved' : 'header_unsaved']"
  >
    <div class="user_avatar"></div>
    <div class="id_and_text">
      <p class="id">3723022</p>
      <p class="header_text">Карта ВВ</p>
    </div>
    <div class="id_and_text">
      <p class="id">{{ props.date }}</p>
      <p class="header_text">{{ props.timeOpen }} - {{ props.timeExit }}</p>
    </div>
    <div :class="[props.saved ? 'saved' : 'unsaved']"></div>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
}

.header_saved {
  background: #eaf2fe;
}

.header_unsaved {
  background: #fef6ff;
}

.user_avatar {
  height: 35px;
  width: 35px;
  background: url(https://files.vm.ru/photo/vecherka/2017/04/doc6ugynw9a634lhfb8evi_800_480.jpg);
  background-size: cover;
  border-radius: 99em;
  margin: 0 0 0 15px;
}

.id_and_text {
  margin: 0;
}

.id {
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: #808080;
  margin: 0;
}

.header_text {
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: #c0c0c0;
  margin: 0;
}

.unsaved {
  height: 35px;
  width: 35px;
  background-image: none;
  background: transparent;
  margin: 0 15px 0 0;
}

.saved {
  height: 35px;
  width: 35px;
  background: url(../icons/saved.svg);
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 15px 0 0;
}

@media (max-width: 500px) {
  .user_avatar {
    height: 30px;
    width: 30px;
    margin: 0 0 0 10px;
  }

  .id {
    font-size: 14px;
    line-height: 16px;
  }

  .header_text {
    font-size: 14px;
    line-height: 16px;
  }

  .saved {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 0;
  }
}

@media (max-width: 400px) {
  .header {
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .user_avatar {
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0;
  }

  .id_and_text {
    display: flex;
    margin: 10px 0 10px 50px;
  }

  .id_and_text:last-child {
    margin: 0 0 10px 70px;
  }

  .id {
    margin: 0 10px 0 0;
  }

  .saved {
    position: absolute;
    top: 40px;
    left: 10px;
  }
}
</style>




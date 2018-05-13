<template>
    <section class = "HeaderText">
    <p class = "HeaderText__text"> Welcome {{user}}!</p>
      <p class = "HeaderText__text HeaderText--secondary">Do you need to eat?</p>
    </section>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
      default: 'Joe Bloggs'
    }
  }
};
</script>

<style scoped>
.HeaderText {
  display: flex;
  flex-direction: column;
}
.HeaderText__text {
  font-family: 'Playfair Display', serif;
  font-size: 25px;
  text-align: center;
}

.HeaderText--secondary {
  padding-top: 20px;
}
</style>
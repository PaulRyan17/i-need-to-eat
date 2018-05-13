<template>
    <div class = "Card">
         <img :src="categoryImage" class = "CategoryImage__img" />
         <span class = "Card--text">{{categoryType}}</span>
    </div>
</template>

<script>
export default {
  props: {
    categoryImage: {
      type: String,
      required: true
    },
    categoryType: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.CategoryImage__img {
  height: 75px;
  width: 75px;
  border-bottom: 1px dashed lightcoral;
}

.Card--text {
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  padding-top: 5px;
  font-family: cursive;
}

.Card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px dashed lavender;
  border-radius: 10px;
}
</style>
<template>
  <div class = "ProfileImage">
      <div class = "ProfileImage--border">
        <img :src="profileImage" class = "ProfileImage__img" />
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgPath: '/homer.jpg'
    };
  },
  props: {
    profileImage: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.ProfileImage {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ProfileImage--border {
  border: 1px solid #3e3e3e;
  border-radius: 50px;
  width: 150px;
  height: 150px;
  display: inherit;
  align-items: center;
  justify-content: center;
}

.ProfileImage__img {
  height: 130px;
  width: 130px;
  padding: 10px;
}
</style>

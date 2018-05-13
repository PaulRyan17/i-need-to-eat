<template>
    <div class = "RestaurantCard">
        <div class = "RestaurantCard__image">
            <img :src="res.img" class = "RestaurantCard__image" />
        </div>
        <div class = "RestaurantCard__information">
            <span class = "res-name">{{res.name}}</span>
            <small class = "res-type">{{res.type}}</small>
            <div class = "progress-section">
                <small class = "res-type">Busy?</small>
                <div class = "RestaurantCard__progressBar">
                    <div class = "progressBar">{{res.busy}}%</div>
                </div>
                  <!-- <small class = "res-type">{{res.busy<50 ? 'Not that busy' : 'Quite Busy'}}</small> -->
            </div>   
            
        </div>
       
    </div>
</template>

<script>
export default {
  props: {
    res: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log('Created with ', this.$el);
    // get the progress bar
    let progressBar = this.$el.querySelector('.progressBar');
    progressBar.style.width = `${this.res.busy}%`;
  }
};
</script>

<style scoped>
.RestaurantCard {
  height: 150px;
  border-bottom: 1px dashed royalblue;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}

img {
  width: 100px;
  height: 145px;
  display: inline-block;
  padding-top: 10px;
  padding-left: 10px;
}

.RestaurantCard__information {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
}

.progress-section {
  width: 100%;
  margin-top: 20px;
}

.res-name {
  color: palevioletred;
  font-size: 18px;
  padding-top: 10px;
}

.res-type {
  padding-top: 5px;
  color: gray;
  font-size: 12px;
}

.RestaurantCard__progressBar {
  width: 90%;
  background-color: aliceblue;
  margin-top: 5px;
}

.progressBar {
  height: 20px;
  width: 0%;
  background-color: forestgreen;
  color: white;
  text-align: center;
  line-height: 20px;
  padding-left: 10px;
  transition: width 1s ease-in;
}
</style>
<template>
    <div class = "Restaurants">
        <div class = "Header">
          <span class = "Header--text">Local Restaurants</span>
        </div>
        <div class = "CategoryList">
          <category-card :category-image="burgerImage" category-type="BURGERS" class = "CateogryList__item"></category-card>
          <category-card :category-image="steakImage" category-type="STEAK" class = "CateogryList__item"></category-card>
           <category-card :category-image="pizzaImage" category-type="PIZZA" class = "CateogryList__item"></category-card>
        </div>
         <div class = "RestaurantsList">
           <restaurant-card v-for="(res,index) in restaurants" :key="index" :res="res"></restaurant-card>
          </div>
    </div>
</template>

<script>
import CategoryCard from '~/components/CategoryCard.vue';
import RestaurantCard from '~/components/RestaurantCard.vue';
import { TweenMax, TimelineMax, Sine, Expo, TweenLite } from 'gsap';

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      TweenMax.to('.Card', 1, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        ease: Back.easeOut,
        delay: 0.5
      });
      TweenLite.fromTo(
        '.Header--text',
        1,
        { scaleX: 0, scaleY: 0 },
        { scaleX: 1, scaleY: 1 }
      );

      done();
    }
  },
  methods: {
    beforeEnter: function() {
      console.log('Before enter in restuarants');
    }
  },
  components: {
    CategoryCard,
    RestaurantCard
  },
  data() {
    return {
      burgerImage: this.$store.state.categoryImages.burgerImage,
      steakImage: this.$store.state.categoryImages.steakImage,
      pizzaImage: this.$store.state.categoryImages.pizzaImage,
      restaurants: this.$store.state.restaurants
    };
  }
};
</script>

<style scoped>
.Restaurants {
  padding: 10px 10px 10px 10px;
}

.Header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
}

.Header--text {
  font-family: cursive;
  text-align: center;
  font-size: 22px;
  padding-bottom: 15px;
  border-bottom: 1px solid rosybrown;
}

.CategoryList {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed teal;
  padding-bottom: 20px;
}

.RestaurantsList {
  overflow: auto !important;
  height: 445px;
}
</style>
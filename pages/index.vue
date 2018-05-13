<template>
  
  <section class="HomeContainer">
  
      <!-- Pass profile image as a prop -->
      <profile-Image :profile-image="profileImage"></profile-Image>
      
      <!-- Pass the username as a prop -->
      <header-text :user = "userName"></header-text>
      <header-button></header-button>
  </section>
  
</template>

<script>
import ProfileImage from '~/components/ProfileImage.vue';
import HeaderText from '~/components/HeaderText.vue';
import HeaderButton from '~/components/HeaderButton.vue';
import { TweenMax, TimelineMax, Sine, Expo, TweenLite } from 'gsap';

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      let profileImage = el.querySelector('.ProfileImage');
      TweenMax.to(profileImage, 1, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        ease: Back.easeOut
      });
      done();
    },
    beforeLeave(el) {},
    leave(el, done) {
      let profileImage = el.querySelector('.ProfileImage');
      if (profileImage) {
        TweenMax.to(profileImage, 1, {
          rotationY: 360,
          transformOrigin: '50% 50%',
          ease: Back.easeOut
        });
      }
      done();
    }
  },
  components: {
    ProfileImage,
    HeaderText,
    HeaderButton
  },
  data() {
    return {
      userName: this.$store.state.user.name,
      profileImage: this.$store.state.user.profileImg
    };
  },
  mounted() {
    TweenMax.to('.ProfileImage', 1, {
      rotationY: 360,
      transformOrigin: '50% 50%',
      delay: 0.5
    });
  },
  methods: {},
  computed: {}
};
</script>

<style>
.HomeContainer {
  display: grid;
  grid-template-rows: 35% 30% auto;
  height: inherit;
}

body {
  height: 100vh;
}

#__layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#__nuxt {
  height: 100%;
}
</style>

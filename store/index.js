import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        name: 'Homer Simpson',
        profileImg: '/homer.jpg'
      },
      categoryImages: {
        burgerImage: '/burger.png',
        steakImage: '/steak.png',
        pizzaImage: '/pizza.png'
      },
      restaurants: [
        {
          name: 'Chapter One',
          busy: 70,
          type: 'Steak',
          img: '/resImage.png'
        },
        {
          name: 'Mulberry Garden',
          busy: 20,
          type: 'Steak',
          img: '/resImage.png'
        },
        {
          name: 'Dax',
          busy: 26,
          type: 'Pizza',
          img: '/resImage.png'
        },
        {
          name: 'FortyOne',
          busy: 46,
          type: 'Burgers',
          img: '/resImage.png'
        },
        {
          name: 'Fade Street',
          busy: 76,
          type: 'Burgers',
          img: '/resImage.png'
        },
        {
          name: 'Vintage Kitchen',
          busy: 90,
          type: 'Pizza',
          img: '/resImage.png'
        },
        {
          name: 'F.X. Buckley',
          busy: 12,
          type: 'Steak',
          img: '/resImage.png'
        },
        {
          name: 'Fox',
          busy: 22,
          type: 'Steak',
          img: '/resImage.png'
        },
        {
          name: 'Urbanity',
          busy: 13,
          type: 'Pizza',
          img: '/resImage.png'
        },
        {
          name: 'Brookwood',
          busy: 33,
          type: 'Steak',
          img: '/resImage.png'
        }
      ]
    }
  });
};

export default createStore;

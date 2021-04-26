import { GET_NEW_ARRIVALS } from './actionTypes';
import WatchImg from '@/assets/images/products/item5.jpeg';
import ClothesImg from '@/assets/images/products/item6.jpeg';
import ShoesImg from '@/assets/images/products/item7.jpeg';
import GlovesImg from '@/assets/images/products/item10.jpeg';

const homeInitialState = {
  newArrivals: [],
  featuredCollection: [
    {
      id: '1',
      name: 'Watch',
      to: '#',
      img: WatchImg,
    },
    {
      id: '2',
      name: 'Clothes',
      to: '#',
      img: ClothesImg,
    },
    {
      id: '3',
      name: 'Shoes',
      to: '#',
      img: ShoesImg,
    },
    {
      id: '4',
      name: 'Gloves',
      to: '#',
      img: GlovesImg,
    },
  ],
};

const home = (state = homeInitialState, action) => {
  switch (action.type) {
    case GET_NEW_ARRIVALS:
      return {
        ...state,
        newArrivals: [
          {
            id: '1',
            name: 'React Note',
            price: 2000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 4,
            total_reviews: 200,
          },
          {
            id: '2',
            name: 'React Product 2',
            price: 13000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 4,
            total_reviews: 5,
          },
          {
            id: '3',
            name: 'React Product 3',
            price: 4000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 2,
            total_reviews: 10,
          },
          {
            id: '4',
            name: 'React Product 4',
            price: 5000,
            info: 'Lorem ipsum dolor sit amet',
            avg_stars: 1,
            total_reviews: 10,
          },
        ],
      };
    default:
      return state;
  }
};

export { homeInitialState, home };

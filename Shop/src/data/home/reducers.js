import { GET_NEW_ARRIVALS, GET_NEW_ARRIVALS_SUCCESS } from './actionTypes';
import WatchImg from '@/assets/images/products/item5.jpeg';
import ClothesImg from '@/assets/images/products/item6.jpeg';
import ShoesImg from '@/assets/images/products/item7.jpeg';
import GlovesImg from '@/assets/images/products/item10.jpeg';

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEW_ARRIVALS_SUCCESS:
      return {
        ...state,
        newArrivals: action.payload,
      };
    default:
      return state;
  }
};

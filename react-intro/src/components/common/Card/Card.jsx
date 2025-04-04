import Button from './../Button/Button';
import { TfiShoppingCart } from 'react-icons/tfi';

import './Card.css';

export default function Card({ imageUrl, title, price }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={imageUrl} alt='card-image'></img>
      </div>
      <div className='card-body'>
        <div className='card-title'>{title}</div>
        <p className='card-price'>${price}</p>

        <Button icon={<TfiShoppingCart />}> </Button>
      </div>
    </div>
  );
}

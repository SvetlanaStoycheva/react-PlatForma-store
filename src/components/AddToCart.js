import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ id, fields: product }) => {
  const { colors, stock } = product;
  // console.log(id, colors, stock, image[0].url);
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount >= stock) {
      setAmount(stock);
    } else {
      setAmount(amount + 1);
    }
  };
  const decrease = () => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
    }
  };

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  item === mainColor ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: item }}
                onClick={() => setMainColor(item)}
              >
                {mainColor === item ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;

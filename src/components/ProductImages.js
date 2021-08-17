import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images }) => {
  //if images is undefined at the beginning of the render, we can
  //use ES6 defalt parameters and write ({images = [{url:''}]}). it means, if images is undefined, make it equal to...

  const urls = images.reduce((acc, curr) => {
    const currentUrl = curr.url;
    acc.push(currentUrl);
    return acc;
  }, []);
  // console.log(urls[0]);
  const [main, setMain] = useState(urls[0]);

  return (
    <Wrapper>
      <img src={main} alt='main image' className='main' />
      <div className='gallery'>
        {urls.map((item, index) => {
          return (
            <img
              src={item}
              alt='product photo'
              key={index}
              onClick={() => setMain(urls[index])}
              className={`${item === main ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );

  return <h4>product images</h4>;
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;

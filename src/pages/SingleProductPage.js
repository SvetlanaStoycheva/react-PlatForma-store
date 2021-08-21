import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { id: sku, fields } = product;
  // console.log(product);
  // console.log(fields);
  if (fields) {
    const {
      category,
      colors,
      desc,
      image,
      name,
      occasion,
      price,
      reviews,
      stars,
      stock,
    } = fields;

    return (
      <Wrapper>
        <PageHero title={name} product />
        <div className='section section-center page'>
          <Link to='/products' className='btn'>
            back to products
          </Link>
          <div className='product-center'>
            <ProductImages images={image} />
            <section className='content'>
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className='price'>{formatPrice(price)}</h5>
              <p className='desc'>{desc}</p>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? 'In stock' : 'Out of stock'}
              </p>
              <p className='info'>
                <span>SKU : </span>
                {sku}
              </p>
              <p className='info'>
                <span>Occasion : </span>
                {occasion}
              </p>
              <hr />
              {stock > 0 && <AddToCart id={id} fields={fields} />}
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
  return <h2>single page</h2>;
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;

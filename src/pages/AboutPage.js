import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/about.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='platforma' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
            <p>
              PlatForma was established in 2012 and is a Sofia based clothing
              label. Each piece has been designed and made with care in our
              local studio. Our pieces do not follow trends, they are classic,
              fun and playful. The brand name "PlatForma" means form made from
              textiles. Our idea is to make clothes and accessories in natural
              materials. The clothing is designed to be functional and versatile
              so they can be mixed and matched in looks to suit women of all
              ages, shapes and sizes.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

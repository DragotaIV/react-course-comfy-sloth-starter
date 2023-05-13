import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
    <Wrapper className='page section section-center'>

        <img src={aboutImg} alt='about'/>
        <article>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
       <p> Deserunt nostrud ad quis Lorem. Minim ea commodo elit ex ut qui incididunt anim eu duis id occaecat cupidatat. Aute Lorem non laboris commodo magna nostrud laboris id veniam do culpa aliqua. Non aliqua ipsum nostrud ullamco exercitation enim excepteur nostrud pariatur culpa nisi est elit.
        </p>
       </article>

    </Wrapper>
    </main>
  )
}

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
`
export default AboutPage

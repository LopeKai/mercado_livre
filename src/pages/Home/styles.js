import styled from 'styled-components'
import background from '../../images/background-inner.jpg'

export const HomeContainer  = styled.section `
    position: relative;
    width: 100%;
    height: calc(100vh - 7rem);
    background-image: url(${background});
    background-size: cover;
    background-position: center top;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #00223d;
        opacity: 0.6;
    }
`

export const Content = styled.div `
    position: relative;
    padding: 1rem 0;


    h1 {
        width: 355px;
        display: inline-block;
        padding: 1rem;
        font-size: 3rem;
        background-color: var(--color-primary);
        font-weight: 300;
        color: var(--black-700);

    }

    p {
        width: 60%;
        color: #ffffff;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.8rem;
        margin: 1rem 0 2.2rem;
    }
`


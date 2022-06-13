import styled from 'styled-components'

export const Head = styled.header`
    position: relative;
    min-height: 7rem;
    max-width: 100%;
    background-color: var(--color-primary);
    box-shadow: 0 1px 5px 0 rgb(21 24 26 / 10%);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 110px;

    @media(max-width: 1199px) {
            padding: 0 2rem;
            justify-content: space-between;
        
    }

    img {
        width: 90px;
    }

    nav {
        display: none;

        @media(min-width: 1199px) {
            display: block;
        ul {
            li {
                list-style: none;
                display: inline-block;

                a {
                    color: var(--black-700);
                    font-weight: 700;
                    text-decoration: none;
                    font-size: .9rem;
                    text-transform: uppercase;
                }
            }

            li + li {
                margin-left: 18px;
            }
        }

        }
    }
`
export const ContainerButton = styled.div`
    display: none;

    @media(min-width: 1199px) {
        display: block;
        > a {
        padding: .5rem 1.7rem;
        background-color: #3483FA;
        color: #fff;
        text-decoration: none;
        border-radius: .4rem;
        font-size: 1.3rem;

        &:hover{
            filter: brightness(.9);
            }
        }
    }

`

export const Mobile = styled.div`

    @media(max-width: 1199px) {
        a {
            cursor: pointer;
            > img {
                max-width: 30px;
            }
        }
    }

    @media(min-width: 1200px) {
        display: none;
    }
`
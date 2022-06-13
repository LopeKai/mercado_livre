import { useState} from 'react'

import { Head, ContainerButton, Mobile } from "./styles"

import { ButtonJobs } from '../Button'

import Logo from '../../images/logo.png'
import Hamburguer from '../../images/hamburguer.svg'

export function Header() {
    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }
    return (
        <>
            <Head className={active ? 'openHeader section' : 'closeHeader section'}>
                <img src={Logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Inicio</a>
                        </li>
                        <li>
                            <a href="#about">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="#years">21 Anos De Mercado Livre</a>
                        </li>
                        <li>
                            <a href="#process">Processo Seletivo</a>
                        </li>
                        <li>
                            <a href="#area">Áreas de atuação</a>
                        </li>
                    </ul>
                </nav>

                <ContainerButton>
                    <a href="#area">Veja nossas Vagas</a>
                </ContainerButton>
                <Mobile>
                    <a onClick={toggle}>
                        <img src={Hamburguer} alt="" />
                    </a>
                    <nav className={active ? 'openHeader nav_hamburguer' : 'closeHeader nav_hamburguer'}>
                        <ul>
                            <li>
                                <a href="#home">Inicio</a>
                            </li>
                            <li>
                                <a href="#about">Sobre Nós</a>
                            </li>
                            <li>
                                <a href="#years">21 Anos De Mercado Livre</a>
                            </li>
                            <li>
                                <a href="#process">Processo Seletivo</a>
                            </li>
                            <li>
                                <a href="#area">Áreas de atuação</a>
                            </li>
                        </ul>
                    </nav>
                    <button className={active ? 'blockButton buttonMobile' : 'noneButton buttonMobile'}>
                        <a href="#area">Veja nossas Vagas</a>
                    </button> 
                </Mobile>
            </Head>
        </>
    )
}
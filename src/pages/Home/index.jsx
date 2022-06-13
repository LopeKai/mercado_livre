import { ButtonJobs } from '../../components/Button'

import {HomeContainer, Content } from './styles'

export function Home() {
    return (
        <HomeContainer>
                <Content className="container">
                    <h1>
                        Faça parte do Mercado Livre!
                    </h1>

                    <p>
                        Se você espírito empreendedor e quer ser portagonista da sua carreira, trabalhando em um ambiente
                        desafiador, divertido, empolgante e em contante transformação, o Mercado Livre pode ser o seu lugar!
                    </p>
                    <ButtonJobs />
                </Content>
        </HomeContainer>
    )
}
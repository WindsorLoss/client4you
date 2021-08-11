import { useHistory } from 'react-router-dom'

import { Container } from "./styles";

export function Navbar() {

    const history = useHistory()
    
    return (
        <Container>
            <nav>
                <div>
                    <strong>CLIENT<i>4</i>YOU</strong>
                </div>

                <div>
                    <button onClick={() => history.push('/')}>Listar clientes</button>
                    <button onClick={() => history.push('/create')}>Novo cliente</button>
                </div>
            </nav>
        </Container>
    )
}

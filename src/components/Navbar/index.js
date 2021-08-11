import { Container } from "./styles";

export function Navbar() {
    return (
        <Container>
            <nav>
                <div>
                    <strong>CLIENT<i>4</i>YOU</strong>
                </div>

                <div>
                    <button>Novo cliente</button>
                    <button>Listar clientes</button>
                </div>
            </nav>
        </Container>
    )
}

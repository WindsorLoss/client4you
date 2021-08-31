import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { Container } from "./styles";

export function Navbar() {

    const history = useHistory()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleOpenMenu() {
        isMenuOpen 
        ? setIsMenuOpen(false)
        : setIsMenuOpen(true)
    }
    
    return (
        <Container>
            <nav>
                <div>
                    <strong>CLIENT<i>4</i>YOU</strong>
                </div>

                <div className={isMenuOpen ? "mobile-menu active" : "mobile-menu"} onClick={handleOpenMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <div className={isMenuOpen ? "nav-list active" : "nav-list"}>
                    <button onClick={() => {
                        history.push('/')
                        setIsMenuOpen(false)
                    }}>
                        Listar clientes
                    </button>
                    <button onClick={() => {
                        history.push('/create')
                        setIsMenuOpen(false)
                    }}>
                        Novo cliente
                    </button>
                </div>
            </nav>
        </Container>
    )
}

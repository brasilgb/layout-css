import React from 'react'
import LinkMenu from "./LinkMenu"

const NavTop = () => {
    return (
        <nav className="flex gap-6">
            <LinkMenu
                title={"Home"}
                url={"/"}
            />
            <LinkMenu
                title={"Faturamento"}
                url={"/faturamento"}
            />
            <LinkMenu
                title={"Análise"}
                url={"/analise"}
            />
            <LinkMenu
                title={"Desempenho"}
                url={"/desempenho"}
            />
            <LinkMenu
                title={"Compras"}
                url={"/compras"}
            />
        </nav>
    )
}

export default NavTop
import { Link } from "react-router-dom";

export default function Erro404() {
    return (
        <>
        <h1>404</h1>
        <h2>Não Encontrado</h2>
        <Link to="/">Ver todos os filmes</Link>
        </>
    )
}

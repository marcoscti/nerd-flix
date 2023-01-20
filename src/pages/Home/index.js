import "./home.css";
import { useEffect, useState } from "react";
import api from "../../services/services";
import { Link } from 'react-router-dom'
function Home() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "28de70bf4fa04cab4e19b9f32b7d9424",
                    language: "pt-BR",
                    page: 1
                }
            })
            //  console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0, 15))
        }
        loadFilmes();
    }, [])
    return (
        <div className="container">
            <div className="list">
                {filmes.map((movie) => {
                    return (
                        <article key={movie.id} className="card-movie">
                            <div className="card-image">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="movie-image" />
                            </div>
                            <div className="card-title">
                                <h2>{movie.title}</h2>
                            </div>
                            <div className="card-btn">
                                <Link to={`/filme/${movie.id}`} className="btn-ver">Ver Mais</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;
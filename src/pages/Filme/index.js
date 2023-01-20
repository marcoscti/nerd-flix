import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/services';
function Filme() {
    const { id } = useParams()
    const [movie, setMovie] = useState({});
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "28de70bf4fa04cab4e19b9f32b7d9424",
                    language: "pt-BR",
                }
            }).then((response) => {
                setMovie(response.data)
                // console.log(response.data)
            }).catch(() => {
                // console.log("Filme não encontrado");
            })
        }
        loadFilme();
        return () => {
            // console.log("componente desfeito")
        }
    });
    return (
        <article className="card-movie" key={movie.id}>
            <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="movie-image" />
            </div>
            <div className="card-title">
                <h2>{movie.title}</h2>
            </div>
            <div className="card-btn">
                <Link to={"/"} className="btn-ver">Retornar</Link>
            </div>
        </article>
    )
}
export default Filme;
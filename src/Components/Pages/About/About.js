import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function About() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=9ad18e366fd18f87f43bb71cd4839939"
            )
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    const top3Movies = movies.slice(0, 3);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Carousel
                className="w-100"
                fade
                indicators={true}
                controls={true}
            >
                {top3Movies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <img
                            className="d-block w-100"
                            src={
                                `https://image.tmdb.org/t/p/w780${movie.poster_path}`
                            }
                            alt={movie.title}
                            style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview?.substring(0, 100)}...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

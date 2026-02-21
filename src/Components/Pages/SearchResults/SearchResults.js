import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function SearchResults() {
    const mode = useSelector((state) => { return state.mode.mode })
    const { query } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9ad18e366fd18f87f43bb71cd4839939&query=${query}`)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));
    }, [query]);

    return (
        <Container>
            <h3>Search results for "{query}"</h3>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <Card className={mode === "dark"?"bg-dark text-white":"bg-light text-black"}>
                            <Card.Img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Original Language</strong> <span>{movie.original_language}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Release Date</strong> <span>{movie.release_date}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Popularity</strong> <span>{movie.popularity}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Vote Average</strong> <span>{movie.vote_average}</span></ListGroup.Item>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import setFav from '../../store/Actions/setFav';
import axios from 'axios';

export default function Movies(props) {
    let mode = useSelector((state) => { return state.mode.mode })
    const dispatch = useDispatch()
    const favList = useSelector((state) => { return state.fav.favList });
    const loader = useSelector((state) => { return state.loader.isLoading })
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9ad18e366fd18f87f43bb71cd4839939&page=${props.page}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            }).catch((err) => {
                console.log(err)
            })

    }, [props.page])
    console.log(props.page)
    console.log(loader)



    return (
        <Container className='w-100'>
            <Row className='w-100 g-4'>
                <h2 className='text-center'>Most Popular Movies</h2>
                <div className="d-flex justify-content-center">
                    {loader && <div className="spinner-border" role="status"></div>}
                </div>
                <CardGroup className='d-flex justify-content-center gap-5'>
                    {movies.map((movie) => {
                        return (
                            <Col key={movie.id} xs={12} sm={6} md={3}>
                                <Card className={`shadow h-100 d-flex flex-column w-100 ${mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}`} >
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                    <Card.Body >
                                        <Card.Title className='fs-5' style={{ display: "flex", justifyContent: "center" }}><strong>{movie.title}</strong></Card.Title>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Original Language</strong> <span>{movie.original_language}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Release Date</strong> <span>{movie.release_date}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Popularity</strong> <span>{movie.popularity}</span></ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}><strong>Vote Average</strong> <span>{movie.vote_average}</span></ListGroup.Item>
                                        <ListGroup.Item key={movie.id} className="d-flex justify-content-between">
                                            <strong>{movie.title}</strong>
                                            <button
                                                style={{ border: "none", background: "none", cursor: "pointer" }}
                                                onClick={() => dispatch(setFav(movie))}
                                            >
                                                <i className={`bi ${favList.some(m => m.id === movie.id) ? "bi-star-fill text-warning" : "bi-star"}`}></i>
                                            </button>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='mb-2' style={{ display: "flex", justifyContent: "center" }}><Button variant="dark" onClick={() => { navigate(`/movies/${movie.id}`) }}>View Details</Button></ListGroup.Item>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </CardGroup>
            </Row>
        </Container >
    )
}
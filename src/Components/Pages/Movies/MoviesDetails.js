import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function MoviesDetails(props) {

    const[movie ,setMovie] = useState([])
    const params = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9ad18e366fd18f87f43bb71cd4839939`)
            .then((res) => {
                console.log(res.data)
                setMovie(res.data)

            }).catch((err)=>{
                console.log(err)
            })
    },[params.id])
    console.log(params.id)


    return (
        
                <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                <Card className="shadow h-100">
                    <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        style={{height:"500px"}}
                    />
                    <Card.Body {...props.mode ==="dark"?"bg-dark text-white": "bg-light text-black"}>
                        <Card.Title className="text-center">{movie.title}</Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>

                        <ListGroup variant="flush" className="mb-3">
                            <ListGroup.Item className="d-flex justify-content-between">
                                <strong>Original Language</strong>
                                <span>{movie.original_language}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <strong>Release Date</strong>
                                <span>{movie.release_date}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <strong>Popularity</strong>
                                <span>{movie.popularity}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <strong>Vote Average</strong>
                                <span>{movie.vote_average}</span>
                            </ListGroup.Item>

                            
                             <ListGroup.Item className="d-flex justify-content-between">
                                <strong>Vote Average</strong>
                                <span>{movie.vote_average}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                            <strong>Add to Fav</strong>
                            <span><i class="bi bi-star"></i></span>
                        </ListGroup.Item >
                        </ListGroup>
                        <ListGroup.Item className='d-flex justify-content-center' >
                        <Button>
                            <Nav.Link variant="dark"  target='_blank' href={movie.homepage}>Watch Demo</Nav.Link>
                        </Button>
                        </ListGroup.Item>

                        
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}
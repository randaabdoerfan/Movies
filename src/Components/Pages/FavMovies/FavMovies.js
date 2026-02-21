import React from 'react'
import { Button, Card, CardGroup, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import setFav from '../../store/Actions/setFav';
import { useNavigate } from 'react-router-dom';
export default function FavMovies() {
  let mode = useSelector((state) => { return state.mode.mode })
  const dispatch = useDispatch()
  const favList = useSelector((state) => state.fav.favList);
  const navigate = useNavigate()
  return (
    <div className="container">
      <h2>My Favorites</h2>
      <CardGroup className='d-flex justify-content-center gap-5'>
      {favList.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
         
        favList.map((movie) => (

          <Col key={movie.id} xs={12} sm={6} md={3}>
            <Card className={`shadow h-100 d-flex flex-column w-100 ${mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}`} >
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <Card.Body>
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
        ))
      }
</CardGroup>
    </div>
  );
}


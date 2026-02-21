import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Nav,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import  setFav  from "../../store/Actions/setFav";

export default function MoviesDetails() {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.mode.mode);
  const favList =
    useSelector((state) => state.fav.favList) || [];

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9ad18e366fd18f87f43bb71cd4839939`
      )
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!movie) return null;

  const isFav = favList.some((m) => m.id === movie.id);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Col xs={12} sm={10} md={8} lg={6} xl={5}>
        <Card className="shadow h-100">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            style={{ height: "500px", objectFit: "cover" }}
          />

          <Card.Body
            className={
              mode === "dark"
                ? "bg-dark text-white"
                : "bg-light text-black"
            }
          >
            <Card.Title className="text-center mb-3">
              {movie.title}
            </Card.Title>

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

              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <strong>Add To Favorites</strong>

                <button
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(setFav(movie))}
                >
                  <i
                    className={`bi ${
                      isFav
                        ? "bi-star-fill text-warning"
                        : "bi-star"
                    }`}
                  ></i>
                </button>
              </ListGroup.Item>
            </ListGroup>

            {movie.homepage && (
              <div className="d-flex justify-content-center">
                <Button variant="dark">
                  <Nav.Link
                    target="_blank"
                    href={movie.homepage}
                    className="text-white"
                  >
                    Watch Demo
                  </Nav.Link>
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
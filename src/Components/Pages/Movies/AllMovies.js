import React from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';

import Movies from './Movies';
import Footer from '../Footer/Footer';

export default function AllMovies() {
    const [page,setPage] = useState(1)
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9ad18e366fd18f87f43bb71cd4839939&page=${page}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            }).catch((err) => {
                console.log(err)
            })

    }, [page])
    console.log(movies)
    return (
        <Container className='w-100'>
            <Movies page={page}/>
            <Row className='w-100 g-4'>
            <ListGroup.Item className='my-5' style={{display:"flex",justifyContent:"space-between"}}>
                <Button variant="primary" onClick={()=>{setPage(page > 1 ? page - 1 : 1)}}> &lt; Prev</Button>
                <Button variant="primary" onClick={()=>{setPage(page + 1)}}>Next &gt;</Button></ListGroup.Item>
            </Row>
            <Footer/>
        </Container>
        
    )
}
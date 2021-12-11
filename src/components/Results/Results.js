import React, { useState, useEffect } from 'react';
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard"
import axios from "../../axios";
import request from '../../request';


const Results = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const requests = await axios.get(request.fetchActionMovies)
            console.log(requests.data.results)
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
        // run this code once when the Component Loads 
    }, [])

    return (
        <div className="results">

            {
                movies.map((movie) => (
                    <VideoCard movie={movie} />
                ))
            }
        </div>
    )
}

export default Results

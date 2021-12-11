import React, { useState, useEffect } from 'react';
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard"
import axios from "../../axios";
import Fade from "react-reveal/Fade"

const Results = ({selectedOptions}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const requests = await axios.get(selectedOptions)
            console.log(requests.data.results)
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
        // run this code once when the Component Loads 
    }, [selectedOptions])

    return (
        <Fade>
        <div className="results">
            {
                movies.map((movie) => (
                    <VideoCard movie={movie} />
                ))
            }
        </div>
        </Fade>
    )
}

export default Results

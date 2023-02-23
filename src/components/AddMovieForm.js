import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddMovieForm = ({ setMovies }) => {

    const initMovie = {
        title:"",
		director: "",
		genre: "",
		metascore: null,
		description: ""
    }
    
    const history = useHistory();
    const [movie, setMovie] = useState(initMovie);

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:9000/api/movies/`, movie)
            .then(res => {
                setMovies(res.data);
                history.push("/movies")
            })
            .catch( err => console.error(err));
    }

    return (
        <>add Movie Form! yeaaaahhhhhh</>
    )
}

export default AddMovieForm;
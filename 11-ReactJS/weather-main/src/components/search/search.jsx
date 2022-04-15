import { useState } from "react";

const Search = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        // Traitement des données
        // const data = { city };
        props.onValid(city);

    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city-weather">city</label>
                    <input type="text" name="city" id="city-weather" value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    <input type="submit" value="search" />
                </form>
            </div>
        </>
    );
};

Search.defaultProps = {
    onValid: () => { } // NOOP
};

export default Search;
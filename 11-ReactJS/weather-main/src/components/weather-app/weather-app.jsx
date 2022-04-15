import { useState } from 'react';
import Search from '../search/search';
import Weather from '../weather/weather';


const WeatherApp = () => {

    const [city, setCity] = useState('');

    const handleCityName = (data) => {
        setCity(data);
    };

    return (
        <>
            <Search onValid={handleCityName} />
            <Weather dataCity={city} />
        </>
    );

};

export default WeatherApp;
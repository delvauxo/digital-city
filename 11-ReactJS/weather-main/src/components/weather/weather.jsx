import { useEffect, useState } from 'react';
const axios = require('axios').default;


const Weather = ({ dataCity }) => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {

        const apiKey = '6aa4316de0a8d7ff347839e3927c6d94';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${dataCity}&units=metric&appid=${apiKey}`;

        setLoading(true);
        setError(null);
        setResult(null);

        axios.get(url)
            .then(({ data }) => {
                setResult({
                    name: data.name,
                    temp: data.main.temp,
                    icon: data.weather[0].icon,
                    iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                });
            })
            .catch(e => {
                setError(e.error);
            })
            .finally(() => {
                setLoading(false);
            });

        return (
            console.log('clear')
        );
    }, [dataCity]);


    return (
        <>
            <h3>Ajax !</h3>
            {isLoading ? (
                <p>Chargement...</p>
            ) : isError ? (
                <p>Error :o</p>
            ) : result && (
                <p>Il fait {result.temp} degrés <img src={result.iconUrl} alt="" /> à {result.name} !</p>
            )}
        </>
    );
};

export default Weather;
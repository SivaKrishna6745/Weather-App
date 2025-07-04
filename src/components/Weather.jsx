import React, { useState } from 'react';
import Search from './Search';
import Card from './card';
import Detail from './Detail';

const Weather = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const fetchWeatherData = async (searchParam) => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${apiKey}`);
            const data = await res.json();
            console.log(data);
            if (!res.ok) throw new Error(data.message || 'Failed to fetch weather');
            setWeatherData(data);
        } catch (error) {
            console.error(error);
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        await fetchWeatherData(search);
    };

    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const currentHour = new Date().getHours();
    const dayPhase = currentHour > 12 ? 'Evening' : 'Day';

    if (err) return <div className="text-2xl text-indigo-900">Data Fetch failed!! Please try again later.</div>;

    return (
        <div className="flex flex-col items-center">
            <h1 className="title text-4xl text-indigo-900 my-5">A Simple Weather Application</h1>
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <div className="mt-4">
                {loading && <div className="text-2xl text-indigo-900">Loading!! Please wait...</div>}
                {weatherData.length !== 0 && (
                    <div className="bg-purple-200/40 max-w-2xl min-h-[300px] p-4 rounded-lg flex gap-4 items-center justify-center shadow-md">
                        <div className="left-card p-4 flex flex-col gap-4">
                            <img src="/images/weather.png" alt="weather" className="h-20 w-30" />
                            <Detail
                                value={`${(weatherData?.main?.temp - 273.15).toFixed(2)} °C`}
                                className="font-bold text-6xl"
                            />
                            <Detail value={weatherData?.weather[0]?.description} />
                            <hr className="border-1 border-gray-400 w-full" />
                            <Detail value={getCurrentDate()} />
                            <Detail value={dayPhase} />
                            <hr className="border-1 border-gray-400 w-full" />
                            <Detail value={weatherData?.name} className="font-bold text-4xl" />
                        </div>
                        <div className="right-card p-4 flex flex-col gap-4">
                            <Card
                                label={'Wind'}
                                value={`${parseFloat(weatherData?.wind?.speed * 3.6).toFixed(2)} Kmph`}
                            />
                            <Card label={'Humidity'} value={`${weatherData?.main?.humidity} %`} />
                            <Card
                                label={'Real feel'}
                                value={`${parseFloat((weatherData?.main?.feels_like - 273.15).toFixed(2))} °C`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;

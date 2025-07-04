import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-100 min-h-screen flex justify-center">
            <Weather />
        </div>
    );
}

export default App;

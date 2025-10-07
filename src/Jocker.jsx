import { useState, useEffect } from "react";
import "./index.css"

export default function Jocker() {
    // correct endpoint for a random joke
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(URL);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            console.log(data);
            setJoke({ setup: data.setup, punchline: data.punchline });
        } catch (err) {
            console.error(err);
            setError(err.message || "Failed to load joke");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // call the fetch function on mount
        fetchJoke();
    }, []);

    return (
        <div className="Jokes">
            <h1>Jocker!</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {joke ? (
                <>
                    <h2>{joke.setup}</h2>
                    <h2>{joke.punchline}</h2>
                </>
            ) : (
                !loading && <p>No joke yet.</p>
            )}
            <button onClick={fetchJoke} disabled={loading}>
                {loading ? "Fetching..." : "Get New Joke"}
            </button>
        </div>
    );
}
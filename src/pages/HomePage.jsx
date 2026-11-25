import { useState } from "react";
import { Link } from "react-router-dom";
import { searchShows } from "../services/tvmazeAPI";

export const HomePage = ()=> {
    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) =>{
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);
        try {
            const results = await searchShows(query);
            setShows(results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>TV Shows Search</h1>
            <form onSubmit={handleSearch} style={{marginBottom: '20px'}}>
                <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter TV show title..." 
                style ={{padding:'10px ', width: '300px', marginRight:'10px', border: '1px solid #ccc', borderRadius: '4px'}}
                />
                <button type="submit" style={{padding: '10px 20px', cursor: 'pointer', backgroundColor:"#007bff", color: 'white', border: 'none', borderRadius: '4px'}}>
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{color: 'red'}}>Error: {error} </p>}

            {!loading && !error && shows.length ===0 && query && (
                <p>No results found for "{query}"</p>
            )}

            <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                {shows.map(show => (
                    <div 
                    key={show.id} 
                    style={{border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '8px'}}>
                        {show.image ? (
                            <img src={show.image.medium} alt={show.name} style={{width: '100%', borderRadius: '4px'}} />
                        ):(
                            <div style={{height: '280px', backgroundColor:'#eee', display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                No photo found
                            </div>
                        )}
                        <h3 style={{fontSize:'16px', margin:'10px 0'}}>{show.name}</h3>
                        <Link to={`/show/${show.id}`} style={{display: 'inline-block', padding:'5px 10px', backgroundColor:'#28a745', color:'white', borderRadius:'4px', textDecoration:'none'}}>
                        View details
                        </Link>
                    </div>
                )
                )}
            </div>
        </div>
    )
};
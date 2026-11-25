const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async(response) => {
    if (!response.ok) {
        throw new Error (`Error API: ${response.status}`);
    }
    return response.json();
};

export const searchShows = async(query) =>{
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
    const data = await handleResponse(response);
    return data.map(item => item.show);
};

export const getShowDetails = async(id) => {
    const response = await fetch(`${BASE_URL}/shows/${id}/?embed[]=cast&embed[]=episodes`);
    return handleResponse(response);
};

export const getSchedule = async (country = 'US') =>{
    const response = await fetch(`${BASE_URL}/schedule?country=${country}`);
    return handleResponse(response);
};
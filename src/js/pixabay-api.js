const BASE_URL = 'https://pixabay.com/api/';
export const fetchImg = searchQuery => {
    const searchParams = new URLSearchParams({
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: '45504583-80571ec5a383edfe03322cd8c',
    });
    return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
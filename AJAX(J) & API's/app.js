//movie
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    deleteTitles();
    const search = form.elements.query.value;
    const config = { params: { q: search } };
    const request = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayImage(request.data);
    form.elements.query.value = '';
})

async function getMovie(movieName) {
    try {
        const request = axios.get(`http://api.tvmaze.com/search/shows?q=${movieName}`);
        return request.data;
    } catch (e) {

    }
}
const displayImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

delete images
const deleteTitles = () => {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}
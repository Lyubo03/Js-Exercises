//movie
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    deleteTitles();
    const search = form.elements.query.value;
    const reqData = await getMovie(search);
    displayImage(reqData);
    form.elements.query.value = '';
})

async function getMovie(movieName) {
    try {
        const config = { params: { q: movieName } };
        const request = await axios.get(`http://api.tvmaze.com/search/shows`, config);
        return request.data;
    } catch (e) {
        console.log('Error', e);
    }
}
const displayImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
            displayTitle(result);
        }
    }
}

const deleteTitles = () => {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}
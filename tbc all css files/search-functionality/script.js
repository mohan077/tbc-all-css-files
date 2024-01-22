const apiKey = 'n40tbpk3UmpVf-_OobIEReu2tKl_71UetvcdzM5ZFgs';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = searchInput.value;
    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayImages(images) {
    imageContainer.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description;
        imageContainer.appendChild(imgElement);
    });
}

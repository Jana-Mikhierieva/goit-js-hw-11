import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { fetchImg } from "./js/pixabay-api";
import { createGalleryCardTemplate } from "./js/render-functions";
const form = document.querySelector('.js-search-form');
const gallerySelected = document.querySelector('.js-gallery');
const lightbox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captions: true,
        animationSpeed: 300,
        close: true,
});
const loader = document.querySelector('.loader');
const handleSubmit = event => {
    event.preventDefault();
    gallerySelected.innerHTML = '';
    const searchInput = form.elements.user_query.value.trim();
    if (!searchInput) {
        return
    }
    loader.classList.remove('is-hidden');
    fetchImg(searchInput).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: '400px',
        backgroundColor: '#daff00',
            });
            return;
        }
        const cardsGalleryList = data.hits.map(card => createGalleryCardTemplate(card)).join('');
        gallerySelected.innerHTML = cardsGalleryList;
        lightbox.refresh();
    }).catch(err => {
        console.error(err);
        iziToast.error({
        title: 'Error',
        message: 'Oops! Error! Try again later!',
        position: 'topRight',
        maxWidth: '400px',
        backgroundColor: '#daff00',
        });
    }).finally(() => {
        form.reset();
        loader.classList.add('is-hidden');
    })
}
form.addEventListener('submit', handleSubmit)
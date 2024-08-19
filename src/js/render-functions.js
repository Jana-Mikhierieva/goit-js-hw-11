export const createGalleryCardTemplate = infoImg => {
    return `
    <li class="gallery-card">
        <a class="gallery-link" href="${infoImg.largeImageURL}">
            <img class="gallery-img" src="${infoImg.webformatURL}" alt="${infoImg.tags}" />
        </a>
        <div class="image-info">
            <p class="img-descr"><span class="text-descr">Likes</span><span class="quantity-descr">${infoImg.likes}</span></p>
            <p class="img-descr"><span class="text-descr">Views</span><span class="quantity-descr">${infoImg.views}</span></p>
            <p class="img-descr"><span class="text-descr">Comments</span><span class="quantity-descr">${infoImg.comments}</span></p>
            <p class="img-descr"><span class="text-descr">Downloads</span><span class="quantity-descr">${infoImg.downloads}</span></p>
        </div>
        </li>`
}
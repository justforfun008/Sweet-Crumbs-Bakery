const imageSources = [
   "Drip cake.jpg",
   "Oreo drip cake.jpg",
   "goat cake.jpg",
   "Pink cat cake.jpg"
];

const cupcakeSources = [
  "chocolate cupcake.jpg",
   "vanilla cupcake 2.jpg",
   "vanilla cupcake.jpg",
   "cherrycc.jpeg",
   "chococc.jpg",
   "cupcake.jpeg"
];

let currentIndex = null;
let currentGallery = null;
let autoSlideInterval = null;

document.getElementById('menu-toggle').addEventListener('click', function(){
    document.getElementById('collapsed').classList.toggle('menu');
    document.getElementById('main-wrapper').classList.toggle('shifted');
});

function openImage(imgElement, index){
    currentIndex = index;
    currentGallery = imageSources;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = currentGallery[index];
    lightbox.style.display = 'flex';
    lightbox.focus();

}

function openImageFromSection(section, index) {
    currentIndex = index;
    currentGallery = section === 'cupcake' ? cupcakeSources : imageSources;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = currentGallery[index];
    lightbox.style.display = 'flex';
    lightbox.focus();

}

function closeImage(){
    document.getElementById('lightbox').style.display = 'none';
    currentIndex = null;
    stopAutoSlide();
}   

document.addEventListener('keydown', (e) => {
    if (currentIndex !== null && currentGallery !== null) {
        if (e.key === 'ArrowRight' && currentIndex < currentGallery.length - 1) {
            currentIndex++;
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
        } else if (e.key === 'Escape') {
            closeImage();
            return;
        } else {
            return;
        }

        document.getElementById('lightbox-img').src = currentGallery[currentIndex];

        if (currentGallery === imageSources) {
            const gallery = document.getElementById('imageGallery');
            const scrollAmount = 300;
            gallery.scrollBy({ left: e.key === 'ArrowRight' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
        } else if (currentGallery === cupcakeSources) {
            const gallery = document.getElementById('cupcakeGallery');
            const scrollAmount = 300;
            gallery.scrollBy({ left: e.key === 'ArrowRight' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
        }
    }
});

function scrollGallery(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const scrollAmount = 300 * direction;
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollGalleryCupcakes(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const scrollAmount = 300 * direction;
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
const imageCount = 10;
const imgExtension = ".avif";
const galleryElement = document.getElementById("imageGallery");

async function loadImages() {
    for (let i=1; i<=imageCount; i++) {
        const imgElement = document.createElement("img");
        imgElement.src = `images/image${i}${imgExtension}`;
        imgElement.alt = `Image ${i}`
        galleryElement.appendChild(imgElement);
    }
}

loadImages();
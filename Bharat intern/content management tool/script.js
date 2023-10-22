
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const addTextBtn = document.getElementById('add-text-btn');
    const imageInput = document.getElementById('image-input');
    const addImageBtn = document.getElementById('add-image-btn');
    const videoUrlInput = document.getElementById('video-url-input');
    const addVideoBtn = document.getElementById('add-video-btn');
    const contentContainer = document.getElementById('content-container');

    addTextBtn.addEventListener('click', () => {
        const text = textInput.value;
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        contentContainer.appendChild(paragraph);
        textInput.value = '';
    });

    addImageBtn.addEventListener('click', () => {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);
        contentContainer.appendChild(image);
        imageInput.value = '';
    });

    addVideoBtn.addEventListener('click', () => {
        const videoUrl = videoUrlInput.value;
        const video = document.createElement('iframe');
        video.src = videoUrl;
        video.setAttribute('allowfullscreen', 'true');
        contentContainer.appendChild(video);
        videoUrlInput.value = '';
    });
});
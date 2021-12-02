const certificate = (certificateParent) => {
    const gallery = document.querySelector(certificateParent);
    const imgPopup = document.createElement('div');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    gallery.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImage);

    gallery.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
    });
};

export default certificate;
const numStars = 5;

const containers = document.querySelectorAll('.stars-container');
containers.forEach(container => {
    for (let i = 0; i < numStars; i++) {
        const starImg = document.createElement('img');
        starImg.src = 'images/icon-star.svg';
        starImg.alt = 'Estrela';
        starImg.width = 17;
        starImg.height = 16;
        if (i !== numStars - 1) {
            starImg.style.marginRight = '5px'; // Define o espaçamento direito
        }
        container.appendChild(starImg);
    }
});
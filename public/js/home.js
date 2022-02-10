const productContainers = [...document.querySelector('.product-container')];
const previousBtn = [...document.querySelector('.previous-btn')];
const nextBtn = [...document.querySelector('next-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    previoustBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
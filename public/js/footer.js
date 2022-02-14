const createFooter = () => {
    const footer = document.querySelector('footer');

    footer.innerHTML = 
    `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">pants</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
            </ul>
            
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">pants</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about us</p>
    <p class="footer-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus quo omnis voluptatibus laborum pariatur totam itaque laudantium eos dolor, blanditiis nobis labore, in asperiores consequatur repellendus sequi quae, repudiandae sint eius! Aliquid dolorem enim deleniti, fugiat natus praesentium ad molestias hic, possimus perspiciatis molestiae, commodi iste necessitatibus. Dolorem voluptates odit blanditiis ut mollitia iure, nam animi ea quasi facere sed omnis aut perferendis itaque excepturi repellendus sint dolorum tempora consequuntur quis fuga enim accusantium? Tenetur possimus itaque, fuga id iste amet dolorem praesentium iure nostrum accusantium, neque explicabo maiores tempore laboriosam recusandae excepturi natus a! Saepe optio architecto pariatur.</p>
    <p class="footer-info">support emails - help@clothing.com, 
    customersupport@clothing.com</p>
    <p class="footer-info">telephone 1-800-222-1818</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & conditions</a>
            <a href="#" class="social-link">privacy and cookies</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-copyright">clothing, best online apparel store &copy; 2022</p>;
    `
}

createFooter();
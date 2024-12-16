
class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            
            <div class="button-container">
            <button class="button">
            <a href="../../static/index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"
            stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                                </path>
                                </svg>
                                </a>
                </button>
                <div class="pesquisar">
                <input type="text" placeholder="O que você quer comprar?">
                <button class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"
                viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round"
                stroke-linecap="round">
                </path>
                    </svg>
                </button>
                </div>

                <button id="logado" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                        <path
                        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z">
                        </path>
                        </svg>
                </button>
                            
                <button id="logoutButton" class="button">Sair</button>
            </div>
        </nav>
        `;
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h4>VITRINE VIRTUAL</h4>
                        <p>Seu destino para produtos incríveis e preços imbatíveis.</p>
                        <div id="mapa">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113141.4684852843!2d-48.654333541779366!3d-27.603731291355356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273831874b03cf%3A0x738d23b15d5cc78b!2sFaculdade%20Senac%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1727832346576!5m2!1spt-BR!2sbr"
                                width="280" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contato</h4>
                        <p>Email: contato@vitrinevirtual.com</p>
                        <p>Telefone: (48) 1234-5678</p>
                        <p>Endereço: Rua Fictícia, 123, Florianópolis, SC</p>
                    </div>
                    <div class="footer-section">
                        <h4>Siga-nos</h4>
                        <ul class="social-media">
                            <li><a href="#">
                                    <div class="tooltip-container">
                                        <div class="tooltip">
                                            <div class="profile">
                                                <div class="user">
                                                    <div class="img">Fb</div>
                                                    <div class="details">
                                                        <div class="name">User</div>
                                                        <div class="username">@username</div>
                                                    </div>
                                                </div>
                                                <div class="about">500+ Friends</div>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <a class="icon" href="#">
                                                <div class="layer">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span class="facebookSVG">
                                                        <svg viewBox="0 0 40 40" xml:space="preserve"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <linearGradient gradientUnits="userSpaceOnUse"
                                                                gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                                                                y2="407.5726" y1="406.6018" x2="-277.375" x1="-277.375" id="a">
                                                                <stop stop-color="#0062e0" offset="0"></stop>
                                                                <stop stop-color="#19afff" offset="1"></stop>
                                                            </linearGradient>
                                                            <path
                                                                d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                                                                fill="url(#a)"></path>
                                                            <path
                                                                d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                                                                fill="#fff"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="text">Facebook</div>
                                            </a>
                                        </div>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div class="tooltip-container">
                                        <div class="tooltip">
                                            <div class="profile">
                                                <div class="user">
                                                    <div class="img">Ui</div>
                                                    <div class="details">
                                                        <div class="name">User</div>
                                                        <div class="username">@username</div>
                                                    </div>
                                                </div>
                                                <div class="about">800+ Followers</div>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <a class="icon" href="#">
                                                <div class="layer">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span class="instagramSVG">
                                                        <svg fill="white" class="svgIcon" viewBox="0 0 448 512" height="1.5em"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="text">Instagram</div>
                                            </a>
                                        </div>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div class="tooltip-container">
                                        <div class="tooltip">
                                            <div class="profile">
                                                <div class="user">
                                                    <div class="img">Ui</div>
                                                    <div class="details">
                                                        <div class="name">User</div>
                                                        <div class="username">@username</div>
                                                    </div>
                                                </div>
                                                <div class="about">500+ Connections</div>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <a class="icon" href="https://freecodez.com/">
                                                <div class="layer">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span class="fab fa-linkedin">
                                                        <svg viewBox="0 0 448 512" height="1em">
                                                            <path
                                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="text">LinkedIn</div>
                                            </a>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2024 Vitrine Virtual. Todos os direitos reservados.</p>
                </div>
            </footer>

        `;
    }
}

customElements.define('nav-component', NavComponent);
customElements.define('footer-component', FooterComponent);
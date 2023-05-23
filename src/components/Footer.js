import React from 'react';

function Footer () {
    return (
        <footer>
            <div class="row">
                <h2 id="contact_me" class="column_left"></h2>
                    <ul class="column_center">
                        <li class="contact_list_item"><a class="href_special" href="https://github.com/RoboTom01"> 💻 Checkout my GitHub!</a></li>
                        <li class="contact_list_item"><a class="href_special" href="https://www.linkedin.com/in/thomas-m-waite-7b6594121"> 🤝 Find me on LinkedIn!</a></li>
                        <li class="contact_list_item"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img> Built with React!</li>
                    </ul>
                <div class="column_right"></div>
            </div>
        </footer>
    )
}

export default Footer;
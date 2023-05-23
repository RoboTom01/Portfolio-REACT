import React from 'react';

function Footer () {
    return (
        <footer>
            <div class="row">
                <h2 id="contact_me" class="column_left">Contact Me</h2>
                    <ul class="column_center">
                        <li class="contact_list_item"><a class="href_special" href="mailto:thomasmwaite01@gmail.com"> 📧 Send me an email!</a></li>
                        <li class="contact_list_item"><a class="href_special" href="https://www.linkedin.com/in/thomas-m-waite-7b6594121"> 🤝 Find me on LinkedIn!</a></li>
                    </ul>
                <div class="column_right"></div>
            </div>
        </footer>
    )
}

export default Footer;
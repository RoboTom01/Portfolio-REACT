import React from 'react';

function Footer () {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Thomas_Waite_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Thomas_Waite_Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <footer>
            <div className="row">
                <h2 id="contact_me" className="column_left"></h2>
                    <ul className="column_center">
                        {/* <li id="resume_text" className="contact_list_item"><a class="href_special" href='/Thomas_Waite_Resume.pdf' download> 📄 Download My Resume</a></li> */}
                        <li id="resume_text" className="contact_list_item"><a className="href_special" onClick={onButtonClick}> 📄 Download My Resume</a></li>
                        {/* <button onClick={onButtonClick}>
                            Download PDF
                        </button> */}
                        <li className="contact_list_item"><a className="href_special" href="https://github.com/RoboTom01"> 💻 Checkout my GitHub!</a></li>
                        <li className="contact_list_item"><a className="href_special" href="https://www.linkedin.com/in/thomas-m-waite-7b6594121"> 🤝 Find me on LinkedIn!</a></li>
                        <li className="contact_list_item"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img><a className="href_special" href='https://react.dev/'> Built with React!</a></li>
                    </ul>
                <div className="column_right"></div>
            </div>
        </footer>
    )
}

export default Footer;
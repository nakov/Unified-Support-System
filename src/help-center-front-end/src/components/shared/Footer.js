import React, { useState } from 'react';

function Footer() {
    const [ year, setYear ] = useState(new Date().getFullYear())
    return (
        <div className="container">
            © {year} - SoftUni Help Center - <a href="#">Privacy</a>
        </div>
    )
}

export default Footer;
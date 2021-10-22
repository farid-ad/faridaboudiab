import React from 'react'

const Links = ({ link, text }) => {
    return (
        <>
            <a href={link}>{text}</a>
            <style jsx>{`
                a {
                    display: inline-block;
                    padding: 10px;
                    margin: 10px;
                    text-aline: left;
                    text-decoration: none;
                    color: red;
                    font-weight: 900;
                    font-size: 1em;
                }
                a:hover {
                    color: black;
                }
            `}</style>
        </>
    )
}

export default Links

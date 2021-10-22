import React from 'react'
import Button from '../../components/buttons/button'
import Links from '../../components/buttons/links'

const Header = () => {
    return (
        <>
            <div className="s">
                <div className="Logo">Logo</div>
                <div className="Links1">
                    <Links className="Links" text={`Home`} link={`/home`} />
                    <Links className="Links" text={`About`} link={`/About`} />
                    <Links
                        className="Links"
                        text={`Services`}
                        link={`/Services`}
                    />
                    <Links className="Links" text={`Skills`} link={`/Skills`} />
                    <Links
                        className="Links"
                        text={`Contact`}
                        link={`/Contact`}
                    />
                </div>
            </div>

            <style jsx>{`
                .Links {
                }
                .Links1 {
                    padding-left: 1000px;
                }
                .s {
                    display: inline-block;
                }
            `}</style>
        </>
    )
}

export default Header

import react from 'react'
const Button = ({ color, text }) => {
    return (
        <div className="container">
            <form>
                <button type="submit">{text}</button>
            </form>
            <style jsx>{`
                .container {
                    margin: 0.9w
                }
                button {
                    min-width: 10w;
                    border-radius: 12px;
                    padding: 10px:
                    font-size: 14px;
                    border: none;
                    color: white;
                    background-color: ${color} ;
                    outline: none;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 
                     0 6px 20px 0 rgba(0, 0, 0, 0.29);
                }
                button::hover {
                    border: 1px solid white;
                    padding: 9px
                }
            `}</style>
        </div>
    )
}
export default Button

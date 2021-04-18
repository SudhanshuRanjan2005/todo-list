import React from 'react'

export const Footer = () => {
    let Footerstyle = {
        position: "fixed",
        bottom: "0",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-2" style={Footerstyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

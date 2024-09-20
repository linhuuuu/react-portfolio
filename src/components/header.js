import React from 'react';
const Header = () => {
    return (
        //HEADER
        <div className="center-div a-header">
            <div className="back"><img src={"/head.png"} alt="Header" className="blur"></img></div>
            <div className="center-div head">
                <div className="center-div row header">
                    <div className="center-div"><img src="thumb.png" className="rounded-circle lin" alt="Avatar"></img></div>
                    <div className="jumbotron text-center"><h1 className='display-4 Fname'>ARTURO ANDRES P. DE SILVA</h1></div>
                    <div className="Desc"><p>Artist, Cinephile, Computer Science Student</p></div>
                    <div className="Desc"><p>Born 2003. Libra. INFP</p></div>
                    <div className="Desc"><p>I believe in the marriage of art and science, and Game Development is the poster child of such.</p></div>
                </div>

            </div>
        </div>
    )
}
export default Header

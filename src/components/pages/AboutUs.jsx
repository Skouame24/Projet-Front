import React from 'react'
import ExportExcel from '../Form/exportFile';

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Nos Services</h2>
                  
                    <p>
                        Veuillez cliquer sur le Bouton commencer svp
                    </p>
                    <div><ExportExcel/></div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUs;
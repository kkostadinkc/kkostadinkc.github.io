import React, { Component } from "react";

class Distribucion2tsikirkos extends Component{
    render(){
        return(
            <div className="tsikirkos__Ej3">

                <header className="tsikirkos__Ej32header">Cabecera</header>

                <main className="tsikirkos__Ej3main"> 
                    <aside className="tsikirkos__Ej3aside">Barra Lateral Izquierda</aside>
                    
                    <section className="tsikirkos__Ej3section">
                        <div className="tsikirkos__Ej3__section__div">Hija 1 Seccion principal</div>
                        <div className="tsikirkos__Ej3__section__div">Hija 2 Seccion principal</div>
                    </section>
                    <aside className="tsikirkos__Ej3aside">Barra Lateral Derecha</aside>
                </main>

                <footer className="tsikirkos__Ej3footer">
                    <div className="tsikirkos__Ej3__footer__div">Hija 1 pie</div>
                    <div className="tsikirkos__Ej3__footer__div">Hija 2 pie</div>
                    <div className="tsikirkos__Ej3__footer__div">Hija 3 pie</div>
                </footer>
            </div>
        )
    }
}

export default Distribucion2tsikirkos;
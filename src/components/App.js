import React, { Component } from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã RJ",
        data: "26/02/2017",
        horario: "19h",

    },
    casa: {
        nome: "Vasco",
    },
    visitante:{
        nome: "Flamengo",
    }
};

class App extends Component {

    render() {
        return <PlacarContainer {...dados}/>;
    }
}

export default App

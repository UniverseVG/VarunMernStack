import React, { Component } from 'react';
import Pizza from './components/Pizza.js';
import AddPizza from './components/AddPizza.js';

/*function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}*/
class App extends Component {

    state = {
        //pizzaPlaces: []
        dynamicName: "Pizza Hunter",
        /*brand: "Pizza",
        description: "best pizza in town",
        brand2: "Dominoes",
        description2: "Better than the best",*/
        pizzaPlaces: [{ name: "Pizza Hut", description: "Best Piza in town", id: 1 }, { name: "Dominoes", description: "Better than the best", id: 2 }, { name: "Papa Jonns", description: "The best is served", id: 3 }, { name: "Subway", description: "The Fatest Service", id: 4 }, { name: "Subway", description: "The Fatest Service", id: 5 }, { name: "Subway", description: "The Fatest Service", id: 6 }, { name: "Subway", description: "The Fatest Service", id: 7 }]
    }
    addCard = (details) => {
        console.log(details);
        // console.log(6 + Math.random()*10);
        details.id = Math.floor(7 + Math.random() * 10); // this.state.pizzaPlaces.length + 1
        console.log(details);
        // this.state.pizzaPlaces.push(details);
        // ES6 feature: Spread operators : copy the elements from the source(Array, objects) [...oldArray, details]
        this.setState({
            pizzaPlaces: [...this.state.pizzaPlaces, details]
        })

    }


    deleteCard = (id) => {
        console.log(id);
        let pizzaPlaces = this.state.pizzaPlaces.filter((pizzaPlace) => {
            return pizzaPlace.id !== id
        })
        this.setState({
            pizzaPlaces: pizzaPlaces
        })

        //this.state.pizzaPlaces = pizzaPlaces;



    }

    render() {
        /*let dynamicName = 'React is mind blowing'
        let brand = "PizzaHut"
        let description = "Best Pizza in town!!"
        let brand2 = "Dominoes"
        let description2 = "Better than everything!!"*/
        return ( <
            div >
            <
            h1 > { this.state.dynamicName } <
            /h1> <
            Pizza pizzaPlaces = { this.state.pizzaPlaces }
            deleteCard = { this.deleteCard } >

            <
            /Pizza >  <
            AddPizza addCard = { this.addCard } > < /AddPizza> < /
            div >




        )





        // <Pizza brand = { this.state.pizzaPlaces[0].name }
        //  description = { this.state.pizzaPlaces[0].description } > < /Pizza>  <
        // Pizza brand = { this.state.pizzaPlaces[3].name }
        //description = { this.state.pizzaPlaces[3].description } > < /Pizza>





    }
}

export default App;
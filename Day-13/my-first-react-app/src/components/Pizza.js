import React from 'react';
import './Pizza.css';
let Pizza = (props) => {
        console.log("I am coming from App.js", props);


        let pizzaPlacesList = props.pizzaPlaces.length ? (props.pizzaPlaces.map((pizzaPlace) => {
                console.log(pizzaPlace);
                return ( <
                    div class = "pizza"
                    key = { pizzaPlace.id } >
                    <
                    h1 > { pizzaPlace.name } < /h1> <
                    p > { pizzaPlace.description } < /p> <
                    button onClick = {
                        () => { props.deleteCard(pizzaPlace.id) }
                    } > Delete Card < /button >

                    <
                    /div>


                )


            })) : ( < p > No data Available... < /p> )
                console.log(pizzaPlacesList);
                return ( <
                    div > { pizzaPlacesList } < /div>)

                    //JSX -Javascript XML
                    // React. CreateElement
                    //   <
                    //  div class = "pizza" >
                    //   <
                    //   h1 > { props.brand } < /h1> <
                    //   p > { props.description } < /p> < /
                    //   div >

                }

                export default Pizza;
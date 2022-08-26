import React, { Component } from "react";
import CardsList from "../components/CardsList";
// import {robots} from './robots';
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField:'',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users})
        )

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


    render(){
        const {robots,searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length){
            return (
                <h1 className="tc f2">Loading...</h1>
            )
        }else{
            return (
                <div className="tc pa2">
                    <h1 className="f1">robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardsList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
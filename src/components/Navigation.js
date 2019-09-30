import React, {Component} from 'react'

export default class Navigation extends Component {
    render(){
        return(
            <nav className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Feature</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
import React, {Component} from 'react'

export default class Header extends Component {
    render(){
        return(
            <header className="splash-header">
                <h1>Search a thing or something</h1>
                <form>
                    <input type="text" id="search" name="search" placeholder="type something..."/>
                    <input type="submit" name="submit" value="Search"/>
                </form>
            </header>
        )
    }
}
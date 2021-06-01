import React from 'react'
import { CardDeck } from 'react-bootstrap'
import Project from "../Project"
import './style.css'

function Portfolio() {
    return (
        <div className="container body">
            <h1 className="font-weight-light">Portfolio</h1>
            <CardDeck className="card-deck">
                <Project />
            </CardDeck>
        </div>
    )
}

export default Portfolio;


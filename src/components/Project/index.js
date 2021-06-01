import React, { Component } from 'react'
import { DropdownButton, Dropdown, Card } from 'react-bootstrap'
import Projects from "./projects.json"
import '../Portfolio/style.css'

class Project extends Component {
    state = {
        Projects
    };

    render() {
        return (
            <>
            {this.state.Projects.map(project => (
                <Card key={project.id} style={{ width: '18rem' }} bg="light" text="black" className="mb-1" >
                    <Card.Img className="card-img-top" src={project.image} alt={project.name} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text className="card-text">
                            {project.desc}
                        </Card.Text>
                        <DropdownButton className="mt-auto" id="dropdown-basic-button" variant="danger" title="Check it out!">
                            <Dropdown.Item className="dropdown-text" href={project.app}>Live App</Dropdown.Item>
                            <Dropdown.Item className="dropdown-text" href={project.repo}>Repository</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
            ))}
            </>
        )
    }
}

export default Project;
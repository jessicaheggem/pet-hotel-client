import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class newPetForm extends Component {
    state = {
        newPet: {
            name: '',
            breed: '',
            color: ''
        }
    }

    handleNameChange = (event, propertyValue) => {
        console.log(`adding ${event.target.value} to state`)
        this.setState({
            newPet: {
                ...this.state.newPet,
                [propertyValue]: event.target.value
            }
        })
    }

    addNewPet = event => {
        console.log(`adding pet: ${this.state.newPet}`)
        this.props.dispatch({
            type: 'NEW_PET',
            payload: this.state.newPet
        })
    }

    render() {
        return (
            <div>
                <h3>Add A New Pet!</h3>
                <input placeholder="name" type='text' value={this.state.newPet.name} onChange={(event) => this.handleNameChange(event, 'name')} />
                <input placeholder="breed" type='text' value={this.state.newPet.breed} onChange={(event) => this.handleNameChange(event, 'breed')} />
                <input placeholder="color" type='text' value={this.state.newPet.color} onChange={(event) => this.handleNameChange(event, 'color')} />
                <button onClick={this.addNewPet}>ADD PET</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(newPetForm);
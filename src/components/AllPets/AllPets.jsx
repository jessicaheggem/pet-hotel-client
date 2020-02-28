import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetForm from '../NewPetForm/NewPetForm'
import Pet from '../Pet/Pet'

class AllPets extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div >
                <PetForm />
                <table>
                    <thead>
                        <tr>
                            {/* <th>Owner</th> */}
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked in</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}
                        {this.props.reduxStore.allPetsReducer.map(pet => {
                            return (
                                <tr>
                                   <Pet key={pet.id} id={pet.id} pet={pet}/>
                                </tr>
                            )
                        })}

                        {/* </tr> */}
                    </tbody>
                </table>

            </div>
        );
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(AllPets);
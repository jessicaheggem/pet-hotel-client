import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from '../Pet/Pet'

class AllPets extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxStore.allPetsReducer)}

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
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PetForm from '../NewPetForm/NewPetForm'

class AllPets extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div >
                <PetForm />
                {JSON.stringify(this.props.reduxStore.allPetsReducer)}
            </div>
        );
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (AllPets);
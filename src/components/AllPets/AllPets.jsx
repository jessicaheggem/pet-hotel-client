import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';

class AllPets extends Component {
    
    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div >
                
            </div>
        );
    }

}

export default AllPets;
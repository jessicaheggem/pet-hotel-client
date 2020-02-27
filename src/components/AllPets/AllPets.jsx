import React, {Component} from 'react';
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

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (AllPets);
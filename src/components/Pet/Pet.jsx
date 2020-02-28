import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


class Pet extends Component {
    render() {
        return (
            <Router>
                <td>{this.props.pet[1]}</td>
                <td>{this.props.pet[2]}</td>
                <td>{this.props.pet[3]}</td>
                <td>{this.props.pet[4]}</td>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Pet);
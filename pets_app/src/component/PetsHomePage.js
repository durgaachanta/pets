import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateReduxStore } from '../redux';
import '../styles/styles.css';

class PetsHomePage extends React.Component {

  componentDidMount = () => {
    //axios call to fetch data from MockAPI
    axios.get('/pets/fetchpetsdata')
      .then((response) => {
        //if successful push data to redux store
        if (response.status === 200) {
          this.props.initialLoad(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="pagecontainer">
        <h2> These pets are looking for a home!</h2>
        <Link to="/pets/new">Add a pet to the shelter</Link>
        <div>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
            {this.props.petsdata.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>
                    <button className="btn-lg petbtn">
                      <Link to={`/pets/${item.id}`}>
                        Details
                       </Link>
                    </button>
                    <button className="btn-lg petbtn">
                      <Link to={`/pets/${item.id}/edit`}>
                        Edit
                      </Link>
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  petsdata: state.petDetails,
});

const mapDispatchToProps = (dispatch) => ({
  initialLoad: (data) => {
    dispatch(updateReduxStore(data))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsHomePage);
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { deletePet } from '../redux';
import "../styles/styles.css";

class PetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: '',
      index: '',
    };
  };

  componentDidMount = () => {
    var thispetDetails = this.props.petDetails.find((item) => item.id === this.props.match.params.id);
    var petindex = this.props.petDetails.findIndex((item) => item.id === this.props.match.params.id);
    this.setState({ pet: thispetDetails, index: petindex });
  }
  deletePet = () => {
    //axios call to delete this record from MockAPI
    axios.delete(`/pets/deletepet/${this.props.match.params.id}`)
      .then((response) => {
        if (response.status === 200) {
          // delete this pet record from Redux
          this.props.deletePetFromRedux(this.state.index);
          //reroute the page to home
          this.props.history.push('/pets');

        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div class="pagecontainer">
        <h2>Details about {this.state.pet.name}</h2>
        <h3><span>Pet type:</span>{this.state.pet.type}</h3>
        <h3><span>description:</span>{this.state.pet.description}</h3>
        <h3><span>skills:</span></h3>
        <ul>
          {this.state.pet.skills !== undefined ? this.state.pet.skills.map((item) => {
            return <li>{item}</li>
          }) : ''}
        </ul>
        <h3><span>likes:</span>{this.state.pet.likes}</h3>
        <button className="btn-lg petbtn">Like this pet</button>
        <button className="btn-lg petbtn" onClick={this.deletePet}>Adopt this pet</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  petDetails: state.petDetails,
});

const mapDispatchToProps = (dispatch) => ({
  deletePetFromRedux: (idx) => {
    dispatch(deletePet(idx))
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
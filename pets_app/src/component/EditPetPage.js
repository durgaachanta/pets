import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editPetData } from '../redux';

class NewPetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      description: '',
      skill1: '',
      skill2: '',
      skill3: '',
      nameClass: "hide",
      nameValid: 0,
      typeClass: "hide",
      typeValid: 0,
      descriptionClass: "hide",
      descriptionValid: 0,
    }

  };
  componentDidMount = () => {
    var thispetDetails = this.props.petdata.find((item) => item.id === this.props.match.params.id);
    var petindex = this.props.petdata.findIndex((item) => item.id === this.props.match.params.id);
    this.setState({
      name: thispetDetails.name,
      type: thispetDetails.type,
      description: thispetDetails.description,
      skill1: thispetDetails.skills[0] ? thispetDetails.skills[0] : '',
      skill2: thispetDetails.skills[1] ? thispetDetails.skills[1] : '',
      skill3: thispetDetails.skills[2] ? thispetDetails.skills[2] : '',
      index: petindex,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "name") {
      if (event.target.value.length < 3) {

        this.setState({ nameClass: "error" });
      } else {
        this.setState({ nameClass: "hide", nameValid: 1 });
      }
    } else if (event.target.name === "type") {
      if (event.target.value.length < 3) {

        this.setState({ typeClass: "error" });
      } else {
        this.setState({ typeClass: "hide", typeValid: 1 });
      }

    } else if (event.target.name === "description") {
      if (event.target.value.length < 3) {

        this.setState({ descriptionClass: "error" });
      } else {
        this.setState({ descriptionClass: "hide", descriptionValid: 1 });
      }
    }
  }

  editPetData = () => {
    //build the json structure and make a post call to Mock API to store data
    var skill = [];
    //fix the skills array - do not pass empty strings
    skill = [this.state.skill1, this.state.skill2, this.state.skill3];
    console.log(skill);

    var jsonObject = {
      id: this.props.match.params.id,
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      skills: skill,
      likes: 0,
    }
    console.log(jsonObject);

    //axios call to edit data
    axios.put(`/pets/editpetdata/${this.props.match.params.id}`, jsonObject)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          //push new data to Redux store and change route back to home page
          this.props.editPetInRedux(jsonObject, this.state.index);
          this.props.history.push('/pets');
        }
      })
      .catch((error) => {
        console.log(error);
      });


  }


  render() {
    return (
      <div className="pagecontainer">
        <h3>Edit this pet details</h3>
        <form onSubmit={(event) => { event.preventDefault() }}>
          <div className="form-group">
            <label htmlFor="name">Pet name:</label>
            <input className="form-control" name="name" onChange={this.handleChange} value={this.state.name} />
            <small className={this.state.nameClass}>Petname must be 3 characters long</small>
          </div>
          <div className="form-group">
            <label htmlFor="type">Pet type:</label>
            <input className="form-control" name="type" onChange={this.handleChange} value={this.state.type} />
            <small className={this.state.typeClass}>Pet type must be 3 characters long</small>
          </div>
          <div className="form-group">
            <label htmlFor="description">Pet description:</label>
            <input className="form-control" name="description" onChange={this.handleChange} value={this.state.description} />
            <small className={this.state.descriptionClass}>description must be atleast 3 characters long</small>
          </div>
          <label>Skills:</label>
          <div className="form-group">
            <label htmlFor="skill1">Skill 1:</label>
            <input className="form-control" name="skill1" onChange={this.handleChange} value={this.state.skill1} />
          </div>
          <div className="form-group">
            <label htmlFor="skill2">Skill 2:</label>
            <input className="form-control" name="skill2" onChange={this.handleChange} value={this.state.skill2} />
          </div>
          <div className="form-group">
            <label htmlFor="skill3">Skill 3:</label>
            <input className="form-control" name="skill3" onChange={this.handleChange} value={this.state.skill3} />
          </div>
          <div className="form-group">
            <button className="btn-lg petbtn" onClick={this.editPetData}>Edit Pet</button>
            <button className="btn-lg petbtn" onClick={() => { this.props.history.push('/pets') }}>Cancel</button>
          </div>
        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  petdata: state.petDetails,
})

const mapDispatchToProps = (dispatch) => ({
  editPetInRedux: (data, idx) => {
    dispatch(editPetData(data, idx))
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(NewPetPage);
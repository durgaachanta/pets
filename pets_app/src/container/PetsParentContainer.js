import React from 'react';
import 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import PetsHomePage from '../component/PetsHomePage';
import NewPetPage from '../component/NewPetPage';
import EditPetPage from '../component/EditPetPage';
import PetDetails from '../component/PetDetails';

class PetsParentContainer extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <h1>Pet Shelter</h1>
        {/* Routing */}
        <Switch>
          <Redirect exact from="/" to="/pets" />
          <Route exact path="/pets/:id/edit" component={EditPetPage} />
          <Route exact path="/pets/new" component={NewPetPage} />
          <Route exact path="/pets/:id" component={PetDetails} />
          <Route exact path="/pets" component={PetsHomePage} />
        </Switch>
      </div>
    )
  }

}
export default PetsParentContainer;
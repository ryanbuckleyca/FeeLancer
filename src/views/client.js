import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import CardForm from '../components/forms';
import CardFormTopSideClient from '../components/forms/client-topside';
import CardFormFieldsPerson from '../components/forms/person-main';

class Client extends Component {
  render() {
    return(
      <div className="profile">
        <hr className="spacer" />
        <CardForm table='clients' id={this.props.match.params.id}>
          <CardFormTopSideClient />
          <CardFormFieldsPerson />
        </CardForm>
        <hr className="spacer" />
      </div>
    );
  }
}

export default withAuth0(Client);

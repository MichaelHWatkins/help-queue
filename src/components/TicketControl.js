import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import AreYouSure from './AreYouSure';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
  }

  handleClick = () => {
    if(this.state.formVisibleOnPage === 2){
    this.setState(prevState => ({
      formVisibleOnPage: prevState.formVisibleOnPage = 0
    }));
  }
  else{
    this.setState(prevState => ({
      formVisibleOnPage: prevState.formVisibleOnPage += 1
    }));
  }}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage === 1) {
      currentlyVisibleState = <AreYouSure />;
      buttonText = "Return to Ticket List"; // new code
    } else if(this.state.formVisibleOnPage === 2){
      currentlyVisibleState = <NewTicketForm />;
      buttonText= "yes!";
    }else{
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }
}

export default TicketControl;
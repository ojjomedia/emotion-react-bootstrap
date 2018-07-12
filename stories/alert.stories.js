import React, { Component } from 'react';
import Alert from '../lib/alert';
import AlertLink from '../lib/alert/alert-link';

const SimpleAlertStory = () => (
  <Alert className="alert">This is a simple alert with some text.</Alert>
);

const SuccessAlertStory = () => (
  <Alert className="alert" color="success">
    This is a success alert with some text.
  </Alert>
);

const AlertWithLinkStory = () => (
  <Alert className="alert">
    This is a primary alert with{' '}
    <AlertLink href="http://www.healthline.com">an example link</AlertLink>.
    Give it a click if you like.
  </Alert>
);

class AlertWithDismiss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAlert: true,
    };
  }

  handleDismissClick = () => {
    const { isOpenAlert } = this.state;
    if (isOpenAlert) {
      this.setState({ isOpenAlert: false });
    }
  };

  render() {
    const { isOpenAlert } = this.state;
    return (
      <Alert
        className="alert"
        isOpen={isOpenAlert}
        toggle={this.handleDismissClick}
      >
        This is a primary alert dismissible.
      </Alert>
    );
  }
}

const AlertDismissStory = () => <AlertWithDismiss />;

export {
  SimpleAlertStory,
  SuccessAlertStory,
  AlertWithLinkStory,
  AlertDismissStory,
};

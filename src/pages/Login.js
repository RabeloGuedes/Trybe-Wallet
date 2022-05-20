import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    sendButtonDisabledState: true,
  }

 capturingInput = ({ target: { value, name } }) => {
   this.setState(
     () => ({ [name]: value }),
     () => (this.loginValidation()),
   );
 }

  isEmailValid = () => {
    const { email } = this.state;
    // https://regexr.com/3e48o Code Source;
    const emailStructure = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailStructure.test(email)) {
      return true;
    } return false;
  };

  isPasswordValid = () => {
    const { password } = this.state;
    const PASSWORD_MINIMUM_LENGTH = 6;
    if (password.length >= PASSWORD_MINIMUM_LENGTH) {
      return true;
    } return false;
  };

  loginValidation = () => {
    const isLoginValid = this.isEmailValid() && this.isPasswordValid();
    if (isLoginValid) {
      this.setState({ sendButtonDisabledState: false });
    } else {
      this.setState({ sendButtonDisabledState: true });
    }
  }

  changeToWalletPage = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(setUserEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, sendButtonDisabledState } = this.state;
    return (
      <div>
        <h1>
          Login
        </h1>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ (e) => this.capturingInput(e) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ (e) => this.capturingInput(e) }
          />
        </label>
        <button
          type="button"
          disabled={ sendButtonDisabledState }
          onClick={ () => this.changeToWalletPage() }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);

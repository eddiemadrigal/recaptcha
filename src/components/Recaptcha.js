import React from 'react';
import Recaptcha from 'react-recaptcha';

const RecaptchaComponent = ({setIsVerified}) => {

  function recaptchaLoaded() {
    console.log('recatcha loaded ...')
  }

  function verifyCallback(response) {
    if (response) {
      setIsVerified(true);
    }
  }

  return (
    <Recaptcha
      className="recaptcha"
      sitekey="6LdmcfMUAAAAAOJiCcPC2fMijRs-fntKKFAUZf0r"
      render="explicit"
      onloadCallback={ recaptchaLoaded }
      verifyCallback={ verifyCallback }
    />
  )
}

export default RecaptchaComponent;
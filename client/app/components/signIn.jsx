import React from 'react';

const SignIn = props => (
  <div>
    <p> Sign in to post your own story </p>
    <a href="/auth/google">
      <img src="btn_google_signin_light_normal_web@2x.png"
        style={{width: '200px'}}
      />
    </a>
  </div>
);

export default SignIn;

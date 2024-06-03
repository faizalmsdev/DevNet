import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  const [signUpForm, setSignUpForm] = useState({
    username: '',
    contact: '',
    password: '',
  });

  const [isSignInSubmitting, setIsSignInSubmitting] = useState(false);
  const [isSignUpSubmitting, setIsSignUpSubmitting] = useState(false);


  return (
    <AuthContext.Provider value={{ signInForm, setSignInForm,signUpForm,setSignUpForm , isSignInSubmitting, setIsSignInSubmitting,isSignUpSubmitting,setIsSignUpSubmitting }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

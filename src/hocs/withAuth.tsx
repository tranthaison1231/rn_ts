import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

const withAuth = (Component) => (props) => {
  const isAuth = false;
  const { navigate } = props.navigation;

  useFocusEffect(
    React.useCallback(() => {
      if (!isAuth) {
        navigate('SignUp');
      }
    }, [navigate, isAuth]),
  );

  return <Component {...props} />;
};

export default withAuth;

import React, { ComponentClass, FunctionComponent } from 'react';
import { useFocusEffect } from '@react-navigation/native';

type ComponentType =
  | ComponentClass<any, any>
  | FunctionComponent<any>
  | undefined;

interface PropType {
  navigation: any;
}

const withAuth = (Component: ComponentType) => (props: PropType) => {
  const isAuth = false;
  const { navigate } = props.navigation;

  useFocusEffect(
    React.useCallback(() => {
      if (!isAuth) {
        navigate('SignUp');
      }
    }, [navigate, isAuth]),
  );
  // @ts-ignore
  return <Component {...props} />;
};

export default withAuth;

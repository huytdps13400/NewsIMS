import actions from '@redux/actions';
import store from '@redux/store';
import Storage from '@utils/storage';
// import I18n from 'i18n';
import React, {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import {MenuProvider} from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import RootStack from './navigation/RootStack';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.token.data);

  useEffect(() => {
    if (token) {
      SplashScreen.hide();
    }
  }, [token]);

  useEffect(() => {
    dispatch({type: actions.GET_TOKEN});
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      Storage.getItem('TOKEN_USER').then(user => {
        if (user) {
          dispatch({
            type: actions.TOKEN_USER,
            data: user,
          });
          dispatch({
            type: actions.GET_USER_INFORMATION,
            params: {
              user,
            },
          });
        }
      });
    }
  }, [dispatch, token]);

  return <RootStack />;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  );
};

export default CodePush(codePushOptions)(AppWrapper);

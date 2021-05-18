import FormContainer from '@components/Form/FormContainer';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../AuthContainer/styles';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignupScreen';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <FormContainer>
      <LinearGradient
        colors={['#0d5cb6', '#0d5cb6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.LinearHeader}
      />
      {isLogin ? (
        <LoginScreen callback={() => setIsLogin(!isLogin)} />
      ) : (
        <SignUpScreen callback={() => setIsLogin(!isLogin)} />
      )}
    </FormContainer>
  );
};

export default AuthScreen;

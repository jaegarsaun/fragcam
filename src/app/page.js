import LoginForm from './components/sections/loginForm';

export default function login(){
    return (
      <div style={styles}>
          <LoginForm />
      </div>
    );
}

const styles = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
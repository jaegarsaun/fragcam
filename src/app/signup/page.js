import SignupForm from "../components/sections/signupForm.js";

export default function Signup(){
    return (
      <div style={styles}>
            <SignupForm />
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
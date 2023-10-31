"use client"
import '../../globals.css';
import Spacer from '../design/spacer.js';

import $, { error } from 'jquery';

export default function SignupForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target); // get the form which triggered the submit event
        // Create an ajax request
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                if(data.success === true){
                    window.location.href = '/';
                }else{
                    alert(data);
                }
            },
            error(jqXHR, textStatus, errorThrown) {
                //Eventually I will want to have the errors report to me in some way so I know to fix them once the site is live.
                alert("An error occured, please try again later");
                
                // alert("An error occurred: " + textStatus + " - " + errorThrown);
                // console.log(jqXHR);
            }
        });
        
    };


    return(
           <form style={styles.form} action="http://localhost:8000/server.php" method="POST"
            onSubmit={(event) => handleSubmit(event)}
            >
                <div style={styles.div}>
                    <p className='secondary-text' style={{fontSize: '20px'}}>Sign up for <span className='primary-text bold'>CS<span className='blue'>FRAGS</span></span></p>
                </div>

                <label for='username' className='secondary-text'>Username</label>
                <Spacer height='5px' />
                <input type='text' name='username' id='username' className='input' style={styles.input} required></input>
                <Spacer height='20px' />

                <label for='email' className='secondary-text'>Email</label>
                <Spacer height='5px' />
                <input type='email' name='email' id='email' className='input' style={styles.input} required></input>
                <Spacer height='20px' />

                <label for='password' className='secondary-text'>Password</label>
                <Spacer height='5px' />
                <input type='password' name='password' id='password' className='input' style={styles.input} required></input>
                <Spacer height='20px' />

                <button type='submit' className='primary-text bold gradient-background' style={styles.button}>Sign up</button>
                <Spacer height='20px' />

                <div style={styles.div}>
                    <a className='secondary-text' style={{fontSize: '12px'}} href="/">Already have an account? Login</a>
                </div>

            </form>
    )
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#212836',
        border: '1px solid #3D4452',
        textAlign: 'left',
        width: '348px',
        padding: '40px 20px',
        borderRadius: '5px',

    },
    input: {
        borderRadius: '5px',
        height: '25px',
        padding: '5px',
        backgroundColor: 'transparent',
        color: 'white',
    },
    button: {
        width: '100%',
        border: 'none',
        color: 'white',
        height: '45px',
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
    },
    div: {
        textAlign: 'center',
    }
}
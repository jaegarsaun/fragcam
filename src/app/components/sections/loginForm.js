"use client";
import '../../globals.css';
import Spacer from '../design/spacer.js';

import $ from 'jquery';

export default function loginForm(){


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('http://localhost:8000/server.php', {
    //             method: 'POST',
    //             body: JSON.stringify({ key: 'Test' }),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (response.ok) {
    //             // Request was successful, you can handle the response here
    //             console.log('Success');
    //         } else {
    //             // Request failed, handle the error here
    //             console.error('Request failed');
    //         }
    //     } catch (error) {
    //         // Handle network or other errors here
    //         console.error('Error:', error);
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target); // get the form which triggered the submit event
        // Create an ajax request
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log(data);
            },
            error(data) {
                console.log(data);
            }
        });
    };




    return(
            <form style={styles.form} action="http://localhost:8000/server.php" method="post"
            onSubmit={(event) => handleSubmit(event)}
            >
                <div style={styles.div}>
                    <p className='secondary-text' style={{fontSize: '20px'}}>Log into <span className='primary-text bold'>CS<span className='blue'>FRAGS</span></span></p>
                </div>
                <label for='username' className='secondary-text'>Username</label>
                <Spacer height='5px' />
                <input type='text' name='username' id='username' className='input' style={styles.input} required></input>
                <Spacer height='20px' />
                <label for='password' className='secondary-text'>Password</label>
                <Spacer height='5px' />
                <input type='password' name='password' id='password' className='input' style={styles.input} required></input>
                <Spacer height='20px' />
                <button type='submit' className='primary-text bold gradient-background' style={styles.button}>Login</button>
                <Spacer height='20px' />
                <div style={styles.div}>
                    <a className='secondary-text' style={{fontSize: '12px'}} href="/signup">Don't have an account? Sign up.</a>
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
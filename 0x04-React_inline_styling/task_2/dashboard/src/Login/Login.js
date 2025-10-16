import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className={css(styles.input)}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className={css(styles.input)}></input>
                    <button>OK</button>
                </form>
            </div >
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    AppBody: {
        fontSize: "1rem",
        padding: "2em",
        borderBottom: "3px solid #e0354b",
        height: "75vh",
    },
    input: {
        margin: "10px",
    },
});

export default Login;
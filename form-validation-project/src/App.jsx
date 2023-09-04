import { useEffect, useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        console.log(email);
        validateErrors();
    });

    function validateErrors() {
        if (!email && !password) return;

        console.log(password.length);

        console.log(emailError);
        console.log(passwordError);

        if (!email.includes("@webdevsimplified.com") || email.length < 10) {
            setEmailError("There is an error with your email ");
        } else {
            setEmailError("");
        }

        if (password.length < 10) {
            setPasswordError("There is an error with your password ");
            console.log("does not include it");
        } else {
            console.log("it includes it");
            setPasswordError("");
        }

        // return;
    }

    function submitForm(e) {
        e.preventDefault(); //prevents the submit button from firing on the form

        console.log("before");

        if (!email && !password) return;

        console.log("after");

        if (emailError.length > 0 || passwordError.length > 0) {
            console.log(emailError);
            console.log(passwordError);
            return;
        }
        alert("successfully created account");
    }

    return (
        <>
            <form onSubmit={submitForm} className="form">
                <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError.length > 0 && <div className="msg">{emailError}</div>}
                </div>
                <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError.length > 0 && <div className="msg">{passwordError}</div>}
                </div>
                <button className="btn" onClick={submitForm}>
                    Submit
                </button>
            </form>
        </>
    );
}

export default App;

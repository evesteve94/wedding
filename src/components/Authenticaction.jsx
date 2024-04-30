import { useState } from "react";
import { auth, googleProvider } from "../app/firebase";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  reload,
} from "firebase/auth";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [error, setError] = useState(null);

  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
    setShowSignInForm(false); // Close sign-in form if open
    setShowButtons(false);
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    setShowCreateAccountForm(false); // Close create account form if open
    setShowButtons(false);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowButtons(false); // Update state to hide buttons
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateUser = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Send email verification
      await sendEmailVerification(auth.currentUser);
      // Update state to hide buttons and form after successful account creation
      setShowButtons(false);
      setShowCreateAccountForm(false);
    } catch (err) {
      console.error("Error creating user:", err);
      setError(err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Update state to hide buttons and form after successful sign-in
      setShowButtons(false);
      setShowSignInForm(false);
    } catch (err) {
      console.error("Error signing in:", err);
      setError(err.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      // Update state to show buttons after successful sign-out
      setShowButtons(true);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const goBack = () => {
    setShowButtons(true); // Show the buttons again
    setShowCreateAccountForm(false);
    setShowSignInForm(false);
    setError(null); // Clear any error message
  };

  return (
    <main>
      <div className="login-page">
        <h2>Login Page</h2>
        <p>
          Skapa ett konto och logga in för att kunna se allt innehåll och skriva
          i Gästboken
        </p>

        {auth?.currentUser?.email ? (
          <>
            {" "}
            <p className="login-msg">Inloggad som {auth?.currentUser?.email}</p>
            <button onClick={logOut}>Logga Ut</button>
          </>
        ) : (
          <p className="login-msg">Inte inloggad</p>
        )}

        {showButtons && !auth?.currentUser?.email && (
          <div className="btn-div">
            <button onClick={toggleCreateAccountForm}>Create Account</button>
            <button onClick={toggleSignInForm}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign in With Google</button>
          </div>
        )}

        {showCreateAccountForm && (
          <div className="form">
            <h3>Create Account</h3>
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleCreateUser}>Create Account</button>
            <button onClick={goBack}>Back</button>
            {error && <p className="error">{error}</p>}
          </div>
        )}

        {showSignInForm && (
          <div className="form">
            <h3>Sign In</h3>
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={goBack}>Back</button>
            {error && <p className="error">{error}</p>}
          </div>
        )}
      </div>
    </main>
  );
};

export default Authentication;

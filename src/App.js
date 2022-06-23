import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./compnents/Login";
import Header from "./compnents/Header";
import Home from "./compnents/Home";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setSignoutState, setUserLoginDetails } from "./features/userSlice";
import Detail from "./compnents/Detail";
import Video from "./compnents/Video";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          setUserLoginDetails({
            name: userAuth.displayName,
            email: userAuth.email,
            photo: userAuth.photoURL,
          })
        );
      } else {
        // logged out
        dispatch(setSignoutState());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/video/:trailerUrl" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

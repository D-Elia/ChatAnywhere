// import { useEffect } from 'react';
// import { ChatProvider } from 'context';
// import 'semantic-ui-css/semantic.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Routes, Route, useHistory } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Navbar from "./components/Navbar"
// import { useAuth, useResolved } from 'hooks';
import Login from './components/Login';
import Signup from './components/Signup';
// import ForgotPassword from "./components/ForgotPassword";
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';

// export const App = () => {
//   const history = useHistory();
//   const { authUser } = useAuth();
//   const authResolved = useResolved(authUser);

//   // If the user is logged in it will prevent the
//   // user from seeing the login/signup screens
//   // by always redirecting to chat on auth change.
//   useEffect(() => {
//     if (authResolved) {
//       history.push(!!authUser ? '/' : '/login');
//     }
//   }, [authResolved, authUser, history]);
// };
function App() {
  return (
    <Container style={{ width: '400px' }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              {/* <Navbar> */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
              {/* </Navbar> */}
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

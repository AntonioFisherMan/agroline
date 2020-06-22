import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import DashBoard from "./components/DashBoard/DashBoard";
import OrderContainer from "./components/Order/OrderContainer";
import Orders from "./components/Orders/Orders";
// import { messaging } from "./init-fcm";











const App = () => {
  // const [ token, setToken ] = useState();
  // useEffect(()=>{
  //   messaging.getToken().then((currentToken) => {
  //     if (currentToken) {
  //       setToken(currentToken);
  //       // sendTokenToServer(currentToken);
  //       // updateUIForPushEnabled(currentToken);
  //     } else {
  //       // Show permission request.
  //       console.log('No Instance ID token available. Request permission to generate one.');
  //       // Show permission UI.
  //       // updateUIForPushPermissionRequired();
  //       // setTokenSentToServer(false);
  //     }
  //   }).catch((err) => {
  //     console.log('An error occurred while retrieving token. ', err);
  //     //showToken('Error retrieving Instance ID token. ', err);
  //     // setTokenSentToServer(false);
  //   });
    
  // }, [token])
  return(
    <>
      <div className="App">
    <Suspense fallback={(<div>Loading</div>)}>
    <Router>
      {/* <Nav/> */}
      <Switch>
         <Route path="/dashboard" component={DashBoard}/>
        <Route exact path="/" component={Login} />
        <Route path="/order" component={OrderContainer}/>
        <Route path="/orders" component={Orders}/>
      </Switch>
    </Router>
    </Suspense>
   
  </div>
      {/* <h1 className="d-flex justify-content-center">React + Firebase Cloud Messaging (Push Notifications)</h1>
      <div className="d-flex justify-content-center">
        Current token is: <p>{token}</p>
      </div> */}
    </>
  )
}


export default App
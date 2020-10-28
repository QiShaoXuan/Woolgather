import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    const { token, userName } = require("./private-config");

    axios
      .get("https://giki.app/api/users/query?name=qi", {
        name: userName,
        headers: { authorization: token }
      })
      .then(res => {
        console.log("res", res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;

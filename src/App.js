import "./App.scss";
import { randomSrvc } from "./service/service";
import { useDispatch, useSelector } from "react-redux";
import { randomSuccess } from "./redux/action/randomAct";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { pict } = useSelector((state) => state.randomred);
  const handleClick = () => {
    randomSrvc()
      .then((response) => {
        console.log(response);
        const { pict } = response.data.data.results[0].picture.medium;
        dispatch(randomSuccess(pict));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="pict">
          <img src={pict} alt=""></img>
        </div>
        <div className="data">
          <h4 className="nama">nama</h4>
          <h4 className="email">email</h4>
          <h4 className="alamat">alamat</h4>
        </div>
        <button onClick={handleClick}>next</button>
      </div>
    </div>
  );
}

export default App;

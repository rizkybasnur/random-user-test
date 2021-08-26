import "./App.scss";
import { randomSrvc } from "./service/service";
// import { useDispatch, useSelector } from "react-redux";
import { randomSuccess } from "./redux/action/randomAct";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

function App() {
  const [pict, setpict] = useState("");
  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [alamat, setalamat] = useState("");
  // const dispatch = useDispatch();
  // const { pict } = useSelector((state) => state.randomred);
  const handleClick = () => {
    randomSrvc()
      .then((response) => {
        console.log(response);
        setpict(response.data.results[0].picture.medium);
        setnama(response.data.results[0].name.first);
        setemail(response.data.results[0].email);
        setalamat(response.data.results[0].location.city);
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
          <div className="container">
            <h4>
              <BsPerson />
            </h4>
            <h4 className="nama">{nama}</h4>
          </div>
          <div className="container">
            <h4>
              <FiMail />
            </h4>
            <h4 className="email">{email}</h4>
          </div>
          <div className="container">
            <h4>
              <GrLocation />
            </h4>
            <h4 className="alamat">{alamat}</h4>
          </div>
        </div>
        <button onClick={handleClick}>next</button>
      </div>
    </div>
  );
}

export default App;

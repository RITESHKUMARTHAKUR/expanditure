import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

function HomeComponent() {
  const [Names, setNames] = useState([]);
  const [Food, setFood] = useState([]);
  const [House, setHouse] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      db.collection("totalMoney").onSnapshot(function (data) {
        setNames(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);
 
  
  useEffect(() => {
    const fetchFood = async () => {
      db.collection("food").onSnapshot(function (data) {
        setFood(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchFood();
  }, []);

  useEffect(() => {
    const fetchHouse = async () => {
      db.collection("house").onSnapshot(function (data) {
        setHouse(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchHouse();
  }, []);

  function add() {
    db.collection("totalMoney").add({
      name: "RITESH",
      money: 20000,
    });
  }

  function decreaseT() {
    // var chainCounterRef = db.collection("totalMoney").doc("3xWUlebDaNJrEagI0hBs");
    // chainCounterRef.update({ money: FieldValue.increment(100) });
  }

  let counter = 0;

  return (
    <div>
      <div class="mx-auto" style={{ width: "15em" }}>
        <button className="btn btn-primary mt-3 ml-5" onClick={add}>
          add 10 to firebase
        </button>
        <button className="btn btn-primary mt-3 ml-5" onClick={decreaseT}>
          decrease 10 from total
        </button>
      </div>
      <h4>
        {Names?.map((data, i) => {
          counter++;
          return (
            <ul className="list-group mt-4">
              <center>
                <li className="list-group-item">Total : {data.money}</li>
              </center>
            </ul>
          );
        })}
      </h4>
      <h4>
        {Food?.map((data, i) => {
          counter++;
          return (
            <ul className="list-group mt-4">
              <center>
                <li className="list-group-item"> Food : {data.food}</li>
              </center>
            </ul>
          );
        })}
      </h4>
      <h4>
        {House?.map((data, i) => {
          counter++;
          return (
            <ul className="list-group mt-4">
              <center>
                <li className="list-group-item"> House : {data.house}</li>
              </center>
            </ul>
          );
        })}
      </h4>
      {counter === 0 ? <h3>Sorry No data !! </h3> : null}
    </div>
  );
}

export default HomeComponent;

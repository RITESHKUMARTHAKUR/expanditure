import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  doc,
  updateDoc,
  query,
  onSnapshot,
  increment,
} from "firebase/firestore";

function HomeComponent() {
  const [totalmoney, setTotalmoney] = useState([]); 
  const [shopping, setShopping] = useState([]); 
  const [food, setFood] = useState([]); 
  const [bills, setBills] = useState([]); 
  const [others, setOthers] = useState([]);
  const [purpose,setPurpose] = useState("");
  const [sum, setSum] = useState(0);
  const [date,setDate] = useState([]);
  const [ids,setIds] = useState("Pe3hytpqjypFUf99a2qs");
  

  // const [tasksData, setTasksData] = useState([]);

  const updateTask = () => {

    const taskRef = doc( db,"food" , ids );
    // updateDoc( taskRef, {
    //   title : "test task1",
    //   val: 200 ,

    // })
    updateDoc( taskRef , {
      food: increment(sum),
    })
  };
  // const updateTask = (e) => {
  //   e.preventDefault();
  //   console.log(e.document.id); 
  
  // };

  useEffect(() => {
    const tMoneyref = query(collection(db, "totalMoney"));
    onSnapshot(tMoneyref, (querySnapshot) => {
      setTotalmoney(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect( () => {
    const tShoppingref = query(collection(db, "shopping"));
    onSnapshot(tShoppingref, (querySnapshot) => {
      setShopping(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect( () => {
    const tFoodref = query(collection(db, "food"));
    onSnapshot(tFoodref, (querySnapshot) => {
      setFood(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect( () => {
    const tBillsref = query(collection(db, "bills")); 
    onSnapshot(tBillsref, (querySnapshot) => {
      setBills(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect( () => {
    const Othersref = query(collection(db, "others")); 
    onSnapshot(Othersref, (querySnapshot) => {
      setOthers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleDateUpdate = (event) => {
    setDate(event.target.value);
    // console.log("date : " + date) ;
  };

  const handlePurpose = (event) => {
    setPurpose(event.target.value);
  }

  const handleSum = (event) => {
    setSum(event.target.value)
  };

  // function reload() {
  //   window.location.reload();
  // }

  /* function to add new task to firestore */
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, "tasks"), {
  //       title: tasks,
  //       completed: false,
  //       created: Timestamp.now(),
  //     }).then(() => {
  //       // document.getElementById("tasksid").innerHTML = " ";
  //       reload();
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // const handleOnchange = (event) => {
  //   setTasks(event.target.value);
  // };

  return (
    <React.Fragment>
      <div>
        <center>
          <h2>Expenditure Control System</h2>
        </center>

        {/* container to show all data */}
        <div className="d-flex mt-5 justify-content-around">
          <div
            className="card bg-success text-white ml-3"
            style={{ width: "23rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Total </h5>
              {totalmoney.map((total) => (
                <p className="card-text">Rs. ₹ {total.data.money}</p>
              ))}
            </div>
          </div>
          <div
            className="card bg-info text-white ml-3"
            style={{ width: "13rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">shopping</h5>
              <p className="card-text">
                {shopping.map((shoppings) => (
                  <p className="card-text">Rs. ₹{shoppings.data.shopping}</p>
                ))}
              </p>
            </div>
          </div>
          <div
            className="card bg-warning ml-3 text-white"
            style={{ width: "13rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">food drinks</h5>
              <p className="card-text">
                {food.map((foods) => (
                  <p className="card-text">Rs. ₹{foods.data.food}</p>
                ))}
              </p>
            </div>
          </div>
          <div
            className="card bg-danger ml-3 text-white"
            style={{ width: "13rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Bills </h5>
              <p className="card-text">
                {bills.map((bills) => (
                  <p className="card-text">Rs. ₹{bills.data.bills}</p>
                ))}
              </p>
            </div>
          </div>
          <div
            className="card bg-dark ml-3 mr-3 text-white"
            style={{ width: "13rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Others</h5>
              <p className="card-text">
                {others.map((others) => (
                  <p className="card-text">Rs. ₹{others.data.others}</p>
                ))}
              </p>
            </div>
          </div>
        </div>
        {/* data container ends here  */}

        {/* <p>{tasks.toUpperCase()}</p> */}
      </div>
      <div className="card m-3 bg-danger text-white" style={{"width": "25rem"}}>
        <div className="card-body">
          <h5 className="card-title">Add Expenditure</h5>
  
          <div className="">
            <table>
              <tr>
                <td><span className="mr-4">Purpose</span></td>
                <td><input type="text" className="mb-3" onChange={handlePurpose}/></td>
              </tr>
              
              <tr>
                <td><span className="">Sum</span></td>
                <td><input type="num" className="mb-3" onChange={handleSum} /></td>
              </tr>
              
              <tr>
                <td><span className="mr-4">Date</span></td>
                <td><input type="date" onChange={handleDateUpdate}/></td>
              </tr>

              <tr>
                <td>
                  <button onClick={updateTask} >Add to food</button>
                  <p>{ids}</p>
                </td>
              </tr>
            </table>
          </div>
          {/* {purpose} <br /> {sum} <br /> {date} */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeComponent;

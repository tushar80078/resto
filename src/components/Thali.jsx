import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import restoSlice from "../slices/restoSlice";
import { addItem } from "../slices/restoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import { deleteItem } from "../slices/restoSlice";

const Thali = () => {
  const data = [
    {
      id: "1",
      name: "Chapati",
      unitPrice: 10,
      unit: "for 1 Chapati",
      url: "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
      quantity: 1,
    },
    {
      id: "2",
      name: "Pickle",
      unitPrice: 25,
      unit: "for 1 bowl",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkLXARxqH0ynO4n9c5Sw5bPzSGHxlv-PTSQ",
      quantity: 1,
    },
    {
      id: "3",
      name: "Curd",
      unitPrice: 20,
      unit: "for 1 bowl",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJwtOJEBhlrD5K-0k_deIgMQpsmlT-MoG4Q",
      quantity: 1,
    },
    {
      id: "4",
      name: "Sweet",
      unitPrice: 50,
      unit: "for 1 bowl",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-YCNefKb6n0Q9ApMexrZIobaTrZVKLNWOQ",
      quantity: 1,
    },
    {
      id: "5",
      name: "Daal",
      unitPrice: 40,
      unit: "for 1 bowl",
      url: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2021/11/Shahi-Daal.jpg",
      quantity: 1,
    },
    {
      id: "6",
      name: "Paneer Dish",
      unitPrice: 60,
      unit: "for 1 bowl",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uQCFDKGBjVFiLU65J4yEChS6oVSh5Yioew",
      quantity: 1,
    },
  ];
  const notify = () =>
    toast.success("Item Added To Thali", {
      position: "top-right",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.restoSlice.contents);

  const add = (item) => {
    dispatch(addItem(item));
    notify();
  };

  const remove = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>
        {selector.length > 0 ? (
          <div
            className="mainCard pt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="cardI card"
              style={{
                display: "inline-block",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
              }}
            >
              <h5 className="m-2" style={{ color: "white" }}>
                Added Items
              </h5>
              {selector.map((ele) => {
                return (
                  <div
                    className="card m-1"
                    style={{
                      width: "14rem",
                      display: "inline-block",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "13rem" }}
                      src={ele.url}
                      alt="Card image cap"
                    />
                    <div
                      className="m-1"
                      style={{ display: "inline-block", whiteSpace: "nowrap" }}
                    >
                      <h6
                        className="card-title "
                        style={{ display: "inline-block",marginLeft:"2px" }}
                      >
                        {ele.name}
                      </h6>
                      <h6  style={{ display: "inline-block" ,marginLeft:"20px",marginTop:"5px",color:"green"}}>Q : {ele.quantity}</h6>
                      <button
                        onClick={() => remove(ele)}
                        className="btn btn-dark btn-sm"
                        style={{ display: "inline-block",marginLeft:"15px" }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mainCard pt-4">
        <ToastContainer />
        <div className="cardI card ">
          <h3 style={{ textAlign: "center" }} className="m-3">
            Todays Menu
          </h3>
          <div className="m-2 " style={{ display: "inline-flex" }}>
            {data.map((ele, i) => {
              // return  <li key={i} className="list-group-item">{ele.name} <button className='btn btn-danger mx-2'>Remove</button><button className='btn btn-dark'>Add</button></li>
              return (
                <div class="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={ele.url}
                    style={{ height: "18rem" }}
                    class="card-img-top"
                    alt="img not found"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{ele.name}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      {ele.unitPrice} ₹ {ele.unit}
                    </li>
                    <li class="list-group-item">
                      {" "}
                      <button className="btn btn-dark" onClick={() => add(ele)}>
                        Add
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thali;

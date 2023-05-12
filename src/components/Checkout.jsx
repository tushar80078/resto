import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/restoSlice";
import Nav from "./Nav";
import { totalAmount, deleteItem } from "../slices/restoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emptyThali } from "../slices/restoSlice";

const Checkout = () => {
  const selector = useSelector((state) => state.restoSlice.contents);
  const [allAmount, setAmount] = useState();
  const totalPrice = useSelector((state) => state.restoSlice.totalValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast.success("Order Placed Successfully!! Redirecting To Home Page", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  console.log(selector);
  const add = (item) => {
    dispatch(addItem(item));
  };

  const totalItem = (quantity, price) => {
    return quantity * price;
  };

  const removeItem = (data) => {
    dispatch(deleteItem(data));
  };

 

  useEffect(() => {
    dispatch(totalAmount());
   
  }, [selector]);

  const placeOrder = () => {
    notify();
    setTimeout(() => {
        
        navigate("/");
        dispatch(emptyThali());
        
    }, 2000);
  
  };

  return (
    <div>
      <div>
        <Nav />
      </div>

      <ToastContainer />

      <div className="container container-fluid mt-3">
        <table className="table" style={{ border: "1px solid #E7E7E6  " }}>
          <thead>
            <tr className="">
              <th scope="col">Item</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {selector.map((ele, i) => {
              return (
                <tr key={i}>
                  <td colSpan="">
                    {" "}
                    <div className="card " style={{ width: "15rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{ele.name}</h5>

                        <button
                          onClick={() => removeItem(ele)}
                          className="btn btn-danger"
                        >
                          Remove -
                        </button>
                        <button
                          onClick={() => add(ele)}
                          className="btn btn-info mx-2"
                        >
                          Add +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td colSpan="">
                    <h6 className="card-text ">
                      {" "}
                      {ele.unitPrice} ₹/{ele.unit}
                    </h6>
                  </td>
                  <td colSpan="">{ele.quantity}</td>
                  <td colSpan="">{totalItem(ele.quantity, ele.unitPrice)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="container container-fluid total">
        <div class="card" style={{ width: "20rem" }}>
          <div class="card-header">
            <h4 style={{ textAlign: "center", fontSize: "2rem" }}>Total</h4>
          </div>
          <div class="card">
            <h6
              class="card-title"
              style={{ fontSize: "2rem", textAlign: "center" }}
            >
              {totalPrice}
            </h6>
            <button
              className="btn btn-success mb-2"
              onClick={placeOrder}
              style={{ width: "8rem", margin: "auto" }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

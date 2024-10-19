import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import "./OrderDisplay.css";

const OrderDisplay = () => {
  const [orderData, setOrderData] = useState([]);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/fetchorder")
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="order-display-container">
      <div className="order-details-text">Order Details</div>
      {orderData.map((data, index) => (
        <div className="order-detail-container" key={index}>
          <div>
            <span className="order-fields">Order Placed At</span> {data.createdAt}
          </div>
          <div>
            <span className="order-fields">Name :</span> {data.name}
          </div>
          <div>
            <span className="order-fields">Phone Number :</span> {data.phno}
          </div>
          <div>
            <span className="order-fields">Ordered Product :</span> {data.productName}
          </div>
          <div>
            <span className="order-fields">Product Price :</span> {data.price}
          </div>
          <div>
            <span className="order-fields">Quantity :</span> {data.quantity}
          </div>
          <div>
            <span className="order-fields">Total Price :</span> {data.totalprice}
          </div>
          <div>
            <span className="order-fields">Delivered to :</span> {data.address}
          </div>
          <div>
            <span className="order-fields">Payment Status</span> <span className={paid===true ? "paided" : ""}>{paid === true ? "Paid" : "Not Paid"}</span>
          </div>
          <div className="pay-container">
            <div className="pay-heading">Pay</div>
            <QRCodeCanvas value={`pay:${data.totalprice}`} />
            <button className="pay-button" onClick={()=>setPaid(true)}>Pay: {data.totalprice}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderDisplay;

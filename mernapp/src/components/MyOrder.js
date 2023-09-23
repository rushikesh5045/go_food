// import React, { useEffect, useState } from "react";
// import Foot from "./Foot";
// import Nav from "./Nav";

// export default function MyOrder() {
//   const [orderData, setorderData] = useState({});

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem("userEmail"));
//     await fetch("http://localhost:5000/api/myOrderData", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem("userEmail"),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       await setorderData(response);
//     });

//     // await res.map((data)=>{
//     //    console.log(data)
//     // })
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <div>
//       <div>
//         <Nav />
//       </div>

//       <div className="container">
//         <div className="row">
//           {orderData !== {}
//             ? Array(orderData).map((data) => {
//                 return data.orderData
//                   ? data.orderData.order_data
//                       .slice(0)
//                       .reverse()
//                       .map((item) => {
//                         return item.map((arrayData) => {
//                           return (
//                             <div className="row">
//                               {arrayData.Order_date ? (
//                                 <div className="m-auto mt-5">
//                                   {(data = arrayData.Order_date)}
//                                   <hr />
//                                 </div>
//                               ) : (
//                                <div className="row">
//                                  <div className="row col-12 col-md-6 col-lg-3">
//                                   <div
//                                     className="card mt-3"
//                                     style={{
//                                       width: "16rem",
//                                       maxHeight: "360px",
//                                     }}
//                                   >
//                                     <img
//                                       src={arrayData.img}
//                                       className="card-img-top"
//                                       alt="..."
//                                       style={{
//                                         height: "120px",
//                                         objectFit: "fill",
//                                       }}
//                                     />
//                                     <div className="card-body">
//                                       <h5 className="card-title">
//                                         {arrayData.name}
//                                       </h5>
//                                       <div
//                                         className="container w-100 p-0"
//                                         style={{ height: "38px" }}
//                                       >
//                                         <span className="m-1">
//                                           {arrayData.qty}
//                                         </span>
//                                         <span className="m-1">
//                                           {arrayData.size}
//                                         </span>
//                                         <span className="m-1">{data}</span>
//                                         <div className=" d-inline ms-2 h-100 w-20 fs-5">
//                                           ₹{arrayData.price}/-
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 </div>
//                               )}
//                             </div>
//                           );
//                         });
//                       })
//                   : "";
//               })
//             : ""}
//         </div>
//       </div>

//       <Foot />
//     </div>
//   );
// }
// // {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}

import React, { useEffect, useState } from "react";
import Foot from "./Foot";
import Nav from "./Nav";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setOrderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>
      <h1 style={{textAlign:"center"}}>Orders</h1>
      <div className="container">
        <div className="row">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item, index) => {
                        return item.map((arrayData, innerIndex) => {
                          return (
                            <div
                              key={`order-${index}-item-${innerIndex}`}
                              className="col-12 col-md-6 col-lg-3 mb-4"
                            >
                              {arrayData.Order_date ? (
                                <div className="text-center mt-5">
                                  {arrayData.Order_date}
                                  <hr className="mt-3" />
                                </div>
                              ) : (
                                <div className="card mt-3">
                                  <img
                                    src={arrayData.img}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                      height: "120px",
                                      objectFit: "cover",
                                    }}
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {arrayData.name}
                                    </h5>
                                    <div className="container-fluid p-0">
                                      <div className="row">
                                        <div className="col-6">
                                          <span className="m-1">
                                            {arrayData.qty}
                                          </span>
                                        </div>
                                        <div className="col-6">
                                          <span className="m-1">
                                            {arrayData.size}
                                          </span>
                                        </div>
                                        <div className="col-6">
                                          <span className="m-1">
                                            {arrayData.Order_date}
                                          </span>
                                        </div>
                                        <div className="col-6">
                                          <span className="m-1">
                                            ₹{arrayData.price}/-
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <Foot />
    </div>
  );
}

import React from "react";

import Card from "../components/Card";
import { useEffect, useState } from "react";
function WebApp() {
  const initialState = {
    cardTitle: "",
    imageUrl: "",
    description: "",
    number: 0,
    date: "",
  };

  const [data, setData] = useState(initialState);

  // TODO
  //   useEffect(() => {
  //     try {
  //       fetch("http://6d5f7g8yhiuf7g8uybif6r57vtu.s3.amazonaws.com/count").then(
  //         (res) => console.log(res)
  //       );
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(30,30,30)",
      }}
    >
      <Card
        cardTitle="Hello"
        imageUrl="https://cdn0.scrvt.com/954371187f9758716188a4deb091ab66/1f4c956e8c1fdf24/ec2708d33f1c/ecuador-galapagos-inseln-meer-weite.jpg"
        description="Ecuador"
        number={0}
        date={1658154049487}
      />
    </div>
  );
}

export default WebApp;

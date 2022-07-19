import React from "react";

import Card from "../components/Card";
import { useEffect, useState } from "react";
function WebApp() {
  const initialState = {
    imageUrl: "",
    description: "",
    number: 0,
    date: "",
    index: 0,
  };

  const [data, setData] = useState(initialState);

  async function getLastEntry() {
    const lastEntry = await (
      await fetch("https://6d5f7g8yhiuf7g8uybif6r57vtu.s3.amazonaws.com/count")
    )
      .json()
      .then((data) => data);
    setData({ ...data, index: lastEntry.index });
  }

  async function getLastItem() {
    try {
      const lastItem = await (
        await fetch(
          `https://6d5f7g8yhiuf7g8uybif6r57vtu.s3.amazonaws.com/${data.index}`
        )
      )
        .json()
        .then((data) => data);
      setData({
        ...data,
        description: lastItem.prompt,
        number: lastItem.index,
        date: lastItem.time,
        imageUrl: lastItem.imageUrl,
      });
    } catch (err) {
      console.error(err);
    }
  }

  //   useEffect(() => {

  //   }, []);

  useEffect(() => {
    getLastEntry();
    getLastItem();
  }, []);

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
      <Card cardTitle="Hello World" data={data} />
    </div>
  );
}

export default WebApp;

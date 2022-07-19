import { useEffect, useRef } from "react";

import "./cardStyle.css";
function Card(props) {
  const { cardTitle, imageUrl, description, number, date } = props;

  const qrRef = useRef();

  const formatDate = new Date(date);

  useEffect(() => {
    new window.QRCode(qrRef.current, {
      text: imageUrl,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
    });
    // setQrCode(

    // );
  }, []);

  return (
    <article className="card-container">
      <h1>{cardTitle}</h1>
      <figure>
        <img src={imageUrl} alt="text-text" />
      </figure>
      <div className="card-footer">
        <div className="description-container">
          <h2>{description}</h2>
          <h3>#{number}</h3>
          <p>Created {formatDate.toUTCString()}</p>
        </div>
        <div className="scan-wrapper">
          <div ref={qrRef} className="qrcode-container"></div>
          <p>Scan to Download</p>
        </div>
      </div>
    </article>
  );
}
export default Card;

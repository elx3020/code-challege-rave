import { useEffect, useRef, useState } from "react";

import "./cardStyle.css";
function Card(props) {
  const { cardTitle } = props;
  const { imageUrl, description, number, date, index } = props.data;

  const [qrCode, setQrCode] = useState(null);

  const qrRef = useRef();

  const formatDate = new Date(date);

  function generateQrCode() {
    if (imageUrl === "") return;

    if (qrCode === null) {
      const qrCodeInstance = new window.QRCode(qrRef.current, {
        text: imageUrl,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });

      setQrCode(qrCodeInstance);
    }
  }

  useEffect(() => {
    generateQrCode();
  }, [imageUrl]);

  return (
    <article className="card-container">
      <h1>{cardTitle}</h1>
      <figure>
        <img src={imageUrl} alt="text-text" />
      </figure>
      <div className="card-footer">
        <div className="description-container">
          <h2>{description}</h2>
          <h3>#{index}</h3>
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

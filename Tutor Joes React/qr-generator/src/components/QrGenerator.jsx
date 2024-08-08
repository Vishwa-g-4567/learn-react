import React, { useState } from "react";

const QrGenerator = () => {
  const [img, setImg] = useState("");
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("125");
  const [loading, setLoading] = useState(false);
  const generateQr = async () => {
    setLoading(true);
    try {
      const url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        qrData
      )}&size=${qrSize}x${qrSize}`;
      setImg(url);
    } catch (error) {
      console.log.error("Error generating QR code ", error);
    } finally {
      setLoading(false);
    }
  };
  const downloadQr = async () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log.error("Error downloading QR code ", error);
      });
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold text-[#3498db] py-2.5">
          QR CODE GENERATOR
        </h1>
        {loading && <p>Please wait...</p>}
        {img && (
          <img
            className="p-2.5 mb-2.5 shadow shadow-[rgb(0,0,0,0.1)]"
            src={img}
            alt="QR Image"
          />
        )}
        <div>
          <label
            className="block mb-2 text-[#3498db] font-medium"
            htmlFor="dataInput"
          >
            Data for QR code:
          </label>
          <input
            className="p-3 mb-5 w-full text-base border border-[#3498db] rounded"
            type="text"
            id="dataInput"
            onChange={(e) => setQrData(e.target.value)}
            placeholder="Enter data for QR code"
          />
          <label
            className="block mb-2 text-[#3498db] font-medium"
            htmlFor="sizeInput"
          >
            Image six (e.g., 150)
          </label>
          <input
            className="p-3 mb-5 w-full text-base border border-[#3498db] rounded"
            type="text"
            id="sizeInput"
            onChange={(e) => setQrSize(e.target.value)}
            placeholder="Enter image size"
          />
          <div className="w-full flex items-center justify-center gap-5">
            <button
              className="px-5 py-4 text-lg rounded text-white bg-[#3498db] hover:bg-[#2a82bd] disabled:bg-[#bdc3c7] disabled:cursor-not-allowed transition"
              onClick={generateQr}
              disabled={loading}
            >
              Generate QR Code
            </button>
            <button
              className="px-5 py-4 text-lg rounded text-white bg-[#27ae60] hover:bg-[#1d8a4b] transition"
              onClick={downloadQr}
            >
              Download QR Code
            </button>
          </div>
        </div>
        <p className="mt-5">
          Designed By
          <a
            className="text-[#3498db]"
            target="_blank"
            href="https://vishwa-g-4567.github.io/Portfolio/"
          >
            <span> Vishwa</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default QrGenerator;

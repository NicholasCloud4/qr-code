import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#DFD0B8]">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={"/images/image-qr-code.png"}
            width={500}
            height={500}
            alt="QR CODE"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">QR Code</h2>
          <p className="flex justify-center">Please scan the QR Code above</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CopyToClipboardTag = ({ textData }) => {
  const [copied, setcopied] = useState(false);

  const copyToClipboard = () => {
    setcopied(true);

    navigator.clipboard.writeText(textData).then(
      () => {
        // console.log('copied');
      },
      (err) => {
        console.error(err);
      }
    );
    toast.success("Copied", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      setcopied(false);
    }, 500);
  };
  return (
    <button className="text-black/80 ml-2 text-xs" onClick={copyToClipboard}>
      <img
        src="/images/copy1.png"
        alt=""
        className="inline w-4 h-4 ml-1  cursor-pointer"
        title="Copy Tag"
      />
    </button>
  );
};

export default CopyToClipboardTag;

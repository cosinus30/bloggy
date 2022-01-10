import { useEffect, useState } from "react";

export default function Alert({ title, message, type }) {
  const [bg, setBg] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (type === "success") {
      setBg("bg-green-500");
    }
    if (type === "error") {
      setBg("bg-red-500");
    }
    if (type === "pending") {
      setBg("bg-yellow-500");
    }

    let timeout = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      {show && (
        <div className={`flex items-center justify-between mx-12 ${bg} rounded-xl p-4`}>
          <div className="flex flex-col">
            <header className="text-xl font-extrabold">{title}</header>
            <main>{message}</main>
          </div>

          <button onClick={() => setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

"use client"
import { useEffect, useState } from "react";


export default function Home() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getSumResponse = async () => {
      const response = await fetch(`http://127.0.0.1:8000/sum/${number1}/${number2}`);
      const responseResult = await response.json();
      setTotal(responseResult);
    }
    getSumResponse();
  }, [number1, number2])

  return (
    <div className="h-full flex items-center flex-col justify-center">
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />
      <p>Total: {total || ""}</p>
    </div>
  );
}

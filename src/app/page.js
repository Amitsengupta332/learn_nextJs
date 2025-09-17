"use client";

import CounterPage from "@/components/Counter/Counter";

const HomePage = () => {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-3xl text-center  ">welcome to nextjs</h1>
      <h2 className="text-2xl text-center "> Server Side Rendering</h2>

      <CounterPage />

      {/* client side rendering in server side component it will work using "use client"
      but it's not good practice to use client side rendering in server side component so wee need create client side component
      */}
      {/* <p>Counter: {counter}</p>
      <button
        className="bg-blue-500 p-2 gap-2 m-2"
        onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button
        className="bg-green-500 p-2 gap-2 m-2 "
        onClick={() => setCounter(counter - 1)}>
        {" "}
        Decrement
      </button> */}
    </div>
  );
};

export default HomePage;

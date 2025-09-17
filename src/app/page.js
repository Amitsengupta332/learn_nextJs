"use client";

import CounterPage from "@/components/Counter/Counter";

const HomePage = () => {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-3xl text-center  ">welcome to nextjs</h1>
      <h2 className="text-2xl text-center "> Server Side Rendering</h2>

      <CounterPage />

<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
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

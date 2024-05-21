"use client";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/features/counter/counterSlice";

const Hero = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>Redux Tooltik </div>
      <div>Count : {count}</div>
      <button className=" w-auto m-3" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button className=" w-auto m-3" onClick={() => dispatch(decrement())}>
        decrement
      </button>
      <button
        className=" w-auto m-3"
        onClick={() => dispatch(incrementByAmount(count))}
      >
        incrementByAmount
      </button>
    </>
  );
};

export default Hero;

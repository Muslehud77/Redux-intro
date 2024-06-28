
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const {count} =  useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch()



  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="space-x-5 flex border border-purple-300 p-10 bg-slate-50 rounded-lg">
        <button
          onClick={() => dispatch(incrementByValue({value:5}))}
          className="text-white font-bold px-3 py-2 rounded-md bg-green-500 text-xl"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="text-white font-bold px-3 py-2 rounded-md bg-green-500 text-xl"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="text-white font-bold px-3 py-2 rounded-md bg-red-500 text-xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

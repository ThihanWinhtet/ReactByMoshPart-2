import { create } from "zustand";
import Counter from "./Counter";

interface CounterStore{
    count : number;
    increment : () => void;
    reset : () => void;
}

const useCounter = create<CounterStore>(set => ({
    count : 0,
    increment : () => set(store => ({ count : store.count + 1})),
    reset : () => set(()=> ({count : 0}))
}));

export default useCounter
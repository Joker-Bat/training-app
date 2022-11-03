import { useState } from "react";

import styles from "../styles/Home.module.scss";
import { getLayout } from "../layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "../types/page";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from "../store/features/counter/counterSlice";
import { getKanyaQuote, selectKanya } from "../store/features/kanya/kanyaSlice";

const Home: NextPageWithLayout = () => {
  const count = useAppSelector(selectCount);
  const { data, pending, error } = useAppSelector(selectKanya);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className={styles.Container}>
      <h1>Home page</h1>
      <h1>Count: {count}</h1>

      <br />
      <br />
      <br />

      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(+e.target.value)}
        />

        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by amount
        </button>
      </div>

      <br />
      <br />
      <br />

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <br />
      <br />
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Get random kanya west quote</h1>
        <br />
        {pending && <p>Loading...</p>}
        {error && <p>Something went wrong ...</p>}
        {data && (
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            {data.quote}
          </p>
        )}
        <br />
        <button onClick={() => dispatch(getKanyaQuote())} disabled={pending}>
          Get random kenya quote
        </button>
      </div>
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;

import { useDispatch, useSelector } from "react-redux";
import Button from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Component = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">Value = {counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};

export default Component;

import React, { useReducer } from "react";

import "./Components.css";

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const calculatePizzasNeeded = ({
  numberOfPeople,
  slicesPerPerson,
  slicesPerPie,
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};

const reducer = (state: any, action: any) => {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addPizzasNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PERSON") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PIE") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload,
    });
  }

  return state;
};

const Calculation = ({ count }: { count: any }) => {
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="caption">Pizzas Needed</p>
    </section>
  );
};

const Calculator = ({ dispatch, state }: { state: any; dispatch: any }) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        id="number-of-people"
        type="number"
        className="newInput"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_NUMBER_OF_PEOPLE",
            payload: event.target.value,
          })
        }
      />
      <label htmlFor="slices-per-person">Slices Per Person</label>
      <input
        id="slices-per-person"
        type="number"
        className="newInput"
        value={state.slicesPerPerson}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PERSON",
            payload: event.target.value,
          })
        }
      />
      <label htmlFor="slices-per-Pie">Slices Per Pie</label>
      <input
        id="slices-per-Pie"
        type="number"
        className="newInput"
        value={state.slicesPerPie}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PIE",
            payload: event.target.value,
          })
        }
      />
    </form>
  );
};

const initialState: PizzaState = {
  numberOfPeople: 2,
  slicesPerPerson: 10,
  slicesPerPie: 2,
  pizzasNeeded: 4,
};

const UseReducerType = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="newBody">
        <header>
          <h1>Pizza Calculator Using useReducer: </h1>
        </header>
        <Calculation count={state.pizzasNeeded} />
        <Calculator state={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default UseReducerType;

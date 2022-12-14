import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { id, date, desc, amount } = props;
  return (
    <Card className="expense-item" key={id}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{desc}</h2>
        <div className="expense-item__price">{`$ ${amount}`}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transcation = ({ transcation }) => {
  const { deleteTranscation } = useContext(GlobalContext);

  const sign = transcation.amount < 0 ? '-' : '+';

  return (
    <li className={transcation.amount < 0 ? 'minus' : 'plus'}>
      {transcation.text}<span>{sign}${Math.abs(transcation.amount)}</span><button onClick={() => deleteTranscation(transcation.id)} className="delete-btn">x</button>
    </li>
  )
};

export default Transcation;

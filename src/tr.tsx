import { Row } from "./data";
import * as React from "react";

const TR: React.FC<Row> = props => (
  <tr>
    <th>{props.generation}</th>
    {props.answers.map((answer, i) => (
      <td key={i}>{`${answer * 100}%`}</td>
    ))}
  </tr>
);

export default TR;
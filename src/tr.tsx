import { Row } from "./data";
import * as React from "react";

const TR: React.FC<Row> = props => (
  <tr>
    <th>{props.age}</th>
    {props.answers.map((answer, i) => {
      if (answer == null) {
        return <td key={i}>{"-"}</td>;
      }
      <td key={i}>{`${answer * 100}%`}</td>;
    })}
  </tr>
);

export default TR;
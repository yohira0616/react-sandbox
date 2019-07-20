import { Rows } from "./data";
import TR from "./tr";
import * as React from "react";


type Props = {
  rows: Rows
}
const TBody: React.FC<Props> = props => (
  <tbody>
  {props.rows.map(row => (
    <TR key={row.id} {...row} />
  ))}
  </tbody>
);

export default TBody;
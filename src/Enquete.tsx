import THead from "./thead";
import TBody from "./tbody";

import { rows } from "./data";
import * as React from "react";

const Enquete: React.FC = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <THead></THead>
      <TBody rows={rows}/>
    </table>
  </div>
);

export default Enquete;
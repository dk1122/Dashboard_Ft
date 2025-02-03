import { useState } from "react";
import Component2 from "./Component2";
import Navbar from "./Navbar";

function Component() {
    const [x, setX] = useState(0);
    return (
        <div>
            <Component2/>
            <Navbar></Navbar>
        </div>
      );
}

export default Component;
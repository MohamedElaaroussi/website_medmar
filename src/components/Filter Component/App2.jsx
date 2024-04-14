import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./buttons ";

const App2 = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItem = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat)
    setItem(newItems)
  }
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <Buttons
            menuItems={menuItems}
            filterItem={filterItem}
            setItem={setItem}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default App2;
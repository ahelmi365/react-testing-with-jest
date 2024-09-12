import React, { useEffect, useState } from "react";

function loadColors() {
  return Promise.resolve(["Red", "Green", "Blue"]);
}
const ColorList = () => {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    loadColors().then((c) => setColors(c));
  }, []);

  const renderedColrs = colors.map((c) => <li key={c}>{c}</li>);
  return (
    <div>
      <ul>{renderedColrs}</ul>
    </div>
  );
};

export default ColorList;

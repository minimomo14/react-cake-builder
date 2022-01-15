import React, { useState } from "react";
import Layer from "../model/LayerInterface";

/// set array of layers, displays a cake

function Cake() {
  const [cake, setCake] = useState<Layer[]>([
    { height: 10, width: 5, color: "yellow" },
    { height: 10, width: 7, color: "green" },
    { height: 10, width: 9, color: "pink" },
  ]);
  return (
    <div className="Cake">
      <h1>Build your own Cake!</h1>
      <p>
        Cupcake ipsum dolor sit amet croissant caramels macaroon gingerbread.
        Shortbread candy canes pastry candy pastry tootsie roll. Pudding topping
        tootsie roll danish pie gingerbread chocolate cake cake marzipan.
        Fruitcake cake cake candy cotton candy muffin toffee jelly-o.
      </p>
      <div className="Cake_addLayer">
        <h2>Add a Layer</h2>
        <div className="slidecontainer">
          <label>Color:</label>
          <select typeof="color"></select>
          
          <label>Height:</label>
          <input type="range" min="0.5" max="10"></input>

          <label>Width:</label>
          <input type="range" min="1" max="10"></input>
        
          <button type="submit" value="save">Save</button>
          <button type="submit" value="cancle">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Cake;

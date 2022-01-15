import React, { useState } from "react";
import Layer from "../model/LayerInterface";
import "./Cake.css"


/// set array of layers, displays a cake

function Cake() {
  const [cake, setCake] = useState<Layer[]>([
    { height: 10, width: 5, color: "yellow" },
    { height: 10, width: 7, color: "green" },
    { height: 10, width: 9, color: "pink" },
  ]);
  return (
    <div className="Cake">
        <div className="Cake_header">
          <h1>Build your own Cake!</h1>
      <p>
        Cupcake ipsum dolor sit amet croissant caramels macaroon gingerbread.
        Shortbread candy canes pastry candy pastry tootsie roll. Pudding topping
        tootsie roll danish pie gingerbread chocolate cake cake marzipan.
        Fruitcake cake cake candy cotton candy muffin toffee jelly-o.
      </p>  
        </div>
      
      <div className="Cake_addLayer">
        <h2>Add a Layer</h2>
        <div className="Cake_slidecontainer">
          <label>Color:</label>
          <select typeof="color"></select>

          <label>Height:</label>
          <input type="range" min="0.5" max="10"></input>

          <label>Width:</label>
          <input type="range" min="1" max="10"></input>

            <div></div>
          <button type="submit" value="save">
            Save
          </button>
           <div></div>
          <button type="submit" value="cancle">
            Cancel
          </button>
        </div>

        <div className="Cake_slidecontainer">
          <label>Color:</label>
          <select typeof="color"></select>

          <label>Height:</label>
          <input type="range" min="0.5" max="10"></input>

          <label>Width:</label>
          <input type="range" min="1" max="10"></input>

            <div></div>
          <button type="submit" value="save">
            Save
          </button>
          <div></div>
          <button type="submit" value="cancle">
            Cancel
          </button>
        </div>

        <div className="Cake_slidecontainer">
          <label>Color:</label>
          <select typeof="color"></select>

          <label>Height:</label>
          <input type="range" min="0.5" max="10"></input>

          <label>Width:</label>
          <input type="range" min="1" max="10"></input>

           <div></div>
          <button type="submit" value="save">
            Save
          </button>
          <div></div>
          <button type="submit" value="cancle">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cake;

import React from 'react'
import "./Categories.css"

const Categories = () => {

    const elements = [
        {
          item: "Top offers",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/12e1ef5720394d33.png?q=100",
        },
        {
          item: "Mobiles & Tablets",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/39a5455dfa3a6e09.png?q=100",
        },
        {
          item: "TVs & Appliances",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/07eaf6881d416ef9.png?q=100",
        },
        {
          item: "Eletronics",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/a72369170563cf50.png?q=100",
        },
        {
          item: "Fasion",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/120fe56747723091.png?q=100",
        },
        {
          item: "Beauty",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/d5f37d2f45157db3.png?q=100",
        },
        {
          item: "Home & Kitchen",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/367e2bc66f3e0871.png?q=100",
        },
        {
          item: "Furniture",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/f88c5f353db775a8.png?q=100",
        },
        {
          item: "Travel",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05b1ef015a3e69aa.jpg?q=100",
        },
        {
          item: "Grocery",
          image:
            "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/eaaf0fc36fb4097e.png?q=100",
        },
      ];


  return (
    <div>
      <div className="catagoriey">
        {elements.map((item, index) => (
          <div className="catagory_item">
            <img src={item.image} alt="image" className="catagoriey_image"/>
            <p>{item.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
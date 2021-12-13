// import logo from "./logo.svg";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const Cards = () => {
  let items = [
    {
      image: image1,
      headline: "Dog allergy medicine made my daughter Methodist",
      strap: "dfsdf sdf sdid  j fj dn jkdfui dkjf kgjiiufuign kjfkj gggf",
    },
    {
      image: image2,
      headline: "Ficus Benjamina",
      strap: "dfsdf sdf sdid  j fj dn jkdfui dkjf kgjiiufuign kjfkj gggf",
    },
    {
      image: image3,
      headline: "Doreen Valiente's Angel Card Regrets",
      strap: "dfsdf sdf sdid  j fj dn jkdfui dkjf kgjiiufuign kjfkj gggf",
    },
    {
      image: image4,
      headline: "My Dad could take your Dad",
      strap: "dfsdf sdf sdid  j fj dn jkdfui dkjf kgjiiufuign kjfkj gggf",
    },
    {
      image: image5,
      headline:
        "Ambassador with these Ferrero Rocher You Really Are Spoiling Us",
      strap: "dfsdf sdf sdid  j fj dn jkdfui dkjf kgjiiufuign kjfkj gggf",
    },
  ];

  let cards = items.map((item) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="headline">{item.headline}</div>
        <div className="strap">{item.strap}</div>
      </div>
    );
  });
  return cards;
};

function App() {
  return (
    <div className="cardBox">
      <Cards />
    </div>
  );
}

export default App;

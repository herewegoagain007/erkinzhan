import React, { useContext } from "react";
import { UserContext } from "../components/User";
import { Link } from "react-router-dom";
import { camera } from "../data/camera";

function Camera() {
  const User = useContext(UserContext);
  const handleKorzina = (id) => {
    console.log(id);
    if (User.user) {
      if (User.user.korzina) {
        if (!User.user.korzina.includes(id)) {
          User.setUser({ ...User.user, korzina: [...User.user.korzina, id] });
        }
      }
    } else {
      console.log("korzina net");
      User.setUser({ ...User.user, korzina: [id] });
    }
  };
  return (
    <div className="Catalog">
      {camera.map((element) => (
        <div key={element.id} className="Catalog__card">
          <Link className="Catalog-text-2" to={'/adres/' + element.id} >
            <img src={element.img} alt={element.title} />
            </Link>
          <div className="texts" >
            <h5 className="Catalog-text-1">{element.sum}</h5>
            <p className="Catalog-text-1">{element.title}</p>
          </div>
          <button
            className="Korzina__add"
            onClick={() => handleKorzina(element.id)}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default Camera;
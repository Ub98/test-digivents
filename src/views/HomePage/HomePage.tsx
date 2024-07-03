import CardDolci from "components/CardDolci/CardDolci";
import { Dolci } from "models/Dolci";
import { useEffect, useState } from "react";
import { getAllDolci } from "services/DolciService";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const HomePage = () => {
  const [dolci, setDolci] = useState<Dolci[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAllDolci().then((res) => {
      setDolci(res.data);
    });
  }, []);

  return (
    <>
      <div className="contain-home">
        {dolci.length ? (
          dolci.map((dolce) => (
            <CardDolci key={dolce.id} {...dolce}></CardDolci>
          ))
        ) : (
          <div className="content-home">
            <h1>Al momento non ci sono dolci disponibili!</h1>
            <Button
              label="Aggiungi"
              className="mr-2"
              onClick={() => {
                navigate("/aggiungi");
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;

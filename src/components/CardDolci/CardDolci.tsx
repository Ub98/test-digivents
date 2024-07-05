import { Dolci } from "models/Dolci";
import { Card } from "primereact/card";
import "./CardDolci.scss";
import { useEffect, useState } from "react";
import { deleteDolce } from "services/DolciService";

const CardDolci = ({
  id,
  nome,
  prezzo,
  data,
  ingredienti,
  quantita,
}: Dolci) => {
  const [prezzoScontato, setPrezzoScontato] = useState<number | string>(prezzo);

  const [scaduto, setScaduto] = useState(false);

  const oggi = new Date();

  const date = new Date(data);

  const differenzaGiorni = Math.floor(
    (oggi.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  const formattedDate = `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/${date.getFullYear()}`;

  useEffect(() => {
    if (differenzaGiorni > 2) {
      setScaduto(true);
      if (scaduto) {
        deleteDolce(id).then(() => {
          console.log("canc");
        });
      }
    } else if (differenzaGiorni === 2) {
      setPrezzoScontato((prezzo * 0.2).toFixed(2));
    } else if (differenzaGiorni === 1) {
      setPrezzoScontato((prezzo * 0.8).toFixed(2));
    } else {
      setPrezzoScontato(prezzo);
    }
  }, [oggi, date, prezzo, id]);

  return (
    <>
      {!scaduto && (
        <div className="card">
          <Card title={nome} subTitle={formattedDate}>
            <p>
              Prezzo:
              {prezzo !== prezzoScontato && (
                <span className="strike">${prezzo}</span>
              )}
              <span>${prezzoScontato}</span>
            </p>
            <p>
              Quantità: <span>{quantita}</span>
            </p>
            <div className="ingredienti">
              {ingredienti.map((ing, index) => (
                <p key={index}>
                  {ing.name} {index < ingredienti.length - 1 && ","}
                </p>
              ))}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CardDolci;

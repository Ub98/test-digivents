export interface Dolci {
  id: number
  nome: string;
  prezzo: number ;
  data: Date ;
  quantita: number ;
  ingredienti: Ingredienti[];
}

export interface DolciDTO {
  nome: string;
  prezzo: number | undefined;
  data: Date | undefined;
  quantita: number | undefined;
  ingredienti: Ingredienti[];
}


export interface Ingredienti {
  id: number;
  name: string;
}

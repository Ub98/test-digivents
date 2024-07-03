export interface Dolci {
  id: string
  nome: string;
  prezzo: number ;
  data: Date ;
  quantita: number ;
  ingredienti: string[];
}

export interface DolciDTO {
  nome: string;
  prezzo: number | undefined;
  data: Date | undefined;
  quantita: number | undefined;
  ingredienti: string[];
}




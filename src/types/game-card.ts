export type gameCards = gameCard[]

export type gameCard = {
  link: string
  genre: string
  title: string
  description: string
  price: string
  id:CardId;
}

export type CardId = number;

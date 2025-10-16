declare type Cardapio = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
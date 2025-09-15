// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Restaurant {
  category: string
  description: string
  image: string
  infos: string[]
  aval: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    aval: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.aval = aval
    this.title = title
  }
}

export default Restaurant

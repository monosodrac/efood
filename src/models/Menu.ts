// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Menu {
  category: string
  description: string
  image: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
  }
}

export default Menu

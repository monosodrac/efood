import { MenuList } from '../../components/CardsList'
import Menu from '../../models/Menu'
import { Header } from '../../components/Header'

import pizzaMarg from '../../assets/images/pizza-marg.png'

const menu: Menu[] = [
  {
    id: 1,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizzaMarg
  },
]

const Categories = () => (
  <>
    <Header />
    <MenuList menus={menu} />
  </>
)

export default Categories

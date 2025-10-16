import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type MenuItem = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  isOrder: boolean
  isPaying: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrder: false,
  isPaying: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemExists) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openOrder: (state) => {
      state.isOrder = true
    },
    closeOrder: (state) => {
      state.isOrder = false
    },
    openPaying: (state) => {
      state.isPaying = true
    },
    closePaying: (state) => {
      state.isPaying = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  openOrder,
  closeOrder,
  openPaying,
  closePaying,
  clear
} = cartSlice.actions
export default cartSlice.reducer

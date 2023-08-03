import CounterStore from '@/mobx/counterStore'
import ShoppingListStore from "@/mobx/shoppingListStore";
import '@/styles/globals.css'

export const myStore = new CounterStore()
export const shoppingListStore = new ShoppingListStore()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} store={myStore} shoppingListStore={shoppingListStore} />
}

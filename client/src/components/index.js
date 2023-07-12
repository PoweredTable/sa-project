import Home from './Home'
import { NavbarDefault, NavbarCheckout } from './Navbar';
import Books from './Books'
import Authors from './Authors'
import ViewBook from './ViewBook'

import Checkout from './Checkout'
import PayBoleto from './PaymentMethods/boleto'
import PayCredito from './PaymentMethods/credito'
import PayPIX from './PaymentMethods/pix'

import { BooksContextProvider } from './contexts/BooksContext'

import { Admin } from './Admin'


export {
    Home,
    NavbarDefault, 
    NavbarCheckout,
    Books,
    Authors, Admin
  
    BooksContextProvider,
    ViewBook, 
    Checkout,
    PayBoleto,
    PayCredito,
    PayPIX
}
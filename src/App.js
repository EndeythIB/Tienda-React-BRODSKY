import AppRouter from './AppRouter/AppRouter';
import {CartProvider} from './Context/CartContext';


function App() {
  return (
    <CartProvider>
    <AppRouter/>
    </CartProvider>
  );
}

export default App;

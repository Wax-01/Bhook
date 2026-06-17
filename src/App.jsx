import AppRouter from "./routers/AppRouters"
import { AuthProvider } from "./context/authcontext"
import { ItemProvider } from "./context/ItemContext"
function App() {
  return (
    <>
    <AuthProvider>
      <ItemProvider>
        <AppRouter></AppRouter>
      </ItemProvider>
    </AuthProvider>

      
    </>
  )
}

export default App

import AppRouter from "./routers/AppRouters"
import { AuthProvider } from "./context/authcontext"
function App() {
  return (
    <>
    <AuthProvider>
      <AppRouter></AppRouter>
    </AuthProvider>

      
    </>
  )
}

export default App

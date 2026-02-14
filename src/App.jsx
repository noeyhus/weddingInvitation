import Hero from './components/Hero'
import Couple from './components/Couple'
import Gallery from './components/Gallery'
import Location from './components/Location'
import AccountInfo from './components/AccountInfo'
import Guestbook from './components/Guestbook'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[rgb(230,203,203)]">
      <Hero />
      <Couple />
      <Gallery />
      <Location />
      <AccountInfo />
      <Guestbook />
      <Footer />
    </div>
  )
}

export default App
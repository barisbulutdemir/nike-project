
import {FlexContent, Footer, Hero, Sales, Stories, Navbar} from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker , story, footerAPI} from "./data/data.js";
import Cart from "./components/Cart.jsx";


function App() {


  return (
    <>
      <main className='flex flex-col relative'>
          <Navbar />
          <Cart />
          <Hero heroapi ={heroapi}   />
          {/* Neden 2 kere Sales kullandık ? Çünkü tek template üstünden 
          2 ayrı şey göstermek istiyoruz. Tekrar altta ayrı bir template oluşturmak istemiyoruz*/}
          <Sales endpoint = {popularsales} ifExists />
          {/* Yukarıda ki ifexists in sebebi: Bunu bi prop olarak gönderip,
           eğer papularsaleslar farklı bir biçimde olacaksa  if metoduna alıp ona göre ayarlayabiliriz */}
          <FlexContent endpoint={highlight } ifExists />

          <Sales endpoint = {toprateslaes }/>
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
          <Footer footerAPI={footerAPI} />

    </main>
        </>
  )
}

export default App;


import './assets/styles.css'
import { Animate } from './components/Animate'
import { AnimateInView } from './components/AnimateInView'

function App() {

  
  return (
    <div className='container'>
      <main>
          <section id="animation">  
              <Animate 
                animation='zoomIn'
                duration={2000}
                >
                  <h1>Hello world!!!</h1>
              </Animate>
              
          </section>
          <section id="animation-scroll">
            <AnimateInView 
              animation='fadeInDown'
              duration={1500}

            >
               <h1>Hello world</h1>
            </AnimateInView>
          </section>
        </main>
    </div>
  )
}

export default App

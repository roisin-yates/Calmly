import AddEntry from './AddEntry'
import EntriesList from './EntriesList'

function App() {
  return (
    <>
      <header className="header">
        <img src="./img/calmly.png" alt="calmly logo" className="logo" />
        <h1 className="is-hidden">Calmly</h1>
      </header>
      <section className="main is-flex is-justify-content-space-around ml-auto mr-auto">
        <div>
          <EntriesList />
        </div>
        <div>
          <AddEntry />
        </div>
      </section>
    </>
  )
}

export default App

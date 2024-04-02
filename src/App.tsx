import './App.css'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-lavender min-h-screen font-roboto'>
      <Header />
      <main className="container mx-auto px-4">
        <div className='max-w-[768px] mx-auto pt-4 pb-10'>
          <Form />
        </div>
      </main>
		</div>
  )
}

export default App

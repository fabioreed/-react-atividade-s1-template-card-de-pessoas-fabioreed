import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  const users = [
  {
    name: 'Fabio',
    age: 28,
    conuntry: 'Brazil'
  },
  {
    name: 'Eden',
    age: 29,
    conuntry: 'United States'
  }, 
  {
    name: 'Gabriel',
    age: 23,
    conuntry: 'Brazil'
  }
]

  return (
    <main>

      {users.map((user, index) => (
        <PersonCard key={index} name={user.name} age={user.age} />
      ))}

      {/* <PersonCard /> */}

    </main>
  )
}

export default App

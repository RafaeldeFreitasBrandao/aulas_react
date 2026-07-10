import './style.css'
import Bin from '../../assets/trash-can-regular.png'

function Home() {
  
  const users = [
  {

    id: '1',
    name: 'Rafael',
    date:'19/11/2006',
    email:'rafael.g.brnd@hotmail.com'

  },
  {
    id: '2',
    name: 'Gabriel',
    date:'01/01/2007',
    email:'Gabriel.g.brnd@hotmail.com'

  }
]


  return (
    <div className='container'>

      <form>

        <h1>Cadastro de Usuários</h1>

        <input name="name" type='text'>
        </input>

        <input name="idade" type='date'  min="1920-01-01" max="2026-07-09">
        </input>

        <input name="email" type='email'>
        </input>

        <button type='button'>Cadastrar</button>

      </form>
{users.map (user => (
  <div key={user.id}>
        <div>
          <p>Nome:{user.name}</p>
          <p>Data de Nascimento:{user.date}</p>
          <p>Email: {user.email}</p>
        </div>
        <button>
          <img src={Bin}/>
        </button>
  </div>

))}
      <div>

        <div>
          <p>Nome:</p>
          <p>Data de Nascimento: </p>
          <p>Email: </p>
        </div>
        <button>
          <img src={Bin}/>
        </button>
      </div>
    </div>
    
  )
}

export default Home

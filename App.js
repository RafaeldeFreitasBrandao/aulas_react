function Greeting ({nome}) {

    return <h1> How are you? {nome}</h1>;

}

export default function App() {
    return <Greeting nome = "Rafael"/>
}
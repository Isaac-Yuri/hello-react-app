import { Button, Container } from 'react-bootstrap';

const Main = () => {
  let nomes = ['Maria', 'João', 'Marcos'];

  const getNome = () => {
    return <a>Simone</a>;
  };

  return (
    <main className='flex-grow-1 my-2'>
      <Container fluid>
        <Button variant="primary">Primary</Button>
        {getNome()}
        <ul>
          {nomes.map((nome, i) => {
            return <li key={i}>{nome}</li>;
          })}
        </ul>
      </Container>
    </main>
  );
};

export default Main;

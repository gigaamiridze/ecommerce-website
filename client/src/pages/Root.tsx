import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../layouts';
import { Container } from '../components';

function Root() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Root;

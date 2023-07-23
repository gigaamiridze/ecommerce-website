import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../layouts';
import { Container, PageContent } from '../components';

function Root() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <PageContent>
            <Outlet />
          </PageContent>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Root;

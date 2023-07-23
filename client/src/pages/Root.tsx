import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../layouts';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;

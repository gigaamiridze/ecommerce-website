import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import {
  HeaderWrapper, Container, Navbar, LeftContent,
  RightContent, Logo, SearchForm, SearchInput,
  SearchButton
} from '../components';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <LeftContent>
            <Link to={PageRoutes.ROOT}>
              <Logo>ProShop</Logo>
            </Link>
            <SearchForm>
              <SearchInput id='search' name='search' placeholder='Search item...' />
              <SearchButton type='submit'>submit</SearchButton>
            </SearchForm>
          </LeftContent>
          <RightContent>
            <Link to={PageRoutes.CART}>
              <FaShoppingCart />
              <span>cart</span>
            </Link>
            <Link to={PageRoutes.LOGIN}>
              <FaUser />
              <span>login</span>
            </Link>
          </RightContent>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;

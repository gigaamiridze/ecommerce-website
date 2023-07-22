import { FaShoppingCart, FaUser } from 'react-icons/fa';
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
            <Logo>ProShop</Logo>
            <SearchForm>
              <SearchInput id='search' name='search' placeholder='Search item...' />
              <SearchButton type='submit'>submit</SearchButton>
            </SearchForm>
          </LeftContent>
          <RightContent>
            <a href="#">
              <FaShoppingCart />
              <span>cart</span>
            </a>
            <a href="#">
              <FaUser />
              <span>login</span>
            </a>
          </RightContent>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;

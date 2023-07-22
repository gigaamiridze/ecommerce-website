import { HeaderWrapper, Container, Navbar, LeftContent, Logo, SearchForm, SearchInput } from '../components';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <LeftContent>
            <Logo>ProShop</Logo>
            <SearchForm>
              <SearchInput id='search' name='search' placeholder='Search item...' />
            </SearchForm>
          </LeftContent>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;

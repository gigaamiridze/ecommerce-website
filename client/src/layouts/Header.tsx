import { HeaderWrapper, Container, Navbar, LeftContent, Logo, SearchForm, SearchInput, SearchButton } from '../components';

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
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;

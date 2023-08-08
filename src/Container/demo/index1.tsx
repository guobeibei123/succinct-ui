import React from 'react';
import { Container, Header, Aside, Main, Footer } from '..';

export default function ContainerDemo1() {
  return (
    <div >
      <div>
        <Container>
          <Header height={60}>header</Header>
          <Main height={200}>main</Main>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <Header height={60}>Header</Header>
          <Main height={200} >Main</Main>
          <Footer>Footer</Footer>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <Header height={60}>Header</Header>
          <Container type="style">
            <Aside height={200} width={200}>Aside</Aside>
            <Main height={200} >Main</Main>
          </Container>
          <Footer>Footer</Footer>
        </Container>
      </div>
      <hr />
      <div>
        <Container type="style">
          <Aside height={200} width={200}>Aside</Aside>
          <Main height={200} >Main</Main>
        </Container>
      </div>
      <hr />
      <div>
        <Container >
          <Header height={60}>header</Header>
          <Container type="style">
            <Aside height={200} width={200}>Aside</Aside>
            <Main height={200} >Main</Main>
          </Container>
        </Container>
      </div>
      <hr />
      <div>
        <Container >
          <Header height={60}>header</Header>
          <Container type="style">
            <Aside height={260} width={200}>Aside</Aside>
            <Container>
              <Main height={200} >Main</Main> 
              <Footer>Footer</Footer>
            </Container>
          </Container>
        </Container>
      </div>
      <hr />
      <div>
        <Container type="style">
          <Aside height={320} width={200}>Aside</Aside>
          <Container >
            <Header height={60}>header</Header>
            <Main height={200} >Main</Main>
            <Footer height={60}>Footer</Footer>
          </Container>
        </Container>
      </div>

    </div>
  );
}

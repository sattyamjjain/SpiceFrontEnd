import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components'

const MainComponent = styled.div`
`;

const WrappedContainer = styled.div`
  position:relative;
  overflow:auto;
  min-height:100%;
`;

const withLayout = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return (
        <MainComponent>
          <Header/>
            <WrappedContainer>
              <WrappedComponent {...this.props} />
            </WrappedContainer>
          <Footer/>
        </MainComponent>
      );
    }
  }

  return HOC;
};

export default withLayout;
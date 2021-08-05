import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


export default function Footer() {
  const [state, setState] = useState({
    mobileView: true,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 570
        ? setState((prevState) => ({ ...prevState, mobileView: false }))
        : setState((prevState) => ({ ...prevState, mobileView: true }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const displayDesktop = () => {
    return (
        <Box>
        <Container>
          <Row>
            
            <Column>
              
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Terms and conditions</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </Column>

            <Column>
            
              <FooterLink href="#">Contact us</FooterLink>
              <FooterLink href="#">Our partners</FooterLink>
              <FooterLink href="#">How it works</FooterLink>
              <FooterLink href="#">Work with us</FooterLink>
              
            </Column>
            <Column>
              
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Terms and conditions</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </Column>
            <Column>
            
              <FooterLink href="#">Contact us</FooterLink>
              <FooterLink href="#">Our partners</FooterLink>
              <FooterLink href="#">How it works</FooterLink>
              <FooterLink href="#">Work with us</FooterLink>
              
            </Column>
            
          </Row>
        </Container>
      </Box>
    )
  };
  const displayMobile = () => {
    
    return (
      <div >
          <Box>
        <Container>
          <MainRow>
            
             
            
            <ColumnMobile>
            <Column>
              
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Terms and conditions</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </Column>
            <Column>
            
              <FooterLink href="#">Contact us</FooterLink>
              <FooterLink href="#">Our partners</FooterLink>
              <FooterLink href="#">How it works</FooterLink>
              <FooterLink href="#">Work with us</FooterLink>
              
            </Column>
            </ColumnMobile>
            
              
          </MainRow>
        </Container>
      </Box>
      </div>
    );
  };
    return (
      <div>
        {mobileView ?displayDesktop():  displayMobile() }
      </div>
  )
}


const Box = styled.div`
  padding: 80px 10px 50px 20px;
  background: #222222;
  position: relative;
  bottom: 0;
  left:0;
  Z-index: 1;
  margin-top: auto;
  overflow-x: hidden;
  &:before{
    
    no-repeat fixed;
    content:"";
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

}
  
   
  @media (max-width: 700px) {
    padding: 10px 20px 10px 20px;
    
  }
`;
   
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    left:0;
    margin: 0 auto;
    
`
   
 const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  left:0;
  margin-top: 50px;
`;
const ColumnMobile = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-around;
`;
   
 const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 
                           minmax(200px, 1fr));
  }
`;
const MainRow = styled.div`
  display: flex;
  flex-direction: column;


`
   
 const FooterLink = styled.div`
            color: white;
            margin-bottom: 15px;
            font-size: 18px;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            display: flex;
            align-items: centre;
            padding: 0 12px;
            cursor: pointer;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
              &:after {
                      content: "";
                      height: 2px;
                      background: white;
                      position: absolute;
                      left: 0;
                      right: 0;
                      bottom: -6px;
                      opacity: 0;
                      transfrom-origin: left center;
                      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                      transform: scaleX(0);
      
                  }
      
              }
              &:hover{
                  span:after {
                      transform: scaleX(1);
                      opacity: 1;
                  }
              }
          }
`;
  
 
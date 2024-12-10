import { MDBFooter, MDBCol, MDBIcon, MDBContainer, MDBRow } from "mdb-react-ui-kit";
const Footer = () => {
  return <MDBFooter bgColor='light' className='text-center text-lg-start text-muted bg-light text-center'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Entre em contato com uma de nossas redes sociais:</span>
      </div>

      <div>
        <a href='https://www.facebook.com/isaac.yuri.5' target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='mailto:isaacyuri22@gmail.com' target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='https://www.instagram.com/isaac_yuri.py/' target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='https://github.com/Isaac-Yuri' target="_blank" className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              IFFeiras
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Produtos</h6>
            <p>
              <a href='#!' className='text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Django
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Links uteis</h6>
            <p>
              <a href='#!' className='text-reset'>
                Preços
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Configurações
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Ordens
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Ajuda
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              RUA PROFESSOR CARLOS LEONARDO ARCOVERDE SN RODOVIA, PB-057, Guarabira - PB, 58200-000
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              isaacyuri22@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        IFFeiras.com
      </a>
    </div>
  </MDBFooter>;
};

export default Footer;

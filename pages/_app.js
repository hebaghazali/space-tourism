import Layout from '../components/Layout';
import { wrapper } from '../store/store';

import '../styles/globals.css';
import Container from './../components/Container';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);

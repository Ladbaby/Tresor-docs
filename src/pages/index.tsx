import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

function Redirect() {
  useEffect(() => {
    window.location.href = '/Tresor-docs/docs/user/intro';
  }, []);
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh'}}>
      <p>Redirecting to documentation...</p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Redirect />
    </Layout>
  );
}

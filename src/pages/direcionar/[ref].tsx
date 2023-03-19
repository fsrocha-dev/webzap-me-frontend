import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ContainerLink } from './styles';

const Direcionar = () => {
  const router = useRouter();
  const { ref } = router.query;


  useEffect(() => {
    async function handleAccessLink() {
      try {
        const linkURL = `http://localhost:5001/links/get/${ref}`

        const { data: linkData } = await axios.get(linkURL)

        const leadURL = `http://localhost:5001/leads/${linkData.ref}`
        await axios.post(leadURL, {
          country: 'br',
          city: 'iacivis',
          cep: '45784999',
          state: 'mg',
          ip: '123.434.545.34'
        })

        window.location.href = linkData.whatsapp_link;

      } catch (error: any) {
        window.location.href = 'http://localhost:3000/';
      }
    }

    if (ref) {
      handleAccessLink()
    }
  }, [ref])

  return <ContainerLink>🔒 Redirecionamento Seguro, aguarde!</ContainerLink>;
};

export default Direcionar;

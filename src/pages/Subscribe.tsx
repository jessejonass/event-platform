import { gql, useMutation } from '@apollo/client';
import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Icons/Logo';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subscribe: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-blur bg-cover bg-no-repeat'>
      <div className='flex items-center justify-between mt-20 mx-auto w-full max-w-[1100px]'>
        <div className='max-w-[640px]'>
          <Logo />

          <h1 className='mt-8 text-4xl leading-tight'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>

          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className='flex flex-col gap-2 w-full'
          >
            <input
              className='bg-gray-900 rounded px-4 h-14'
              type='text'
              placeholder='Seu nome completo'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-4 h-14'
              type='email'
              placeholder='Seu melhor e-mail'
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
            >
              {loading ? 'Aguarde...' : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>
      <img
        src='/src/assets/code-mockup.png'
        className='mt-10'
        alt='Code Mockup'
      />
    </div>
  );
};

export default Subscribe;

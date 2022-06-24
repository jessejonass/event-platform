import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';

const Event: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;

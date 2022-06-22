import { FC } from 'react';
import { isPast, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
};

const Lesson: FC<LessonProps> = ({ title, slug, availableAt, type }) => {
  const isLessonAvailabe = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBr }
  );

  return (
    <a href={slug}>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailabe ? (
            <span className='flex items-center gap-2 text-sm text-blue-500 font-medium'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='text-xs font-bold rounded px-2 py-[0.125rem] border border-green-300'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>{title}</strong>
      </div>
    </a>
  );
};

export default Lesson;

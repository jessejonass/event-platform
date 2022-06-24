import classNames from 'classnames';
import { FC } from 'react';
import { isPast, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
};

const Lesson: FC<LessonProps> = ({ title, slug, availableAt, type }) => {
  const { slug: slugParams } = useParams<{ slug: string }>();

  const isLessonAvailabe = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBr }
  );

  const isActiveLesson = slug === slugParams;

  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 group-hover:border-green-500 transition-colors p-4 mt-2',
          {
            'bg-green-500': isActiveLesson,
          }
        )}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailabe ? (
            <span
              className={classNames(
                'flex items-center gap-2 text-sm text-blue-500 font-medium',
                {
                  'text-white': isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs font-bold rounded px-2 py-[0.125rem] border border-green-300',
              {
                'border-white': isActiveLesson,
              }
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;

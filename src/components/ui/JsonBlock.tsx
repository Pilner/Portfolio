import { Fragment } from 'react';

import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TJsonBlock } from '@src/types/TJsonBlock';

interface IJsonBlockProps {
  data: TJsonBlock[];
}

export default function JsonBlock({ data }: IJsonBlockProps) {
  return (
    <div className='flex flex-col overflow-clip rounded-xl border border-black/25 shadow-lg'>
      {/* Header */}
      <div className='relative flex gap-2 p-4 md:gap-4'>
        <div className='aspect-square h-[0.8rem] rounded-full bg-[#FF605C] md:h-4' />
        <div className='aspect-square h-[0.8rem] rounded-full bg-[#FFBD44] md:h-4' />
        <div className='aspect-square h-[0.8rem] rounded-full bg-[#00CA4E] md:h-4' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default'>
          <div className='flex items-center justify-center gap-2 text-[16px] md:text-[18px]'>
            <FontAwesomeIcon icon={faFileCode} className='text-black/50' />
            <p className='font-body font-semibold text-black/50'>my_info.json</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='bg-[#fafafa] p-4 text-[#383a42] shadow-lg'>
        <table className='table border-separate border-spacing-x-4 border-spacing-y-2 self-center text-lg lg:text-xl 2xl:text-2xl'>
          <tbody>
            {data.map((info, index) => (
              <tr key={`json-block-info-${info.label}-${index}`}>
                <th className='float-start font-bold'>
                  <code>
                    <span className='text-[#e45649]'>{info.label}</span>:
                  </code>
                </th>
                {info.type === 'string' && (
                  <td className='text-[#50a14f]'>
                    <code>
                      {`"${info.value}"`}{' '}
                      {info.comment && <span className='text-[#a0a1a7]'>{`// ` + info.comment}</span>}
                    </code>
                  </td>
                )}
                {info.type === 'number' && (
                  <td className='text-[#c18401]'>
                    <code>
                      {info.value} {info.comment && <span className='text-[#a0a1a7]'>{`//` + info.comment}</span>}
                    </code>
                  </td>
                )}
                {info.type === 'array' && (
                  <td className=''>
                    <code>
                      <span className='text-[#383a42]'>[</span>

                      {(info.value as (string | number)[]).map((item, index) => (
                        <Fragment key={`json-block-info-${info.label}-${index}-array-${item}-${index}`}>
                          {typeof item === 'string' ? (
                            <span className='text-[#50a14f]'>{`"${item}"`}</span>
                          ) : (
                            <span className='text-[#c18401]'>{item}</span>
                          )}
                          {index !== (info.value as (string | number)[]).length - 1 && (
                            <span className='text-[#383a42]'>, </span>
                          )}
                        </Fragment>
                      ))}

                      <span className='text-[#383a42]'>
                        ] {info.comment && <span className='text-[#a0a1a7]'>{`//` + info.comment}</span>}
                      </span>
                    </code>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

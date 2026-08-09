import { Fragment, useLayoutEffect, useRef, useState } from 'react';

import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TJsonBlock } from '@src/types/TJsonBlock';

interface IJsonBlockProps {
  data: TJsonBlock[];
}

export default function JsonBlock({ data }: IJsonBlockProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [wrapped, setWrapped] = useState<ReadonlySet<string>>(new Set());

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const next = new Set<string>();
      container.querySelectorAll('tr').forEach((row) => {
        const label = row.querySelector('th');
        const value = row.querySelector('td');
        if (label && value && value.offsetTop > label.offsetTop) {
          next.add(label.textContent?.replace(':', '') ?? '');
        }
      });
      setWrapped((prev) => (prev.size === next.size && [...prev].every((key) => next.has(key)) ? prev : next));
    };

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='flex flex-col overflow-clip rounded-xl border border-black/25 shadow-lg'>
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
        <table className='table self-center text-lg lg:text-xl 2xl:text-2xl'>
          <tbody>
            {data.map((info, index) => (
              <tr key={`json-block-info-${info.label}-${index}`} className='flex flex-wrap items-start gap-x-4 gap-y-2'>
                <th className='shrink-0 font-bold'>
                  <code>
                    <span className='text-[#e45649]'>{info.label}</span>:
                  </code>
                </th>
                {info.type === 'string' && (
                  <td className={`min-w-0 text-[#50a14f] ${wrapped.has(info.label) ? 'pl-8' : ''}`}>
                    <code className='wrap-break-word'>
                      {`"${info.value}"`}{' '}
                      {info.comment && <span className='text-[#a0a1a7]'>{`// ` + info.comment}</span>}
                    </code>
                  </td>
                )}
                {info.type === 'number' && (
                  <td className={`min-w-0 text-[#c18401] ${wrapped.has(info.label) ? 'pl-8' : ''}`}>
                    <code className='wrap-break-word'>
                      {info.value} {info.comment && <span className='text-[#a0a1a7]'>{`//` + info.comment}</span>}
                    </code>
                  </td>
                )}
                {info.type === 'array' && (
                  <td className={`min-w-0 ${wrapped.has(info.label) ? 'pl-8' : ''}`}>
                    <code className='wrap-break-word'>
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

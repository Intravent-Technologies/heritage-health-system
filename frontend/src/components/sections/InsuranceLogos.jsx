'use client'

import { INSURERS } from '../../lib/constants'

export default function InsuranceLogos() {
  return (
    <div className="w-full overflow-hidden py-4 sm:py-8">
      <div className="flex gap-10 sm:gap-16 items-center animate-scroll" style={{ width: 'max-content' }}>
        {[...INSURERS, ...INSURERS].map((ins, i) => (
          <div
            key={`${ins.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {ins.hasNameInLogo ? (
              <img
                src={ins.src}
                alt={ins.name}
                className="h-8 sm:h-10 md:h-12 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-1">
                <img
                  src={ins.src}
                  alt={ins.name}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
                <span className="text-[10px] sm:text-xs font-semibold text-gray-500 whitespace-nowrap">
                  {ins.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

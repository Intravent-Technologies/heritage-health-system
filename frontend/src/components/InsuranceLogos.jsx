'use client'

const insurers = [
  { name: 'Medicare', src: '/insurance/medicare.png', hasNameInLogo: true },
  { name: 'UnitedHealthcare', src: '/insurance/uhc.png', hasNameInLogo: true },
  { name: 'Optum', src: '/insurance/optum.png', hasNameInLogo: true },
  { name: 'Aetna', src: '/insurance/aetna.png', hasNameInLogo: true },
  { name: 'Blue Cross Blue Shield', src: '/insurance/bluecross.png', hasNameInLogo: true },
  { name: 'CIGNA', src: '/insurance/cigna.png', hasNameInLogo: false },
  { name: 'Oscar', src: '/insurance/oscar.png', hasNameInLogo: false },
  { name: 'Harvard Pilgrim', src: '/insurance/harvard-pilgrim.png', hasNameInLogo: false },
  { name: 'Mass General Brigham', src: '/insurance/mgb.png', hasNameInLogo: false },
  { name: 'Carelon', src: '/insurance/carelon.png', hasNameInLogo: false },
  { name: 'Commonwealth Care Alliance', src: '/insurance/commonwealth-care.png', hasNameInLogo: false },
  { name: 'Network Health', src: '/insurance/network-health.png', hasNameInLogo: false },
]

export default function InsuranceLogos() {
  return (
    <div className="w-full overflow-hidden py-4 sm:py-8">
      <div className="flex gap-10 sm:gap-16 items-center animate-scroll" style={{ width: 'max-content' }}>
        {[...insurers, ...insurers].map((ins, i) => (
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

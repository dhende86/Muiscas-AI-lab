import owlImage from "../../assets/ksu-owl.png";

export function KSULogo() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Owl background with text overlay */}
      <div className="relative w-[600px] h-[500px] flex items-center justify-center">
        {/* Owl Image */}
        <img
          src={owlImage}
          alt="KSU Owl"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Text Overlay */}
        <div className="relative z-10 text-center flex flex-col items-center gap-2 mt-48">
          <h1
            className="text-7xl tracking-wider drop-shadow-2xl"
            style={{
              fontWeight: 900,
              color: '#FDB913',
              fontFamily: 'Impact, system-ui, sans-serif',
              textShadow: '3px 3px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000',
              letterSpacing: '0.05em'
            }}
          >
            KSU
          </h1>
          <h2
            className="text-4xl tracking-wide"
            style={{
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'Impact, system-ui, sans-serif',
              textShadow: '2px 2px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000',
              letterSpacing: '0.1em'
            }}
          >
            DATA CENTER
          </h2>
          <h3
            className="text-2xl tracking-widest"
            style={{
              fontWeight: 700,
              color: '#FDB913',
              fontFamily: 'Impact, system-ui, sans-serif',
              textShadow: '2px 2px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000',
              letterSpacing: '0.15em'
            }}
          >
            LEARNING HUB
          </h3>
        </div>
      </div>
    </div>
  );
}

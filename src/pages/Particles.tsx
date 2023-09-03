import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import { Particles as ParticlesComponent } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


const Particles: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="container">
      <ParticlesComponent
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#023e8a',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 175,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#48cae4', '#ade8f4', '#ade8f4', '#caf0f8'],
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 2000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 20, max: 50 },
            },
          },
          detectRetina: true,
        }} />
      <div className="content">
        <div className="line-and-text">
          <div className="title">
            <h1>Dillon Reedy</h1>
          </div>
          <hr className="line" />
        </div>
        <p>Software Developer & AI Engineer</p>
      </div>
    </div>
  );
}

export default Particles;

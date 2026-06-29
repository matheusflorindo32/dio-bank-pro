import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      scale: 1.3,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.95, 0.82],
      markerColor: [0.61, 0.36, 0.9],
      glowColor: [0.0, 0.95, 0.82],
      offset: [0, 0],
      markers: [
        { location: [37.7749, -122.4194], size: 0.05 },
        { location: [40.7128, -74.0060], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [-23.5505, -46.6333], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '1',
      }}
    />
  );
}

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import bracesPhoto from '../assets/images/smile-braces.jpg';
import beforeAfterPhoto from '../assets/images/smile-before-after.jpg';
import alignerPhoto from '../assets/images/smile-aligner.jpg';
import patientsPhoto from '../assets/images/smile-patients.jpg';

const photos = [
  { src: bracesPhoto, alt: 'Resultado de tratamento ortodôntico com aparelho' },
  { src: beforeAfterPhoto, alt: 'Comparação de sorriso antes e depois do tratamento' },
  { src: alignerPhoto, alt: 'Alinhadores ortodônticos transparentes' },
  { src: patientsPhoto, alt: 'Pacientes atendidos pela Dra. Mayume Amorim' },
  { src: bracesPhoto, alt: 'Detalhe de tratamento ortodôntico' },
  { src: beforeAfterPhoto, alt: 'Resultado estético do sorriso' },
  { src: alignerPhoto, alt: 'Tratamento com alinhadores transparentes' },
];

const positions = [
  { x: -258, y: 34, rotate: -21, scale: 0.78 },
  { x: -176, y: 17, rotate: -14, scale: 0.84 },
  { x: -88, y: 6, rotate: -7, scale: 0.92 },
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: 88, y: 6, rotate: 7, scale: 0.92 },
  { x: 176, y: 17, rotate: 14, scale: 0.84 },
  { x: 258, y: 34, rotate: 21, scale: 0.78 },
];

export default function SmileGallery() {
  const [center, setCenter] = useState(3);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isCompact, setIsCompact] = useState(() => window.innerWidth <= 640);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    const updateLayout = () => setIsCompact(media.matches);
    media.addEventListener('change', updateLayout);
    return () => media.removeEventListener('change', updateLayout);
  }, []);

  const compactPositions = positions.map((position) => ({ ...position, x: position.x * 0.48 }));
  const activePositions = isCompact ? compactPositions : positions;
  const orderedPhotos = photos.map((_, slot) => photos[(center - 3 + slot + photos.length) % photos.length]);
  const move = (direction: number) => setCenter((current) => (current + direction + photos.length) % photos.length);

  return (
    <section className="gallery" id="sorrisos" aria-labelledby="sorrisos-title">
      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">SORRISOS</span>
        <h2 id="sorrisos-title">Resultados que falam por si</h2>
        <p>Casos e momentos reais de quem confiou seu sorriso aos nossos cuidados.</p>
      </motion.div>

      <div className="fan-carousel" aria-roledescription="carrossel">
        <div className="fan-stage">
          {orderedPhotos.map((photo, index) => {
            const position = activePositions[index];
            const push = hovered === null ? 0 : index < hovered ? -16 : index > hovered ? 16 : 0;
            return (
              <motion.figure
                key={`${photo.src}-${index}-${center}`}
                className={`fan-card${index === 3 ? ' is-center' : ''}`}
                initial={{ opacity: 0, x: 0, y: 70, rotate: 0, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  x: position.x + push,
                  y: hovered === index ? position.y - 18 : position.y,
                  rotate: position.rotate,
                  scale: hovered === index ? position.scale + 0.06 : position.scale,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.9, delay: index * 0.035 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </motion.figure>
            );
          })}
        </div>

        <div className="fan-controls">
          <button type="button" className="fan-arrow fan-prev" onClick={() => move(-1)} aria-label="Foto anterior">
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="fan-dots" aria-label={`Foto ${center + 1} de ${photos.length}`}>
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`fan-dot${index === center ? ' is-active' : ''}`}
                onClick={() => setCenter(index)}
                aria-label={`Mostrar foto ${index + 1}`}
                aria-current={index === center ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" className="fan-arrow fan-next" onClick={() => move(1)} aria-label="Próxima foto">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

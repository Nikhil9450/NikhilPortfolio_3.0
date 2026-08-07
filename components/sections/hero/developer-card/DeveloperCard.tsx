'use client';

import { useEffect, useRef } from 'react';
import { heroData } from '@/data/hero';
import EditorHeader from './EditorHeader';
import CodePreview from './CodePreview';
import StatusBar from './StatusBar';

export default function DeveloperCard() {
  const { developer } = heroData;

  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const MAX_ROTATION = 5;

  useEffect(() => {
    if (!cardRef.current) return;

    console.log(cardRef.current.getBoundingClientRect());
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    rectRef.current = cardRef.current.getBoundingClientRect();

    cardRef.current.style.transition = 'none';
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
      if (!cardRef.current || !rectRef.current) return;

      const card = cardRef.current;
      const rect = rectRef.current;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centeredX = x - rect.width / 2;
      const centeredY = y - rect.height / 2;

      const rotateY =
        centeredX * (MAX_ROTATION / (rect.width / 2));

      const rotateX =
        -centeredY * (MAX_ROTATION / (rect.height / 2));

      const transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

        card.style.setProperty(
            'transform',
            transform
          );
    };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    card.style.transition = 'transform 250ms ease';

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        w-full
        max-w-lg
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-10
        backdrop-blur-xl
        will-change-transform
      "
    >
      <EditorHeader/>

      <CodePreview code={developer.code} />

      <StatusBar
        available={developer.available}
        experience={developer.experience}
      />
    </div>
  );
}
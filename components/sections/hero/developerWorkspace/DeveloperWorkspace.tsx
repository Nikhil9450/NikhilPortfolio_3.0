'use client';

import { useEffect, useRef } from 'react';
import { heroData, techStack } from '@/data/hero';

import WorkspaceHeader from './WorkspaceHeader';
import WorkspaceCode from './WorkspaceCode';
import WorkspaceFooter from './WorkspaceFooter';

export default function DeveloperWorkspace() {
  const { developer } = heroData;

  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const canHoverRef = useRef(false);

  const MAX_ROTATION = 5;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    canHoverRef.current = mediaQuery.matches;
  }, []);

  const handleMouseEnter = () => {
    if (!canHoverRef.current || !cardRef.current) return;

    rectRef.current =
      cardRef.current.getBoundingClientRect();

    cardRef.current.style.transition = 'none';
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      !cardRef.current ||
      !rectRef.current ||
      !canHoverRef.current
    ) {
      return;
    }

    const card = cardRef.current;
    const rect = rectRef.current;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centeredX =
      x - rect.width / 2;

    const centeredY =
      y - rect.height / 2;

    const rotateY =
      centeredX *
      (MAX_ROTATION / (rect.width / 2));

    const rotateX =
      -centeredY *
      (MAX_ROTATION / (rect.height / 2));

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

    card.style.transition =
      'transform 250ms ease';

    card.style.setProperty(
      'transform',
      `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
      `
    );

    rectRef.current = null;
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
        min-w-0
        max-w-lg
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800/80
        bg-zinc-900/75
        p-5 
        sm:p-8 
        lg:p-10
        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        will-change-transform
      "
    >
      {/* Surface lighting */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.10),transparent_45%)]
        "
      />

      {/* Workspace content */}
      <div className="relative z-10">
        <WorkspaceHeader
          environment={developer.environment}
          project={developer.project}
          fileName={developer.fileName}
        />

        <WorkspaceCode
          code={developer.code}
        />

        <WorkspaceFooter
          available={developer.available}
        />
      </div>
    </div>
  );
}
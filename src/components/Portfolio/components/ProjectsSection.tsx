'use client';

import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface ProjectItem {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  color: string;
}

export interface ProjectsSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export function ProjectsSection({ onScrollToSection }: ProjectsSectionProps) {
  const { t } = useTranslation();

  const projects: ProjectItem[] = [
    {
      title: t('projects.items.0.title'),
      desc: t('projects.items.0.desc'),
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      color: '#00D9FF',
    },
    {
      title: t('projects.items.1.title'),
      desc: t('projects.items.1.desc'),
      tech: ['TypeScript', 'Next.js', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      color: '#FF006B',
    },
    {
      title: t('projects.items.2.title'),
      desc: t('projects.items.2.desc'),
      tech: ['React', 'WebSocket', 'Redis'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      color: '#00FF94',
    },
  ];

  return (
    <section id="projects" className="relative px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 bg-gradient-to-r from-white via-cyan-400 to-pink-400 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
          {t('projects.title')}
        </h2>
        <p className="mb-12 text-center text-gray-400">{t('projects.subtitle')}</p>
        <div className="grid gap-8 md:grid-cols-3" role="list">
          {projects.map((p, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
            >
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{p.desc}</p>
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="flex cursor-pointer items-center gap-2 text-sm font-bold text-cyan-400 transition-opacity hover:opacity-80"
                >
                  {t('projects.cta')} <ExternalLink size={14} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

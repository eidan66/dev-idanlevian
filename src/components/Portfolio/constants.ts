import {
  Cpu,
  Globe,
  Layers,
  Lightbulb,
  type LucideIcon,
  MessageSquare,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const SECTION_IDS = ['home', 'projects', 'skills', 'trust', 'contact'] as const;
export const SCROLL_TRIGGER_OFFSET = 150;

export const SKILL_ICONS: LucideIcon[] = [
  Layers,
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  MessageSquare,
  Lightbulb,
];

import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ResourceItem {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
}

import { Code2, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import type { SocialLink } from '@/data/portfolio'

const map = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  instagram: Instagram,
  mail: Mail,
} as const

interface SocialIconProps {
  icon: SocialLink['icon']
  className?: string
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  const Icon = map[icon]
  return <Icon className={className} aria-hidden="true" />
}

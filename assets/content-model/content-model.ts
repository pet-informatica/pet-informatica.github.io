export enum PetMemberType {
  Current = 'current',
  Egress = 'egress',
  Tutor = 'tutor',
}

export enum PetColorScheme {
  LaranjaInternacional = 'laranja-internacional',
  LaranjaChama = 'laranja-chama',
  LaranjaGradiente = 'laranja-gradiente',
  MarAmarelo = 'mar-amarelo',
  Ouro = 'ouro',
  PerolaNegra = 'perola-negra',
  BondiBlue = 'bondi-blue',
  Pompadour = 'pompadour',
  RosaFrancesa = 'rosa-francesa',
}

export type PetWebsiteExternalLink = {
  text: string
  url: string
}

export type PetWebsiteEntry = {
  title: string
  text: string
  icon: string
}

export type PetWebsiteLabeledImage = {
  url: string
  alternativeText: string
}

export type PetWebsiteAnnouncementData = {
  visible: boolean
  colorScheme: PetColorScheme
  longDescription: string
  shortDescription: string
  callToAction?: PetWebsiteExternalLink | null
}

export type PetWebsiteHeroData = {
  title?: string | null
  text?: string | null
  circleImage: PetWebsiteLabeledImage
  presentationImage: PetWebsiteLabeledImage
  entries: PetWebsiteEntry[]
}

export type PetWebsiteEvent = {
  title: string
  date: Date
  place: string
  callToAction: PetWebsiteExternalLink
}

export type PetWebsiteActivity = {
  title: string
  text: string
  images: PetWebsiteLabeledImage[]
  callToAction?: PetWebsiteExternalLink | null
}

export type PetWebsiteMember = {
  name: string
  type: PetMemberType
  photoUrl: string
  cinLogin?: string | null
  linkedinUrl?: string | null
  personalWebsiteUrl?: string | null
}

export type PetWebsiteFaqEntry = {
  question: string
  answer: string
}

export type PetWebsiteContactUrl = {
  name: string
  label: string
  icon: string
  url: string
}

export type PetWebsiteData = {
  announcement?: PetWebsiteAnnouncementData | null
  hero: PetWebsiteHeroData
  activities: PetWebsiteActivity[]
  members: PetWebsiteMember[]
  faqEntries: PetWebsiteFaqEntry[]
  contactUrls: PetWebsiteContactUrl[]
  externalLinks: PetWebsiteExternalLink[]
}

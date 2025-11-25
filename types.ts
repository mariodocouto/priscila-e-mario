export interface SectionProps {
  onNext?: () => void;
  isActive?: boolean;
}

export interface PhotoItem {
  id: number;
  url: string;
  alt: string;
}

export enum ProposalState {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  THINKING = 'THINKING'
}
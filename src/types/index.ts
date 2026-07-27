export interface RsvpFormState {
  name: string;
  phone: string;
  attendance: 'hadir' | 'tidak_hadir';
  pax: number;
  wishes: string;
}

export interface WishMessage {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  attendance: 'hadir' | 'tidak_hadir';
}

export interface EventScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface ContactPerson {
  role: string;
  name: string;
  phone: string;
  relation: string;
}

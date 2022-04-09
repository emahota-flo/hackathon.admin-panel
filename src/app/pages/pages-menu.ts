import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Меню',
    group: true,
  },
  {
    title: 'Заявки',
    icon: 'archive-outline',
    link: '/pages/requests',
  },
  {
    title: 'На проверке',
    icon: 'edit-2-outline',
    link: '/pages/reviews',
  },
  {
    title: 'Профиль',
    icon: 'person-outline',
    link: '/pages/profile',
  },
];

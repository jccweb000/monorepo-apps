import { get } from '@/serve/fetch';

export enum SellStatus {
  'solid' = 'solid',
  'available' = 'available',
}

export interface ListItemWithStatus {
  id: number;
  name: string;
  status: SellStatus;
  tags: { name: string; id: number }[];
}

export const fetchListWithStatus = async <T = ListItemWithStatus[]>(
  status: SellStatus,
) => {
  try {
    const res = await get<T>('/m1/3211918-0-default/pet/findByStatus', {
      status,
    });
    return res;
  } catch (_) {}
};

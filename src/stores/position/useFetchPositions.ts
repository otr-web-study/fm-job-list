import { onMounted } from 'vue';
import { usePositionStore } from './position-store';
import data from '@/mock/data.json';
import type { JobPosition } from '@/types/JobPosition';

export const useFetchPositions = () => {
  const { addPositions } = usePositionStore();

  onMounted(() => {
    addPositions(data as JobPosition[]);
  });
};

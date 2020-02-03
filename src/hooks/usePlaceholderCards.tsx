import React, { useMemo } from 'react';
import LgtmCardPlaceholder from '../components/molecules/LgtmCardPlaceholder';

export default function usePlaceholderCards(numbers: number) {
  return useMemo(() => {
    return [...Array(numbers)].map((_, i) => <LgtmCardPlaceholder key={i} />);
  }, [numbers]);
}
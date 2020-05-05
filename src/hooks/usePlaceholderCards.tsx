import React, { useMemo } from 'react';
import LgtmCardPlaceholder from 'src/components/molecules/LgtmCardPlaceholder';

export const usePlaceholderCards = (numbers: number) => {
  return useMemo(() => {
    return [...Array(numbers)].map((_, i) => <LgtmCardPlaceholder key={i} />);
  }, [numbers]);
};

import { useQuery } from '@tanstack/react-query';
import { getVendorInfo } from '../services';
import { Vendor } from '../types';

export const useVendorInfo = () => {
  return useQuery<Vendor>({
    queryKey: ['vendor-info'],
    queryFn: getVendorInfo,
  });
}; 
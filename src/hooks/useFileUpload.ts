import { useMutation } from "@tanstack/react-query";
import { uploadFile, UploadFileResponse } from "@/services/upload-service";

export const useFileUpload = () => {
  const {
    mutate: uploadFileMutate,
    data,
    isPending,
    error,
  } = useMutation<UploadFileResponse, unknown, File>({
    mutationFn: uploadFile,
  });

  return {
    uploadFileMutate,
    data,
    isPending,
    error,
  };
}; 
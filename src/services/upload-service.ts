import axiosInstance from "./config";

export interface UploadFileResponse {
  url: string;
}

export const uploadFile = async (file: File): Promise<UploadFileResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axiosInstance.post<UploadFileResponse>(
    "files/upload",
    formData
  );
  return response.data;
};

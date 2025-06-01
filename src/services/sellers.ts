import api from "./config"

export interface Seller {
  id: string
  name: string
  email: string
  phone: string
  status: string
  createdAt: string
}

export const getSellers = async () => {
  const response = await api.get<Seller[]>("/sellers")
  return response.data
}

export const getSellerDetails = async (id: string) => {
  const response = await api.get<Seller>(`/sellers/${id}`)
  return response.data
} 
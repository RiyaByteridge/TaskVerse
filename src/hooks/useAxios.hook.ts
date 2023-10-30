import { useState, useEffect, useCallback } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "../services/axios-interceptor";

interface AxiosProps {
  url: string;
}
interface AxiosTypecheck {
  (apiType: string): string;
}

const types: AxiosTypecheck = function (apiType: string) {
  return apiType;
};

const useAxios = ({ url }: AxiosProps, apiType: AxiosTypecheck) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const newApi = apiType.toString();
  const apiCalls = useCallback(async () => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(false);
      if (newApi === "GET") {
        const response = await axiosClient.get(url);
        if (response.data) {
          setData(response.data);
          setSuccess(true);
        }
      } else if (newApi === "POST") {
        const response = await axiosClient.post(url, {
          title: "BMW Pencil",
          description:
            "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
          price: 30000000,
          discountPercentage: 2.92,
          rating: 4.92,
          stock: 54,
          brand: "Golden",
          category: "Sports Car",
        });
        if (response.data) {
          setData(response.data);
          setSuccess(true);
        }
      } else if (newApi === "PUT") {
        const response = await axiosClient.put(url, {
          title: "Update to Labo",
        });
        if (response.data) {
          setData(response.data);
        }
      } else if (newApi === "DELETE") {
        const response = await axiosClient.delete(url);
        if (response) {
          setData(response.data);
          setSuccess(true);
          setLoading(true);
        }
      }
    } catch (error) {
      const err = error as unknown as AxiosError;
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, newApi]);

  types("GET");
  useEffect(() => {
    apiCalls();
  }, [apiCalls]);

  return { data, isLoading, isSuccess, isError, errorMessage };
};
export default useAxios;

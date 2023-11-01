import { useState, useEffect, useCallback } from "react";
import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { axiosClient } from "../services/axios-interceptor";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface UseAxiosProps {
  url: string;
  method: HttpMethod;
  payload?: object;
  config?: AxiosRequestConfig;
}

const useAxios = ({ url, method, payload, config }: UseAxiosProps) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const axiosMethods: Record<
    HttpMethod,
    (
      url: string,
      payload?: object,
      config?: AxiosRequestConfig
    ) => Promise<AxiosResponse>
  > = {
    GET: axiosClient.get,
    POST: axiosClient.post,
    PUT: axiosClient.put,
    DELETE: axiosClient.delete,
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(false);
      setData(null);

      const response = await axiosMethods[method](url, payload, config);
      if (response.data) {
        setData(response.data);
        setSuccess(true);
      }
    } catch (error) {
      const err = error as unknown as AxiosError;

      setError(true);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    if (method === "GET") fetchData();
  }, [fetchData, method]);

  return { data, isSuccess, isLoading, isError, errorMessage, mutate:fetchData };
};

export default useAxios;

import { useState, useEffect, useCallback } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { axiosClient } from "../services/axios-interceptor";

interface UseAxiosProps {
  url: string;
}
const useAxiosGet = ({ url }: UseAxiosProps) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      setSuccess(false);
      setError(false);
      setLoading(true);
      const response = await axiosClient.get(url);
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
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isSuccess, isLoading, isError, errorMessage };
};

export default useAxiosGet;

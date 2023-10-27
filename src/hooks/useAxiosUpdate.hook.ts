import { useEffect, useCallback, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { axiosClient } from "../services/axios-interceptor";

interface AxiosProps {
  url: string;
}
const useAxiosUpdateHook = ({ url }: AxiosProps) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [isLoasing, setLoading] = useState(false);
  const [isSuccess, setSucess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateData = useCallback(async () => {
    try {
      setSucess(false);
      setError(false);
      const response = await axiosClient.put(url, {
        method: "PUT",

        title: "Update to Labo",
      });
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      const err = error as unknown as AxiosError;
      setErrorMessage(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    updateData();
  }, [updateData]);

  return { data, isError, isLoasing, isSuccess, errorMessage };
};
export default useAxiosUpdateHook;

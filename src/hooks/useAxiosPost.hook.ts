import { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect, useCallback } from "react";
import { axiosClient } from "../services/axios-interceptor";

interface UseAxiosProps {
  url: string;
}

const AxiosPost = ({ url }: UseAxiosProps) => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const postData = useCallback(async () => {
    try {
      setSuccess(false);
      setError(false);
      setLoading(true);
      const response = await axiosClient.post(url, {
        // method: "POST",
        title: "BMW Pencil",
        description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
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
    } catch (error) {
      const err = error as unknown as AxiosError;
      setErrorMessage(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    postData();
  }, [postData]);

  return { data, isLoading, isError, isSuccess, errorMessage };
};
export default AxiosPost;

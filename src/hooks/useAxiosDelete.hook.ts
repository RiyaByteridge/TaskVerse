import { useState, useCallback, useEffect } from "react";

import { axiosClient } from "../services/axios-interceptor";
import { AxiosError } from "axios";

interface AxiosProps {
  url: string;
}
const useAxiosDelete = ({ url }: AxiosProps) => {
  
  const [isError, setError] = useState(false);
  const [isLoading , setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false);
  const[data ,setData] = useState("")
  const [errorMessage ,setErrorMessage]=useState('');
 

  const deleteData = useCallback(async () => {
    try{
        setSuccess(false);
        setLoading(true);
        setError(false);
        const response = await axiosClient.delete(url);
        if(response){
           setData(response.data)
            setSuccess(true)
            setLoading(true)
        }
    }
    catch(error){
        const err = error as unknown as AxiosError ;
        setError(true);
        setErrorMessage(err.message)
    }
    finally{
        setLoading(false)
    }
  }, [url]);

  useEffect(() => {
    deleteData();
  }, [deleteData]);

  return {isLoading,data ,isError,isSuccess,errorMessage}
};
export default useAxiosDelete;

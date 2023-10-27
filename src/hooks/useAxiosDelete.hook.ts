import { useState, useCallback, useEffect } from "react";

import { axiosClient } from "../services/axios-interceptor";
import { AxiosError } from "axios";

interface AxiosProps {
  url: string;
}
const useAxiosDelete = ({ url }: AxiosProps) => {
  
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const [errorMessage ,setErrorMessage]=useState('');
 

  const deleteData = useCallback(async () => {
    try{
        setSuccess(false);
        setDeleted(false);
        const response = await axiosClient.delete(url);
        if(response){
            console.log("Deleted Sucessfully!!");
            setSuccess(true)
        }
    }
    catch(error){
        const err = error as unknown as AxiosError ;
        setError(true);
        setErrorMessage(err.message)
    }
    finally{
        setDeleted(false);
    }
  }, [url]);

  useEffect(() => {
    deleteData();
  }, []);

  return {isDeleted ,isError,isSuccess,errorMessage}
};
export default useAxiosDelete;

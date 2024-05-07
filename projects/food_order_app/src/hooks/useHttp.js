import {useCallback, useEffect, useState} from "react";

async function sendHttpRequest (url, configs) {
  const response = await fetch(url, configs);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong, failed to send request");
  }

  return resData;
}

export default function useHttp (url, configs, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async function sendRequest (data) {
    setIsLoading(true);

    try {
      const resData = await sendHttpRequest(url, {...configs, body: data});
      setData(resData);
    } catch (error) {
      setError(error.message || "Something is wrong!")
    }

    setIsLoading(false);
  }, [url, configs]);

  function clearData () {
    setData(initialData);
  }

  useEffect(() => {
    if (configs && (configs.method === "GET" || !configs.method) || !configs) {
      sendRequest();
    }
  }, [sendRequest, configs]);

  return {
    data,
    error,
    isLoading,
    sendRequest,
    clearData
  }
}
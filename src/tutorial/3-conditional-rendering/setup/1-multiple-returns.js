import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson1";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        setIsLoading(false);
        setUser(user.login);
      })
      .catch((error) => setIsError(true));
  }, []);

  if (isLoading) return <h2>loading ...</h2>;

  return <h2>{user}</h2>;
};

export default MultipleReturns;

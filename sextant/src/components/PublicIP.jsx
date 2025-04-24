import React, { useEffect, useState } from "react";

const PublicIP = () => {
  const [ip, setIP] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setIP(data.ip);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch IP address");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IP address...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <p>
      Your public IP address is: <strong>{ip}</strong>
    </p>
  );
};

export default PublicIP;

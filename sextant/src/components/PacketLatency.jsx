import React, { useEffect, useState } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rws = new ReconnectingWebSocket("ws://localhost:55455");

    rws.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
    });

    rws.addEventListener("message", (event) => {
      try {
        const packetTimestamp = Number(event.data);
        const currentTime = Date.now();
        const calculatedLatency = currentTime - packetTimestamp;

        setLatency(calculatedLatency);
      } catch (e) {
        console.error("Failed to process WebSocket message:", e);
      }
    });

    rws.addEventListener("error", (err) => {
      console.error("WebSocket error:", err);
      setError("WebSocket connection failed");
    });

    return () => {
      rws.close();
    };
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {latency !== null ? (
        <p>
          Current packet latency: <strong>{latency} ms</strong>
        </p>
      ) : (
        !error && <p>Waiting for latency data...</p>
      )}
    </div>
  );
};

export default PacketLatency;

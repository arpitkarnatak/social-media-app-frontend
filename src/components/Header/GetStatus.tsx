import React, { useEffect, useState } from "react";
import { api } from "../../config/api";
import { TextButton } from "../../styles/buttons";
import { Title20 } from "../../styles/typography";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast(
    "The backend takes a minute to reload for the first time. Reload this page in a minute.",
    {
      style: toastStyle,
      duration: 3000,
    }
  );

export default function GetStatus() {
  const [isBackendActive, setIsBackendActive] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("");
        setIsBackendActive(true);
      } catch (err) {
        console.error(
          "Backend server is inactive, click this button a few times."
        );
      }
    })();
  }, []);
  return (
    <TextButton
      style={{ width: "fit-content" }}
      disabled={isBackendActive}
      onClick={!isBackendActive ? notify : () => {}}
    >
      <Toaster />
      {isBackendActive ? (
        <Title20 color="green">Backend Active</Title20>
      ) : (
        <Title20 color="red">Start Backend</Title20>
      )}
    </TextButton>
  );
}

const toastStyle = {
  borderRadius: "1px",
  background: "var(--gray, #b8b8b8)",
  boxShadow:
    "-2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset, 2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset",
};

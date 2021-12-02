import { useState } from "react";

const useLock = () => {
  const [lockStatus, setLockStatus] = useState(false);

  const lock = () => {
    setLockStatus(true);
  };

  const unlock = () => {
    setLockStatus(false);
  };

  return {
    lockStatus,
    lock,
    unlock,
  };
};

export default useLock;

import { useState } from "react";
import Button from "../components/Button/Button";
import Image from "../components/Image/Image";
import Section from "../components/Section/Section";
import freezeForThreeSeconds from "../helpers/freezeForThreeSeconds";
import useLock from "../hooks/useLock";
import frogPicture from "./assets/absoluteUnit.jpg";

const ShowFrog = () => {
  const { lockStatus, lock, unlock } = useLock();
  const [frogToShow, setFrogToShow] = useState(null);

  const updateFrogData = () => {
    unlock();
    setFrogToShow(frogPicture);
  };

  const downloadFrog = () => {
    setFrogToShow(null);
    lock();
  };

  return (
    <Section>
      <Button
        onClick={() => freezeForThreeSeconds(downloadFrog, updateFrogData)}
        variant="primary"
        disabled={lockStatus}
      >
        Fake downloading Frogge
      </Button>
      {frogToShow ? (
        <Image src={frogToShow} alt="potenzna zaba" />
      ) : (
        lockStatus && <span>loading...</span>
      )}
    </Section>
  );
};

export default ShowFrog;

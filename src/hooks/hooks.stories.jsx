import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import freezeForThreeSeconds from "../helpers/freezeForThreeSeconds";
import useLock from "./useLock";

export default {
  title: "Hooks/Examples",
  component: {},
};

export const useLockHook = () => {
  const { lockStatus, lock, unlock } = useLock();
  return (
    <Section>
      <Button
        onClick={() => freezeForThreeSeconds(lock, unlock)}
        variant="primary"
        disabled={lockStatus}
      >
        Use lock show off
      </Button>
    </Section>
  );
};

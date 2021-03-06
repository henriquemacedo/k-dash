import { useEffect, useRef } from "react";
import { defineCustomElements } from "@duetds/date-picker/dist/loader";
import * as Styles from "./styles";

function useListener(ref, eventName, handler) {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    }
  }, [eventName, handler, ref]);
}

export default function DatePicker({
  onChange,
  onFocus,
  onBlur,
  onOpen,
  onClose,
  // dateAdapter,
  // localization,
  ...props
}) {
  const ref = useRef(null);

  if (typeof window !== "undefined") {
    defineCustomElements(window);
  }

  useListener(ref, "duetChange", onChange);
  useListener(ref, "duetFocus", onFocus);
  useListener(ref, "duetBlur", onBlur);
  useListener(ref, "duetOpen", onOpen);
  useListener(ref, "duetClose", onClose);

  // useEffect(() => {
  //   ref.current.localization = localization;
  //   ref.current.dateAdapter = dateAdapter;
  // }, [localization, dateAdapter]);

  return (
    <Styles.Wrapper>
      <duet-date-picker ref={ref} {...props}></duet-date-picker>
    </Styles.Wrapper>
  );
}

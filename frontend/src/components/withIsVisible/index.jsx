import { useIsVisible } from "../useIsVisible";
import { useEffect, useRef } from "react";

function withIsVisible(WrappedComponent) {
  return function WrappedComponentWitIsVisible() {
    const ref = useRef();
    let isVisible = useIsVisible(ref);

    useEffect(() => {}, [isVisible]);

    return (
      <WrappedComponent href={ref} isVisible={isVisible}></WrappedComponent>
    );
  };
}

export { withIsVisible };

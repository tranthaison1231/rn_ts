import { useEffect, useRef, useState } from 'react';

function useCallbackState(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<any>(null);

  const setCallbackState = (newState, cb) => {
    cbRef.current = cb;
    setState(newState);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setCallbackState];
}

export default useCallbackState;

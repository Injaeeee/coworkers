import { createContext, useCallback, useMemo, useState } from 'react';

import type { ModalRootProps } from '../ui/modal.root';

export type TModalContext = {
  isOpen: boolean;
  toggle: () => void;
};

export const ModalContext = createContext<TModalContext | undefined>(undefined);

export const useModalContextValue = ({
  open,
  onOpenChange,
}: ModalRootProps) => {
  const [defaultOpenState, setDefaultOpenState] = useState<boolean>(false);
  const isOpen = open ?? defaultOpenState;
  const handleToggle = useCallback(() => {
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    if (onOpenChange === undefined) {
      setDefaultOpenState((prev) => !prev);
      return;
    }
    onOpenChange((prev) => !prev);
  }, [isOpen, onOpenChange]);
  const value = useMemo(
    () => ({
      isOpen,
      toggle: handleToggle,
    }),
    [handleToggle, isOpen]
  );

  return value;
};
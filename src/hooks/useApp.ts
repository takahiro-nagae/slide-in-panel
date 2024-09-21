import { useState } from "react";

export const useApp = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const openPanel = () => {
      setIsPanelOpen(true);
    };
  
    const closePanel = () => {
      setIsPanelOpen(false);
    };

    return {
        openPanel,
        panel: {
            isOpen: isPanelOpen,
            onClose: closePanel,
        }
    };
};
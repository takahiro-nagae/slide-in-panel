import { useState } from "react";

export const useApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState('');

    const handleOpen = (url: string) => {
        setUrl(url);
        setIsOpen(true);
    };
  
    const handleClose = () => {
        setIsOpen(false);
        setUrl('');
    };

    return {
        handleOpen,
        isOpen,
        panel: {
            url,
            handleClose,
        }
    };
};
import { createContext, useContext} from 'react';

// Vimeo Link context
export const VimeoLinkContext = createContext();
export const useVimeoLink = () => useContext(VimeoLinkContext);

// Upload Statuscontext
export const UploadStatusContext = createContext();
export const useUploadStatus = () => useContext(UploadStatusContext);


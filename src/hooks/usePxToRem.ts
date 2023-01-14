import { useCallback } from "react"

const usePxToRem = () => {
    return useCallback((pixels: number) => 
        pixels / parseInt(getComputedStyle(document.documentElement).fontSize), 
        []
    );
}

export default usePxToRem;
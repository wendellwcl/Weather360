import { createContext, useState } from "react";

//Interfaces
import { IChildren } from "../interfaces/IChildren.interface";
import { ILoadingContext } from "../interfaces/ILoadingContext.interface";

const DEFAULT_VALUE: ILoadingContext = {
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
};

export const LoadingContext = createContext<ILoadingContext>(DEFAULT_VALUE);

const LoadingContextProvider = ({ children }: IChildren) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <LoadingContext.Provider value={{ loading, setLoading, error, setError }}>{children}</LoadingContext.Provider>
    );
};

export default LoadingContextProvider;

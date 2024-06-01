import { createContext, useState } from "react";

//Interfaces
import { IChildren } from "../interfaces/IChildren.interface";
import { ILoadingContext } from "../interfaces/ILoadingContext";

const DEFAULT_VALUE: ILoadingContext = {
    loading: true,
    setLoading: () => {},
};

export const LoadingContext = createContext<ILoadingContext>(DEFAULT_VALUE);

const LoadingContextProvider = ({ children }: IChildren) => {
    const [loading, setLoading] = useState<boolean>(true);

    return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
};

export default LoadingContextProvider;

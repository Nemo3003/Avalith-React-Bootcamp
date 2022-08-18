import { createContext } from "react";

interface ContextOk {
    context: string;
}

export const FetchHeroes = createContext<any>(null);

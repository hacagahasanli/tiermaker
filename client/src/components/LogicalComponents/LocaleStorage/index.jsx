import { BoardsContext } from "context/index";
import { useContext, useEffect } from "react";

export const LocaleStorage = ({ children }) => {
    const { boards } = useContext(BoardsContext)

    useEffect(() => {
        const beforeUnloadHandler = () => {
            localStorage.setItem('boards', JSON.stringify(boards));
        };

        window.addEventListener('beforeunload', beforeUnloadHandler);

        return () => {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        };
    }, [boards, window.location.href]);

    return <div>{children}</div>
}
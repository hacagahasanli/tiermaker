const useBoards = () => {
    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.classList.value.includes('item')) {
            e.target.style.boxShadow = "0px 1px 21px 7px rgba(0,0,0,0.75)"
        }
    };

    return { dragOverHandler }
}

export default useBoards
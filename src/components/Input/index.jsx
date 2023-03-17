const Input = ({ id, placeholder, func }) => {
    return <div>
        <label htmlFor={id}>Name of Template</label>
        <input type={"text"} placeholder={placeholder} ></input>
    </div>
}
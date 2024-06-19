/* eslint-disable react/prop-types */
const Card = ({TaskName, Content, onDelete,}) => {

    


    return (
    <>
        <div className="container">
        <div className="card">
            <div className="card-content">
            <h2>{TaskName}</h2> 
            <p>{Content}</p>

            <button className="btn_del" onClick={() => onDelete(TaskName.index)}>X</button>
            <p>Creado el: {new Date().toLocaleString()}</p>
            </div>
        </div>
        </div>
    </>

    )
}
export default Card
const Card = ({TaskName, Content}) => {

    return (
    <>
        <div>
            <h3>Name: {TaskName}</h3>
            <p>Desc: {Content}</p>
        </div>
    </>

    )
}
export default Card
import './EachTask.css'
const EachTask = (props) => {
  const DeleteHandler = ()=>{
    props.onDelete(props.id)
  }
    const Task = props.task
    return <div className="task" onClick={DeleteHandler}>
      <h1>{Task}</h1>
      </div>

};
export default EachTask;

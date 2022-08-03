import "./Task.css";

const Task = ({ image, label }) => {
  return (
      <div className="descricao">
        <img className="image" alt="description">{image} </img>
        <p className="label">{label}</p>
      </div>
  );
};

export default Task;
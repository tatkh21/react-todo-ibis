import PropTypes from 'prop-types';

const TodoList = ( {todoListData} ) => {
    return (
      <ul>
        {todoListData.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    );
  }
  //Prop types validation
TodoList.propTypes = {
    todoListData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export default TodoList;
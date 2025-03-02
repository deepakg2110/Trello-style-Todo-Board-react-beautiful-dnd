import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import AddTask from '../containers/AddTask';
import Task from '../containers/Task';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.taskListRef = React.createRef(); // Reference for the task list
  }

  scrollToBottom = () => {
    if (this.taskListRef.current) {
      this.taskListRef.current.scrollTo({
        top: this.taskListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.tasks.length > prevProps.tasks.length) {
      this.scrollToBottom(); // Scroll to the bottom when a task is added
    }
  }

  render() {
    const { list, tasks, provided, innerRef } = this.props;

    return (
      <div className="col-12 col-md-4 col-sm-6 mb-4" ref={innerRef} {...provided.draggableProps}>
        <div
          className="list-container border"
          style={{
            borderRadius: '8px',
            background: '#fff',
            overflow: 'hidden',
            borderColor: '#E5E7EB',
          }}
        >
          {/* Header */}
          <div
            className="header px-3 py-2 d-flex align-items-center justify-content-between"
            style={{
              background: '#c5cad3',
              borderBottom: '1px solid #E5E7EB',
            }}
          >
            <h6
              className="mb-0 text-uppercase fw-bold"
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.5px',
                color: '#374151',
              }}
            >
              {list.title}
            </h6>
            <div className="d-flex align-items-center gap-2">
              <span
                className="task-count fw-medium"
                style={{
                  fontSize: '0.8rem',
                  color: '#6B7280', 
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '2px 8px',
                  display: 'inline-block',
                }}
              >
                {tasks.length}
              </span>
              
            </div>
          </div>

          {/* Task List */}
          <div
            ref={this.taskListRef} // Ref added here
            className="task-list p-2"
            style={{
              minHeight: '200px',
              maxHeight: '350px',
              overflowY: 'auto',
              background: '#fff',
            }}
          >
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(dragProvided, snapshot) => (
                    <div
                      className="task-item mb-1"
                      style={{
                        transition: 'background 0.2s ease',
                        background: snapshot.isDragging ? '#F3F4F6' : 'transparent',
                        borderRadius: '4px',
                        padding: '2px',
                      }}
                    >
                      <Task
                        list={list}
                        task={task}
                        innerRef={dragProvided.innerRef}
                        provided={dragProvided}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <div
                className="empty-state text-center py-4"
                style={{ color: '#9CA3AF' }}
              >
                <svg
                  className="mb-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 4v16M4 12h16" />
                </svg>
                <p
                  className="mb-0"
                  style={{ fontSize: '0.9rem', fontWeight: '300' }}
                >
                  {list.id === 'pending'
                    ? 'Start by adding a task'
                    : 'Nothing here yet'}
                </p>
              </div>
            )}
            {provided?.placeholder && (
              <div
                className="drop-area mt-1"
                style={{
                  border: '1px dashed #D1D5DB',
                  borderRadius: '4px',
                  padding: '8px',
                  textAlign: 'center',
                  color: '#9CA3AF',
                  fontSize: '0.85rem',
                  background: '#F9FAFB',
                }}
              >
                Drop tasks here
              </div>
            )}
          </div>

          {/* Footer */}
          {list.id === 'pending' && (
            <div
              className="footer px-2 pb-2"
              style={{ background: '#fff' }}
            >
              <AddTask />
            </div>
          )}
        </div>
      </div>
    );
  }
}

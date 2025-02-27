import React from 'react';
import KanbanLists from '../containers/KanbanLists';
import { RotatingTriangles } from "react-loader-spinner";

export default class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    document.body.classList.add("bg-light");
    // Simulate an API loading delay
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="container-fluid p-0">
        {/* Header */}
        <header className="sticky-header text-light py-3 shadow-sm">
          <div className="container">
            <h1 className="m-0 text-center font-weight-bold">Trello-style Todo Board</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow-1 container-fluid  p-4">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
              <div className="text-center">
                <RotatingTriangles
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="rotating-triangles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                <p className="mt-3 text-muted">Loading your board...</p>
              </div>
            </div>
          ) : (
            <KanbanLists />
          )}
        </main>
                {/* Footer */}
                <footer className="footer mt-auto bg-light text-center py-2 shadow-sm border-top">
          <div className="container">
            <p className="mb-0 text-muted small">
              © 2025 | Built with ❤️ by Deepak Gupta
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
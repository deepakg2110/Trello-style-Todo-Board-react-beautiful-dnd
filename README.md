# Trello-style Todo Board

**Demo**: 🖥️ [Trello-style Todo Board](https://deepakg2110.github.io/Trello-style-Todo-Board-react-beautiful-dnd)
## 📝 Overview
This project is a simple Trello-style Todo board that allows users to manage tasks visually. The main features include:
- 🟢 **Fetching tasks** from an external API.
- 🟠 **Creating, updating, deleting, and editing tasks.**
- 🔵 **Drag-and-drop functionality** to move tasks between lanes and update their status.

The project leverages **React** with **Redux** for state management and **react-beautiful-dnd** for drag-and-drop interactions.

---
## 🚀 How to Run the Project Locally

### Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).
2. Install a package manager like `npm` or `yarn`.

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Trello-style-Todo-Board
2. **Install dependencies**:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
4. View the application: Open your browser and navigate to http://localhost:3000.

## 🛠️ Approach Taken

### 🏗️ Architecture

#### State Management:
- **Redux**: Used for centralized state management, ensuring predictable updates to tasks and their statuses across lanes.

#### Drag-and-Drop:
- Implemented using **react-beautiful-dnd** for smooth and intuitive task movement between lanes.

#### API Integration:
- Leveraged the **DummyJSON Todos API** to fetch, update, and synchronize tasks.

### 📦 Components

1. **KanbanLists**:
   - Renders all lanes (Pending, In Progress, Done).
   - Manages drag-and-drop logic.

2. **List**:
   - Represents a single lane and displays its tasks.

3. **Task**:
   - Displays individual task details.
   - Supports potential inline editing.

### 🔄 Data Flow

1. **Initialization**:
   - Fetches tasks from the API and sets them in the Redux store under the "Pending" lane.

2. **State Updates**:
   - **Drag-and-Drop**: Updates the task's location and status in the Redux store.
   - **Task Operations**: Handles adding, editing, or deleting tasks via Redux actions.

3. **UI Updates**:
   - Uses React's reconciliation and Redux's granular state updates to re-render only necessary components.

## 🤔 Trade-offs and Improvements

### Trade-offs

1. **API Limitation**:
   - The DummyJSON API does not directly support moving tasks between statuses. This logic is handled client-side.

2. **Simplistic UI**:
   - Focused on functionality over polish due to time constraints.

### Improvements

1. **Backend Synchronization**:
   - Extend the project to fully sync task status updates with the API for persistent state.

2. **Error Handling**:
   - Implement robust error handling for API calls and drag-and-drop actions.

3. **Performance**:
   - Optimize drag-and-drop with virtualization libraries like **react-window** for large datasets.

4. **Advanced Features**:
   - Add task priority, due dates, or labels for richer functionality.

5. **Testing**:
   - Add unit and integration tests using **Jest** and **React Testing Library**.

## 🌐 Hosting

The application is hosted using **GitHub Pages**.

**Access it here**: [Trello-style Todo Board](https://deepakg2110.github.io/Trello-style-Todo-Board-react-beautiful-dnd)

## ⚠️ Known Limitations

1. Tasks are always added to the "Pending" lane by default since the API doesn’t support creating tasks in specific lanes.
2. Drag-and-drop performance may degrade with a large number of tasks due to the absence of virtualization.

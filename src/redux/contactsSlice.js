import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./contactsOps";
import { selectFilters } from "./filtersSlice";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});
export const selectContacts = (state) => state.contacts.items;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterName) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterName.toLowerCase());
    });
  }
);

export default contactsSlice.reducer;
// Selectors

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

/*----------------------------------------




export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log('Calculating visible tasks');

    switch (statusFilter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log('Calculating task count');

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
}); */

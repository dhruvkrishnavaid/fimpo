export const user: any = null;

export const initialState = {
  tasks: [
    {
      title: "Welcome to Fimpo",
      description: "Thanks for choosing us. This is your first task.",
      date: new Date().toDateString(),
      completed: false,
    },
    {
      title: "Add a task",
      description: "Click the bottom button to add a task.",
      date: new Date().toDateString(),
      completed: false,
    },
    {
      title: "Mark as completed/removed",
      description:
        "Use the checkmark to mark a task as completed. Use the cross to remove a task.",
      date: new Date().toDateString(),
      completed: false,
    },
  ],
  showToast: false,
  toastMessage: "Please enter a title!",
};

export const initialMatrixState = {
  UrgentAndImportant: [],
  UrgentButNotImportant: [],
  NotUrgentButImportant: [],
  NotUrgentAndNotImportant: [],
  showToast: false,
  toastMessage: "Please enter a title!",
};

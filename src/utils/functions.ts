export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "setUser": {
      return { ...state, user: action.user };
    }
    case "setTasks": {
      return { ...state, tasks: action.tasks };
    }
    case "setShowToast": {
      return { ...state, showToast: action.showToast };
    }
    case "setUrgentAndImportant": {
      return { ...state, UrgentAndImportant: action.list };
    }
    case "setUrgentButNotImportant": {
      return { ...state, UrgentButNotImportant: action.list };
    }
    case "setNotUrgentButImportant": {
      return { ...state, NotUrgentButImportant: action.list };
    }
    case "setNotUrgentAndNotImportant": {
      return { ...state, NotUrgentAndNotImportant: action.list };
    }
  }
  return state;
};

const logger = (reducer: any) => {
  const reducerWithLogger = (state: any, action: any) => {
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state,
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      reducer(state, action),
    );
    return reducer(state, action);
  };
  return reducerWithLogger;
};

export const loggerReducer = logger(reducer);

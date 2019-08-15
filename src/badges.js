function makeDynamic(state, item) {
  if (state.refresh) {
    return {refresh: state.refresh, ...item};
  } else {
    return item;
  }
}

export function NoBadge(state) {
  const no_badge = {
    text: "No Pomodoro Active",
    color: "yellow"
  };

  return makeDynamic(state, no_badge);
}

export function StatusBadge(state) {
  const status_badge = {
    text: `Pomodoro Active: ${state.timeStr()}`,
    color: "green"
  };

  return makeDynamic(state, status_badge);
}

export function BreakBadge(state) {
  const break_badge = {
    text: `Resting: ${state.timeStr()}`,
    color: "blue"
  };

  return makeDynamic(state, break_badge);
}


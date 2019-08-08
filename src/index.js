import { Start, Break, End } from "./update.js"
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js"

function Menu(t, opts) {
  t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Plain 25/5",
        callback: Start,
      }
    ]
  });
}

window.TrelloPowerUp.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        text: "Pomorello",
        callback: Menu
      }
    ];
  },
  "card-badges": async (t, opts) => {
    return [
      {
        dynamic: async () => {
          const is_active = await t.get("card", "private", "POMORELLO_ACTIVE", false);
          const is_break = await t.get("card", "private", "POMORELLO_BREAK", false);
          const start_ms = await t.get("card", "private", "POMORELLO_START", 0);
          const age_ms = Date.now() - start_ms;

          if (is_active) {
            if (age_ms > 1000*60*25) {
              await Break(t);
              return BreakBadge(age_ms, true);
            } else {
              return StatusBadge(age_ms, true);
            }
          } else if (is_break) {
            return BreakBadge(age_ms, true);
          } else {
            return NoBadge(true);
          }
        }
      }
    ];
  }
});

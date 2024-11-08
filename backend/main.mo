import Int "mo:base/Int";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  type Rule = {
    category: Text;
    rules: [Text];
  };

  stable var flagFootballRules : [Rule] = [
    {
      category = "General";
      rules = [
        "The game is played between two teams of 5-8 players each.",
        "The field is typically 60-80 yards long and 20-30 yards wide.",
        "Each game consists of two 20-minute halves with a 5-minute halftime break.",
        "The objective is to score more points than the opposing team by advancing the ball into the end zone."
      ];
    },
    {
      category = "Gameplay";
      rules = [
        "The game starts with a coin toss to determine which team starts with possession.",
        "Teams have 4 downs to advance the ball 10 yards for a first down.",
        "If a team fails to gain 10 yards in 4 downs, possession is turned over to the other team.",
        "Touchdowns are worth 6 points, and teams can attempt a 1-point or 2-point conversion afterward.",
        "After a touchdown, the scoring team kicks off to the other team."
      ];
    },
    {
      category = "Flag Rules";
      rules = [
        "Players wear flags attached to a belt around their waist.",
        "Defenders must pull the ball carrier's flag to stop their progress.",
        "The play is dead when the ball carrier's flag is pulled, they step out of bounds, or their knee touches the ground.",
        "Flag guarding (using hands or arms to prevent the defender from pulling the flag) is not allowed."
      ];
    },
    {
      category = "Passing";
      rules = [
        "The quarterback has 7 seconds to throw the ball or hand it off.",
        "All players are eligible receivers.",
        "The ball can only be passed forward once per play, and it must be from behind the line of scrimmage.",
        "Interceptions change the possession of the ball."
      ];
    },
    {
      category = "Rushing and Blocking";
      rules = [
        "Defenders must be 7 yards from the line of scrimmage before rushing the quarterback.",
        "Offensive players cannot block defenders.",
        "Screen blocking (standing still with arms at sides) is allowed.",
        "No tackling or physical contact is allowed."
      ];
    },
    {
      category = "Penalties";
      rules = [
        "Offside: 5-yard penalty",
        "Pass Interference: 10-yard penalty and automatic first down",
        "Illegal Contact: 10-yard penalty and automatic first down",
        "Flag Guarding: 10-yard penalty from the spot of the foul",
        "Delay of Game: 5-yard penalty"
      ];
    }
  ];

  public query func getRules() : async [Rule] {
    flagFootballRules
  };
}

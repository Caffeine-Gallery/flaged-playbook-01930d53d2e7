import Int "mo:base/Int";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Random "mo:base/Random";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";

actor {
  type Rule = {
    category: Text;
    rules: [Text];
    icon: Text;
  };

  type QuizQuestion = {
    question: Text;
    options: [Text];
    correctAnswer: Nat;
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
      icon = "🏈";
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
      icon = "🏃";
    },
    {
      category = "Flag Rules";
      rules = [
        "Players wear flags attached to a belt around their waist.",
        "Defenders must pull the ball carrier's flag to stop their progress.",
        "The play is dead when the ball carrier's flag is pulled, they step out of bounds, or their knee touches the ground.",
        "Flag guarding (using hands or arms to prevent the defender from pulling the flag) is not allowed."
      ];
      icon = "🚩";
    },
    {
      category = "Passing";
      rules = [
        "The quarterback has 7 seconds to throw the ball or hand it off.",
        "All players are eligible receivers.",
        "The ball can only be passed forward once per play, and it must be from behind the line of scrimmage.",
        "Interceptions change the possession of the ball."
      ];
      icon = "🎯";
    },
    {
      category = "Rushing and Blocking";
      rules = [
        "Defenders must be 7 yards from the line of scrimmage before rushing the quarterback.",
        "Offensive players cannot block defenders.",
        "Screen blocking (standing still with arms at sides) is allowed.",
        "No tackling or physical contact is allowed."
      ];
      icon = "🛡️";
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
      icon = "🚫";
    }
  ];

  let quizQuestions : [QuizQuestion] = [
    {
      question = "How many players are typically on each team in flag football?";
      options = ["3-5", "5-8", "9-11", "12-15"];
      correctAnswer = 1;
    },
    {
      question = "How many points is a touchdown worth?";
      options = ["3", "4", "5", "6"];
      correctAnswer = 3;
    },
    {
      question = "What happens when a defender pulls the ball carrier's flag?";
      options = ["The play continues", "The play is dead", "A penalty is called", "The ball is turned over"];
      correctAnswer = 1;
    },
    {
      question = "How many seconds does the quarterback have to throw the ball or hand it off?";
      options = ["5", "7", "10", "15"];
      correctAnswer = 1;
    },
    {
      question = "What is not allowed in flag football?";
      options = ["Passing", "Running", "Tackling", "Catching"];
      correctAnswer = 2;
    }
  ];

  public query func getRules() : async [Rule] {
    flagFootballRules
  };

  public query func getQuizQuestions() : async [QuizQuestion] {
    quizQuestions
  };

  public func getRandomFunFact() : async Text {
    let funFacts = [
      "Flag football was invented in the 1940s as a safer alternative to tackle football.",
      "The NFL has its own official flag football league called NFL FLAG.",
      "Flag football is played in over 70 countries worldwide.",
      "Some professional football players started their careers playing flag football.",
      "Flag football is being considered as a potential Olympic sport for future games."
    ];
    let seed = await Random.blob();
    let randomGenerator = Random.Finite(seed);
    let randomIndexOpt = randomGenerator.range(Nat8.fromNat(funFacts.size()));
    switch (randomIndexOpt) {
        case (null) { "Sorry, couldn't generate a random fact right now." };
        case (?randomIndex) {
            funFacts[randomIndex]
        };
    }
  };
}

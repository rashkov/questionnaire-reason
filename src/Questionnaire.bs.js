'use strict';

var React = require("react");

var questions_000 = {
  text: "What is your best language?",
  inputType: /* Text */1,
  validators: undefined,
  furtherQuestions: undefined
};

var questions_001 = /* :: */[
  {
    text: "When did you last enter the US?",
    inputType: /* Date */2,
    validators: /* :: */[
      (function (inputValue) {
          return inputValue.length > 0;
        }),
      /* [] */0
    ],
    furtherQuestions: /* :: */[
      {
        text: "If before Jan. 1, 1972 \xe2\x80\x93 eligible for registry?",
        inputType: /* Bool */0,
        validators: undefined,
        furtherQuestions: undefined
      },
      /* [] */0
    ]
  },
  /* :: */[
    {
      text: "what is your name?",
      inputType: /* Text */1,
      validators: undefined,
      furtherQuestions: undefined
    },
    /* [] */0
  ]
];

var questions = /* :: */[
  questions_000,
  questions_001
];

function Questionnaire(Props) {
  return React.createElement("div", undefined, "HI");
}

var make = Questionnaire;

exports.questions = questions;
exports.make = make;
/* react Not a pure module */

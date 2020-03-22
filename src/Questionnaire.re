type inputType =
  | Bool
  | Text
  | Date;

type question = {
  text: string,
  inputType,
  validators: option(list(string => bool)),
  furtherQuestions: option(list(question)),
};

let questions = [
  {
    text: "What is your best language?",
    inputType: Text,
    validators: None,
    furtherQuestions: None,
  },
  {
    text: "When did you last enter the US?",
    inputType: Date,
    validators:
      Some([
        inputValue => {
          inputValue->Js.String.length > 0;
        },
      ]),
    furtherQuestions:
      Some([
        {
          text: "If before Jan. 1, 1972 – eligible for registry?",
          inputType: Bool,
          validators: None,
          furtherQuestions: None,
        },
      ]),
  },
  {text: "what is your name?", inputType: Text, validators: None, furtherQuestions: None},
];

[@react.component]
let make = () => {
  <div> "HI"->ReasonReact.string </div>;
};

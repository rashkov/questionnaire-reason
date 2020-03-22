module RR = React;

type inputType =
  | Bool
  | Text
  | Date;

type question = {
  text: string,
  inputType,
  /* validators: option(list(string => bool)), */
  /* furtherQuestions: option(list(question)), */
};

let makeQuestion = (~text, ~inputType) => {
  {text, inputType};
};

let makeInput = (question: question) => {
  let (value, setValue) = RR.useState(() => None);
  let el =
    <div>
      <label> question.text->RR.string </label>
      <input
        onChange={e => {
          let value = e->ReactEvent.Form.currentTarget##value;
          setValue(_ => Some(value));
        }}
        value={value->Belt.Option.getWithDefault("")}
        type_="text"
      />
    </div>;
  (el, value);
};

let questionsText = [
  "1. What is your best language?",
  "2. Do you speak any other languages?",
  "3. Do you need an interpreter? Y/N",
  "4. What is your full legal name?",
  "5. What name do you prefer that people use with you? ",
  "6. What is your address?",
  "7. What is the best way to reach you?",
  "    a. What is your phone number?",
  "        i. Safe to call?",
  "        ii. Prefer text or call?",
  "    b. What is your email address?",
  "    c. Do you regularly check your e-mail?",
  "8. Where were you born (city/country)?",
  "9. What is your DOB?",
  "10. Are you in possession of your birth certificate?",
  "11. Do you have a current/valid passport?",
  "12. When did you last enter the US?",
  "    a. If before Jan. 1, 1972 - eligible for registry?",
  "13. How did you enter?",
  "14. Had you ever been to the US before?",
  "    a. When / entry / how long?",
  "15. Have you ever been caught at the border by immigration officials?",
  "16. Have you ever been before an immigration judge?",
  "17. Current immigration status?",
  "18. A number, if any?",
  "19. SSN, if any?",
  "    a. Is your SS card restricted by work authorization?",
  "20. Marital status? (single / married / unmarried partner / divorced /,
separated / other)",
  "    a. If married / divorced / separated - what is your spouse’s immigration,
status?",
  "    b. If divorced, how long divorced?",
  "21. How many people live with you?",
  "    a. Who?",
  "22. What is your income?",
  "23. Who do you live with? ",
  "24. How do you support yourself? ",
  "    a. What is your annual income?",
  "    b. Source of income?",
  "25. Household income? (household as defined by HRA/IRS)",
  "    a. [For staff: calculate - is this income below 125% of the FPL?]",
  "26. Any family members in the United States?",
  "27. What is your mother’s name? Living/deceased? Where does she live?,
Immigration status?",
  "28. Father’s name? Living/deceased? Where does he live? Immigration status?",
  "29. Were your parents married when you were born? ",
  "30.  Any other family members (parents, grandparents, spouse, siblings,,
children) who have US citizenship or permanent residence?",
  "31. Do you have any children?",
  "    a. List names, DOBs, immigration status of children",
  "32. What is your gender? ",
  "    a. What pronouns do you use?",
  "33. Do you use any social media accounts? Which ones?",
  "    a. [Advise that we will screen for public posts that DHS might find issue,
with]",
  "34. Do you belong to any religion? What? ",
  "    a. How active are you? Are you a member of a church/synagogue/temple/faith,
community?",
  "    b. Do you give money to them? ",
  "35. Do you, or have you in the past, been a member of a political party?",
  "    a. Which one(s)?",
  "    b. Were you politically active? How so? ",
  "36. Physical health:",
  "    a. Do you have any chronic diseases or health conditions?",
  "    b. Are you being treated for any medical conditions right now? ",
  "    c. Do you take any prescription medication? ",
  "    d. Have you ever been hospitalized? For what? ",
  "    e. Have you ever had to have any surgery? ",
  "    f. Have you ever been hurt injured by another person? By who? Did you have,
to receive medical treatment? ",
  "37. Mental health",
  "    a. Have you ever seen a therapist or psychiatrist?",
  "    b. Have you ever been diagnosed with a mental health condition - anxiety,,
depression, schizophrenia, bipolar, borderline personality, or anything else? ",
  "        i. If yes, when? ",
  "        ii. Did you receive treatment? What kind? ",
];

[@react.component]
let make = () => {
  let (questionComponents, questionValues) =
    questionsText
    ->Belt.List.map(qtext => makeQuestion(~text=qtext, ~inputType=Text))
    ->Belt.List.map(makeInput)
    ->Belt.List.toArray
    ->Belt.Array.unzip;
  <>
    <div> questionComponents->RR.array </div>
    <button onClick={_ => Js.log(questionValues)}> "print"->RR.string </button>
  </>;
};

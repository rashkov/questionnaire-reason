module RR = React;

type inputType =
  | Bool
  | Text
  | Date;

let inputTypeToHtmlStr =
  fun
  | Bool => "checkbox"
  | Text => "text"
  | Date => "date";

type question = {
  text: string,
  inputType,
  /* validators: option(list(string => bool)), */
  /* furtherQuestions: option(list(question)), */
};

let makeQuestion = (text, ~inputType=Text, ()) => {
  {text, inputType};
};

let makeInput = (question: question) => {
  let (value, setValue) = RR.useState(() => None);
  let el =
    <div>
      <label> question.text->RR.string </label>
      <input
        className="input"
        onChange={e => {
          let value = e->ReactEvent.Form.currentTarget##value;
          setValue(_ => Some(value));
        }}
        value={value->Belt.Option.getWithDefault("")}
        type_={question.inputType->inputTypeToHtmlStr}
      />
    </div>;
  (el, value);
};

let generalIntakeQuestions = [
  "1. What is your best language?"->makeQuestion(),
  "2. Do you speak any other languages?"->makeQuestion(),
  "3. Do you need an interpreter? Y/N"->makeQuestion(~inputType=Bool, ()),
  "4. What is your full legal name?"->makeQuestion(),
  "5. What name do you prefer that people use with you? "->makeQuestion(),
  "6. What is your address?"->makeQuestion(),
  "7. What is the best way to reach you?"->makeQuestion(),
  "    a. What is your phone number?"->makeQuestion(),
  "        i. Safe to call?"->makeQuestion(),
  "        ii. Prefer text or call?"->makeQuestion(),
  "    b. What is your email address?"->makeQuestion(),
  "    c. Do you regularly check your e-mail?"->makeQuestion(),
  "8. Where were you born (city/country)?"->makeQuestion(),
  "9. What is your DOB?"->makeQuestion(),
  "10. Are you in possession of your birth certificate?"->makeQuestion(),
  "11. Do you have a current/valid passport?"->makeQuestion(),
  "12. When did you last enter the US?"->makeQuestion(),
  "    a. If before Jan. 1, 1972 - eligible for registry?"->makeQuestion(),
  "13. How did you enter?"->makeQuestion(),
  "14. Had you ever been to the US before?"->makeQuestion(),
  "    a. When / entry / how long?"->makeQuestion(),
  "15. Have you ever been caught at the border by immigration officials?"->makeQuestion(),
  "16. Have you ever been before an immigration judge?"->makeQuestion(),
  "17. Current immigration status?"->makeQuestion(),
  "18. A number, if any?"->makeQuestion(),
  "19. SSN, if any?"->makeQuestion(),
  "    a. Is your SS card restricted by work authorization?"->makeQuestion(),
  "20. Marital status? (single / married / unmarried partner / divorced /->makeQuestion(()),
separated / other)"
  ->makeQuestion(),
  "    a. If married / divorced / separated - what is your spouse’s immigration->makeQuestion(()),
status?"
  ->makeQuestion(),
  "    b. If divorced, how long divorced?"->makeQuestion(),
  "21. How many people live with you?"->makeQuestion(),
  "    a. Who?"->makeQuestion(),
  "22. What is your income?"->makeQuestion(),
  "23. Who do you live with? "->makeQuestion(),
  "24. How do you support yourself? "->makeQuestion(),
  "    a. What is your annual income?"->makeQuestion(),
  "    b. Source of income?"->makeQuestion(),
  "25. Household income? (household as defined by HRA/IRS)"->makeQuestion(),
  "    a. [For staff: calculate - is this income below 125% of the FPL?]"->makeQuestion(),
  "26. Any family members in the United States?"->makeQuestion(),
  "27. What is your mother’s name? Living/deceased? Where does she live?->makeQuestion(()),
Immigration status?"
  ->makeQuestion(),
  "28. Father’s name? Living/deceased? Where does he live? Immigration status?"->makeQuestion(),
  "29. Were your parents married when you were born? "->makeQuestion(),
  "30.  Any other family members (parents, grandparents, spouse, siblings,->makeQuestion(()),
children) who have US citizenship or permanent residence?"
  ->makeQuestion(),
  "31. Do you have any children?"->makeQuestion(),
  "    a. List names, DOBs, immigration status of children"->makeQuestion(),
  "32. What is your gender? "->makeQuestion(),
  "    a. What pronouns do you use?"->makeQuestion(),
  "33. Do you use any social media accounts? Which ones?"->makeQuestion(),
  "    a. [Advise that we will screen for public posts that DHS might find issue->makeQuestion(()),
with]"
  ->makeQuestion(),
  "34. Do you belong to any religion? What? "->makeQuestion(),
  "    a. How active are you? Are you a member of a church/synagogue/temple/faith->makeQuestion(()),
community?"
  ->makeQuestion(),
  "    b. Do you give money to them? "->makeQuestion(),
  "35. Do you, or have you in the past, been a member of a political party?"->makeQuestion(),
  "    a. Which one(s)?"->makeQuestion(),
  "    b. Were you politically active? How so? "->makeQuestion(),
  "36. Physical health:"->makeQuestion(),
  "    a. Do you have any chronic diseases or health conditions?"->makeQuestion(),
  "    b. Are you being treated for any medical conditions right now? "->makeQuestion(),
  "    c. Do you take any prescription medication? "->makeQuestion(),
  "    d. Have you ever been hospitalized? For what? "->makeQuestion(),
  "    e. Have you ever had to have any surgery? "->makeQuestion(),
  "    f. Have you ever been hurt injured by another person? By who? Did you have->makeQuestion(()),
to receive medical treatment? "
  ->makeQuestion(),
  "37. Mental health"->makeQuestion(),
  "    a. Have you ever seen a therapist or psychiatrist?"->makeQuestion(),
  "    b. Have you ever been diagnosed with a mental health condition - anxiety,->makeQuestion(()),
depression, schizophrenia, bipolar, borderline personality, or anything else? "
  ->makeQuestion(),
  "        i. If yes, when? "->makeQuestion(),
  "        ii. Did you receive treatment? What kind? "->makeQuestion(),
];

[@react.component]
let make = () => {
  let (questionComponents, questionValues) =
    generalIntakeQuestions->Belt.List.map(makeInput)->Belt.List.toArray->Belt.Array.unzip;
  <>
    <div> questionComponents->RR.array </div>
    <button onClick={_ => Js.log(questionValues)}> "print"->RR.string </button>
  </>;
};

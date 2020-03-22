'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function inputTypeToHtmlStr(param) {
  switch (param) {
    case /* Bool */0 :
        return "checkbox";
    case /* Text */1 :
        return "text";
    case /* Date */2 :
        return "date";
    
  }
}

function makeQuestion(text, inputTypeOpt, param) {
  var inputType = inputTypeOpt !== undefined ? inputTypeOpt : /* Text */1;
  return {
          text: text,
          inputType: inputType
        };
}

function makeInput(question) {
  var match = React.useState((function () {
          return ;
        }));
  var setValue = match[1];
  var value = match[0];
  var el = React.createElement("div", undefined, React.createElement("label", undefined, question.text), React.createElement("input", {
            className: "input",
            type: inputTypeToHtmlStr(question.inputType),
            value: Belt_Option.getWithDefault(value, ""),
            onChange: (function (e) {
                var value = e.currentTarget.value;
                return Curry._1(setValue, (function (param) {
                              return value;
                            }));
              })
          }));
  return /* tuple */[
          el,
          value
        ];
}

var inputType = /* Text */1;

var inputType$1 = /* Text */1;

var inputType$2 = /* Bool */0;

var inputType$3 = /* Text */1;

var inputType$4 = /* Text */1;

var inputType$5 = /* Text */1;

var inputType$6 = /* Text */1;

var inputType$7 = /* Text */1;

var inputType$8 = /* Text */1;

var inputType$9 = /* Text */1;

var inputType$10 = /* Text */1;

var inputType$11 = /* Text */1;

var inputType$12 = /* Text */1;

var inputType$13 = /* Text */1;

var inputType$14 = /* Text */1;

var inputType$15 = /* Text */1;

var inputType$16 = /* Text */1;

var inputType$17 = /* Text */1;

var inputType$18 = /* Text */1;

var inputType$19 = /* Text */1;

var inputType$20 = /* Text */1;

var inputType$21 = /* Text */1;

var inputType$22 = /* Text */1;

var inputType$23 = /* Text */1;

var inputType$24 = /* Text */1;

var inputType$25 = /* Text */1;

var inputType$26 = /* Text */1;

var inputType$27 = /* Text */1;

var inputType$28 = /* Text */1;

var inputType$29 = /* Text */1;

var inputType$30 = /* Text */1;

var inputType$31 = /* Text */1;

var inputType$32 = /* Text */1;

var inputType$33 = /* Text */1;

var inputType$34 = /* Text */1;

var inputType$35 = /* Text */1;

var inputType$36 = /* Text */1;

var inputType$37 = /* Text */1;

var inputType$38 = /* Text */1;

var inputType$39 = /* Text */1;

var inputType$40 = /* Text */1;

var inputType$41 = /* Text */1;

var inputType$42 = /* Text */1;

var inputType$43 = /* Text */1;

var inputType$44 = /* Text */1;

var inputType$45 = /* Text */1;

var inputType$46 = /* Text */1;

var inputType$47 = /* Text */1;

var inputType$48 = /* Text */1;

var inputType$49 = /* Text */1;

var inputType$50 = /* Text */1;

var inputType$51 = /* Text */1;

var inputType$52 = /* Text */1;

var inputType$53 = /* Text */1;

var inputType$54 = /* Text */1;

var inputType$55 = /* Text */1;

var inputType$56 = /* Text */1;

var inputType$57 = /* Text */1;

var inputType$58 = /* Text */1;

var inputType$59 = /* Text */1;

var inputType$60 = /* Text */1;

var inputType$61 = /* Text */1;

var inputType$62 = /* Text */1;

var inputType$63 = /* Text */1;

var inputType$64 = /* Text */1;

var inputType$65 = /* Text */1;

var inputType$66 = /* Text */1;

var inputType$67 = /* Text */1;

var generalIntakeQuestions_000 = {
  text: "1. What is your best language?",
  inputType: inputType
};

var generalIntakeQuestions_001 = /* :: */[
  {
    text: "2. Do you speak any other languages?",
    inputType: inputType$1
  },
  /* :: */[
    {
      text: "3. Do you need an interpreter? Y/N",
      inputType: inputType$2
    },
    /* :: */[
      {
        text: "4. What is your full legal name?",
        inputType: inputType$3
      },
      /* :: */[
        {
          text: "5. What name do you prefer that people use with you? ",
          inputType: inputType$4
        },
        /* :: */[
          {
            text: "6. What is your address?",
            inputType: inputType$5
          },
          /* :: */[
            {
              text: "7. What is the best way to reach you?",
              inputType: inputType$6
            },
            /* :: */[
              {
                text: "    a. What is your phone number?",
                inputType: inputType$7
              },
              /* :: */[
                {
                  text: "        i. Safe to call?",
                  inputType: inputType$8
                },
                /* :: */[
                  {
                    text: "        ii. Prefer text or call?",
                    inputType: inputType$9
                  },
                  /* :: */[
                    {
                      text: "    b. What is your email address?",
                      inputType: inputType$10
                    },
                    /* :: */[
                      {
                        text: "    c. Do you regularly check your e-mail?",
                        inputType: inputType$11
                      },
                      /* :: */[
                        {
                          text: "8. Where were you born (city/country)?",
                          inputType: inputType$12
                        },
                        /* :: */[
                          {
                            text: "9. What is your DOB?",
                            inputType: inputType$13
                          },
                          /* :: */[
                            {
                              text: "10. Are you in possession of your birth certificate?",
                              inputType: inputType$14
                            },
                            /* :: */[
                              {
                                text: "11. Do you have a current/valid passport?",
                                inputType: inputType$15
                              },
                              /* :: */[
                                {
                                  text: "12. When did you last enter the US?",
                                  inputType: inputType$16
                                },
                                /* :: */[
                                  {
                                    text: "    a. If before Jan. 1, 1972 - eligible for registry?",
                                    inputType: inputType$17
                                  },
                                  /* :: */[
                                    {
                                      text: "13. How did you enter?",
                                      inputType: inputType$18
                                    },
                                    /* :: */[
                                      {
                                        text: "14. Had you ever been to the US before?",
                                        inputType: inputType$19
                                      },
                                      /* :: */[
                                        {
                                          text: "    a. When / entry / how long?",
                                          inputType: inputType$20
                                        },
                                        /* :: */[
                                          {
                                            text: "15. Have you ever been caught at the border by immigration officials?",
                                            inputType: inputType$21
                                          },
                                          /* :: */[
                                            {
                                              text: "16. Have you ever been before an immigration judge?",
                                              inputType: inputType$22
                                            },
                                            /* :: */[
                                              {
                                                text: "17. Current immigration status?",
                                                inputType: inputType$23
                                              },
                                              /* :: */[
                                                {
                                                  text: "18. A number, if any?",
                                                  inputType: inputType$24
                                                },
                                                /* :: */[
                                                  {
                                                    text: "19. SSN, if any?",
                                                    inputType: inputType$25
                                                  },
                                                  /* :: */[
                                                    {
                                                      text: "    a. Is your SS card restricted by work authorization?",
                                                      inputType: inputType$26
                                                    },
                                                    /* :: */[
                                                      {
                                                        text: "20. Marital status? (single / married / unmarried partner / divorced /->makeQuestion(()),\nseparated / other)",
                                                        inputType: inputType$27
                                                      },
                                                      /* :: */[
                                                        {
                                                          text: "    a. If married / divorced / separated - what is your spouse\xe2\x80\x99s immigration->makeQuestion(()),\nstatus?",
                                                          inputType: inputType$28
                                                        },
                                                        /* :: */[
                                                          {
                                                            text: "    b. If divorced, how long divorced?",
                                                            inputType: inputType$29
                                                          },
                                                          /* :: */[
                                                            {
                                                              text: "21. How many people live with you?",
                                                              inputType: inputType$30
                                                            },
                                                            /* :: */[
                                                              {
                                                                text: "    a. Who?",
                                                                inputType: inputType$31
                                                              },
                                                              /* :: */[
                                                                {
                                                                  text: "22. What is your income?",
                                                                  inputType: inputType$32
                                                                },
                                                                /* :: */[
                                                                  {
                                                                    text: "23. Who do you live with? ",
                                                                    inputType: inputType$33
                                                                  },
                                                                  /* :: */[
                                                                    {
                                                                      text: "24. How do you support yourself? ",
                                                                      inputType: inputType$34
                                                                    },
                                                                    /* :: */[
                                                                      {
                                                                        text: "    a. What is your annual income?",
                                                                        inputType: inputType$35
                                                                      },
                                                                      /* :: */[
                                                                        {
                                                                          text: "    b. Source of income?",
                                                                          inputType: inputType$36
                                                                        },
                                                                        /* :: */[
                                                                          {
                                                                            text: "25. Household income? (household as defined by HRA/IRS)",
                                                                            inputType: inputType$37
                                                                          },
                                                                          /* :: */[
                                                                            {
                                                                              text: "    a. [For staff: calculate - is this income below 125% of the FPL?]",
                                                                              inputType: inputType$38
                                                                            },
                                                                            /* :: */[
                                                                              {
                                                                                text: "26. Any family members in the United States?",
                                                                                inputType: inputType$39
                                                                              },
                                                                              /* :: */[
                                                                                {
                                                                                  text: "27. What is your mother\xe2\x80\x99s name? Living/deceased? Where does she live?->makeQuestion(()),\nImmigration status?",
                                                                                  inputType: inputType$40
                                                                                },
                                                                                /* :: */[
                                                                                  {
                                                                                    text: "28. Father\xe2\x80\x99s name? Living/deceased? Where does he live? Immigration status?",
                                                                                    inputType: inputType$41
                                                                                  },
                                                                                  /* :: */[
                                                                                    {
                                                                                      text: "29. Were your parents married when you were born? ",
                                                                                      inputType: inputType$42
                                                                                    },
                                                                                    /* :: */[
                                                                                      {
                                                                                        text: "30.  Any other family members (parents, grandparents, spouse, siblings,->makeQuestion(()),\nchildren) who have US citizenship or permanent residence?",
                                                                                        inputType: inputType$43
                                                                                      },
                                                                                      /* :: */[
                                                                                        {
                                                                                          text: "31. Do you have any children?",
                                                                                          inputType: inputType$44
                                                                                        },
                                                                                        /* :: */[
                                                                                          {
                                                                                            text: "    a. List names, DOBs, immigration status of children",
                                                                                            inputType: inputType$45
                                                                                          },
                                                                                          /* :: */[
                                                                                            {
                                                                                              text: "32. What is your gender? ",
                                                                                              inputType: inputType$46
                                                                                            },
                                                                                            /* :: */[
                                                                                              {
                                                                                                text: "    a. What pronouns do you use?",
                                                                                                inputType: inputType$47
                                                                                              },
                                                                                              /* :: */[
                                                                                                {
                                                                                                  text: "33. Do you use any social media accounts? Which ones?",
                                                                                                  inputType: inputType$48
                                                                                                },
                                                                                                /* :: */[
                                                                                                  {
                                                                                                    text: "    a. [Advise that we will screen for public posts that DHS might find issue->makeQuestion(()),\nwith]",
                                                                                                    inputType: inputType$49
                                                                                                  },
                                                                                                  /* :: */[
                                                                                                    {
                                                                                                      text: "34. Do you belong to any religion? What? ",
                                                                                                      inputType: inputType$50
                                                                                                    },
                                                                                                    /* :: */[
                                                                                                      {
                                                                                                        text: "    a. How active are you? Are you a member of a church/synagogue/temple/faith->makeQuestion(()),\ncommunity?",
                                                                                                        inputType: inputType$51
                                                                                                      },
                                                                                                      /* :: */[
                                                                                                        {
                                                                                                          text: "    b. Do you give money to them? ",
                                                                                                          inputType: inputType$52
                                                                                                        },
                                                                                                        /* :: */[
                                                                                                          {
                                                                                                            text: "35. Do you, or have you in the past, been a member of a political party?",
                                                                                                            inputType: inputType$53
                                                                                                          },
                                                                                                          /* :: */[
                                                                                                            {
                                                                                                              text: "    a. Which one(s)?",
                                                                                                              inputType: inputType$54
                                                                                                            },
                                                                                                            /* :: */[
                                                                                                              {
                                                                                                                text: "    b. Were you politically active? How so? ",
                                                                                                                inputType: inputType$55
                                                                                                              },
                                                                                                              /* :: */[
                                                                                                                {
                                                                                                                  text: "36. Physical health:",
                                                                                                                  inputType: inputType$56
                                                                                                                },
                                                                                                                /* :: */[
                                                                                                                  {
                                                                                                                    text: "    a. Do you have any chronic diseases or health conditions?",
                                                                                                                    inputType: inputType$57
                                                                                                                  },
                                                                                                                  /* :: */[
                                                                                                                    {
                                                                                                                      text: "    b. Are you being treated for any medical conditions right now? ",
                                                                                                                      inputType: inputType$58
                                                                                                                    },
                                                                                                                    /* :: */[
                                                                                                                      {
                                                                                                                        text: "    c. Do you take any prescription medication? ",
                                                                                                                        inputType: inputType$59
                                                                                                                      },
                                                                                                                      /* :: */[
                                                                                                                        {
                                                                                                                          text: "    d. Have you ever been hospitalized? For what? ",
                                                                                                                          inputType: inputType$60
                                                                                                                        },
                                                                                                                        /* :: */[
                                                                                                                          {
                                                                                                                            text: "    e. Have you ever had to have any surgery? ",
                                                                                                                            inputType: inputType$61
                                                                                                                          },
                                                                                                                          /* :: */[
                                                                                                                            {
                                                                                                                              text: "    f. Have you ever been hurt injured by another person? By who? Did you have->makeQuestion(()),\nto receive medical treatment? ",
                                                                                                                              inputType: inputType$62
                                                                                                                            },
                                                                                                                            /* :: */[
                                                                                                                              {
                                                                                                                                text: "37. Mental health",
                                                                                                                                inputType: inputType$63
                                                                                                                              },
                                                                                                                              /* :: */[
                                                                                                                                {
                                                                                                                                  text: "    a. Have you ever seen a therapist or psychiatrist?",
                                                                                                                                  inputType: inputType$64
                                                                                                                                },
                                                                                                                                /* :: */[
                                                                                                                                  {
                                                                                                                                    text: "    b. Have you ever been diagnosed with a mental health condition - anxiety,->makeQuestion(()),\ndepression, schizophrenia, bipolar, borderline personality, or anything else? ",
                                                                                                                                    inputType: inputType$65
                                                                                                                                  },
                                                                                                                                  /* :: */[
                                                                                                                                    {
                                                                                                                                      text: "        i. If yes, when? ",
                                                                                                                                      inputType: inputType$66
                                                                                                                                    },
                                                                                                                                    /* :: */[
                                                                                                                                      {
                                                                                                                                        text: "        ii. Did you receive treatment? What kind? ",
                                                                                                                                        inputType: inputType$67
                                                                                                                                      },
                                                                                                                                      /* [] */0
                                                                                                                                    ]
                                                                                                                                  ]
                                                                                                                                ]
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        ]
                                                                                                                      ]
                                                                                                                    ]
                                                                                                                  ]
                                                                                                                ]
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        ]
                                                                                                      ]
                                                                                                    ]
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var generalIntakeQuestions = /* :: */[
  generalIntakeQuestions_000,
  generalIntakeQuestions_001
];

function Questionnaire(Props) {
  var match = Belt_Array.unzip(Belt_List.toArray(Belt_List.map(generalIntakeQuestions, makeInput)));
  var questionValues = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, match[0]), React.createElement("button", {
                  onClick: (function (param) {
                      console.log(questionValues);
                      return /* () */0;
                    })
                }, "print"));
}

var RR = /* alias */0;

var make = Questionnaire;

exports.RR = RR;
exports.inputTypeToHtmlStr = inputTypeToHtmlStr;
exports.makeQuestion = makeQuestion;
exports.makeInput = makeInput;
exports.generalIntakeQuestions = generalIntakeQuestions;
exports.make = make;
/* react Not a pure module */

'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function makeQuestion(text, inputType) {
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
            type: "text",
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

var questionsText = /* :: */[
  "1. What is your best language?",
  /* :: */[
    "2. Do you speak any other languages?",
    /* :: */[
      "3. Do you need an interpreter? Y/N",
      /* :: */[
        "4. What is your full legal name?",
        /* :: */[
          "5. What name do you prefer that people use with you? ",
          /* :: */[
            "6. What is your address?",
            /* :: */[
              "7. What is the best way to reach you?",
              /* :: */[
                "    a. What is your phone number?",
                /* :: */[
                  "        i. Safe to call?",
                  /* :: */[
                    "        ii. Prefer text or call?",
                    /* :: */[
                      "    b. What is your email address?",
                      /* :: */[
                        "    c. Do you regularly check your e-mail?",
                        /* :: */[
                          "8. Where were you born (city/country)?",
                          /* :: */[
                            "9. What is your DOB?",
                            /* :: */[
                              "10. Are you in possession of your birth certificate?",
                              /* :: */[
                                "11. Do you have a current/valid passport?",
                                /* :: */[
                                  "12. When did you last enter the US?",
                                  /* :: */[
                                    "    a. If before Jan. 1, 1972 - eligible for registry?",
                                    /* :: */[
                                      "13. How did you enter?",
                                      /* :: */[
                                        "14. Had you ever been to the US before?",
                                        /* :: */[
                                          "    a. When / entry / how long?",
                                          /* :: */[
                                            "15. Have you ever been caught at the border by immigration officials?",
                                            /* :: */[
                                              "16. Have you ever been before an immigration judge?",
                                              /* :: */[
                                                "17. Current immigration status?",
                                                /* :: */[
                                                  "18. A number, if any?",
                                                  /* :: */[
                                                    "19. SSN, if any?",
                                                    /* :: */[
                                                      "    a. Is your SS card restricted by work authorization?",
                                                      /* :: */[
                                                        "20. Marital status? (single / married / unmarried partner / divorced /,\nseparated / other)",
                                                        /* :: */[
                                                          "    a. If married / divorced / separated - what is your spouse\xe2\x80\x99s immigration,\nstatus?",
                                                          /* :: */[
                                                            "    b. If divorced, how long divorced?",
                                                            /* :: */[
                                                              "21. How many people live with you?",
                                                              /* :: */[
                                                                "    a. Who?",
                                                                /* :: */[
                                                                  "22. What is your income?",
                                                                  /* :: */[
                                                                    "23. Who do you live with? ",
                                                                    /* :: */[
                                                                      "24. How do you support yourself? ",
                                                                      /* :: */[
                                                                        "    a. What is your annual income?",
                                                                        /* :: */[
                                                                          "    b. Source of income?",
                                                                          /* :: */[
                                                                            "25. Household income? (household as defined by HRA/IRS)",
                                                                            /* :: */[
                                                                              "    a. [For staff: calculate - is this income below 125% of the FPL?]",
                                                                              /* :: */[
                                                                                "26. Any family members in the United States?",
                                                                                /* :: */[
                                                                                  "27. What is your mother\xe2\x80\x99s name? Living/deceased? Where does she live?,\nImmigration status?",
                                                                                  /* :: */[
                                                                                    "28. Father\xe2\x80\x99s name? Living/deceased? Where does he live? Immigration status?",
                                                                                    /* :: */[
                                                                                      "29. Were your parents married when you were born? ",
                                                                                      /* :: */[
                                                                                        "30.  Any other family members (parents, grandparents, spouse, siblings,,\nchildren) who have US citizenship or permanent residence?",
                                                                                        /* :: */[
                                                                                          "31. Do you have any children?",
                                                                                          /* :: */[
                                                                                            "    a. List names, DOBs, immigration status of children",
                                                                                            /* :: */[
                                                                                              "32. What is your gender? ",
                                                                                              /* :: */[
                                                                                                "    a. What pronouns do you use?",
                                                                                                /* :: */[
                                                                                                  "33. Do you use any social media accounts? Which ones?",
                                                                                                  /* :: */[
                                                                                                    "    a. [Advise that we will screen for public posts that DHS might find issue,\nwith]",
                                                                                                    /* :: */[
                                                                                                      "34. Do you belong to any religion? What? ",
                                                                                                      /* :: */[
                                                                                                        "    a. How active are you? Are you a member of a church/synagogue/temple/faith,\ncommunity?",
                                                                                                        /* :: */[
                                                                                                          "    b. Do you give money to them? ",
                                                                                                          /* :: */[
                                                                                                            "35. Do you, or have you in the past, been a member of a political party?",
                                                                                                            /* :: */[
                                                                                                              "    a. Which one(s)?",
                                                                                                              /* :: */[
                                                                                                                "    b. Were you politically active? How so? ",
                                                                                                                /* :: */[
                                                                                                                  "36. Physical health:",
                                                                                                                  /* :: */[
                                                                                                                    "    a. Do you have any chronic diseases or health conditions?",
                                                                                                                    /* :: */[
                                                                                                                      "    b. Are you being treated for any medical conditions right now? ",
                                                                                                                      /* :: */[
                                                                                                                        "    c. Do you take any prescription medication? ",
                                                                                                                        /* :: */[
                                                                                                                          "    d. Have you ever been hospitalized? For what? ",
                                                                                                                          /* :: */[
                                                                                                                            "    e. Have you ever had to have any surgery? ",
                                                                                                                            /* :: */[
                                                                                                                              "    f. Have you ever been hurt injured by another person? By who? Did you have,\nto receive medical treatment? ",
                                                                                                                              /* :: */[
                                                                                                                                "37. Mental health",
                                                                                                                                /* :: */[
                                                                                                                                  "    a. Have you ever seen a therapist or psychiatrist?",
                                                                                                                                  /* :: */[
                                                                                                                                    "    b. Have you ever been diagnosed with a mental health condition - anxiety,,\ndepression, schizophrenia, bipolar, borderline personality, or anything else? ",
                                                                                                                                    /* :: */[
                                                                                                                                      "        i. If yes, when? ",
                                                                                                                                      /* :: */[
                                                                                                                                        "        ii. Did you receive treatment? What kind? ",
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
  ]
];

function Questionnaire(Props) {
  var match = Belt_Array.unzip(Belt_List.toArray(Belt_List.map(Belt_List.map(questionsText, (function (qtext) {
                      return {
                              text: qtext,
                              inputType: /* Text */1
                            };
                    })), makeInput)));
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
exports.makeQuestion = makeQuestion;
exports.makeInput = makeInput;
exports.questionsText = questionsText;
exports.make = make;
/* react Not a pure module */

'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function inputValToHtmlStr(param) {
  if (param.tag) {
    return "text";
  } else {
    return "checkbox";
  }
}

function makeQuestion(text, inputValOpt, param) {
  var inputVal = inputValOpt !== undefined ? inputValOpt : /* Text */Block.__(1, [undefined]);
  return {
          text: text,
          inputVal: inputVal
        };
}

function makeInputField(question) {
  var match = question.inputVal;
  if (match.tag) {
    var initialVal = match[0];
    var match$1 = React.useState((function () {
            return /* Text */Block.__(1, [initialVal]);
          }));
    var setValue = match$1[1];
    var value = match$1[0];
    var tmp;
    if (value.tag) {
      var match$2 = value[0];
      tmp = match$2 !== undefined ? match$2 : "";
    } else {
      tmp = "";
    }
    var el = React.createElement("input", {
          className: "input",
          type: inputValToHtmlStr(question.inputVal),
          value: tmp,
          onChange: (function (e) {
              var value = e.currentTarget.value;
              return Curry._1(setValue, (function (param) {
                            return /* Text */Block.__(1, [value]);
                          }));
            })
        });
    return /* tuple */[
            el,
            value
          ];
  } else {
    var match$3 = React.useState((function () {
            return /* Bool */Block.__(0, [undefined]);
          }));
    var setValue$1 = match$3[1];
    var value$1 = match$3[0];
    var tmp$1;
    if (value$1.tag) {
      tmp$1 = false;
    } else {
      var match$4 = value$1[0];
      tmp$1 = match$4 !== undefined ? match$4 : false;
    }
    var el$1 = React.createElement("input", {
          checked: tmp$1,
          type: inputValToHtmlStr(question.inputVal),
          onChange: (function (e) {
              var value = e.currentTarget.checked;
              return Curry._1(setValue$1, (function (param) {
                            return /* Bool */Block.__(0, [value]);
                          }));
            })
        });
    return /* tuple */[
            el$1,
            value$1
          ];
  }
}

function makeInput(question) {
  var match = makeInputField(question);
  var el = React.createElement("div", undefined, React.createElement("label", undefined, question.text), match[0]);
  return /* tuple */[
          el,
          match[1]
        ];
}

var inputVal = /* Text */Block.__(1, [undefined]);

var inputVal$1 = /* Text */Block.__(1, [undefined]);

var inputVal$2 = /* Bool */Block.__(0, [undefined]);

var inputVal$3 = /* Text */Block.__(1, [undefined]);

var inputVal$4 = /* Text */Block.__(1, [undefined]);

var inputVal$5 = /* Text */Block.__(1, [undefined]);

var inputVal$6 = /* Text */Block.__(1, [undefined]);

var inputVal$7 = /* Text */Block.__(1, [undefined]);

var inputVal$8 = /* Text */Block.__(1, [undefined]);

var inputVal$9 = /* Text */Block.__(1, [undefined]);

var inputVal$10 = /* Text */Block.__(1, [undefined]);

var inputVal$11 = /* Text */Block.__(1, [undefined]);

var inputVal$12 = /* Text */Block.__(1, [undefined]);

var inputVal$13 = /* Text */Block.__(1, [undefined]);

var inputVal$14 = /* Text */Block.__(1, [undefined]);

var inputVal$15 = /* Text */Block.__(1, [undefined]);

var inputVal$16 = /* Text */Block.__(1, [undefined]);

var inputVal$17 = /* Text */Block.__(1, [undefined]);

var inputVal$18 = /* Text */Block.__(1, [undefined]);

var inputVal$19 = /* Text */Block.__(1, [undefined]);

var inputVal$20 = /* Text */Block.__(1, [undefined]);

var inputVal$21 = /* Text */Block.__(1, [undefined]);

var inputVal$22 = /* Text */Block.__(1, [undefined]);

var inputVal$23 = /* Text */Block.__(1, [undefined]);

var inputVal$24 = /* Text */Block.__(1, [undefined]);

var inputVal$25 = /* Text */Block.__(1, [undefined]);

var inputVal$26 = /* Text */Block.__(1, [undefined]);

var inputVal$27 = /* Text */Block.__(1, [undefined]);

var inputVal$28 = /* Text */Block.__(1, [undefined]);

var inputVal$29 = /* Text */Block.__(1, [undefined]);

var inputVal$30 = /* Text */Block.__(1, [undefined]);

var inputVal$31 = /* Text */Block.__(1, [undefined]);

var inputVal$32 = /* Text */Block.__(1, [undefined]);

var inputVal$33 = /* Text */Block.__(1, [undefined]);

var inputVal$34 = /* Text */Block.__(1, [undefined]);

var inputVal$35 = /* Text */Block.__(1, [undefined]);

var inputVal$36 = /* Text */Block.__(1, [undefined]);

var inputVal$37 = /* Text */Block.__(1, [undefined]);

var inputVal$38 = /* Text */Block.__(1, [undefined]);

var inputVal$39 = /* Text */Block.__(1, [undefined]);

var inputVal$40 = /* Text */Block.__(1, [undefined]);

var inputVal$41 = /* Text */Block.__(1, [undefined]);

var inputVal$42 = /* Text */Block.__(1, [undefined]);

var inputVal$43 = /* Text */Block.__(1, [undefined]);

var inputVal$44 = /* Text */Block.__(1, [undefined]);

var inputVal$45 = /* Text */Block.__(1, [undefined]);

var inputVal$46 = /* Text */Block.__(1, [undefined]);

var inputVal$47 = /* Text */Block.__(1, [undefined]);

var inputVal$48 = /* Text */Block.__(1, [undefined]);

var inputVal$49 = /* Text */Block.__(1, [undefined]);

var inputVal$50 = /* Text */Block.__(1, [undefined]);

var inputVal$51 = /* Text */Block.__(1, [undefined]);

var inputVal$52 = /* Text */Block.__(1, [undefined]);

var inputVal$53 = /* Text */Block.__(1, [undefined]);

var inputVal$54 = /* Text */Block.__(1, [undefined]);

var inputVal$55 = /* Text */Block.__(1, [undefined]);

var inputVal$56 = /* Text */Block.__(1, [undefined]);

var inputVal$57 = /* Text */Block.__(1, [undefined]);

var inputVal$58 = /* Text */Block.__(1, [undefined]);

var inputVal$59 = /* Text */Block.__(1, [undefined]);

var inputVal$60 = /* Text */Block.__(1, [undefined]);

var inputVal$61 = /* Text */Block.__(1, [undefined]);

var inputVal$62 = /* Text */Block.__(1, [undefined]);

var inputVal$63 = /* Text */Block.__(1, [undefined]);

var inputVal$64 = /* Text */Block.__(1, [undefined]);

var inputVal$65 = /* Text */Block.__(1, [undefined]);

var inputVal$66 = /* Text */Block.__(1, [undefined]);

var inputVal$67 = /* Text */Block.__(1, [undefined]);

var generalIntakeQuestions_000 = {
  text: "1. What is your best language?",
  inputVal: inputVal
};

var generalIntakeQuestions_001 = /* :: */[
  {
    text: "2. Do you speak any other languages?",
    inputVal: inputVal$1
  },
  /* :: */[
    {
      text: "3. Do you need an interpreter? Y/N",
      inputVal: inputVal$2
    },
    /* :: */[
      {
        text: "4. What is your full legal name?",
        inputVal: inputVal$3
      },
      /* :: */[
        {
          text: "5. What name do you prefer that people use with you? ",
          inputVal: inputVal$4
        },
        /* :: */[
          {
            text: "6. What is your address?",
            inputVal: inputVal$5
          },
          /* :: */[
            {
              text: "7. What is the best way to reach you?",
              inputVal: inputVal$6
            },
            /* :: */[
              {
                text: "    a. What is your phone number?",
                inputVal: inputVal$7
              },
              /* :: */[
                {
                  text: "        i. Safe to call?",
                  inputVal: inputVal$8
                },
                /* :: */[
                  {
                    text: "        ii. Prefer text or call?",
                    inputVal: inputVal$9
                  },
                  /* :: */[
                    {
                      text: "    b. What is your email address?",
                      inputVal: inputVal$10
                    },
                    /* :: */[
                      {
                        text: "    c. Do you regularly check your e-mail?",
                        inputVal: inputVal$11
                      },
                      /* :: */[
                        {
                          text: "8. Where were you born (city/country)?",
                          inputVal: inputVal$12
                        },
                        /* :: */[
                          {
                            text: "9. What is your DOB?",
                            inputVal: inputVal$13
                          },
                          /* :: */[
                            {
                              text: "10. Are you in possession of your birth certificate?",
                              inputVal: inputVal$14
                            },
                            /* :: */[
                              {
                                text: "11. Do you have a current/valid passport?",
                                inputVal: inputVal$15
                              },
                              /* :: */[
                                {
                                  text: "12. When did you last enter the US?",
                                  inputVal: inputVal$16
                                },
                                /* :: */[
                                  {
                                    text: "    a. If before Jan. 1, 1972 - eligible for registry?",
                                    inputVal: inputVal$17
                                  },
                                  /* :: */[
                                    {
                                      text: "13. How did you enter?",
                                      inputVal: inputVal$18
                                    },
                                    /* :: */[
                                      {
                                        text: "14. Had you ever been to the US before?",
                                        inputVal: inputVal$19
                                      },
                                      /* :: */[
                                        {
                                          text: "    a. When / entry / how long?",
                                          inputVal: inputVal$20
                                        },
                                        /* :: */[
                                          {
                                            text: "15. Have you ever been caught at the border by immigration officials?",
                                            inputVal: inputVal$21
                                          },
                                          /* :: */[
                                            {
                                              text: "16. Have you ever been before an immigration judge?",
                                              inputVal: inputVal$22
                                            },
                                            /* :: */[
                                              {
                                                text: "17. Current immigration status?",
                                                inputVal: inputVal$23
                                              },
                                              /* :: */[
                                                {
                                                  text: "18. A number, if any?",
                                                  inputVal: inputVal$24
                                                },
                                                /* :: */[
                                                  {
                                                    text: "19. SSN, if any?",
                                                    inputVal: inputVal$25
                                                  },
                                                  /* :: */[
                                                    {
                                                      text: "    a. Is your SS card restricted by work authorization?",
                                                      inputVal: inputVal$26
                                                    },
                                                    /* :: */[
                                                      {
                                                        text: "20. Marital status? (single / married / unmarried partner / divorced /->makeQuestion(()),\nseparated / other)",
                                                        inputVal: inputVal$27
                                                      },
                                                      /* :: */[
                                                        {
                                                          text: "    a. If married / divorced / separated - what is your spouse\xe2\x80\x99s immigration->makeQuestion(()),\nstatus?",
                                                          inputVal: inputVal$28
                                                        },
                                                        /* :: */[
                                                          {
                                                            text: "    b. If divorced, how long divorced?",
                                                            inputVal: inputVal$29
                                                          },
                                                          /* :: */[
                                                            {
                                                              text: "21. How many people live with you?",
                                                              inputVal: inputVal$30
                                                            },
                                                            /* :: */[
                                                              {
                                                                text: "    a. Who?",
                                                                inputVal: inputVal$31
                                                              },
                                                              /* :: */[
                                                                {
                                                                  text: "22. What is your income?",
                                                                  inputVal: inputVal$32
                                                                },
                                                                /* :: */[
                                                                  {
                                                                    text: "23. Who do you live with? ",
                                                                    inputVal: inputVal$33
                                                                  },
                                                                  /* :: */[
                                                                    {
                                                                      text: "24. How do you support yourself? ",
                                                                      inputVal: inputVal$34
                                                                    },
                                                                    /* :: */[
                                                                      {
                                                                        text: "    a. What is your annual income?",
                                                                        inputVal: inputVal$35
                                                                      },
                                                                      /* :: */[
                                                                        {
                                                                          text: "    b. Source of income?",
                                                                          inputVal: inputVal$36
                                                                        },
                                                                        /* :: */[
                                                                          {
                                                                            text: "25. Household income? (household as defined by HRA/IRS)",
                                                                            inputVal: inputVal$37
                                                                          },
                                                                          /* :: */[
                                                                            {
                                                                              text: "    a. [For staff: calculate - is this income below 125% of the FPL?]",
                                                                              inputVal: inputVal$38
                                                                            },
                                                                            /* :: */[
                                                                              {
                                                                                text: "26. Any family members in the United States?",
                                                                                inputVal: inputVal$39
                                                                              },
                                                                              /* :: */[
                                                                                {
                                                                                  text: "27. What is your mother\xe2\x80\x99s name? Living/deceased? Where does she live?->makeQuestion(()),\nImmigration status?",
                                                                                  inputVal: inputVal$40
                                                                                },
                                                                                /* :: */[
                                                                                  {
                                                                                    text: "28. Father\xe2\x80\x99s name? Living/deceased? Where does he live? Immigration status?",
                                                                                    inputVal: inputVal$41
                                                                                  },
                                                                                  /* :: */[
                                                                                    {
                                                                                      text: "29. Were your parents married when you were born? ",
                                                                                      inputVal: inputVal$42
                                                                                    },
                                                                                    /* :: */[
                                                                                      {
                                                                                        text: "30.  Any other family members (parents, grandparents, spouse, siblings,->makeQuestion(()),\nchildren) who have US citizenship or permanent residence?",
                                                                                        inputVal: inputVal$43
                                                                                      },
                                                                                      /* :: */[
                                                                                        {
                                                                                          text: "31. Do you have any children?",
                                                                                          inputVal: inputVal$44
                                                                                        },
                                                                                        /* :: */[
                                                                                          {
                                                                                            text: "    a. List names, DOBs, immigration status of children",
                                                                                            inputVal: inputVal$45
                                                                                          },
                                                                                          /* :: */[
                                                                                            {
                                                                                              text: "32. What is your gender? ",
                                                                                              inputVal: inputVal$46
                                                                                            },
                                                                                            /* :: */[
                                                                                              {
                                                                                                text: "    a. What pronouns do you use?",
                                                                                                inputVal: inputVal$47
                                                                                              },
                                                                                              /* :: */[
                                                                                                {
                                                                                                  text: "33. Do you use any social media accounts? Which ones?",
                                                                                                  inputVal: inputVal$48
                                                                                                },
                                                                                                /* :: */[
                                                                                                  {
                                                                                                    text: "    a. [Advise that we will screen for public posts that DHS might find issue->makeQuestion(()),\nwith]",
                                                                                                    inputVal: inputVal$49
                                                                                                  },
                                                                                                  /* :: */[
                                                                                                    {
                                                                                                      text: "34. Do you belong to any religion? What? ",
                                                                                                      inputVal: inputVal$50
                                                                                                    },
                                                                                                    /* :: */[
                                                                                                      {
                                                                                                        text: "    a. How active are you? Are you a member of a church/synagogue/temple/faith->makeQuestion(()),\ncommunity?",
                                                                                                        inputVal: inputVal$51
                                                                                                      },
                                                                                                      /* :: */[
                                                                                                        {
                                                                                                          text: "    b. Do you give money to them? ",
                                                                                                          inputVal: inputVal$52
                                                                                                        },
                                                                                                        /* :: */[
                                                                                                          {
                                                                                                            text: "35. Do you, or have you in the past, been a member of a political party?",
                                                                                                            inputVal: inputVal$53
                                                                                                          },
                                                                                                          /* :: */[
                                                                                                            {
                                                                                                              text: "    a. Which one(s)?",
                                                                                                              inputVal: inputVal$54
                                                                                                            },
                                                                                                            /* :: */[
                                                                                                              {
                                                                                                                text: "    b. Were you politically active? How so? ",
                                                                                                                inputVal: inputVal$55
                                                                                                              },
                                                                                                              /* :: */[
                                                                                                                {
                                                                                                                  text: "36. Physical health:",
                                                                                                                  inputVal: inputVal$56
                                                                                                                },
                                                                                                                /* :: */[
                                                                                                                  {
                                                                                                                    text: "    a. Do you have any chronic diseases or health conditions?",
                                                                                                                    inputVal: inputVal$57
                                                                                                                  },
                                                                                                                  /* :: */[
                                                                                                                    {
                                                                                                                      text: "    b. Are you being treated for any medical conditions right now? ",
                                                                                                                      inputVal: inputVal$58
                                                                                                                    },
                                                                                                                    /* :: */[
                                                                                                                      {
                                                                                                                        text: "    c. Do you take any prescription medication? ",
                                                                                                                        inputVal: inputVal$59
                                                                                                                      },
                                                                                                                      /* :: */[
                                                                                                                        {
                                                                                                                          text: "    d. Have you ever been hospitalized? For what? ",
                                                                                                                          inputVal: inputVal$60
                                                                                                                        },
                                                                                                                        /* :: */[
                                                                                                                          {
                                                                                                                            text: "    e. Have you ever had to have any surgery? ",
                                                                                                                            inputVal: inputVal$61
                                                                                                                          },
                                                                                                                          /* :: */[
                                                                                                                            {
                                                                                                                              text: "    f. Have you ever been hurt injured by another person? By who? Did you have->makeQuestion(()),\nto receive medical treatment? ",
                                                                                                                              inputVal: inputVal$62
                                                                                                                            },
                                                                                                                            /* :: */[
                                                                                                                              {
                                                                                                                                text: "37. Mental health",
                                                                                                                                inputVal: inputVal$63
                                                                                                                              },
                                                                                                                              /* :: */[
                                                                                                                                {
                                                                                                                                  text: "    a. Have you ever seen a therapist or psychiatrist?",
                                                                                                                                  inputVal: inputVal$64
                                                                                                                                },
                                                                                                                                /* :: */[
                                                                                                                                  {
                                                                                                                                    text: "    b. Have you ever been diagnosed with a mental health condition - anxiety,->makeQuestion(()),\ndepression, schizophrenia, bipolar, borderline personality, or anything else? ",
                                                                                                                                    inputVal: inputVal$65
                                                                                                                                  },
                                                                                                                                  /* :: */[
                                                                                                                                    {
                                                                                                                                      text: "        i. If yes, when? ",
                                                                                                                                      inputVal: inputVal$66
                                                                                                                                    },
                                                                                                                                    /* :: */[
                                                                                                                                      {
                                                                                                                                        text: "        ii. Did you receive treatment? What kind? ",
                                                                                                                                        inputVal: inputVal$67
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

var inputVal$68 = /* Text */Block.__(1, [undefined]);

var inputVal$69 = /* Text */Block.__(1, [undefined]);

var inputVal$70 = /* Text */Block.__(1, [undefined]);

var inputVal$71 = /* Text */Block.__(1, [undefined]);

var inputVal$72 = /* Text */Block.__(1, [undefined]);

var inputVal$73 = /* Text */Block.__(1, [undefined]);

var inputVal$74 = /* Text */Block.__(1, [undefined]);

var inputVal$75 = /* Text */Block.__(1, [undefined]);

var inputVal$76 = /* Text */Block.__(1, [undefined]);

var inputVal$77 = /* Text */Block.__(1, [undefined]);

var inputVal$78 = /* Text */Block.__(1, [undefined]);

var lowHouseholdIncomeQuestions_000 = {
  text: "1. Are you a veteran of the U.S. military?",
  inputVal: inputVal$68
};

var lowHouseholdIncomeQuestions_001 = /* :: */[
  {
    text: "2. What type of housing do you have? (Own / rent / shelter / street homeless)",
    inputVal: inputVal$69
  },
  /* :: */[
    {
      text: "3. Are you disabled?",
      inputVal: inputVal$70
    },
    /* :: */[
      {
        text: "a. Homebound?",
        inputVal: inputVal$71
      },
      /* :: */[
        {
          text: "4. What is your race? (American Indian / Native Hawaiian or Pacific Islander / Black or African American / Asian / White / Other / No Response)",
          inputVal: inputVal$72
        },
        /* :: */[
          {
            text: "5. Are you Hispanic / Latinx?",
            inputVal: inputVal$73
          },
          /* :: */[
            {
              text: "6. Are you in school now?",
              inputVal: inputVal$74
            },
            /* :: */[
              {
                text: "7. What level of education did you reach up until now?",
                inputVal: inputVal$75
              },
              /* :: */[
                {
                  text: "8. What are your sources of income? (work / TANF / SSI / social security / pension / unemployment / other)",
                  inputVal: inputVal$76
                },
                /* :: */[
                  {
                    text: "9. Do you receive food stamps?",
                    inputVal: inputVal$77
                  },
                  /* :: */[
                    {
                      text: "10. Do you or anyone in your family have health insurance?",
                      inputVal: inputVal$78
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
];

var lowHouseholdIncomeQuestions = /* :: */[
  lowHouseholdIncomeQuestions_000,
  lowHouseholdIncomeQuestions_001
];

function Questionnaire(Props) {
  var match = Belt_Array.unzip(Belt_List.toArray(Belt_List.map(generalIntakeQuestions, makeInput)));
  var generalIntakeQuestionValues = match[1];
  Belt_Array.unzip(Belt_List.toArray(Belt_List.map(lowHouseholdIncomeQuestions, makeInput)));
  var match$1 = makeInput({
        text: "Is household income below 125%?",
        inputVal: /* Bool */Block.__(0, [undefined])
      });
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, match[0]), React.createElement("h1", undefined, "Low Household Income Questions"), React.createElement("div", undefined, match$1[0]), React.createElement("button", {
                  onClick: (function (param) {
                      console.log(generalIntakeQuestionValues);
                      return /* () */0;
                    })
                }, "print"));
}

var RR = /* alias */0;

var make = Questionnaire;

exports.RR = RR;
exports.inputValToHtmlStr = inputValToHtmlStr;
exports.makeQuestion = makeQuestion;
exports.makeInputField = makeInputField;
exports.makeInput = makeInput;
exports.generalIntakeQuestions = generalIntakeQuestions;
exports.lowHouseholdIncomeQuestions = lowHouseholdIncomeQuestions;
exports.make = make;
/* react Not a pure module */

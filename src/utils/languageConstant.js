const language = {
    en : {
        search: "Search",
        gptSearchPlaceholder: "What would you like to watch today ",
        homePage : "Home Page"
    },
    hindi : {
        search: "खोजे",
        gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
        homePage : "होम पेज"
    },
    deutsch : {
        search: "suchen",
        gptSearchPlaceholder: "Was möchten Sie heute sehen?",
        homePage : "Startseite"
    },
}

export const SUPPORTED_LANG = [
    {identifier:'en', name: 'English'},
    {identifier:'hindi', name: 'Hindi'},
    {identifier:'deutsch', name: 'Deutsch'}
];

export default language;
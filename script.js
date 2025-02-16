const textBox = document.querySelector("#text-holder");
const solveBtn = document.querySelector("#solve-btn");
const result = document.querySelector("#result");

const theAns = function () {
  const userInput = textBox.value.trim(); // Trim to remove extra spaces
  if (userInput === "") {
    alert("Enter currect Question to fine the ANS");
  } else if (
    userInput === "Date of birth" ||
    userInput === "Date" ||
    userInput === "date"
  ) {
    return "12-01-1974";
  } else if (userInput === "Region" || userInput === "region") {
    return "North America";
  } else if (
    userInput === "Zip code" ||
    userInput === "zip code" ||
    userInput === "zip" ||
    userInput === "code"
  ) {
    return "37013";
  } else if (
    userInput === "Gender" ||
    userInput === "gender" ||
    userInput === "gend"
  ) {
    return "Male";
  } else if (
    userInput === "Education Level" ||
    userInput === "education level" ||
    userInput === "education" ||
    userInput === "e level"
  ) {
    return "such as college / University  /  Post Graduate  / Master's Degree  /  Professional Degree .";
  } else if (
    userInput === "Ethnicity" ||
    userInput === "Race" ||
    userInput === "ethnicity" ||
    userInput === "race"
  ) {
    return "White / Caucasian.";
  } else if (
    userInput === "Are you Hispanic" ||
    userInput === "Latino" ||
    userInput === "Spanish" ||
    userInput === "Are you Hispanic / Latino / Spanish" ||
    userInput === "are you hispanic" ||
    userInput === "latino" ||
    userInput === "spanish" ||
    userInput === "hispanic" ||
    userInput === "are you latino" ||
    userInput === "are you spanish" ||
    userInput === "are you hispanic"
  ) {
    return "No";
  } else if (userInput === "Marital Status") {
    return "Married";
  } else if (userInput === "Living Situation") {
    return "Home Owner";
  } else if (userInput === "Household Income") {
    return "$125000 - $149000";
  } else if (
    userInput === "Which of the following pets are present in your household"
  ) {
    return "You Have two pets (Dog, cat) 1-1";
  } else if (
    userInput === "How many people live in your household, including yourself "
  ) {
    return "4 Persons";
  } else if (userInput === "Employment status") {
    return "Full-time Employment";
  } else if (userInput === "What is your job title, Level Or Responsibility") {
    return "Analyst / Manager";
  } else if (
    userInput === "Your Organization" ||
    userInput === "Company" ||
    userInput === "Industry"
  ) {
    return "Information Technology / IT ";
  } else if (
    userInput ===
      "Approximately what is the annual revenue for your Organization" ||
    userInput ===
      "approximately what is the annual revenue for your organization"
  ) {
    return "50 Million - 100 Million";
  } else if (
    userInput === "Approximately how many employees  work at your Organization"
  ) {
    return "1000 - 5000";
  } else if (userInput === "Company department") {
    return "Operation / Manager";
  } else if (userInput === "Do you own a smartphone") {
    return "Yes, for Both ( Business and personal )";
  } else if (
    userInput === "Which of the following electronic products do you own"
  ) {
    return "3D TV - Cell Phone - Cordless Phone - Cable TV / Satellite TV - Digital Camera - MP3 Player / iPad - Digital Media receiver (e.g. Apple TV, Vudu ) Blue Ray /  DVD Player, NetBook, Projector.";
  } else if (
    userInput === "What kind of internet connections do you use at home"
  ) {
    return "Satellite";
  } else if (
    userInput === "About how often do you access social media network services"
  ) {
    return "Several times a day ";
  } else if (
    userInput ===
    "Which of the following social media platforms do you use actively participate In"
  ) {
    return "Google+, Facebook, Twitter, Pinterest, Linkedin, Youtube, Snapshot, Instagram, Whatsapp, Reddit";
  } else if (userInput === "Which is the following service provider") {
    return "AT&T";
  } else if (
    userInput ===
    "which of those is your carrier for your primary mobile / Cell phone"
  ) {
    return "T-Mobile";
  } else if (
    userInput === "Are you the primary decision-maker in your household"
  ) {
    return "Yes";
  } else if (userInput === "What was your main vehicle manufactured") {
    return "2018 ( bortoman bochor er agar ta hobe , jodi 2025 hoi tahole 2023 hoba";
  } else if (userInput === "Do you process driver’s licenses") {
    return "Yes";
  } else if (userInput === "Do you own or lease a car") {
    return "Yes";
  } else if (
    userInput === "Which of the following devices do you use to play games"
  ) {
    return "Game Console, Portable gaming device, Computer or Laptop, cell phone / SmartPhone, others";
  } else if (
    userInput ===
    "How many hours per week do you spend playing video/computer games"
  ) {
    return "12 - 15 hours";
  } else if (userInput === "What kind of video/computer games do you play") {
    return "3rd persona adventure, 3rd person shooter / Action, Fighting simulator, vehicle racing, Puzzle, Sports";
  } else if (
    userInput ===
    "On average, how many computer/video games a month do you purchase"
  ) {
    return "3 to 5 games";
  } else if (userInput === "How do you play video/computer games") {
    return "with others through an internet connection, Alone, within the room/house";
  } else if (
    userInput ===
    "In politics today, do you consider yourself a Democrat, Republican, or Independent"
  ) {
    return "Strong Republican";
  } else if (
    userInput ===
    "How frequently do you rent or download movies for home viewing ( on average )"
  ) {
    return "Three per month";
  } else if (userInput === "How often do you go to the movie theater") {
    return "Three times per month";
  } else if (
    userInput === "What kinds of movies do you watch at the movie theater"
  ) {
    return "Action, Animated, Science fiction, Comedy, Musical, Drama, Foreign/Artistic/cultural, Horror";
  } else if (
    userInput ===
    "Do you have access to download movies through a gaming console, digital receiver, Blu-ray/DVD player, or similar device"
  ) {
    return "Yes";
  } else if (userInput === "Are you registered to vote") {
    return "Yes";
  } else if (
    userInput === "Which of the following financial products do you own"
  ) {
    return "Yes, both online and virtual (E.g. Xbox live or word of Warcraft)?";
  } else if (userInput === "Have you flown in the last 12 months") {
    return "Yes";
  } else if (
    userInput ===
    "Which of the following best describes what role you play when making traveling decisions for you and your household"
  ) {
    return "I am the sole decision maker in airline and travel choices";
  } else if (userInput === "For which purposes do you travel by plane") {
    return "Both, leisure and business";
  } else if (
    userInput ===
    "Which of the following counties/regions have you traveled to in the last 12 months"
  ) {
    return "East European countries (not Russia), France, the UK/Ireland, North America, Australia, or the rest of Oceania";
  } else if (userInput === "When you fly, which types of flights do you take") {
    return "Both domestic and international";
  } else if (
    userInput ===
    "Which of these hotels have you stayed at during the last 12 months"
  ) {
    return "5-star hotel or better than 5 star";
  } else if (
    userInput ===
    "Which international airlines have you flown with during the last 12 months"
  ) {
    return "Emirates, Etihad, Qatar Airways";
  } else if (
    userInput === "Which airlines have you flown with during the last 12 months"
  ) {
    return "US Airways, American Airlines, Delta Air Lines, Jet Blue, United Airlines, etc";
  } else if (userInput === "Do you smoke") {
    return "No";
  } else if (
    userInput ===
    "Have you been diagnosed with any of the following illnesses/conditions"
  ) {
    return "Back pain, Diabetes, migraine, Dental problems, High cholesterol";
  } else if (
    userInput ===
    "Has anyone apart from you in your household been diagnosed with any of the following illnesses/conditions"
  ) {
    return "Back pain, Diabetes, migraine, Dental problems, High cholesterol";
  } else if (
    userInput === "On average, how many cigarettes do you smoke in a day"
  ) {
    return "1 to 3 cigarettes";
  } else if (userInput === "Do you use glasses or contact lenses") {
    return "Both glasses and contact lenses";
  } else if (userInput === "Do you use a hearing aid") {
    return "No";
  } else if (
    userInput ===
    "Have you tried  to quit smoking using any of these products/methods"
  ) {
    return "Cold Turkey";
  } else if (
    userInput ===
    "In your household, are you the person who makes most of the daily purchasing decisions"
  ) {
    return "Yes";
  } else if (
    userInput ===
    "Are you the primary decision maker in your household for grocery purchases"
  ) {
    return "Yes";
  } else if (
    userInput ===
    "Which of the following products have you purchased in the last 2 years or intend to buy in the next 12 months"
  ) {
    return "All check marks";
  } else if (
    userInput ===
    "Which of the following groceries have you purchased in the last four weeks"
  ) {
    return "Toilet paper, Infant formula, Deodorant/Anti-Perspirants, Instant coffee, Napkins, Soft drinks, Baby care products, Pantyliners, Shampoo, Hair condition, Mouthwash, Sunscreen, Tampons, Chocolates or other packaged sweets, Moisturizers, Processed sliced meats, Frozen pre-prepared food, Yogurts, Cereal, Gum, Boxed bread, Salty snacks, Seasonings, Tortilla chips, Milk modifier, White bread food";
  } else if (
    userInput ===
    "Which, if any, of those drinks have you consumed in the past for a week"
  ) {
    return "Beer, Wine, Coffee Tea, Bottled Water, fruit drinks/Juices, Energy Drinks";
  } else if (
    userInput ===
    "On average, how many alcoholic drinks do you consume in a week"
  ) {
    return "6 to 7 drinks";
  } else if (
    userInput === "Which of the following beverages do you regularly consume"
  ) {
    return "mportant beer, Red wine, Vodka, Brandy, Coffee, Energy drinks, Juice, Port/Fortified wine, Rose wine, Tea, White wine, Whiskey/Scotch/Bourbon, Bottled water still.";
  } else if (
    userInput ===
    "How often do you eat fast food (any quick service restaurant) in any given week (on average)"
  ) {
    return "1 to 3 times per week";
  } else if (userInput === "What are your hobbies and interests") {
    return "Boating, Golf, Camping, Cooking, Health and fitness, Holiday house, Hunting/Fishing, Participating in athletics, Photography, Travel, Watching Sports on TV, Technology/Computer.";
  } else if (
    userInput ===
    "On average, how many hours of television do you watch per week"
  ) {
    return "5 hours or less";
  } else if (
    userInput ===
    "On average, how many hours of radio do you listen to per week"
  ) {
    return "5 hours or less";
  } else if (userInput === "What sports do you regularly participate in") {
    return "Golf, Hunting, Hockey-ice, Jogging, Archery, Rugby, hockey field, Hiking, Badminton, Soccer, Snowboarding, Swimming, Tennis, Baseball, floorball, Bicycling, Football, Skateboarding, Cricket, Basketball, Volleyball, Fishing";
  } else if (userInput === "What kind of gambling do you participate in") {
    return "All options select korta hoba";
  } else if (userInput === "Which types of publications do you read") {
    return "Camping and Boating magazines comics and manga magazines, Arts & crafts magazines, Computer & electronics Magazines, etc";
  } else if (
    userInput === "How many hours a week do you exercise/participate in sports"
  ) {
    return "3 to 4 per week";
  } else if (
    userInput ===
      "Do you have any children under the age of 18 in your household" ||
    userInput ===
      "do you have any children under the age of 18 in your household"
  ) {
    return "   Yes / you have 2 Children";
  } else if (
    userInput === "Which of the following types of books/novels do you read" ||
    userInput === "which of the following types of books/novels do you read" ||
    userInput === "my favourite book" ||
    userInput === "book" ||
    userInput === "novel" ||
    userInput === "book or novel" ||
    userInput === "my favourite novel"
  ) {
    return `1. Romance  2. Science fiction  3.  Poetry`;
  } else if (userInput === "Please choose the options that best describe your household" || ) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else if (d) {
  } else {
    return "No match found.";
  }
};

solveBtn.addEventListener("click", function () {
  event.preventDefault();
  const answer = theAns(); // Get the answer based on input
  result.textContent = `Ans :  ${answer}`; // Display the result
  result.classList.add("show");
});

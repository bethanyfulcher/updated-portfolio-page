const title = $('#title')
const thumbnail = $('#thumbnail')
const description = $('#description')
const tools = $('#tools')
const deployed = $('#deployed')
const repo = $('#github')

$(document).ready(function () {

    $('.project').click(function () {
        let name = $(this).children('h2').html()
        console.log(name)
        switch (name) {
            case "Wizards and Whiteboards":
                title.text("Wizards and Whiteboards")
                thumbnail.attr("src","images/wizardsAndWhiteboards.png")
                description.text("A dungeon-crawler RPG built using React.js and Redux, designed to teach basic coding concepts and provide practice for algorithm challenges to new developers seeking a fun and interactive way to implement their skills. Explore the caverns of Castle Full Stack and gain wisdom from Zac, Aslan, and Denis before facing the ultimate challenge with Joe the Dev Wizard.")
                tools.text("React, Redux, React-toastify, React-ace, lodash.debounce, uuid, RPG-UI CSS framework, Axios, Express, MongoDB, Bcrypt, Cors, JWT, React-router-dom, HTML, CSS, JavaScript")
                deployed.attr("href", "https://wizards-and-whiteboards.herokuapp.com/")
                repo.attr("href", "https://github.com/vantango/htmlephant-front-end")
                break;

            case "Check Your Fridge!":
                title.text("Check Your Fridge")
                thumbnail.attr("src","images/checkYourFridge.png")
                description.text("A comprehensive food catalogue for consumer use. Search up recipes based on ingredients in your fridge, save a recipe, and send your phone a text of the ingredients for your desired dish.")
                tools.text("HTML, CSS, JavaScript, AJAX, Spoonacular(API), Materialize(CSS Framework), Axios, Bcrypt, dotenv, Express, Handlebars, Session, MySQL, Sequelize, Twilio")
                deployed.attr("href", "https://cryptic-shore-39350.herokuapp.com/")
                repo.attr("href", "https://github.com/lbalbrecht/check-your-fridge")
                break;

            case "In the Moment":
                title.text("In the Moment")
                thumbnail.attr("src","images/inTheMoment.png")
                description.text("In the Moment is an app that allows users to search for a city and find events/breweries nearby.")
                tools.text("HTML, CSS, JavaScript, AJAX, Server-side APIs ")
                deployed.attr("href", "https://andrew1835.github.io/In_The_Moment/")
                repo.attr("href", "https://github.com/andrew1835/In_The_Moment")
                break;

            case "Eat Da Burger":
                title.text("Eat Da Burger")
                thumbnail.attr("src","images/eatDaBurger.png")
                description.text("Eat Da Burger is a full stack web application that allows users to create, update, and delete different burgers. Once a burger is added, it will appear under the section 'Your Burgers' if it has not been devoured and under the other section, 'Devoured Burgers', if the opposite is true. You are able to click on any burger to either eat or create and switch it into the other section. Enjoy!")
                tools.text("Handlebars.js, Node.js, Express.js, MySQL, JavaScript, HTML, CSS, AJAX, jQuery")
                deployed.attr("href", "https://eat-da-burger-bf.herokuapp.com/")
                repo.attr("href", "https://github.com/bethanyfulcher/eat-da-burger")
                break;

            case "Weather Dashboard":
                title.text("Weather Dashboard")
                thumbnail.attr("src","images/weatherDashboard.png")
                description.text("Search for any city to get a 5-day weather forecast with important information like humidity, windspeed, UV index and more.")
                tools.text("JavaScript, HTML, CSS, Bootstrap, jQuery, Luxon.js, OpenWeatherMap api, DOM storage")
                deployed.attr("href", "https://bethanyfulcher.github.io/weather-dashboard/")
                repo.attr("href", "https://github.com/bethanyfulcher/weather-dashboard")
                break;

            case "Work Day Scheduler":
                title.text("Work Day Scheduler")
                thumbnail.attr("src","images/workDayScheduler.png")
                description.text("This web application serves as a day planner. The user can type in whatever event they have planned for that hour and press the save button to keep their input stored in that section. Previous hours will appear grey, the present hour will be green, and future hours will show up in red.")
                tools.text("JavaScript, HTML, CSS, Bootstrap, DOM storage, Google Fonts, jQuery, Luxon.js, Moment.js")
                deployed.attr("href", "https://bethanyfulcher.github.io/work-day-scheduler/")
                repo.attr("href", "https://github.com/bethanyfulcher/work-day-scheduler")
                break;

            case "Coding Quiz Challenge":
                title.text("Coding Quiz Challenge")
                thumbnail.attr("src","images/codingQuizChallenge.png")
                description.text("This website will test your knowledge by quizzing you on code-related questions. There is a total of four questions and for each wrong answer you select, the timer will go down 10 seconds.")
                tools.text("JavaScript, HTML, CSS, Bootstrap")
                deployed.attr("href", "https://bethanyfulcher.github.io/code_quiz/")
                repo.attr("href", "https://github.com/bethanyfulcher/code_quiz")
                break;

            case "Password Generator":
                title.text("Password Generator")
                thumbnail.attr("src","images/passwordGenerator.png")
                description.text("This web application is a fully-functional Password Generator where users will be asked what criteria they want their generated password to have, for example the site will alert the user and ask them if they want their password to contain numbers. After answering all questions concerning criteria, they will be asked how long they want their password to be. After this last prompt, the password will be automatically generated and placed into the designated text box.")
                tools.text("JavaScript, HTML, CSS")
                deployed.attr("href", "https://bethanyfulcher.github.io/password-generator-bf/")
                repo.attr("href", "https://github.com/bethanyfulcher/password-generator-bf")
                break;
                
                default:
                    break;
                }
                $('.modal').modal();
    })
})
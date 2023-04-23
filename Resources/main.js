const context = {
    body: 'In progress',
    Image: './Resources/Media/MO-Blog-Template-1200-x-630-3-THINGS-TO-LOOK-FOR-WHEN-HIRING-A-WEB-DEVELOPER-FOR-YOUR-TEAM-20171013.webp' 
};

const source = document.getElementById("about-me");
const sourcetemplate = source.innerHTML;
const template = Handlebars.compile(sourcetemplate);
const compiledHtml = template(context);
document.getElementsByClassName('aboutme')[0].innerHTML = compiledHtml
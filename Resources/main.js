const context = {
    body: 'I am Mohamed, A Front-End web devolper who currently just began freelancing. I work solo as a Front-End devolper, and i love to make simple yet effective and clients attractive designs to my projects. Like i said i just began freelancing meaning i am maybe time-free right now so you can be assured that your project will be done as fast as anyone can do yet with the best quailty that can be done.',
    Image: './Resources/Media/MO-Blog-Template-1200-x-630-3-THINGS-TO-LOOK-FOR-WHEN-HIRING-A-WEB-DEVELOPER-FOR-YOUR-TEAM-20171013.webp' 
};

const source = document.getElementById("about-me");
const sourcetemplate = source.innerHTML;
const template = Handlebars.compile(sourcetemplate);
const compiledHtml = template(context);
document.getElementsByClassName('aboutme')[0].innerHTML = compiledHtml
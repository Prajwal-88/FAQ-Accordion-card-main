const articles =document.querySelectorAll('article');
const answers=document.querySelectorAll('#par');
const questions =document.querySelectorAll('h2');
const arrow=document.querySelectorAll('span');


for( let i=0;i<articles.length;i++){
    articles[i].role = `${i}`;
}


articles.forEach(article =>{
    article.addEventListener('click', ()=>{
        let num = +article.role;
        
        change_fun(num)
    })
})

function change_fun(num){
    previous = num-1;
    next = num+1;

    answers[num].className="text-left text-Dark_grayish_blue text-xs mb-3 lg:w-[22rem]";
    questions[num].className = "flex justify-between items-center mb-3 text-Very_dark_desaturated_blue font-bold hover:text-Soft_red hover:cursor-pointer lg:w-[22rem]";
    arrow[num].classList.add("rotate-180");



    // previous
    for(let i=previous;i>=0;i--){
        questions[i].className="flex justify-between items-center mb-3 text-Very_dark_grayish_blue hover:text-Soft_red hover:cursor-pointer lg:w-[22rem]"
        answers[i].className="text-left text-Dark_grayish_blue text-xs mb-3 lg:w-[22rem] hidden"

    } 
    // next
    for(let i=next;i<articles.length;i++){
        questions[i].className="flex justify-between items-center mb-3 text-Very_dark_grayish_blue hover:text-Soft_red hover:cursor-pointer lg:w-[22rem]"
        answers[i].className="text-left text-Dark_grayish_blue text-xs mb-3 lg:w-[22rem] hidden"
    } 
}
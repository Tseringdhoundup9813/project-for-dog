
// article title move 

const article_title_main = document.querySelector('.article-for-dog-title');
const article_title =document.querySelector('#move-title');

article_for_dog_main = document.querySelector('.article-for-dog');
article_for_dog_main_img =document.querySelector('.article-for-dog-image');
article_for_dog_article= document.querySelector('.article-for-dog-article');


window.addEventListener('scroll',function(){
	const scrollTop = scrollY;
	if(scrollTop+window.innerHeight>article_title_main.offsetTop+article_title_main.offsetHeight){
		article_title.style.transform="translateX(0px)";
		article_title.style.transition ="all 10s";



	}
});





window.addEventListener('scroll',function(){
	const scrollTop = scrollY;


	console.log(scrollTop);
	if(scrollTop+window.innerHeight > article_for_dog_main.offsetTop+article_for_dog_main.offsetHeight-200){

		article_for_dog_article.style.transform ="translateX(0px)";
		article_for_dog_article.style.transition="all 2s";
		var scroll = scrollTop-article_for_dog_main.offsetTop; 
		article_for_dog_main_img.style.transform =`rotate(360deg)`;
		article_for_dog_main_img.style.transition="all 5s";
		article_for_dog_main_img.style.opacity ="1";
		
		
		
	}

});
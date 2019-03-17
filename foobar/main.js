

for(i=0;i<=100;i++){
	if(i%3==0 && i%5!=0)
		console.log(i +' - foo');
	if(i%5==0 && i%3!=0)
		console.log(i +' - bar');
	if(i%3==0 && i%5==0)
		console.log(i +' - foobar');
}
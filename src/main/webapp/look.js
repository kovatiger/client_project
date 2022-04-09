let a = document.referrer;
console.log(a)
if(document.referrer !== 'index.jsp'){
    location.href = "http://localhost:8080";
}
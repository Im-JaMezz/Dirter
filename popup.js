
function assa(e) {
    var result = document.querySelector("#input").value.normalize("NFD");
    navigator.clipboard.writeText(result).then(() => {
        alert("클립보드에 복사되었습니다");
    });
 };

document.addEventListener('DOMContentLoaded',function(){
   var btn01 = document.querySelector('#btn');
   btn01.addEventListener("click",assa);
});
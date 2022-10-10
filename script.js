document.getElementById("project").addEventListener("click", myFunction);
document.getElementById("proses").addEventListener("click", myFunction2);

//Function for switch image
function myFunction() {
    document.getElementById("fotokeun").style.backgroundImage = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(16,16,16,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3368697820925245) 0%), url('img/allmember.jpg')";
    document.getElementById("fotokeun")
    document.getElementById("lagiproses").innerHTML = 'Lagi di Proses Bro.';
}

//Function for switch image
function myFunction2(){
    document.getElementById("fotokeun").style.backgroundImage = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(16,16,16,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3368697820925245) 0%), url('img/allmember2.jpg')";
    document.getElementById("lagiproses").innerHTML = 'Semua project yang telah selesai dapat dilihat di Channel Youtube Ini Grup.';
}


//For nice scroll and god transision
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
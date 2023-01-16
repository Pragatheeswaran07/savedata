var btn=document.querySelectorAll("button")
var card=document.querySelectorAll(".card-form")
console.log(btn[3])
console.log(card[2])

    btn[0].addEventListener("click",()=>{
        console.log(card[1])
        card[0].style.display="none"
        card[1].style.display="block";
        card[2].style.display="none";
        var fname=document.getElementById("fname").value
        var sname=document.getElementById("sname").value
        var pass=document.getElementById("pass").value
        var cpass=document.getElementById("cpass").value
        var father=document.getElementById("father").value
        var phone=document.getElementById("phone").value
        
        localStorage.setItem("fname",fname)
        localStorage.setItem("sname",sname)
        localStorage.setItem("pass",pass)
        localStorage.setItem("cpass",cpass)
        localStorage.setItem("father",father)
        localStorage.setItem("phone",phone)
        
       
          
    })
    if(localStorage.getItem("fname")===null){
        localStorage.setItem("fname"," ")
        console.log("changed")
    }
    if(localStorage.getItem("sname")===null){
        localStorage.setItem("sname"," ")
        console.log("hello world")
    }
    if(localStorage.getItem("pass")===null){
        localStorage.setItem("pass"," ")
    }
    if(localStorage.getItem("cpass")===null){
        localStorage.setItem("cpass"," ")
    }
    if(localStorage.getItem("phone")===null){
        localStorage.setItem("phone"," ")
    }
    if(localStorage.getItem("father")===null){
        localStorage.setItem("father"," ")
    }
    var fname=localStorage.getItem("fname")
    var sname=localStorage.getItem("sname")
    var pass=localStorage.getItem("pass")
    var cpass=localStorage.getItem("cpass")
    var phone=localStorage.getItem("phone")
    var father=localStorage.getItem("father")
    document.getElementById("fname").setAttribute("value",fname)
    document.getElementById("sname").setAttribute("value",sname)
    document.getElementById("pass").setAttribute("value",pass)
    document.getElementById("cpass").setAttribute("value",cpass)
    document.getElementById("phone").setAttribute("value",phone)
    document.getElementById("father").setAttribute("value",father)

   

    btn[1].addEventListener("click",()=>{
        console.log(card[1])
        
        card[0].style.display="block";
        card[1].style.display="none";



       

    })

   



    
   

    btn[2].addEventListener("click",()=>{
        console.log(card[1])
        card[1].style.display="none"
        card[0].style.display="none"
        card[2].style.display="block";



        var one=document.getElementById("one").value
        var two=document.getElementById("two").value
        var three=document.getElementById("three").value
        var four=document.getElementById("four").value
        var five=document.getElementById("five").value
        var six=document.getElementById("six").value
        
        localStorage.setItem("one",one)
        localStorage.setItem("two",two)
        localStorage.setItem("three",three)
        localStorage.setItem("four",four)
        localStorage.setItem("five",five)
        localStorage.setItem("six",six)
       
    })
    if(localStorage.getItem("one")===null){
        localStorage.setItem("one"," ")
        console.log("changed")
    }
    if(localStorage.getItem("two")===null){
        localStorage.setItem("two"," ")
        console.log("hello world")
    }
    if(localStorage.getItem("three")===null){
        localStorage.setItem("three"," ")
    }
    if(localStorage.getItem("four")===null){
        localStorage.setItem("four"," ")
    }
    if(localStorage.getItem("five")===null){
        localStorage.setItem("five"," ")
    }
    if(localStorage.getItem("six")===null){
        localStorage.setItem("six"," ")
    }
    
    
    var one=localStorage.getItem("one")
    var two=localStorage.getItem("two")
    var three=localStorage.getItem("three")
    var four=localStorage.getItem("four")
    var five=localStorage.getItem("five")
    var six=localStorage.getItem("six")
    document.getElementById("one").setAttribute("value",one)
    document.getElementById("two").setAttribute("value",two)
    document.getElementById("three").setAttribute("value",three)
    document.getElementById("four").setAttribute("value",four)
    document.getElementById("five").setAttribute("value",five)
    document.getElementById("six").setAttribute("value",six)




    btn[3].addEventListener("click",()=>{
        console.log(card[1])
        card[1].style.display="none"
        card[2].style.display="none"
        
        card[1].style.display="block";
        var a=document.getElementById("a").value
        var b=document.getElementById("b").value
        var c=document.getElementById("c").value
        var d=document.getElementById("d").value
        var e=document.getElementById("e").value
        var f=document.getElementById("f").value
        
        localStorage.setItem("a",a)
        localStorage.setItem("b",b)
        localStorage.setItem("c",c)
        localStorage.setItem("d",d)
        localStorage.setItem("e",e)
        localStorage.setItem("f",f)
       
    })
   
    if(localStorage.getItem("a")===null){
        localStorage.setItem("a"," ")
        console.log("changed")
    }
    if(localStorage.getItem("b")===null){
        localStorage.setItem("b"," ")
        console.log("hello world")
    }
    if(localStorage.getItem("c")===null){
        localStorage.setItem("c"," ")
    }
    if(localStorage.getItem("d")===null){
        localStorage.setItem("d"," ")
    }
    if(localStorage.getItem("e")===null){
        localStorage.setItem("e"," ")
    }
    if(localStorage.getItem("f")===null){
        localStorage.setItem("f"," ")
    }
    
    
    var a=localStorage.getItem("a")
    var b=localStorage.getItem("b")
    var c=localStorage.getItem("c")
    var d=localStorage.getItem("d")
    var e=localStorage.getItem("e")
    var f=localStorage.getItem("f")
    document.getElementById("a").setAttribute("value",a)
    document.getElementById("b").setAttribute("value",b)
    document.getElementById("c").setAttribute("value",c)
    document.getElementById("d").setAttribute("value",d)
    document.getElementById("e").setAttribute("value",e)
    document.getElementById("f").setAttribute("value",f)



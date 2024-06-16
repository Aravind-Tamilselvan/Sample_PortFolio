var info = document.getElementById("info")
var FD = document.getElementById("FD")
var DV = document.getElementById("DV")
var DM = document.getElementById("DM")

function about(){
    var aboutme = document.getElementById("about-me")
    var additionaltext = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit"
    aboutme.innerHTML+= additionaltext

    info.style.display="none"

}

function fd(){
    var FDinfo = document.getElementById("FD-info")
    var addinfo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicin"
    FDinfo.innerHTML+= addinfo

    FD.style.display ="none"
}

function dv(){
    var DVinfo = document.getElementById("DV-info")
    var addinfo2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicin"
    DVinfo.innerHTML+= addinfo2

    DV.style.display="none"
}

function dm(){
    var DMinfo = document.getElementById("DM-info")
    var addinfo3 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, soluta voluptas et saepe cupiditate quod recusandae nulla enim alias velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed modi asperiores corrupti! Quia,Lorem ipsum dolor sit amet consectetur adipisicin"
    DMinfo.innerHTML+= addinfo3

    DM.style.display ="none"
}
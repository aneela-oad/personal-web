
const home = document.getElementById('home')
const resume = document.getElementById('resume')

let toggleSectios =false
function show(){
    // resume.classList.toggle('toggleActive')
    if(resume.classList.contains('toggleActive')){
        resume.classList.remove('toggleActive')
        home.style.display = 'block'

    }
    else{
        resume.classList.add('toggleActive')
        home.style.display = 'none'


    }
}


// --------------------------------PANELS------------------
let panelButtons = document.querySelectorAll(".nav-link")
let panelTabs = document.querySelectorAll(".panel")

const showPanels = (index) => {
  let colorCode = "teal"
  panelButtons.forEach( (node) => {
    node.style.backgroundColor = ""
    node.style.color=""
  })
  panelTabs.forEach((node) => {
    node.style.display="none"
  })
//   panelButtons[index].style.backgroundColor = colorCode;
//   panelButtons[index].style.color = "white"
  panelTabs[index].style.display= "block"
  // panelTabs[index].style.backgroundColor = colorCode;
  // panelTabs[index].style.color = white;
}

showPanels(0)

let project_btn = document.querySelectorAll(".project_btn")
let projects = document.querySelectorAll(".projects")
console.log(projects);
const displayProjects = (index) => {

  project_btn.forEach( (node) => {
    node.style.backgroundColor = ""
    node.style.color=""
  })
  projects.forEach((node) => {
    node.style.display="none"
  })
//   panelButtons[index].style.backgroundColor = colorCode;
//   panelButtons[index].style.color = "white"
projects[index].style.display= "block"
  // panelTabs[index].style.backgroundColor = colorCode;
  // panelTabs[index].style.color = white;
}

displayProjects(0)
const openPage = pageName => {
    // Hide all elements with class="tabcontent" by default */
    let tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    tabcontent = Array.from(tabcontent);
    tabcontent.forEach(tabcontent => tabcontent.style.display = "none");
      
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";    
  }  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
    
  
  
  const tabsContainer = document.getElementById("links");
  const tabs = tabsContainer.getElementsByClassName("tablinks");
    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active")[0];
        current.classList.remove("active");
        tabs[i].classList.add("active");
      });
    };
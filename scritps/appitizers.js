const Appitizer = (value) =>{
    console.log(value)
    const appitizer = document.createElement('div');
    
  appitizer.setAttribute('class', 'container');
  appitizer.setAttribute('id', 'test');

  // document.getElementById("test").style.display = "flex";

  const appitizerH2 = document.createElement('h2')
  appitizerH2.innerHTML = "Appetizers"
  appitizerH2.style.display = "flex"
  appitizer.appendChild(appitizerH2)
  
  const appDivChild1 = document.createElement('div')

  const appDivChild2 = document.createElement('div')

  const appDivChild3 = document.createElement('div')
  
  appitizer.appendChild(appDivChild1)
  appitizer.appendChild(appDivChild2)
  appitizer.appendChild(appDivChild3)
  
    //create a div
    //create childrendiv
    //create childrendiv
    //create childrendiv

    //appendt those children to the div

    return appitizer;
};


export default Appitizer;
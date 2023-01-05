const tabs = document.querySelectorAll(".aka-tabs-popular-cources li");
const contents = document.querySelectorAll(".aka-content");


tabs.forEach((tab, index)=>{
    tab.addEventListener("click", () => {

        // To remove active class from previous tab
        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        // To show content according to tab selected

        //To hide previous tab content
        contents.forEach((c) => c.classList.remove("active"));

        contents[index].classList.add("active");
    })
})

// To run the animation intially when the page loads
tabs[0].click();
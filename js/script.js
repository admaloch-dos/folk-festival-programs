// script for folklife programs

// Loop to create accordion drop downs for each decade
const accordion = document.querySelector('#decades-accordion')
let decadeArrItem = 0
for (let i = 0; i < decades.length; i++) {
    decadeArrItem = decades[i]
    let accordionItem = document.createElement('div')
    accordionItem.classList.add('accordion-item')
    accordionItem.innerHTML = `
    <h2 class="accordion-header" id="${decadeArrItem}">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse-${decadeArrItem}" aria-expanded="false" aria-controls="collapse-${decadeArrItem}">
        ${decadeArrItem}s
      </button>
    </h2>
    <section id="collapse-${decadeArrItem}" class="accordion-collapse collapse" aria-labelledby="${decadeArrItem}"
      data-bs-parent="#decades-accordion">
      <div class="accordion-body d-flex justify-content-center align-items-center flex-wrap text-center">
      </div>
    </section>
`
    accordion.append(accordionItem)
}

// event listener to add items
const decadeDropDowns = document.querySelectorAll('.accordion-item')
decadeDropDowns.forEach(decade => {
    decade.addEventListener('click', () => {

        const allDecadeItems = document.querySelectorAll('.accordion-body')
        allDecadeItems.forEach(items => items.innerHTML = '')
        const currDecade = parseInt(decade.children[0].id)
        const currDecadeArr = itemData.filter(item => item.year >= currDecade && item.year < currDecade + 10)
        const currDecadeContainer = decade.children[1].children[0]

        for (let i = 0; i < currDecadeArr.length; i++) {
            const newProgramItem = document.createElement('div')
            newProgramItem.classList.add('decade-item', 'col-12', 'col-md-6', 'col-xl-4')
            newProgramItem.innerHTML = `
           
            <h5 class="item-year">${currDecadeArr[i].year}</h5>
                
                <img src="${currDecadeArr[i].img}" alt="${currDecadeArr[i].year} Folk Festival ${currDecadeArr[i].type} image"
                    class="item-img img-fluid">
                    <h6 class="item-title mt-1">${currDecadeArr[i].text}</h6>
                    
                <div class="text_overlay ">
                <a href="https://www.floridamemory.com/items/show/${currDecadeArr[i].url}" >
                <h6>${currDecadeArr[i].text}</h6>
                    <span>View ${currDecadeArr[i].type}</span>                   
                    </a>
                </div>
                
            `
            currDecadeContainer.append(newProgramItem)
        }
    })
})

// fade in items
const buttons = document.querySelectorAll('.accordion-button')
buttons.forEach(button => {
    button.addEventListener('click',   () =>  {
        setTimeout(() => {
            const items =  document.querySelectorAll('.decade-item')
            items.forEach(item => {
               item.style.opacity = '1'
           })
          }, 800);
    })
})

// script for folklife programs
const mapArr = itemData.map(item => item.year && { ...item, year: parseInt(`${Math.floor(item.year / 10)}0`) })
const decadesArr = mapArr.map(item => item.year)
const decades = decadesArr.filter((item, index) => decadesArr.indexOf(item) === index);
// Loop to create accordion drop downs for each decade
const accordion = document.querySelector('#decades-accordion')
for (let i = 0; i < decades.length; i++) {
  let accordionItem = document.createElement('div')
  accordionItem.classList.add('accordion-item')
  accordionItem.innerHTML = `
      <h2 class="accordion-header" id="${decades[i]}">
        <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse-${decades[i]}" aria-expanded="false" aria-controls="collapse-${decades[i]}">
          ${decades[i]}s
        </button>
      </h2>
  `
  const collapseDiv = document.createElement('div')
  collapseDiv.id = `collapse-${decades[i]}`
  collapseDiv.classList.add('accordion-collapse', 'collapse')
  collapseDiv.setAttribute("aria-labelledby", `${decades[i]}`);
  collapseDiv.setAttribute("data-bs-parent", '#decades-accordion');
  const accordionBody = document.createElement('div')
  accordionBody.classList.add('accordion-body', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-wrap', 'text-center')
  const currDecadeArr = mapArr.filter(obj => obj.year === decades[i] && obj)

  for (let j = 0; j < currDecadeArr.length; j++) {
    const currId = currDecadeArr[j].url
    const origObj = itemData.filter(obj => obj.url === currId && obj)
    const origYear = origObj[0].year
    const newProgramItem = document.createElement('div')
    newProgramItem.classList.add('decade-item', 'col-6', 'col-lg-4')
    newProgramItem.innerHTML = `
          <h5 class="item-year">${origYear}</h5>
              <img src="${currDecadeArr[j].img}" alt="${currDecadeArr[j].year} Folk Festival ${currDecadeArr[j].type} image"
                  class="item-img img-fluid">
                  <h6 class="item-title mt-1">${currDecadeArr[j].text}</h6>

              <div class="text_overlay ">
                  <h6>${currDecadeArr[j].text}</h6>
                  <a href="https://www.floridamemory.com/items/show/${currDecadeArr[j].url}" target="_blank">
                      <span class = "view-btn">View ${currDecadeArr[j].type}</span>
                  </a>
              </div>
          `
    accordionBody.append(newProgramItem)
  }
  collapseDiv.append(accordionBody)
  accordionItem.append(collapseDiv)
  accordion.append(accordionItem)
}

const buttons = document.querySelectorAll('.accordion-button')
buttons.forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(() => {
      const items = document.querySelectorAll('.decade-item')
      items.forEach(item => {
        item.style.opacity = '1'
      })
      const viewBtn = document.querySelectorAll('.view-btn')
      viewBtn.forEach(btn => {
        btn.addEventListener('click', () => {
          const collapseAccordion = document.querySelectorAll('.accordion-collapse')
          collapseAccordion.forEach(item => {
            item.classList.remove('show')
          })
        })
      })
    }, 800);
  })
})
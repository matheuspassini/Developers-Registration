/* eslint-disable no-unused-vars */
const form = document.getElementById('dev-registration')
const addTech = document.getElementById('add-technologies')
const developers = []
let rows = 0

function createLabel(id, name, text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    label.id = id
    label.name = name
    return label
}

function createInput(id, value, name, type = 'text', innerText, placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.innerText = innerText
    input.placeholder = placeholder
    return input
}

function createButton(id, name, innerText) {
    const button = document.createElement('button')
    button.id = id
    button.name = name
    button.innerText = innerText
    return button
}

addTech.addEventListener('click', (ev) => {
    const inputs = document.getElementById('stack-tech')

    const newRow = document.createElement('li')
    const index = rows 
    rows++
    newRow.id = 'inputRow-' + index
    newRow.className = 'inputRow'


    const nameTechnologyLabel = createLabel('background', 'background', 'Background: ', 'Background')
    const nameTechnologyInput = createInput('techName' + index, null, 'techName', '', '')


    const backgroundLabel = createLabel('background-label', 'background-label', ' Period of Experience: ', 'background-label')
    
    const background1 = createLabel('backgroundRadio-' + index, 'background1', ' 0-2 years', 'background1')
    const radio1 = createInput('backgroundRadio-' + index, '0-2 years', 'background-' + index, 'radio', '', '')

    const background2 = createLabel('backgroundRadio-' + index, 'background2', ' 3-4 years', 'background2')
    const radio2 = createInput('backgroundRadio-' + index, '3-4 years', 'background-' + index, 'radio', '', '')
    
    const background3 = createLabel('backgroundRadio-' + index, 'background3', ' 5+ years', 'background3')
    const radio3 = createInput('backgroundRadio-' + index, '5+ years', 'background-' + index, 'radio', '', '')
    
    const removeRow = createButton('remove-button', 'remove-button', 'Remove Background')
    removeRow.addEventListener('click', () => {
        inputs.removeChild(newRow)
    })


    newRow.append(
        nameTechnologyLabel, 
        nameTechnologyInput, 
        backgroundLabel,
        background1,
        radio1,
        background2,
        radio2,
        background3,
        radio3,
        removeRow
    )

    inputs.appendChild(newRow)
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const rows = document.querySelectorAll('.inputRow')

    let tech = []
    rows.forEach((row) => {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        tech.push({name: techName, exp: techExp})
    })

    const newDev = {fullname: fullnameInput.value, technologies: tech}
    developers.push(newDev)

    console.log(developers)

    fullnameInput.value = ''
    rows.forEach((row) => {
        row.remove()
    })

})
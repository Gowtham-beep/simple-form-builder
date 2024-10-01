const selecteOption=document.getElementById("field-type").value
const fieldName=document.getElementById("field-name")
//text Field
function addtext(){
    const preview=document.getElementById("preview-field")
    const div=document.createElement('div')
    div.setAttribute('id','text')

    const label=document.createElement('label')
    label.innerHTML=fieldName.value
    const input=document.createElement('input')
    input.type='text'

    div.appendChild(label)
    div.appendChild(input)
    preview.appendChild(div)

}
// checkbox
function addcheckbox(){
    const preview=document.getElementById('preview-field')
    const div=document.createElement('div')
    div.setAttribute('id','checkbox')

    const label=document.createElement('label')
    label.innerHTML=fieldName.value
    const input=document.createElement('input')
    input.type='checkbox'
    div.appendChild(label)
    div.appendChild(input)
    preview.appendChild(div)
}
// radio
function addradio(){
    const preview=document.getElementById('preview-field')
    const div=document.createElement('div')
    div.setAttribute('id','radio')

    const label=document.createElement('label')
    label.innerHTML=fieldName.value
    const input=document.createElement('input')
    input.type='radio'
    input.name='radio-group'
    
    div.appendChild(label)
    div.appendChild(input)
    preview.appendChild(div)
}
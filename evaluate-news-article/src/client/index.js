import handleSubmit from './js/formHandler'

// TODO include your scss file here
import'./styles/_base.scss'
import'./styles/_footer.scss'
import'./styles/_form.scss'
import'./styles/_header.scss'
import'./styles/_resets.scss'
import'./styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    // TODO: get the button for submit
    document.querySelector(".btn-submit").addEventListener('click',Client.handleSubmit)
    // TODO: add event listener to it when the click to call handleSubmit function
})
export { handleSubmit }

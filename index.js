document.addEventListener('DOMContentLoaded', () => {

    const missionSection = document.querySelector('.mission')
    const form = document.querySelector('.get-form')
    const inputs = form.querySelectorAll('.int')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        inputs.forEach(item => {
            if (item.value === '') {
                item.classList.add('error')
            } else {
                item.classList.remove('error')
            }
        })
    })

    window.addEventListener('scroll', (e) => { 
        const clientHeight = window.innerHeight || document.documentElement.clientHeight
        if (clientHeight / 1.25 >= missionSection.getBoundingClientRect().top) {
            document.querySelector('.mission__phone').classList.add('active')
        }
    })

    setTimeout(() => {
        const cookie = document.querySelector('.cookie')
        cookie.classList.add('cookie-visible')

        const cookieBtn = cookie.querySelector('.cookie__button')
        cookieBtn.addEventListener('click', () => {
            cookie.classList.remove('cookie-visible')
            setTimeout(() => {
                cookie.style.display = 'none'
            }, 1000)
        })
    }, 1000)
})


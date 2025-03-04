
const signupForm = document.querySelector('#signupForm')

const checkbox = document.getElementById('exampleCheck1')
const feedback1 = document.getElementById('feedback1')
const feedback2 = document.getElementById('feedback2')
const feedback3 = document.getElementById('feedback3')
const buttom = document.getElementById('boton')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if(email === "" || password === ""){
    alert("Ingresa tus Datos para Continuar.")
    }else{
        if(isUserRegistered){
            alert('El usuario ya está Registado.')
            feedback1.style.display='none'
            feedback2.style.display='none'
            feedback3.style.display='none'
        }
        else{
            Users.push({name: name, email: email, password: password})
            localStorage.setItem('users', JSON.stringify(Users))
            alert('Registro Exitoso!')
            window.location.href = 'Principal.html'
            feedback1.style.display='none'
            feedback2.style.display='none'
            feedback3.style.display='none'
        }
    }

    if(name === ""){
        feedback1.style.display='block'
    }else{
        feedback1.style.display='none'
    }

    if(email === ""){
        feedback2.style.display='block'
    }else{
        feedback2.style.display='none'
    }

    if(password === ""){
        feedback3.style.display='block'
    }else{
        feedback3.style.display='none'
    }

})

checkbox.addEventListener('click', function(){
    if(checkbox.checked){
        buttom.style.opacity='100%'
        buttom.style.pointerEvents='auto'
    }else{
        buttom.style.opacity='70%'
        buttom.style.pointerEvents='none'
    }
})


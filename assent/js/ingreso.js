const signupForm = document.querySelector('#loginForm')

const correo = document.getElementById('correo')
const contraseña = document.getElementById('contraseña')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    const isUserRegister = Users.find(user => user.password != password)

    if (email === "" || password === ""){
        alert("Ingresa tus Datos para Continuar.")
    }else{
        if(isUserRegistered){
            Users.push({email: email, password: password})
            localStorage.setItem('users', JSON.stringify(Users))
            alert('Bienvenido')
            window.location.href = 'Principal.html'
        }else if(isUserRegister){
            return alert('Contraseña Incorrecta')
        }
        else{
            return alert('Usuario No Registrado')
        }
    }

    if(email === ""){
        correo.style.display='block'
    }else{
        correo.style.display='none'
    }

    if(password === ""){
        contraseña.style.display='block'
    }else{
        contraseña.style.display='none'
    }
})
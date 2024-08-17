const register = async(formData)=>{
    const firstName = formData.get('firstname')
    const lastName = formData.get('lastname')
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(firstName, lastName, email, password)
    
}

export default {register}
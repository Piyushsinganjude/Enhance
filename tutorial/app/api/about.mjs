export async function get(request){
    console.log(`${request.method} ${request.path}`)

    const response = await fetch('https://api.github.com/users/piyush')

    const github = await response.json()

    console.log(github)

    return {
        json: {github},
    }
}
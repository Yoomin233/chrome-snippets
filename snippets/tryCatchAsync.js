async function func() {
    try {
        await Promise.reject({
            code: 1,
            message: 'error!'
        })
    } catch (e) {
        console.log(e)
    }
}

func()
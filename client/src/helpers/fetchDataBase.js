export async function submittingFormData(endpoint, method = "GET", dataValues) {
    try
    {

        const res = await fetch(endpoint, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataValues)
        });


        const data = await res.json()

        return data
    } catch (error)
    {
        console.log(error)
    }

}
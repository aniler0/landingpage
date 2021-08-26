import axios from 'axios'

export const getUserData = async (setUserDatas) => {
    await axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            const data = res.data
            setUserDatas(data);
        })
        .catch(err => {
            console.log(err)
        })

}
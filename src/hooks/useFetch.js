import {useState,useEffect} from 'react'

function useFetch(url, options) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)

    useEffect(() => {
        const fetcData = async () => {
            try {
                const response = await fetch(url, options)
                // console.log(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetcData()

        // eslint-diable-next-line react-hooks
    },[])


  return {data, loading, error}
}

export default useFetch

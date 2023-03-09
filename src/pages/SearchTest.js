import axios from "axios"
import { useEffect, useState } from "react"


const FilteredHouses = () => {
    const [ houses, setHouses] = useState('')



    useEffect(() => {
        async function fetchHouse() {
          try {
            const response = await axios.get('http://localhost:3001/viewhouse')
            console.log(response.data)
            setHouses(response.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchHouse()
      }, [])


}

export default FilteredHouses

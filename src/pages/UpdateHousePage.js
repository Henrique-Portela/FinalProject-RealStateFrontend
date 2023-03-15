import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert'

const UpdateHouse = () => {

    const [address, setAddress] = useState({ street:"", neighborhood:"", city:"", state:"", zipCode:0 });
  const handleChange = e => {
    const { name, value}  = e.target
    setAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const [bedRooms, setBedrooms] = useState()
  const [baths, setBaths] = useState()
  const [builtYear, setBuiltYear] = useState()
  const [houseSize, setHouseSize] = useState('')
  const [price, setPrice] = useState()
  const [sellRent, setSellRent] = useState('')
  const [picture, setPicture] = useState('')

  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/viewhouse`)
        .then(response => {
            let {
                address,
                bedRooms,
                baths,
                builtYear,
                houseSize,
                price,
                sellRent,
                picture
            } = response.data
            setAddress(address)
            setBedrooms(bedRooms)
            setBaths(baths)
            setBuiltYear(builtYear)
            setHouseSize(houseSize)
            setPrice(price)
            setSellRent(sellRent)
            setPicture(picture)

        })
  }, [id])

  const handleSubmit = e => {
    e.preventDefault()

    const updateHouse = {
        address,
        bedRooms,
        baths,
        builtYear,
        houseSize,
        price,
        sellRent,
        picture
    }

    axios.put(`${process.env.REACT_APP_API_URL}/viewhouse`, updateHouse)
        .then((response) => {
            swal({
                title: "House Updated",
                icon: "success",
                button: "OK",
              })
        })
        .then((response) => {
            navigate("/manageitens")
        })
        .catch((err) => console.log(err))
  }
}

export default UpdateHouse
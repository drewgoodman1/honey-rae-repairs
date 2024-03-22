import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService.js"

export const App = () => {

    const [allTickets, setAllTickets] = useState({}) 

    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log("TICKETS SET")
      })
    }, []) //runs on initial render of component


    return (
      <>

      </>
    )
}

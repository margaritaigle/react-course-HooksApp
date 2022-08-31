import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     email: 'margarita@gmail.com',
//     id: 123,
//     name: 'Margarita Iglesias'
// }

export const UserProvider = ( { children } ) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

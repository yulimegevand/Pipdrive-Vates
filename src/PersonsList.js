import PersonsItem from './PersonsItem'; 
import axios from 'axios';
import { useState, useEffect} from "react";




export default function PersonsList (props) {
    const [persons, setPersons] = useState([]); //array vacio
    // const [data, setData] = useState(null);
    const [url, setUrl] = useState("https://vates2.pipedrive.com/api/v1/persons?api_token=533af2837b45f6bc38587ae70b78ecf042040510");
    //const [token, setToken] = useState("7f03a3beda65cd2badd14acdcf81a9a7157bad80");
    const [message, setMessage] = useState(null);
    useEffect( () => {

        (async () => {

            const Response = await axios.get(`${url}`)
                .catch(e => {
                  setPersons([]);
                });


            if (Response && Response.status === 200) {
                const {data} = Response.data;
                // setData(data);
                setPersons([
                  ...data
                ]);
                setMessage("Exitosa");
                console.log("conexion: ", message);
                console.log("datos que trae la url: ", data)
                

            } else {
                // setData(null);
                setPersons([]);
                setMessage("Fallo la conexion")
                console.log("conexion: ",message)
            }
        })();


    }, [url]);
  

      return <div>
       <table border={1}>
         <thead>
           <tr>
             <th>Id:</th>
             <th>Nombre:</th>
           </tr>
         </thead>
         {persons.map(p => < PersonsItem key={p.id} persons={p}/>)}
       </table>

    </div>
    

  
}
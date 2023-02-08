import { logOnServer } from '~/lib/rpc'
export default function Main(){
   
    return(
        <div>
            <h1>Rye</h1>
            <buttton onClick={logOnServer('ryjjjje')}>Rye</buttton>
        </div>
    )
}
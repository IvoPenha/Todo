
import "bootstrap/dist/css/bootstrap.css";
import Stack from 'react-bootstrap/Stack';
import { Task } from "../Card/task";
export function CardAlligned(){
    return(
        <>
        <Stack direction='horizontal' gap='5'>
        <Task/>
        <Task/>
        <Task/>
        <Task/>

        </Stack>
        </>

    )

}
import {Part} from './Part.jsx'
export function Content(props){

    return (
     <div>

        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
     </div>
    )
}
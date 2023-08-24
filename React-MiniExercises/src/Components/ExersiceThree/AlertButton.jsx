export function AlertButton(props) {

    console.log(props);

    return (
        <button onClick={() => alert('You clicked on ' + props.title)}>{props.title}</button>
    )

}
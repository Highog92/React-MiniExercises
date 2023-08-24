export function CreateList(props) {

    return (

        <table>{props.list.map((item, index) => {

            return (

                <tr key={index}>
                    <td>{item.icon} {item.name}</td>
                </tr>

            )

        })}

        </table>

    )

}
export function CreateList(props) {

    return (

        <table>
            <tbody>{props.list.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.icon} {item.name}</td>
                    </tr>

                )

            })}

            </tbody>
        </table>

    )

}
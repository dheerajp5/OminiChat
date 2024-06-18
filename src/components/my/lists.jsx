// create lists component
export default function Ul(prop) {
    const {children} = prop;
    if (!children) return;
    console.log("Ol", prop)
    const { props } = children[1]
    const liItems = props?.children;

    if (!liItems) return;

    let items;
    if (typeof liItems === "string")
        items = props?.children?.split(" - ");
    else items = liItems;
    return (
        <ul className="list-disc">
            {
                items?.map(ListItem)
            }
        </ul>
    )
}

function ListItem(value, index) {
    return <li key={value + index} className="text-lg font-medium ">{value}</li>
}

export function Ol(prop) {
    const {children} = prop;
    if (!children) return;
    console.log("Ol", prop)
    const { props } = children[1]
    const liItems = props?.children;

    if (!liItems) return;

    let items;
    if (typeof liItems === "string")
        items = props?.children?.split(" - ");
    else items = liItems;


    return (
        <ol className="list-decimal">
            {
                items?.map(ListItem)
            }
        </ol>
    )
}

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


function CustomAlert({body, title, style}) {
    return (
        <div className="m-2">
            <Alert className = {style}>

                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {body}
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default CustomAlert

import * as React from "react"
import { serialize, deserialize } from "../common/utils"
import { ICounter } from "../common/types"

export const App: React.FunctionComponent = () => {
    const obj: ICounter = {
        count: 0,
        increment() {
            this.count++
        },
    }

    const [counter, setCounter] = React.useState(obj)

    const handleClick = () => {
        counter.increment()
        const params = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: serialize(counter),
        }
        fetch("/message", params)
            .then((response) => response.json())
            .then((data) => setCounter(deserialize(JSON.stringify(data))))
    }

    return (
        <>
            <h1>Serializer</h1>
            <button onClick={handleClick}>Send</button>
            <h2>Count: {counter.count}</h2>
        </>
    )
}

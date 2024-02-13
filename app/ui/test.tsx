"use client"
import { useState, useEffect } from "react"
export default function Test() {
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    const types: string[] = ["posts", "users", "comments"];

    //mount function
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + resourceType)
         .then(response => response.json())
         .then(json => setItems(json))

        return () => {
            setItems([]);
        }
    }, [resourceType])

    return (
        <>
            {types.map(
                (type) => (
                    <button
                        className="m-0 rounded-md border p-2 hover:bg-gray-100"
                        key={type}
                        onClick={() => setResourceType(type)}
                    >
                        {type}
                    </button>
                )
            )}

            <h1 className="text-2xl">{resourceType}</h1>

            {items.map((item: any) => (
                <pre key="item.id">
                    {JSON.stringify(item, null, 2)}
                </pre>
            ))}
        </>
    )
}
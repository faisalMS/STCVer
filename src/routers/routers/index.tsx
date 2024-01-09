import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const withSuspense = (WrappedComponent: any) => {
    return (
        <Suspense>
            <WrappedComponent />
        </Suspense>
    )
}

export const withSuspenseComponents = (element: any) => {
    const newComponent = () => withSuspense(element.props.component)
    return { ...element, props: { ...element.props, component: newComponent}}
}

export default function Routing() {
    return (
        <Suspense>
            <BrowserRouter>
            <Routes>
                <Route>

                </Route>
            </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
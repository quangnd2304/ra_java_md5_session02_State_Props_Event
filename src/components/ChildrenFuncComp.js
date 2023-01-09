import React from 'react'

export default function ChildrenFuncComp(props) {
    return (
        <div>
            <h2>Chúc các bạn {props.class} học tập tốt tại {props.children}</h2>
        </div>
    )
}

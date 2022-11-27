import React from "react"

const UserFavoriteColors = (props) => (
    props.animals.map(animal => (
        <ul>
            <li>{animal}</li>
        </ul>
    ))
)

export default UserFavoriteColors
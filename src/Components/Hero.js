import React from "react"
import PropTypes from 'prop-types'


const Hero = ({name}) => <h2>{name}</h2>

Hero.propTypes = {
    name: PropTypes.string
}

export default Hero
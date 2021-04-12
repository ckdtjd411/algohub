import React from 'react'
import propTypes from 'prop-types'
import './Algorithms.css'

function Algorithms({category, detail, numberOfProblem}) {
  return <div className="category">
    <h3 className="category__title">{category}</h3>
    <p className="category__details">{detail}</p>
    <ul className="category__group">
      <h4 className="group__item">문제 수</h4>
      <li className="itemsNumber">{numberOfProblem}</li>
    </ul>
  </div>
}

Algorithms.propTypes = {
  id: propTypes.number.isRequired,
  category: propTypes.string.isRequired,
  detail: propTypes.string.isRequired,
  numberOfProblem: propTypes.number.isRequired,

}

export default Algorithms
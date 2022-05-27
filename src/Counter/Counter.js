import {useState} from "react";
import {connect} from "react-redux";

function Counter(props) {
    const {valueCounter} = props
    const [counts, setCounts] = useState(valueCounter)
    const handlerPlusMinus = (counterId, counterValue) => {
        props.plusAndMinus(counterId, counterValue)
        setCounts(valueCounter)
    }


    return (
        <div>

            {counts.map(count =>
            <div key={count.id}>
                <button onClick={() => handlerPlusMinus(count.id, - 1)}>-</button>
                {count.valueCounter}
                <button onClick={() => handlerPlusMinus(count.id, + 1)}>+</button>
            </div>
            )}


        </div>
    )
}

const mapStateToProps = (state) => ({
    valueCounter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    plusAndMinus: (counterId, counterValue) => dispatch({type: 'PLUS_MINUS', payload:{counterId, counterValue}})
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
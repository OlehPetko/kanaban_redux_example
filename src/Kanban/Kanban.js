import {connect} from "react-redux";
import {useState} from "react";

function Kanban(props) {
    const {columns, cards} = props
    const [newCard, setNewCard] = useState([])
    const addCard = () => {
        props.addNewCard(newCard)
        setNewCard([])
    }
    return (
        <div>
            <input placeholder='new cards' value={newCard} onChange={e => setNewCard(e.target.value)}/>
            <button onClick={addCard}>add new card</button>
            <h2>Kanban</h2>
            {columns.map(column =>
            <div key={column}>
                <h2>
                    {column}
                </h2>
                {cards.filter(card => card.status === column).map(card =>
                <div key={card.id}>
                    {card.name}
                </div>
                )}
            </div>
            )}

        </div>
    );
}

const mapStateToProps = (state) => ({
  columns: state.columns,
    cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    addNewCard: (newCard) => dispatch({type: 'ADD_CARD', payload: newCard })

})
export default connect (mapStateToProps, mapDispatchToProps) (Kanban);

import {connect} from "react-redux";
import {useState} from "react";

function Kanban(props) {
    const {columns, cards} = props
    const [newCard, setNewCard] = useState([])
    const [updateCard, setUpdateCard] = useState([])

    const addCard = () => {
        props.addNewCard(newCard)
        setNewCard([])
    }
    const saveHandlerUpdateCard = (cardId) => {
      props.saveUpdate(cardId, updateCard)
        setUpdateCard([])
    }
    return (
        <div>
            <h2>Kanban</h2>
            <input placeholder='new cards' value={newCard} onChange={e => setNewCard(e.target.value)}/>
            <button onClick={addCard}>add new card</button>
            {columns.map(column =>
                <div key={column}>
                    <h2>
                        {column}
                    </h2>
                    {cards.filter(card => card.status === column).map(card =>
                        <div key={card.id}>
                            <button disabled={card.status === 'todo'} onClick={() => props.moveCard(card.id, - 1)}>▲</button>
                            {card.name}
                            <button disabled={card.status === 'done'} onClick={() => props.moveCard(card.id, + 1)}>▼</button>
                            {card.openCardDelete ?
                                <button onClick={() => props.openDelete(card.id)}>delete</button>
                                :
                                <div>
                                    <button onClick={() => props.deleteCard(card.id)}>are you sure, delete?</button>
                                    <button onClick={() => props.openDelete(card.id)}>cancel</button>
                                </div>
                            }
                            {card.openCardUpdate ?
                                <button onClick={() => props.openUpdate(card.id)}>update</button>
                            :
                            <div>
                                <input value={updateCard} onChange={e => setUpdateCard(e.target.value)}/>
                                <button onClick={() => saveHandlerUpdateCard(card.id)}>save</button>
                                <button onClick={() => props.openUpdate(card.id)}>cancel</button>
                            </div>}
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
    addNewCard: (newCard) => dispatch({type: 'ADD_CARD', payload: newCard}),
    openDelete: (cardId) => dispatch({type: 'OPEN_DELETE_CARD', payload: cardId}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId}),
    openUpdate: (cardId) => dispatch({type: 'OPEN_UPDATE_CARD', payload: cardId}),
    saveUpdate: (cardId, updateCard) => dispatch({type: 'SAVE_CARD', payload: {cardId, updateCard}}),
    moveCard: (cardId, cardValue) => dispatch({type: 'MOVE_CARD', payload: {cardId, cardValue} })
})
export default connect(mapStateToProps, mapDispatchToProps)(Kanban);

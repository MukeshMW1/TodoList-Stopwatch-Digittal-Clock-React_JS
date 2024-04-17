import React, { useState } from 'react';

function TodoList() {



    const [list, setList] = useState([]);


    function handleAdd() {
        let inp = document.getElementById("inpt");
        let newList = inp.value;
        if (newList != "") {
            setList(l => [...l, newList])
            inp.value = "";
        }

    }

    function handleRemove(index) {

        setList(l => l.filter((_, i) => i != index))


    }


    return (

        <div>

            <div className="inpt">

                <input type="text" id="inpt" />
                <button onClick={handleAdd}>Add</button>

            </div>
            <h2>Todo List Items</h2>
            <div className="listItem">

                <ul>

                    {list.map((lst, index) => <li key={index}>{lst}&nbsp;<button onClick={() => handleRemove(index)}>Del</button></li>
                    )}



                </ul>

            </div>




        </div>

    )



}


export default TodoList
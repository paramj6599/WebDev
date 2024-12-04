import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent"
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingDataOnEvent from "./PassingDataonEvent"
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import TodoList from "./todos/TodoList";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    
    return(
      <><div id="wd-lab4">
            <h3>Lab 4</h3>
        </div>
        <ClickEvent />
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject/>
        <Counter />
        <BooleanStateVariables/>
        <StringStateVariables/>
        
        <DateStateVariable/>
        
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ReduxExamples/>
        <TodoList/>
        
        </>

        )
        }
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { PiNotePencilBold } from "react-icons/pi";
export default function AssignmentControlButtons() {
  return (
    <div>
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-3" />
        </div>

        <div className="float-start">
            <BsGripVertical className="fs-3"/>
            <PiNotePencilBold  style={{color: "lightgreen"}} className="fs-3"/>
        </div>
    </div>

);}